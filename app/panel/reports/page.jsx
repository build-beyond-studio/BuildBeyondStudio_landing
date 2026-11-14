'use client';

import { useEffect, useState } from 'react';
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Filter,
  PieChart,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  Users
} from 'lucide-react';

export default function ReportsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState('30d');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');
  const [activeFunnelSegment, setActiveFunnelSegment] = useState('overall');
  const [activeQuestionnaireSegment, setActiveQuestionnaireSegment] = useState('agency');

  const loadReports = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ range });
      if (range === 'custom') {
        if (customFrom) params.set('from', customFrom);
        if (customTo) params.set('to', customTo);
      }
      const res = await fetch(`/api/panel/reports?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to load reports');
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, [range]);

  const metrics = data?.metrics || {};
  const segmentPerformance = data?.segmentPerformance || [];
  const statusDistribution = data?.statusDistribution || [];
  const sourceDistribution = data?.sourceDistribution || [];
  const trend = data?.trend || [];
  const activeFunnel = data?.funnels?.[activeFunnelSegment] || [];
  const questionnaireAnalytics = data?.questionnaireAnalytics || {};
  const activeQuestions = questionnaireAnalytics[activeQuestionnaireSegment] || [];

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Top Header & Range Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1F1E1A]">Reports & Conversion Analytics</h1>
          <p className="text-xs sm:text-sm text-[#6B4F2A]">
            Comprehensive pipeline conversion rates, segment yield, and multi-stage drop-off metrics
          </p>
        </div>

        {/* Date Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-[#E8D5B0] bg-white p-1.5 shadow-xs">
          {[
            { id: 'today', label: 'Today' },
            { id: '7d', label: '7 Days' },
            { id: '30d', label: '30 Days' },
            { id: 'this_month', label: 'This Month' },
            { id: 'custom', label: 'Custom' },
          ].map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => setRange(pill.id)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                range === pill.id
                  ? 'bg-[#C8860A] text-white shadow-xs'
                  : 'text-[#6B4F2A] hover:bg-[#FAF8F5]'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {range === 'custom' && (
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-xs">
          <div>
            <label className="block text-[11px] font-semibold text-[#8C7A65] mb-1">From</label>
            <input
              type="date"
              value={customFrom}
              onChange={(e) => setCustomFrom(e.target.value)}
              className="rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[#1F1E1A] outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-[#8C7A65] mb-1">To</label>
            <input
              type="date"
              value={customTo}
              onChange={(e) => setCustomTo(e.target.value)}
              className="rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[#1F1E1A] outline-none"
            />
          </div>
          <button
            type="button"
            onClick={loadReports}
            className="self-end rounded-xl bg-[#C8860A] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#A06A00] transition cursor-pointer"
          >
            Apply Range
          </button>
        </div>
      )}

      {loading ? (
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-12 text-center shadow-xs">
          <RefreshCw className="h-6 w-6 animate-spin text-[#C8860A] mx-auto mb-3" />
          <p className="text-sm font-medium text-[#6B4F2A]">Calculating analytics and funnel metrics…</p>
        </div>
      ) : (
        <>
          {/* Key Metric Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7A65]">Total Leads</p>
              <p className="mt-1 text-2xl font-bold text-[#1F1E1A]">{metrics.totalLeads || 0}</p>
            </div>
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7A65]">Qualified</p>
              <p className="mt-1 text-2xl font-bold text-amber-700">{metrics.qualifiedLeads || 0}</p>
            </div>
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">Hot Leads</p>
              <p className="mt-1 text-2xl font-bold text-rose-600">{metrics.hotLeads || 0}</p>
            </div>
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7A65]">Calls Booked</p>
              <p className="mt-1 text-2xl font-bold text-sky-700">{metrics.callsBooked || 0}</p>
            </div>
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Won Leads</p>
              <p className="mt-1 text-2xl font-bold text-emerald-600">{metrics.wonLeads || 0}</p>
            </div>
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Lost Leads</p>
              <p className="mt-1 text-2xl font-bold text-slate-600">{metrics.lostLeads || 0}</p>
            </div>
          </div>

          {/* Conversion Rates Bar */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
            <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
              Pipeline Stage Conversion Rates
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3">
                <span className="text-[11px] font-semibold text-[#8C7A65]">Lead &rarr; Qualified</span>
                <p className="mt-1 text-xl font-extrabold text-[#C8860A]">{metrics.leadToQualifiedRate}%</p>
              </div>
              <div className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3">
                <span className="text-[11px] font-semibold text-[#8C7A65]">Qualified &rarr; Call Booked</span>
                <p className="mt-1 text-xl font-extrabold text-[#C8860A]">{metrics.qualifiedToCallRate}%</p>
              </div>
              <div className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3">
                <span className="text-[11px] font-semibold text-[#8C7A65]">Call &rarr; Won Closed</span>
                <p className="mt-1 text-xl font-extrabold text-emerald-600">{metrics.callToWonRate}%</p>
              </div>
              <div className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3">
                <span className="text-[11px] font-semibold text-[#8C7A65]">Overall Win Rate</span>
                <p className="mt-1 text-xl font-extrabold text-emerald-700">{metrics.overallWinRate}%</p>
              </div>
            </div>
          </div>

          {/* Segment-wise Performance & Trends */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Segment Breakdown */}
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
                Segment-wise Lead Yield
              </h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-xs text-[#2C1A00]">
                  <thead>
                    <tr className="border-b border-[#E8D5B0] text-[#8C7A65]">
                      <th className="pb-2 font-semibold uppercase">Segment</th>
                      <th className="pb-2 font-semibold uppercase">Total Leads</th>
                      <th className="pb-2 font-semibold uppercase">Qualified</th>
                      <th className="pb-2 font-semibold uppercase">Won</th>
                      <th className="pb-2 font-semibold uppercase text-right">Yield Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8D5B0]/40">
                    {segmentPerformance.map((seg) => (
                      <tr key={seg.segment} className="hover:bg-[#FAF8F5]/60">
                        <td className="py-2.5 font-bold uppercase text-[#1F1E1A]">{seg.segment}</td>
                        <td className="py-2.5 font-semibold text-[#514E46]">{seg.total}</td>
                        <td className="py-2.5 font-semibold text-amber-700">{seg.qualified}</td>
                        <td className="py-2.5 font-bold text-emerald-700">{seg.won}</td>
                        <td className="py-2.5 font-bold text-right text-[#C8860A]">{seg.conversionRate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Daily Lead Trend */}
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
              <h2 className="text-base font-bold text-[#1F1E1A] border-b border-[#E8D5B0]/50 pb-2.5">
                14-Day Lead Intake Trend
              </h2>
              <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
                {trend.length === 0 ? (
                  <p className="text-xs text-[#8C7A65]">No trend data recorded.</p>
                ) : (
                  trend.map((point) => (
                    <div
                      key={point.date}
                      className="flex items-center justify-between text-xs py-1 border-b border-[#E8D5B0]/30"
                    >
                      <span className="font-medium text-[#6B4F2A]">{point.date}</span>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 rounded-full bg-[#C8860A]"
                          style={{ width: `${Math.min(point.count * 20, 120)}px`, minWidth: point.count > 0 ? '8px' : '0' }}
                        />
                        <span className="font-bold text-[#1F1E1A] w-5 text-right">{point.count}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Funnel Drop-off Analysis with Segment Switcher */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8D5B0]/50 pb-3">
              <div>
                <h2 className="text-base font-bold text-[#1F1E1A]">
                  Funnel Step Progression & Drop-off Analysis
                </h2>
                <p className="text-xs text-[#8C7A65] mt-0.5">
                  Tracks visitor advancement from initial landing through questionnaire steps and conversion
                </p>
              </div>

              {/* Segment Toggle */}
              <div className="flex items-center gap-1 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-1 text-xs">
                {['overall', 'agency', 'business', 'talent', 'other'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveFunnelSegment(tab)}
                    className={`rounded-lg px-2.5 py-1 font-bold capitalize transition cursor-pointer ${
                      activeFunnelSegment === tab
                        ? 'bg-[#C8860A] text-white shadow-xs'
                        : 'text-[#6B4F2A] hover:text-[#1F1E1A]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {activeFunnel.map((step, idx) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#1F1E1A] text-sm">
                      {idx + 1}. {step.step}
                    </span>
                    <div className="flex items-center gap-3">
                      {idx > 0 && step.dropOffCount > 0 && (
                        <span className="text-[11px] font-semibold text-rose-600 flex items-center gap-0.5">
                          <TrendingDown className="h-3 w-3" />
                          <span>-{step.dropOffCount} ({step.dropOffPercent}% drop-off)</span>
                        </span>
                      )}
                      <span className="font-extrabold text-[#C8860A] text-sm">{step.count} events</span>
                    </div>
                  </div>

                  {/* Visual Bar */}
                  <div className="h-2 w-full rounded-full bg-[#E8D5B0]/50 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#C8860A] transition-all"
                      style={{
                        width: `${
                          activeFunnel[0]?.count
                            ? Math.max(5, (step.count / (activeFunnel[0].count || 1)) * 100)
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questionnaire Answer Analytics Section */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8D5B0]/50 pb-3">
              <div>
                <h2 className="text-base font-bold text-[#1F1E1A]">
                  Questionnaire Answer Analytics
                </h2>
                <p className="text-xs text-[#8C7A65] mt-0.5">
                  Option-wise selection distribution and unique respondents across questionnaire steps
                </p>
              </div>

              {/* Segment Selector Tabs */}
              <div className="flex items-center gap-1 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-1 text-xs">
                {[
                  { id: 'agency', label: 'Agency' },
                  { id: 'business', label: 'Business' },
                  { id: 'talent', label: 'Talent' },
                  { id: 'other', label: 'Other' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveQuestionnaireSegment(tab.id)}
                    className={`rounded-lg px-3 py-1 font-bold transition cursor-pointer ${
                      activeQuestionnaireSegment === tab.id
                        ? 'bg-[#C8860A] text-white shadow-xs'
                        : 'text-[#6B4F2A] hover:text-[#1F1E1A]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions Grid / Stack */}
            <div className="space-y-5">
              {activeQuestions.length === 0 ? (
                <div className="rounded-xl border border-[#E8D5B0]/60 bg-[#FAF8F5] p-8 text-center text-xs text-[#8C7A65]">
                  No questionnaire answers recorded for this segment in the selected date range.
                </div>
              ) : (
                activeQuestions.map((q, qIdx) => (
                  <div
                    key={q.id}
                    className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-4 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8D5B0]/40 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C8860A] text-white text-[11px] font-bold">
                          {qIdx + 1}
                        </span>
                        <h3 className="font-bold text-[#1F1E1A] text-sm sm:text-base">
                          {q.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#E8D5B0] text-[#956408]">
                          {q.type === 'single' ? 'Single-Choice' : q.type === 'multi' ? 'Multi-Select' : 'Free-Text'}
                        </span>
                        <span className="text-xs font-semibold text-[#6B4F2A]">
                          Total Respondents: <strong className="text-[#1F1E1A]">{q.totalRespondents}</strong>
                        </span>
                      </div>
                    </div>

                    {q.type === 'text' ? (
                      <div className="bg-white rounded-lg p-4 border border-[#E8D5B0]/50 text-xs text-[#6B4F2A] flex items-center justify-between">
                        <span>Free-text description responses recorded:</span>
                        <span className="font-bold text-[#C8860A] text-sm">{q.totalRespondents} submissions</span>
                      </div>
                    ) : (
                      <div className="space-y-2 pt-1">
                        {q.type === 'multi' && (
                          <p className="text-[11px] text-[#8C7A65] italic">
                            * Multi-select question: respondents can choose multiple options, so percentages may sum to over 100%.
                          </p>
                        )}
                        {q.options.map((opt) => (
                          <div
                            key={opt.option}
                            className="bg-white rounded-lg p-3 border border-[#E8D5B0]/60 space-y-1.5"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-[#1F1E1A]">
                                {opt.option}
                              </span>
                              <div className="flex items-center gap-3">
                                <span className="font-bold text-[#C8860A]">
                                  {opt.count} {opt.count === 1 ? 'selection' : 'selections'}
                                </span>
                                <span className="text-[11px] font-bold text-[#8C7A65] w-12 text-right">
                                  {opt.percentage}%
                                </span>
                              </div>
                            </div>

                            {/* Option Percentage Bar */}
                            <div className="h-1.5 w-full rounded-full bg-[#F5EFE4] overflow-hidden">
                              <div
                                className="h-full rounded-full bg-[#C8860A] transition-all duration-300"
                                style={{ width: `${Math.min(opt.percentage || 0, 100)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

