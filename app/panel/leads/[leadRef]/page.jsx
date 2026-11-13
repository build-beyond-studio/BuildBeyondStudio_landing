'use client';

import { useEffect, useState, useTransition } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageSquare,
  RefreshCw,
  Save,
  Send,
  User,
  AlertCircle
} from 'lucide-react';

const STATUS_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'call_booked', label: 'Call Booked' },
  { value: 'call_done', label: 'Call Done' },
  { value: 'proposal', label: 'Proposal Sent' },
  { value: 'pilot', label: 'Pilot / In Progress' },
  { value: 'won', label: 'Won / Closed' },
  { value: 'lost', label: 'Lost' },
  { value: 'cold', label: 'Cold / Unresponsive' },
];

function formatLocalDateTimeInput(isoDateString) {
  if (!isoDateString) return '';
  const date = new Date(isoDateString);
  if (Number.isNaN(date.getTime())) return '';
  const pad = (num) => String(num).padStart(2, '0');
  const yyyy = date.getFullYear();
  const mm = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const hh = pad(date.getHours());
  const min = pad(date.getMinutes());
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
}

export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const leadRef = params?.leadRef ? decodeURIComponent(params.leadRef) : '';

  const [lead, setLead] = useState(null);
  const [activity, setActivity] = useState([]);
  const [calls, setCalls] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form states for editable controls
  const [status, setStatus] = useState('');
  const [owner, setOwner] = useState('');
  const [nextFollowUpAt, setNextFollowUpAt] = useState('');
  const [noteText, setNoteText] = useState('');

  // UI action states
  const [savingAction, setSavingAction] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const loadLead = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const [leadRes, usersRes] = await Promise.all([
        fetch(`/api/panel/leads/${encodeURIComponent(leadRef)}`),
        fetch('/api/panel/users').catch(() => null),
      ]);

      if (!leadRes.ok) {
        throw new Error('Failed to load lead details');
      }

      const json = await leadRes.json();
      setLead(json.lead);
      setActivity(json.activity || []);
      setCalls(json.calls || []);

      // Initialize form fields from lead record
      setStatus(json.lead.status || 'new');
      setOwner(json.lead.owner || '');
      setNextFollowUpAt(formatLocalDateTimeInput(json.lead.nextFollowUpAt));

      if (usersRes && usersRes.ok) {
        const uJson = await usersRes.json();
        setUsers(uJson.users || []);
      }
    } catch (err) {
      console.error(err);
      setFeedback({ type: 'error', message: err.message || 'Unable to load lead' });
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    if (leadRef) {
      loadLead();
    }
  }, [leadRef]);

  const handleUpdateControls = async (e) => {
    e?.preventDefault();
    setSavingAction(true);
    setFeedback({ type: '', message: '' });

    try {
      const payload = {
        status,
        owner: owner.trim() || 'Unassigned',
        nextFollowUpAt: nextFollowUpAt ? new Date(nextFollowUpAt).toISOString() : null,
      };

      const res = await fetch(`/api/panel/leads/${encodeURIComponent(leadRef)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || 'Failed to update lead');
      }

      setFeedback({ type: 'success', message: 'Lead changes saved successfully!' });
      await loadLead(true);
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Error updating lead' });
    } finally {
      setSavingAction(false);
    }
  };

  const handleAddNote = async (e) => {
    e?.preventDefault();
    if (!noteText.trim()) return;

    setSavingAction(true);
    setFeedback({ type: '', message: '' });

    try {
      const timestamp = new Date().toLocaleString();
      const existingNotes = lead?.notes ? `${lead.notes}\n\n[${timestamp}]: ${noteText.trim()}` : `[${timestamp}]: ${noteText.trim()}`;

      const res = await fetch(`/api/panel/leads/${encodeURIComponent(leadRef)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          notes: existingNotes,
          lastNoteAddedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || 'Failed to add note');
      }

      setNoteText('');
      setFeedback({ type: 'success', message: 'Note logged successfully!' });
      await loadLead(true);
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Error saving note' });
    } finally {
      setSavingAction(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#E8D5B0] bg-white p-12 text-center shadow-xs">
        <RefreshCw className="h-6 w-6 animate-spin text-[#C8860A] mx-auto mb-3" />
        <p className="text-sm font-medium text-[#6B4F2A]">Loading lead details...</p>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-800">
        <p className="font-semibold">Lead not found</p>
        <Link href="/panel/leads" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8860A] hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Lead Inbox
        </Link>
      </div>
    );
  }

  const answerEntries = Object.entries(lead.answers || {});

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Top Breadcrumb & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          href="/panel/leads"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C7A65] hover:text-[#C8860A] transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Lead Inbox</span>
        </Link>

        {feedback.message && (
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium border ${
              feedback.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-rose-600" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>

      {/* Main Lead Header Card */}
      <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs sm:text-sm font-bold text-[#C8860A] tracking-wider">
                {lead.leadRef}
              </span>
              <span className="inline-flex items-center rounded-md border border-[#E8D5B0] bg-[#FAF8F5] px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#6B4F2A]">
                {lead.segment}
              </span>
            </div>
            <h1 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-[#1F1E1A] tracking-tight">
              {lead.name}
            </h1>
          </div>

          <div className="flex items-center gap-2.5">
            <span
              className={`font-semibold capitalize px-3 py-1 rounded-xl text-xs sm:text-sm border ${
                lead.temperature === 'hot'
                  ? 'bg-rose-100 text-rose-700 border-rose-300'
                  : lead.temperature === 'warm'
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-sky-100 text-sky-700 border-sky-300'
              }`}
            >
              {lead.temperature || 'cold'}
            </span>
            {lead.whatsapp && (
              <a
                href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition"
              >
                <span>WhatsApp</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Quick Contact & Lead Meta Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E8D5B0]/60 pt-5">
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#8C7A65]">WhatsApp / Phone</p>
            <p className="mt-1 font-bold text-[#1F1E1A] text-sm sm:text-base">{lead.whatsapp || '—'}</p>
          </div>
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#8C7A65]">Email Address</p>
            <p className="mt-1 font-bold text-[#1F1E1A] text-sm sm:text-base truncate" title={lead.email}>
              {lead.email || '—'}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase font-semibold tracking-wider text-[#8C7A65]">Current Owner</p>
            <p className="mt-1 font-bold text-[#1F1E1A] text-sm sm:text-base">{lead.owner || 'Unassigned'}</p>
          </div>
        </div>
      </div>

      {/* PHASE 1: INTERACTIVE ACTION CENTER (Controls, Assignment, Follow-up & Notes) */}
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Column: Management Controls Form */}
        <form
          onSubmit={handleUpdateControls}
          className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)] flex flex-col justify-between"
        >
          <div>
            <div className="border-b border-[#E8D5B0]/60 pb-3">
              <h2 className="text-lg font-bold text-[#1F1E1A] flex items-center gap-2">
                <User className="h-5 w-5 text-[#C8860A]" />
                <span>Lead Workflow Controls</span>
              </h2>
              <p className="text-xs text-[#8C7A65] mt-0.5">
                Update status, reassign lead owner, or schedule the next follow-up action.
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {/* Status Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1.5">
                  Pipeline Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm font-semibold text-[#1F1E1A] focus:border-[#C8860A] focus:ring-1 focus:ring-[#C8860A] outline-none transition"
                >
                  {STATUS_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Owner Assignment */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1.5">
                  Assigned Owner / Sales Rep
                </label>
                <div className="flex gap-2">
                  <select
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    className="flex-1 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm font-semibold text-[#1F1E1A] focus:border-[#C8860A] focus:ring-1 focus:ring-[#C8860A] outline-none transition"
                  >
                    <option value="">Unassigned</option>
                    {users.map((u) => (
                      <option key={u.email} value={u.name || u.email}>
                        {u.name ? `${u.name} (${u.email})` : u.email}
                      </option>
                    ))}
                    {owner && !users.some((u) => (u.name || u.email) === owner) && (
                      <option value={owner}>{owner}</option>
                    )}
                  </select>
                </div>
              </div>

              {/* Next Follow-up Datetime */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1.5 flex items-center justify-between">
                  <span>Next Follow-up Date & Time</span>
                  {nextFollowUpAt && (
                    <button
                      type="button"
                      onClick={() => setNextFollowUpAt('')}
                      className="text-[11px] text-[#C8860A] hover:underline"
                    >
                      Clear reminder
                    </button>
                  )}
                </label>
                <div className="relative">
                  <input
                    type="datetime-local"
                    value={nextFollowUpAt}
                    onChange={(e) => setNextFollowUpAt(e.target.value)}
                    className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm font-semibold text-[#1F1E1A] focus:border-[#C8860A] focus:ring-1 focus:ring-[#C8860A] outline-none transition"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8D5B0]/60 flex justify-end">
            <button
              type="submit"
              disabled={savingAction}
              className="inline-flex items-center gap-2 rounded-xl bg-[#C8860A] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#C8860A]/25 hover:bg-[#A06A00] transition disabled:opacity-60 cursor-pointer"
            >
              {savingAction ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              <span>Save Workflow Changes</span>
            </button>
          </div>
        </form>

        {/* Right Column: Internal Notes Section */}
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)] flex flex-col justify-between">
          <div>
            <div className="border-b border-[#E8D5B0]/60 pb-3">
              <h2 className="text-lg font-bold text-[#1F1E1A] flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-[#C8860A]" />
                <span>Internal Notes & Remarks</span>
              </h2>
              <p className="text-xs text-[#8C7A65] mt-0.5">
                Log conversation notes, meeting outcomes, or next steps.
              </p>
            </div>

            {/* Existing notes history scroll */}
            <div className="mt-3.5 max-h-48 overflow-y-auto rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3.5 text-xs text-[#2C1A00] leading-relaxed">
              {lead.notes ? (
                <pre className="whitespace-pre-wrap font-sans text-xs text-[#2C1A00]">{lead.notes}</pre>
              ) : (
                <p className="text-[#8C7A65] italic py-2">No internal notes added yet.</p>
              )}
            </div>

            {/* Note composition input */}
            <div className="mt-3.5">
              <textarea
                rows={3}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write a new note or update..."
                className="w-full rounded-xl border border-[#E8D5B0] bg-white p-3 text-sm text-[#1F1E1A] placeholder-[#8C7A65] focus:border-[#C8860A] focus:ring-1 focus:ring-[#C8860A] outline-none transition resize-none"
              />
            </div>
          </div>

          <div className="mt-3 pt-3 flex justify-end">
            <button
              type="button"
              onClick={handleAddNote}
              disabled={savingAction || !noteText.trim()}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FAF8F5] border border-[#E8D5B0] px-4 py-2 text-xs font-bold text-[#2C1A00] hover:bg-[#F5EFE4] hover:border-[#C8860A] transition disabled:opacity-50 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5 text-[#C8860A]" />
              <span>Append Note</span>
            </button>
          </div>
        </div>
      </div>

      {/* Attribution & System Data */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
          <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
            Lead Overview & Timestamp
          </h2>
          <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#2C1A00]">
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Segment</span>
              <span className="font-bold text-[#1F1E1A] uppercase">{lead.segment}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Created Date</span>
              <span className="font-semibold text-[#1F1E1A]">{new Date(lead.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Last Updated</span>
              <span className="font-semibold text-[#1F1E1A]">
                {lead.updatedAt ? new Date(lead.updatedAt).toLocaleString() : '—'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Next Follow-up</span>
              <span className="font-bold text-[#C8860A]">
                {lead.nextFollowUpAt ? new Date(lead.nextFollowUpAt).toLocaleString() : 'Not scheduled'}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
          <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
            Attribution & UTM Data
          </h2>
          <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#2C1A00]">
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Source</span>
              <span className="font-bold text-[#1F1E1A]">
                {lead.firstTouch?.utm_source || lead.firstTouch?.src || lead.attribution?.utm_source || 'direct'}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Campaign</span>
              <span className="font-medium text-[#1F1E1A]">{lead.firstTouch?.utm_campaign || 'Untagged'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Medium</span>
              <span className="font-medium text-[#1F1E1A]">{lead.firstTouch?.utm_medium || 'Untagged'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Content / Ad</span>
              <span className="font-medium text-[#1F1E1A]">{lead.firstTouch?.utm_content || 'Untagged'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E8D5B0]/30">
              <span className="text-[#8C7A65] font-medium">Device</span>
              <span className="font-medium text-[#1F1E1A] capitalize">{lead.firstTouch?.device || 'Unknown'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Linked Call History */}
      <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
        <div className="flex items-center justify-between border-b border-[#E8D5B0]/50 pb-2.5">
          <h2 className="text-base font-bold text-[#1F1E1A] flex items-center gap-2">
            <span>Linked Cold Calls & Outbound History</span>
            <span className="rounded-full bg-[#F5F2EC] px-2 py-0.5 text-xs text-[#6B4F2A]">
              {calls.length}
            </span>
          </h2>
          <Link
            href="/panel/calls"
            className="text-xs font-semibold text-[#C8860A] hover:underline"
          >
            Open Call Register &rarr;
          </Link>
        </div>

        <div className="mt-4 space-y-3">
          {calls.length === 0 ? (
            <p className="text-xs sm:text-sm text-[#8C7A65]">No linked call history recorded for this lead yet.</p>
          ) : (
            calls.map((call, idx) => (
              <div
                key={call._id?.toString?.() || idx}
                className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3.5 text-xs text-[#2C1A00]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                      ['interested', 'meeting_booked'].includes(call.outcome)
                        ? 'bg-emerald-100 text-emerald-800'
                        : call.outcome === 'call_back'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {call.outcome?.replace('_', ' ')}
                    </span>
                    <span className="font-semibold text-[#1F1E1A]">{call.phone}</span>
                  </div>
                  <span className="text-[11px] text-[#8C7A65]">
                    {new Date(call.createdAt).toLocaleString()}
                  </span>
                </div>
                {call.notes && (
                  <p className="mt-2 text-xs text-[#514E46] bg-white p-2.5 rounded-lg border border-[#E8D5B0]/50 whitespace-pre-wrap">
                    {call.notes}
                  </p>
                )}
                {call.nextActionDate && (
                  <p className="mt-1.5 text-[11px] font-semibold text-[#C8860A]">
                    Callback Scheduled: {new Date(call.nextActionDate).toLocaleString()}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Form Answers Grid */}
      <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
        <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
          Form Answers & Submitted Specifications
        </h2>
        {answerEntries.length === 0 ? (
          <p className="mt-4 text-xs sm:text-sm text-[#8C7A65]">No specific questionnaire responses recorded.</p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {answerEntries.map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-xs"
              >
                <p className="font-semibold uppercase tracking-wider text-[#8C7A65]">{key}</p>
                <p className="mt-1 font-bold text-[#1F1E1A] text-sm">
                  {Array.isArray(value) ? value.join(', ') : typeof value === 'object' ? JSON.stringify(value) : String(value)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Activity Timeline */}
      <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
        <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
          Activity & Event History
        </h2>
        <div className="mt-4 space-y-3">
          {activity.length === 0 ? (
            <p className="text-xs sm:text-sm text-[#8C7A65]">No activity logged yet.</p>
          ) : (
            activity.map((item, index) => (
              <div
                key={`${item.type}-${index}`}
                className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3.5 text-xs text-[#2C1A00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#1F1E1A] uppercase tracking-wider text-[11px] bg-[#C8860A]/10 text-[#956408] px-2 py-0.5 rounded-md">
                    {item.type}
                  </span>
                  <span className="text-[#8C7A65] font-medium">
                    {new Date(item.at).toLocaleString()}
                  </span>
                </div>
                {item.meta && Object.keys(item.meta).length > 0 && (
                  <pre className="mt-2 whitespace-pre-wrap font-mono text-[11px] bg-white/70 p-2.5 rounded-lg border border-[#E8D5B0]/50 text-[#514E46]">
                    {JSON.stringify(item.meta, null, 2)}
                  </pre>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
