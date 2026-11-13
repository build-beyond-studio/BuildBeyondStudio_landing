'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ExternalLink,
  Filter,
  Phone,
  PhoneCall,
  PlusCircle,
  RefreshCw,
  Search,
  User
} from 'lucide-react';

const outcomeOptions = [
  { value: 'all', label: 'All outcomes' },
  { value: 'no_answer', label: 'No Answer' },
  { value: 'busy', label: 'Busy' },
  { value: 'wrong_number', label: 'Wrong Number' },
  { value: 'not_interested', label: 'Not Interested' },
  { value: 'call_back', label: 'Call Back' },
  { value: 'interested', label: 'Interested' },
  { value: 'meeting_booked', label: 'Meeting Booked' },
];

export default function CallsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [outcomeFilter, setOutcomeFilter] = useState('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [leadsList, setLeadsList] = useState([]);

  const [form, setForm] = useState({
    leadRef: '',
    prospectName: '',
    phone: '',
    outcome: 'call_back',
    notes: '',
    nextActionDate: '',
  });

  const loadCalls = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (outcomeFilter !== 'all') params.set('outcome', outcomeFilter);
      if (fromDate) params.set('from', fromDate);
      if (toDate) params.set('to', toDate);

      const res = await fetch(`/api/panel/calls?${params.toString()}`);
      const json = await res.json();
      setItems(json.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCalls();
  }, [outcomeFilter, fromDate, toDate]);

  useEffect(() => {
    // Load leads for auto-linking dropdown
    fetch('/api/panel/leads?limit=50')
      .then(async (res) => {
        const json = await res.json();
        setLeadsList(json.items || []);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLeadSelect = (leadRef) => {
    if (!leadRef) {
      setForm((prev) => ({ ...prev, leadRef: '', prospectName: '', phone: '' }));
      return;
    }
    const found = leadsList.find((l) => l.leadRef === leadRef);
    if (found) {
      setForm((prev) => ({
        ...prev,
        leadRef: found.leadRef,
        prospectName: found.name,
        phone: found.whatsapp || '',
      }));
    } else {
      setForm((prev) => ({ ...prev, leadRef }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/panel/calls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm({
          leadRef: '',
          prospectName: '',
          phone: '',
          outcome: 'call_back',
          notes: '',
          nextActionDate: '',
        });
        await loadCalls();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-[#1F1E1A]">Cold Calls Register</h1>
        <p className="text-xs sm:text-sm text-[#6B4F2A]">
          Log outbound sales calls, schedule callbacks, and link call history to leads
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        {/* Left Column: Call Log with Filters */}
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)] flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[160px]">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8C7A65] mb-1">
                Outcome Filter
              </label>
              <select
                value={outcomeFilter}
                onChange={(e) => setOutcomeFilter(e.target.value)}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[#1F1E1A] outline-none"
              >
                {outcomeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="min-w-[130px]">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8C7A65] mb-1">
                From Date
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-2.5 py-1.5 text-xs font-semibold text-[#1F1E1A] outline-none"
              />
            </div>

            <div className="min-w-[130px]">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#8C7A65] mb-1">
                To Date
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-2.5 py-1.5 text-xs font-semibold text-[#1F1E1A] outline-none"
              />
            </div>

            {(outcomeFilter !== 'all' || fromDate || toDate) && (
              <div className="self-end pb-1">
                <button
                  type="button"
                  onClick={() => {
                    setOutcomeFilter('all');
                    setFromDate('');
                    setToDate('');
                  }}
                  className="text-xs text-[#C8860A] hover:underline font-semibold"
                >
                  Reset
                </button>
              </div>
            )}
          </div>

          {/* Call Cards List */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
            <div className="border-b border-[#E8D5B0]/50 pb-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-[#1F1E1A] flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-[#C8860A]" />
                <span>Call Log ({items.length})</span>
              </h2>
            </div>

            <div className="mt-4 space-y-3">
              {loading ? (
                <p className="py-8 text-center text-xs text-[#8C7A65]">Loading call records…</p>
              ) : items.length === 0 ? (
                <p className="py-8 text-center text-xs text-[#8C7A65]">No calls match the selected filters.</p>
              ) : (
                items.map((item) => (
                  <div
                    key={item._id?.toString?.() || `${item.phone}-${item.createdAt}`}
                    className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-4 text-xs text-[#2C1A00]"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#1F1E1A] text-sm">{item.prospectName || 'Prospect'}</span>
                          {item.leadRef && (
                            <Link
                              href={`/panel/leads/${encodeURIComponent(item.leadRef)}`}
                              className="font-mono text-[11px] font-bold text-[#C8860A] hover:underline inline-flex items-center gap-0.5"
                            >
                              <span>{item.leadRef}</span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </Link>
                          )}
                        </div>
                        <p className="text-[#8C7A65] font-medium mt-0.5">{item.phone}</p>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                          ['interested', 'meeting_booked'].includes(item.outcome)
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.outcome === 'call_back'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {item.outcome?.replace('_', ' ')}
                        </span>
                        <span className="text-[10px] text-[#8C7A65]">
                          {new Date(item.createdAt).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {item.notes && (
                      <p className="mt-2.5 text-xs text-[#514E46] bg-white p-2.5 rounded-lg border border-[#E8D5B0]/50 whitespace-pre-wrap">
                        {item.notes}
                      </p>
                    )}

                    {item.nextActionDate && (
                      <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#C8860A]">
                        <Clock className="h-3.5 w-3.5" />
                        <span>Callback scheduled: {new Date(item.nextActionDate).toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Log New Call Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)] h-fit"
        >
          <div className="border-b border-[#E8D5B0]/50 pb-3">
            <h2 className="text-base font-bold text-[#1F1E1A] flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-[#C8860A]" />
              <span>Record New Call</span>
            </h2>
            <p className="text-xs text-[#8C7A65] mt-0.5">
              Log conversation outcomes and schedule follow-up callbacks
            </p>
          </div>

          <div className="mt-4 space-y-3.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1">
                Link to Existing Lead (Optional)
              </label>
              <select
                value={form.leadRef}
                onChange={(e) => handleLeadSelect(e.target.value)}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-2 text-xs font-semibold text-[#1F1E1A] outline-none"
              >
                <option value="">-- No Lead Linked (Independent Cold Call) --</option>
                {leadsList.map((lead) => (
                  <option key={lead.leadRef} value={lead.leadRef}>
                    {lead.leadRef} - {lead.name} ({lead.segment})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1">
                Prospect Name
              </label>
              <input
                required
                value={form.prospectName}
                onChange={(e) => setForm({ ...form, prospectName: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-2 text-xs font-semibold text-[#1F1E1A] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1">
                Phone / WhatsApp Number
              </label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="e.g. +91 9876543210"
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-2 text-xs font-semibold text-[#1F1E1A] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1">
                Call Outcome
              </label>
              <select
                value={form.outcome}
                onChange={(e) => setForm({ ...form, outcome: e.target.value })}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-2 text-xs font-semibold text-[#1F1E1A] outline-none"
              >
                {outcomeOptions.filter((o) => o.value !== 'all').map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1">
                Next Action / Callback Date
              </label>
              <input
                type="datetime-local"
                value={form.nextActionDate}
                onChange={(e) => setForm({ ...form, nextActionDate: e.target.value })}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-2 text-xs font-semibold text-[#1F1E1A] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1">
                Conversation Notes
              </label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Add meeting notes, objections, discussion..."
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-3 text-xs text-[#1F1E1A] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#C8860A] py-2.5 text-xs font-bold text-white shadow-md shadow-[#C8860A]/20 hover:bg-[#A06A00] transition disabled:opacity-50 cursor-pointer"
            >
              {submitting ? 'Saving call record…' : 'Save Call Record'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
