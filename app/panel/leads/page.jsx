'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Download, ExternalLink } from 'lucide-react';

export default function LeadsInboxPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState('');
  const [segment, setSegment] = useState('all');
  const [temperature, setTemperature] = useState('all');
  const [status, setStatus] = useState('all');
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [expandedLeadRefs, setExpandedLeadRefs] = useState({});

  const handleExportCsv = () => {
    setExporting(true);
    const params = new URLSearchParams({ export: 'csv' });
    if (search) params.set('search', search);
    if (segment !== 'all') params.set('segment', segment);
    if (temperature !== 'all') params.set('temperature', temperature);
    if (status !== 'all') params.set('status', status);

    const downloadUrl = `/api/panel/leads?${params.toString()}`;
    window.location.href = downloadUrl;
    setTimeout(() => setExporting(false), 2000);
  };

  const toggleLeadExpand = (leadRef) => {
    setExpandedLeadRefs((prev) => ({
      ...prev,
      [leadRef]: !prev[leadRef],
    }));
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const params = new URLSearchParams({ page: String(page), limit: String(limit) });
      if (search) params.set('search', search);
      if (segment !== 'all') params.set('segment', segment);
      if (temperature !== 'all') params.set('temperature', temperature);
      if (status !== 'all') params.set('status', status);

      const response = await fetch(`/api/panel/leads?${params.toString()}`);
      const data = await response.json();
      setItems(data.items || []);
      setTotal(data.total || 0);
      setTotalPages(data.totalPages || 1);
      setLoading(false);
    };

    load();
  }, [page, limit, search, segment, temperature, status]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="flex-1">
          <label className="mb-2 block text-sm text-slate-300">Search</label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Name, phone or lead reference"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white placeholder:text-slate-500"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3 xl:w-[560px]">
          <select value={segment} onChange={(event) => setSegment(event.target.value)} className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white">
            <option value="all">All segments</option>
            <option value="agency">Agency</option>
            <option value="business">Business</option>
            <option value="talent">Talent</option>
            <option value="other">Other</option>
          </select>

          <select value={temperature} onChange={(event) => setTemperature(event.target.value)} className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white">
            <option value="all">All temperatures</option>
            <option value="hot">Hot</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>

          <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white">
            <option value="all">All status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="won">Won</option>
          </select>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white">Lead inbox</h2>
            <p className="text-sm text-slate-400">{total} leads</p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={exporting || total === 0}
              className="inline-flex items-center gap-2 rounded-xl bg-[#C8860A] px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#A06A00] transition disabled:opacity-50 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>{exporting ? 'Exporting…' : 'Export CSV'}</span>
            </button>
            <select
              value={limit}
              onChange={(event) => { setPage(1); setLimit(Number(event.target.value)); }}
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-white text-xs font-medium"
            >
              <option value="10">10 per page</option>
              <option value="25">25 per page</option>
              <option value="50">50 per page</option>
              <option value="100">100 per page</option>
            </select>
          </div>
        </div>

        {loading ? (
          <p className="py-6 text-center text-slate-400">Loading leads…</p>
        ) : items.length === 0 ? (
          <p className="py-8 text-center text-slate-400">No leads match the current filters.</p>
        ) : (
          <>
            {/* Mobile view: Expandable lead cards (shows Lead Ref, Name, Segment; click to view all) */}
            <div className="space-y-3 md:hidden">
              {items.map((lead) => {
                const isExpanded = Boolean(expandedLeadRefs[lead.leadRef]);
                return (
                  <div
                    key={lead.leadRef}
                    className="rounded-2xl border border-[#E8D5B0] bg-white overflow-hidden shadow-[0_4px_16px_rgba(44,26,0,0.06)] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleLeadExpand(lead.leadRef)}
                      className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#C8860A]">
                            {lead.leadRef}
                          </span>
                          <span className="inline-flex items-center rounded-md border border-[#E8D5B0] bg-[#FAF8F5] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#6B4F2A]">
                            {lead.segment}
                          </span>
                        </div>
                        <p className="mt-1.5 font-bold text-[#1F1E1A] text-base truncate">
                          {lead.name}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-[11px] text-[#8C7A65] font-semibold">
                          {isExpanded ? 'Less' : 'More'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-[#C8860A]" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-[#8C7A65]" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-[#E8D5B0]/70 bg-[#FAF8F5]/70 p-4 space-y-2.5 text-xs text-[#2C1A00]">
                        <div className="flex items-center justify-between py-1.5 border-b border-[#E8D5B0]/40">
                          <span className="text-[#6B4F2A] font-medium">WhatsApp</span>
                          {lead.whatsapp ? (
                            <a
                              href={`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-emerald-600 hover:underline inline-flex items-center gap-1"
                            >
                              <span>{lead.whatsapp}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="text-[#8C7A65]">-</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between py-1.5 border-b border-[#E8D5B0]/40">
                          <span className="text-[#6B4F2A] font-medium">Score</span>
                          <span className="font-bold text-[#1F1E1A]">{lead.score || 0}</span>
                        </div>

                        <div className="flex items-center justify-between py-1.5 border-b border-[#E8D5B0]/40">
                          <span className="text-[#6B4F2A] font-medium">Temp</span>
                          <span className={`font-semibold capitalize px-2 py-0.5 rounded text-[11px] ${
                            lead.temperature === 'hot'
                              ? 'bg-rose-100 text-rose-700 border border-rose-300'
                              : lead.temperature === 'warm'
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : 'bg-sky-100 text-sky-700 border border-sky-300'
                          }`}>
                            {lead.temperature || 'cold'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-1.5 border-b border-[#E8D5B0]/40">
                          <span className="text-[#6B4F2A] font-medium">Status</span>
                          <span className="font-semibold text-[#1F1E1A] capitalize">{lead.status}</span>
                        </div>

                        <div className="flex items-center justify-between py-1.5 border-b border-[#E8D5B0]/40">
                          <span className="text-[#6B4F2A] font-medium">Source</span>
                          <span className="text-[#1F1E1A] font-medium truncate max-w-[180px]">
                            {lead.firstTouch?.utm_source || lead.firstTouch?.src || 'direct'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-1.5 border-b border-[#E8D5B0]/40">
                          <span className="text-[#6B4F2A] font-medium">Owner</span>
                          <span className="text-[#1F1E1A] font-medium">{lead.owner || 'Unassigned'}</span>
                        </div>

                        <div className="pt-2.5 flex justify-end">
                          <Link
                            href={`/panel/leads/${encodeURIComponent(lead.leadRef)}`}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-[#C8860A] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#A06A00] transition cursor-pointer"
                          >
                            <span>View Details</span>
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop view: Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-3">Lead Ref</th>
                    <th className="pb-3">Name</th>
                    <th className="pb-3">Segment</th>
                    <th className="pb-3">WhatsApp</th>
                    <th className="pb-3">Score</th>
                    <th className="pb-3">Temp</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Source</th>
                    <th className="pb-3">Owner</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((lead) => (
                    <tr key={lead.leadRef} className="border-b border-slate-800">
                      <td className="py-3 font-medium text-white">{lead.leadRef}</td>
                      <td className="py-3">{lead.name}</td>
                      <td className="py-3">{lead.segment}</td>
                      <td className="py-3">{lead.whatsapp}</td>
                      <td className="py-3">{lead.score || 0}</td>
                      <td className="py-3">{lead.temperature || 'cold'}</td>
                      <td className="py-3">{lead.status}</td>
                      <td className="py-3">{lead.firstTouch?.utm_source || lead.firstTouch?.src || 'direct'}</td>
                      <td className="py-3">{lead.owner || 'Unassigned'}</td>
                      <td className="py-3">
                        <Link href={`/panel/leads/${encodeURIComponent(lead.leadRef)}`} className="text-sky-400 hover:text-sky-300 font-medium">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
          <button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page <= 1} className="rounded-xl border border-slate-700 px-3 py-2 disabled:opacity-50 cursor-pointer">
            Previous
          </button>
          <span>Page {page} of {totalPages}</span>
          <button type="button" onClick={() => setPage((current) => current + 1)} disabled={page >= totalPages} className="rounded-xl border border-slate-700 px-3 py-2 disabled:opacity-50 cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
