'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function TalentPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/panel/talent')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to load talent leads');
        }
        const json = await response.json();
        setItems(json.items || []);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load talent leads.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Talent leads</h2>
            <p className="text-sm text-slate-400">{items.length} candidate{items.length === 1 ? '' : 's'}</p>
          </div>
          <Link
            href="/panel/leads?segment=talent"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300"
          >
            View in Lead Inbox &rarr;
          </Link>
        </div>

        {loading ? (
          <p className="py-6 text-center text-slate-400">Loading talent leads…</p>
        ) : error ? (
          <p className="py-6 text-center text-rose-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3">Lead Ref</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Role</th>
                  <th className="pb-3">WhatsApp / Phone</th>
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Created</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-6 text-center text-slate-400">No talent leads found.</td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.leadRef} className="border-b border-slate-800">
                      <td className="py-3 font-mono text-xs font-bold text-white">{item.leadRef}</td>
                      <td className="py-3 font-medium text-white">{item.name}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center rounded-md border border-[#E8D5B0] bg-[#FAF8F5] px-2 py-0.5 text-xs font-semibold text-[#6B4F2A]">
                          {item.answers?.role || '—'}
                        </span>
                      </td>
                      <td className="py-3">{item.whatsapp || '—'}</td>
                      <td className="py-3 text-slate-400">{item.email || '—'}</td>
                      <td className="py-3 capitalize">{item.status || 'new'}</td>
                      <td className="py-3">{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : '—'}</td>
                      <td className="py-3">
                        <Link
                          href={`/panel/leads/${encodeURIComponent(item.leadRef)}`}
                          className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium text-xs"
                        >
                          <span>View</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
