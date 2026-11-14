'use client';

import { useEffect, useState } from 'react';
import {
  Globe,
  Users,
  Eye,
  Clock,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Compass,
  Layers,
  MousePointerClick,
  Download,
  RefreshCw,
  Calendar,
  Smartphone,
  Laptop,
  Radio,
  Search,
  Filter,
  Activity,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const GOLD_PALETTE = ['#C8860A', '#E8A020', '#A06A00', '#DFB15B', '#8C5D00', '#F2CA7C', '#B3780C'];

export default function VisitorAnalyticsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [range, setRange] = useState('30d');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'pages' | 'interactions' | 'funnel' | 'sources'
  const [searchPage, setSearchPage] = useState('');

  const fetchAnalytics = async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({ range });
      if (range === 'custom') {
        if (customFrom) params.set('from', customFrom);
        if (customTo) params.set('to', customTo);
      }
      const res = await fetch(`/api/panel/visitor-analytics?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch visitor analytics data');
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setError(err?.message || 'Error loading analytics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, [range]);

  const metrics = data?.metrics || {};
  const trend = data?.trend || [];
  const pages = data?.pages || [];
  const popularServices = data?.popularServices || [];
  const popularPortfolio = data?.popularPortfolio || [];
  const topCtas = data?.topCtas || [];
  const sourceDistribution = data?.sourceDistribution || [];
  const deviceDistribution = data?.deviceDistribution || [];
  const conversionFunnel = data?.conversionFunnel || [];
  const scrollDepth = data?.scrollDepth || [];

  const filteredPages = pages.filter(
    (p) =>
      p.path.toLowerCase().includes(searchPage.toLowerCase()) ||
      p.pageTitle.toLowerCase().includes(searchPage.toLowerCase())
  );

  const formatSeconds = (sec) => {
    if (!sec) return '0s';
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E8D5B0] pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C8860A]/10 text-[#C8860A]">
              <Globe className="h-5 w-5" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-[#1F1E1A]">Website Visitor Analytics</h1>
          </div>
          <p className="mt-1 text-sm text-[#716D63]">
            Sitewide telemetry, real-time visitors, page discovery, and interaction conversions.
          </p>
        </div>

        {/* Date Filter & Export Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Live Indicator */}
          <div className="flex items-center gap-2 rounded-xl border border-[#E8D5B0] bg-white px-3.5 py-2 text-xs font-semibold text-[#1F1E1A] shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>Live Visitors: <strong className="text-[#C8860A] text-sm">{metrics.liveVisitors || 0}</strong></span>
          </div>

          <div className="relative">
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="appearance-none rounded-xl border border-[#E8D5B0] bg-white px-4 py-2 pr-9 text-xs sm:text-sm font-semibold text-[#1F1E1A] shadow-sm outline-none transition focus:border-[#C8860A] focus:ring-2 focus:ring-[#C8860A]/20 cursor-pointer"
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="this_month">This Month</option>
              <option value="last_month">Last Month</option>
              <option value="custom">Custom Range</option>
            </select>
            <Calendar className="pointer-events-none absolute right-3 top-2.5 h-4 w-4 text-[#8A7456]" />
          </div>

          <button
            onClick={fetchAnalytics}
            disabled={loading}
            className="flex items-center gap-1.5 rounded-xl border border-[#E8D5B0] bg-white px-3 py-2 text-xs font-semibold text-[#514E46] shadow-sm transition hover:bg-[#F5EFE4] hover:text-[#1F1E1A]"
            title="Refresh analytics data"
          >
            <RefreshCw className={`h-4 w-4 text-[#8A7456] ${loading ? 'animate-spin text-[#C8860A]' : ''}`} />
          </button>

          <a
            href={`/api/panel/visitor-analytics/export?type=pages`}
            className="flex items-center gap-1.5 rounded-xl bg-[#C8860A] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#A06A00]"
            download
          >
            <Download className="h-4 w-4" />
            <span>Export CSV</span>
          </a>
        </div>
      </div>

      {/* Custom Range Picker Modal if active */}
      {range === 'custom' && (
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-[#514E46]">
            <span>From:</span>
            <input
              type="date"
              value={customFrom}
              onChange={(e) => setCustomFrom(e.target.value)}
              className="rounded-lg border border-[#E8D5B0] px-2.5 py-1.5 text-xs text-[#1F1E1A] outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-[#514E46]">
            <span>To:</span>
            <input
              type="date"
              value={customTo}
              onChange={(e) => setCustomTo(e.target.value)}
              className="rounded-lg border border-[#E8D5B0] px-2.5 py-1.5 text-xs text-[#1F1E1A] outline-none"
            />
          </div>
          <button
            onClick={fetchAnalytics}
            className="rounded-lg bg-[#C8860A] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#A06A00]"
          >
            Apply Dates
          </button>
        </div>
      )}

      {/* Tabs navigation */}
      <div className="flex items-center gap-2 border-b border-[#E8D5B0] pb-2 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview & Trends', icon: TrendingUp },
          { id: 'pages', label: 'Page Analytics', icon: Layers },
          { id: 'interactions', label: 'Services & CTAs', icon: MousePointerClick },
          { id: 'funnel', label: 'Conversion Funnel', icon: Compass },
          { id: 'sources', label: 'Sources & Devices', icon: Radio },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                active
                  ? 'bg-[#C8860A] text-white shadow-sm'
                  : 'text-[#6B4F2A] hover:bg-[#F5EFE4] hover:text-[#1F1E1A]'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: 'Total Pageviews', value: metrics.totalPageViews?.toLocaleString() || '0', icon: Eye },
          { label: 'Total Sessions', value: metrics.totalSessions?.toLocaleString() || '0', icon: Activity },
          { label: 'Unique Visitors', value: metrics.uniqueVisitors?.toLocaleString() || '0', icon: Users },
          { label: 'Avg. Duration', value: formatSeconds(metrics.avgDurationSec), icon: Clock },
          { label: 'Pages / Session', value: metrics.pagesPerSession || '0', icon: Layers },
          { label: 'Bounce Rate', value: `${metrics.bounceRate || 0}%`, icon: ArrowUpRight },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-[#E8D5B0] bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between text-[#8A7456] mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#956408]">{item.label}</span>
                <Icon className="h-4 w-4 text-[#C8860A]" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1F1E1A]">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW & TRENDS */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Traffic Trend Chart */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#1F1E1A]">Traffic & Pageviews Trend</h3>
                <p className="text-xs text-[#716D63]">Daily unique visitors vs total page views</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-[#C8860A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C8860A]" /> Page Views
                </span>
                <span className="flex items-center gap-1.5 text-[#1F1E1A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1F1E1A]" /> Unique Visitors
                </span>
              </div>
            </div>

            <div className="h-72 w-full">
              {trend.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C8860A" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#C8860A" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#8A7456" fontSize={11} tickLine={false} />
                    <YAxis stroke="#8A7456" fontSize={11} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E8D5B0',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        fontSize: '12px',
                      }}
                    />
                    <Area type="monotone" dataKey="pageviews" stroke="#C8860A" strokeWidth={2.5} fillOpacity={1} fill="url(#goldGradient)" name="Pageviews" />
                    <Area type="monotone" dataKey="visitors" stroke="#1F1E1A" strokeWidth={2} fillOpacity={0} name="Visitors" />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-[#8A7456]">
                  No traffic recorded in this range.
                </div>
              )}
            </div>
          </div>

          {/* Quick Split: Top 5 Pages & Top 5 Services */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Top 5 Pages */}
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-[#1F1E1A] mb-1">Top Visited Pages</h3>
              <p className="text-xs text-[#716D63] mb-4">Highest volume public website destinations</p>
              <div className="space-y-3">
                {pages.slice(0, 5).map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm">
                    <div className="max-w-[70%]">
                      <p className="font-semibold text-[#1F1E1A] truncate">{p.pageTitle}</p>
                      <p className="text-xs text-[#8A7456] truncate font-mono">{p.path}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#C8860A]">{p.views} views</p>
                      <p className="text-xs text-[#716D63]">{p.uniqueVisitors} visitors</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 5 Services Clicked */}
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm">
              <h3 className="text-base font-bold text-[#1F1E1A] mb-1">Most Clicked Services</h3>
              <p className="text-xs text-[#716D63] mb-4">Services drawing the highest intent</p>
              <div className="space-y-3">
                {popularServices.slice(0, 5).map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm">
                    <div className="max-w-[70%]">
                      <p className="font-semibold text-[#1F1E1A] truncate">{s.name}</p>
                      <p className="text-xs text-[#8A7456] truncate font-mono">{s.href || 'Direct item'}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#C8860A]">{s.clicks} clicks</p>
                      <p className="text-xs text-[#716D63]">{s.uniqueVisitors} unique</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PAGE ANALYTICS (EXHAUSTIVE DISCOVERY TABLE) */}
      {activeTab === 'pages' && (
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-[#1F1E1A]">All Discovered Website Pages</h3>
              <p className="text-xs text-[#716D63]">Every public route tracked automatically in real time</p>
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-[#8A7456]" />
              <input
                type="text"
                placeholder="Search page or path..."
                value={searchPage}
                onChange={(e) => setSearchPage(e.target.value)}
                className="w-full sm:w-64 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] py-2 pl-9 pr-4 text-xs sm:text-sm text-[#1F1E1A] outline-none focus:border-[#C8860A] focus:bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#E8D5B0]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF8F5] text-xs font-bold uppercase tracking-wider text-[#956408] border-b border-[#E8D5B0]">
                <tr>
                  <th className="px-4 py-3">Page Path</th>
                  <th className="px-4 py-3">Page Title</th>
                  <th className="px-4 py-3 text-right">Total Views</th>
                  <th className="px-4 py-3 text-right">Unique Visitors</th>
                  <th className="px-4 py-3 text-right">Sessions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8D5B0]/50 text-[#1F1E1A]">
                {filteredPages.length > 0 ? (
                  filteredPages.map((p, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F5]/80 transition">
                      <td className="px-4 py-3 font-mono text-xs font-semibold text-[#8C5D00] flex items-center gap-1.5">
                        <a href={p.path} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                          {p.path}
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      </td>
                      <td className="px-4 py-3 text-xs sm:text-sm text-[#514E46] max-w-xs truncate">{p.pageTitle}</td>
                      <td className="px-4 py-3 text-right font-bold text-[#C8860A]">{p.views.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-medium text-[#1F1E1A]">{p.uniqueVisitors.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right text-xs text-[#716D63]">{p.sessions.toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-sm text-[#8A7456]">
                      No pages matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: SERVICES & CTAS (INTERACTION TELEMETRY) */}
      {activeTab === 'interactions' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Services Detailed List */}
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-[#1F1E1A]">Individual Service Demand</h3>
              <p className="text-xs text-[#716D63]">Clicks on service cards, menus, and internal service links</p>
              <div className="space-y-2">
                {popularServices.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm">
                    <div>
                      <p className="font-semibold text-[#1F1E1A]">{s.name}</p>
                      <p className="text-xs font-mono text-[#8A7456]">{s.href}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-md bg-[#C8860A]/10 px-2.5 py-1 text-xs font-bold text-[#C8860A]">
                        {s.clicks} clicks
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Projects */}
            <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-[#1F1E1A]">Case Studies & Portfolio Clicks</h3>
              <p className="text-xs text-[#716D63]">Proof items attracting client interest</p>
              <div className="space-y-2">
                {popularPortfolio.map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm">
                    <div>
                      <p className="font-semibold text-[#1F1E1A]">{p.name}</p>
                      <p className="text-xs font-mono text-[#8A7456]">{p.href}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-md bg-[#1F1E1A]/10 px-2.5 py-1 text-xs font-bold text-[#1F1E1A]">
                        {p.clicks} clicks
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top CTAs & Communication Action Items */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#1F1E1A]">Conversion CTAs & Contact Channels</h3>
            <p className="text-xs text-[#716D63]">WhatsApp direct triggers, brief CTAs, and phone dials</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {topCtas.map((c, idx) => (
                <div key={idx} className="rounded-xl border border-[#E8D5B0]/80 bg-[#FAF8F5] p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#956408] bg-[#F5EFE4] px-2 py-0.5 rounded">
                    {c.category}
                  </span>
                  <p className="mt-2 text-sm font-bold text-[#1F1E1A] truncate">{c.target}</p>
                  <p className="mt-1 text-xs text-[#C8860A] font-semibold">{c.clicks} clicks ({c.uniqueVisitors} visitors)</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CONVERSION FUNNEL */}
      {activeTab === 'funnel' && (
        <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-4">
          <div>
            <h3 className="text-base font-bold text-[#1F1E1A]">End-to-End Website Conversion Funnel</h3>
            <p className="text-xs text-[#716D63]">Tracking full visitor drop-off from initial landing to validated lead generation</p>
          </div>

          <div className="space-y-4 pt-2">
            {conversionFunnel.map((step, idx) => (
              <div key={idx} className="rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8860A] text-white text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-[#1F1E1A]">{step.step}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="text-[#1F1E1A] text-sm">{step.count.toLocaleString()}</span>
                    {idx > 0 && (
                      <span className="text-[#C8860A] bg-[#C8860A]/10 px-2 py-0.5 rounded">
                        {step.conversionRate}% conversion
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 w-full rounded-full bg-[#E8D5B0]/40 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#C8860A] transition-all duration-500"
                    style={{
                      width: `${conversionFunnel[0]?.count ? Math.max((step.count / conversionFunnel[0].count) * 100, 3) : 0}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SOURCES & DEVICES */}
      {activeTab === 'sources' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Traffic Sources */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#1F1E1A]">Acquisition Traffic Sources</h3>
            <p className="text-xs text-[#716D63]">Categorized by organic search, social, direct, and paid campaigns</p>
            <div className="space-y-2">
              {sourceDistribution.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm">
                  <span className="font-semibold text-[#1F1E1A]">{s.label}</span>
                  <span className="font-bold text-[#C8860A]">{s.value} sessions</span>
                </div>
              ))}
            </div>
          </div>

          {/* Devices & Browsers */}
          <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#1F1E1A]">Device Breakdown</h3>
            <div className="grid grid-cols-3 gap-3">
              {deviceDistribution.map((d, idx) => (
                <div key={idx} className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-center">
                  <p className="text-xs font-semibold text-[#8A7456] capitalize">{d.label}</p>
                  <p className="mt-1 text-lg font-bold text-[#1F1E1A]">{d.value}</p>
                </div>
              ))}
            </div>

            <h3 className="text-base font-bold text-[#1F1E1A] pt-2">Scroll Depth Milestones</h3>
            <div className="grid grid-cols-4 gap-2">
              {['25%', '50%', '75%', '90%'].map((milestone) => {
                const count = scrollDepth.find((s) => s.milestone === milestone)?.count || 0;
                return (
                  <div key={milestone} className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-2.5 text-center">
                    <p className="text-[11px] font-bold text-[#C8860A]">{milestone}</p>
                    <p className="text-sm font-bold text-[#1F1E1A] mt-0.5">{count}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

