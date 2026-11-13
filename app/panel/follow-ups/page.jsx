'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  MessageSquare,
  Phone,
  RefreshCw,
  User,
  XCircle,
  AlertTriangle
} from 'lucide-react';

export default function FollowUpsPage() {
  const [data, setData] = useState({ overdue: [], dueToday: [], upcoming: [], counts: {} });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [reschedulingRef, setReschedulingRef] = useState(null);
  const [rescheduleDate, setRescheduleDate] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const loadFollowUps = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const res = await fetch('/api/panel/follow-ups');
      if (!res.ok) throw new Error('Failed to load follow-ups');
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setFeedback({ type: 'error', message: err.message || 'Error loading follow-ups' });
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    loadFollowUps();
  }, []);

  const handleMarkCompleted = async (leadRef) => {
    setActionLoading(true);
    setFeedback({ type: '', message: '' });
    try {
      const res = await fetch(`/api/panel/leads/${encodeURIComponent(leadRef)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nextFollowUpAt: null,
          status: 'contacted',
          lastCompletedFollowUpAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error('Failed to complete follow-up');

      setFeedback({ type: 'success', message: `Follow-up for ${leadRef} marked as completed!` });
      await loadFollowUps(true);
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Failed to update' });
    } finally {
      setActionLoading(false);
    }
  };

  const handleReschedule = async (leadRef) => {
    if (!rescheduleDate) return;
    setActionLoading(true);
    setFeedback({ type: '', message: '' });
    try {
      const res = await fetch(`/api/panel/leads/${encodeURIComponent(leadRef)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nextFollowUpAt: new Date(rescheduleDate).toISOString(),
        }),
      });

      if (!res.ok) throw new Error('Failed to reschedule');

      setReschedulingRef(null);
      setRescheduleDate('');
      setFeedback({ type: 'success', message: `Rescheduled follow-up for ${leadRef}!` });
      await loadFollowUps(true);
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Failed to reschedule' });
    } finally {
      setActionLoading(false);
    }
  };

  const renderFollowUpCard = (lead, type) => {
    const isRescheduling = reschedulingRef === lead.leadRef;

    return (
      <div
        key={lead.leadRef}
        className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)] flex flex-col justify-between transition-all"
      >
        <div>
          {/* Card Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#C8860A]">
                  {lead.leadRef}
                </span>
                <span className="inline-flex items-center rounded-md border border-[#E8D5B0] bg-[#FAF8F5] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#6B4F2A]">
                  {lead.segment}
                </span>
              </div>
              <h3 className="mt-1.5 font-bold text-[#1F1E1A] text-lg">
                {lead.name}
              </h3>
            </div>

            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-xl uppercase tracking-wider border ${
                type === 'overdue'
                  ? 'bg-rose-100 text-rose-700 border-rose-300'
                  : type === 'dueToday'
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-emerald-100 text-emerald-800 border-emerald-300'
              }`}
            >
              {type === 'overdue' ? 'Overdue' : type === 'dueToday' ? 'Due Today' : 'Upcoming'}
            </span>
          </div>

          {/* Details list */}
          <div className="mt-4 space-y-2 border-t border-[#E8D5B0]/50 pt-3 text-xs text-[#2C1A00]">
            <div className="flex items-center justify-between">
              <span className="text-[#8C7A65] font-medium flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#C8860A]" />
                Scheduled for
              </span>
              <span className="font-bold text-[#1F1E1A]">
                {new Date(lead.nextFollowUpAt).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#8C7A65] font-medium flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#C8860A]" />
                Phone / WhatsApp
              </span>
              {lead.whatsapp ? (
                <a
                  href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>{lead.whatsapp}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="text-[#8C7A65]">—</span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#8C7A65] font-medium flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-[#C8860A]" />
                Assigned Owner
              </span>
              <span className="font-semibold text-[#1F1E1A]">{lead.owner || 'Unassigned'}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#8C7A65] font-medium">Status</span>
              <span className="font-semibold text-[#1F1E1A] capitalize">{lead.status}</span>
            </div>
          </div>
        </div>

        {/* Reschedule inline form or Action Buttons */}
        <div className="mt-5 pt-3.5 border-t border-[#E8D5B0]/50">
          {isRescheduling ? (
            <div className="space-y-2.5">
              <label className="block text-[11px] font-semibold text-[#6B4F2A]">
                Choose new date & time:
              </label>
              <input
                type="datetime-local"
                value={rescheduleDate}
                onChange={(e) => setRescheduleDate(e.target.value)}
                className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2 text-xs font-semibold text-[#1F1E1A] outline-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setReschedulingRef(null)}
                  className="rounded-lg px-2.5 py-1 text-xs font-medium text-[#8C7A65] hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={actionLoading || !rescheduleDate}
                  onClick={() => handleReschedule(lead.leadRef)}
                  className="rounded-lg bg-[#C8860A] px-3 py-1 text-xs font-bold text-white hover:bg-[#A06A00] transition disabled:opacity-50"
                >
                  Save Date
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Link
                href={`/panel/leads/${encodeURIComponent(lead.leadRef)}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C7A65] hover:text-[#C8860A] transition"
              >
                <span>Lead details</span>
                <ExternalLink className="h-3 w-3" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => {
                    setReschedulingRef(lead.leadRef);
                    setRescheduleDate('');
                  }}
                  className="rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-2.5 py-1.5 text-xs font-semibold text-[#514E46] hover:bg-[#F5EFE4] hover:text-[#1F1E1A] transition cursor-pointer"
                >
                  Reschedule
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => handleMarkCompleted(lead.leadRef)}
                  className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition disabled:opacity-50 cursor-pointer"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Done</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const counts = data.counts || {};
  const overdueList = data.overdue || [];
  const dueTodayList = data.dueToday || [];
  const upcomingList = data.upcoming || [];

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header and Feedback Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1F1E1A]">Follow-ups Center</h1>
          <p className="text-xs sm:text-sm text-[#6B4F2A]">
            Track, complete, and reschedule operational lead touchpoints
          </p>
        </div>

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
              <AlertTriangle className="h-4 w-4 text-rose-600" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>

      {/* Metric Counters & Tab Bar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`rounded-2xl border p-4 text-left transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'border-[#C8860A] bg-white shadow-md shadow-[#C8860A]/15 ring-2 ring-[#C8860A]'
              : 'border-[#E8D5B0] bg-white hover:bg-[#FAF8F5]'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7A65]">All Active</p>
          <p className="mt-1 text-2xl font-bold text-[#1F1E1A]">{counts.total || 0}</p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('overdue')}
          className={`rounded-2xl border p-4 text-left transition-all cursor-pointer ${
            activeTab === 'overdue'
              ? 'border-rose-500 bg-white shadow-md shadow-rose-500/15 ring-2 ring-rose-500'
              : 'border-[#E8D5B0] bg-white hover:bg-[#FAF8F5]'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Overdue</p>
          <p className="mt-1 text-2xl font-bold text-rose-600">{counts.overdue || 0}</p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('dueToday')}
          className={`rounded-2xl border p-4 text-left transition-all cursor-pointer ${
            activeTab === 'dueToday'
              ? 'border-amber-500 bg-white shadow-md shadow-amber-500/15 ring-2 ring-amber-500'
              : 'border-[#E8D5B0] bg-white hover:bg-[#FAF8F5]'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">Due Today</p>
          <p className="mt-1 text-2xl font-bold text-amber-600">{counts.dueToday || 0}</p>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('upcoming')}
          className={`rounded-2xl border p-4 text-left transition-all cursor-pointer ${
            activeTab === 'upcoming'
              ? 'border-emerald-500 bg-white shadow-md shadow-emerald-500/15 ring-2 ring-emerald-500'
              : 'border-[#E8D5B0] bg-white hover:bg-[#FAF8F5]'
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Upcoming</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600">{counts.upcoming || 0}</p>
        </button>
      </div>

      {loading ? (
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-12 text-center shadow-xs">
          <RefreshCw className="h-6 w-6 animate-spin text-[#C8860A] mx-auto mb-3" />
          <p className="text-sm font-medium text-[#6B4F2A]">Loading scheduled follow-ups…</p>
        </div>
      ) : counts.total === 0 ? (
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-12 text-center shadow-xs">
          <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-[#1F1E1A]">All caught up!</h2>
          <p className="text-xs sm:text-sm text-[#8C7A65] mt-1 max-w-sm mx-auto">
            There are no pending follow-ups scheduled at this moment. You can schedule new follow-ups directly from any lead details page.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Overdue Section */}
          {(activeTab === 'all' || activeTab === 'overdue') && overdueList.length > 0 && (
            <div className="space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500" />
                <h2 className="text-lg font-bold text-[#1F1E1A]">Overdue Follow-ups</h2>
                <span className="rounded-full bg-rose-100 text-rose-700 font-bold px-2.5 py-0.5 text-xs">
                  {overdueList.length}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {overdueList.map((lead) => renderFollowUpCard(lead, 'overdue'))}
              </div>
            </div>
          )}

          {/* Due Today Section */}
          {(activeTab === 'all' || activeTab === 'dueToday') && dueTodayList.length > 0 && (
            <div className="space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <h2 className="text-lg font-bold text-[#1F1E1A]">Due Today</h2>
                <span className="rounded-full bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 text-xs">
                  {dueTodayList.length}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dueTodayList.map((lead) => renderFollowUpCard(lead, 'dueToday'))}
              </div>
            </div>
          )}

          {/* Upcoming Section */}
          {(activeTab === 'all' || activeTab === 'upcoming') && upcomingList.length > 0 && (
            <div className="space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <h2 className="text-lg font-bold text-[#1F1E1A]">Upcoming Follow-ups</h2>
                <span className="rounded-full bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 text-xs">
                  {upcomingList.length}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingList.map((lead) => renderFollowUpCard(lead, 'upcoming'))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

