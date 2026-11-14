import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'buildbeyondstudio';

const options = {
  family: 4,
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
  maxPoolSize: 10,
  maxIdleTimeMS: 30000,
};

let cachedClient = globalThis._mongoClient || null;
let cachedClientPromise = globalThis._mongoClientPromise || null;
let cachedDb = globalThis._mongoDb || null;
let cachedIndexesPromise = globalThis._mongoIndexesPromise || null;
let indexesReady = globalThis._mongoIndexesReady || false;

export async function getMongoClient() {
  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  if (cachedClient) {
    return cachedClient;
  }

  if (!cachedClientPromise) {
    const client = new MongoClient(uri, options);
    cachedClientPromise = client
      .connect()
      .then((c) => {
        cachedClient = c;
        globalThis._mongoClient = c;
        return c;
      })
      .catch((err) => {
        cachedClient = null;
        cachedClientPromise = null;
        globalThis._mongoClient = null;
        globalThis._mongoClientPromise = null;
        throw err;
      });
    globalThis._mongoClientPromise = cachedClientPromise;
  }

  return cachedClientPromise;
}

export async function getMongoDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await getMongoClient();
  cachedDb = client.db(dbName);
  globalThis._mongoDb = cachedDb;
  return cachedDb;
}

export async function ensureLeadIndexes() {
  if (globalThis._mongoIndexesReady || indexesReady) {
    return true;
  }

  const existingPromise = globalThis._mongoIndexesPromise || cachedIndexesPromise;
  if (existingPromise) {
    return existingPromise;
  }

  const initPromise = (async () => {
    const db = await getMongoDb();
    const leads = db.collection('leads');
    await Promise.all([
      leads.createIndex({ phoneNormalized: 1 }),
      leads.createIndex({ leadRef: 1 }, { unique: true, sparse: true, name: 'uniq_leads_lead_ref' }),
      leads.createIndex({ createdAt: -1 }),
      leads.createIndex({ segment: 1 }),
      leads.createIndex({ status: 1 }),
      leads.createIndex({ temperature: 1 }),
      leads.createIndex({ 'firstTouch.utm_campaign': 1 }),
      leads.createIndex({ 'firstTouch.utm_content': 1 }),
    ]);

    const events = db.collection('lead_events');
    await Promise.all([
      events.createIndex({ leadRef: 1 }),
      events.createIndex({ at: -1 }),
      events.createIndex({ sessionId: 1 }),
      events.createIndex({ eventId: 1 }, { unique: true, sparse: true, name: 'uniq_lead_events_event_id' }),
      events.createIndex({ submissionId: 1 }, { unique: true, sparse: true, name: 'uniq_lead_events_submission_id' }),
    ]);

    await db.collection('rate_limits').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0, name: 'ttl_rate_limits' });

    indexesReady = true;
    globalThis._mongoIndexesReady = true;
    return true;
  })().catch((error) => {
    cachedIndexesPromise = null;
    indexesReady = false;
    globalThis._mongoIndexesPromise = null;
    globalThis._mongoIndexesReady = false;
    throw error;
  });

  cachedIndexesPromise = initPromise;
  globalThis._mongoIndexesPromise = initPromise;
  return initPromise;
}
