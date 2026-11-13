'use client';

import { useEffect, useState } from 'react';

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-5 shadow-sm shadow-slate-950/40">
    <p className="text-xs sm:text-sm font-medium text-slate-400 truncate">{label}</p>
    <p className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</p>
  </div>
);

export default function PanelOverviewPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/panel/overview');
        if (!response.ok) {
          throw new Error('Unauthorized');
        }
        const json = await response.json();
        setData(json);
      } catch {
        setError('Unable to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10 text-slate-300">Loading dashboard…</div>;
  if (error) return <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6 text-red-200">{error}</div>;
  if (!data) return null;

  const metrics = data.metrics || {};

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StatCard label="Total Leads" value={metrics.totalLeads || 0} />
        <StatCard label="New Leads" value={metrics.newLeads || 0} />
        <StatCard label="Hot Leads" value={metrics.hotLeads || 0} />
        <StatCard label="Warm Leads" value={metrics.warmLeads || 0} />
        <StatCard label="Cold Leads" value={metrics.coldLeads || 0} />
        <StatCard label="Qualified Leads" value={metrics.qualifiedLeads || 0} />
        <StatCard label="Calls Booked" value={metrics.callsBooked || 0} />
        <StatCard label="Won Leads" value={metrics.wonLeads || 0} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold text-white">Leads over time</h3>
          <div className="mt-5 space-y-2">
            {(data.charts?.overTime || []).map((point) => (
              <div key={point.date} className="flex items-center justify-between text-sm text-slate-300">
                <span>{point.date}</span>
                <span className="font-medium text-sky-300">{point.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold text-white">Leads by segment</h3>
          <div className="mt-5 space-y-2">
            {(data.charts?.bySegment || []).map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm text-slate-300">
                <span>{item.label}</span>
                <span className="font-medium text-sky-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold text-white">Leads by temperature</h3>
          <div className="mt-5 space-y-2">
            {(data.charts?.byTemperature || []).map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm text-slate-300">
                <span>{item.label}</span>
                <span className="font-medium text-sky-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold text-white">Lead source overview</h3>
          <div className="mt-5 space-y-2">
            {(data.charts?.sourceOverview || []).map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm text-slate-300">
                <span>{item.label}</span>
                <span className="font-medium text-sky-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold text-white">Recent leads</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3">Lead</th>
                  <th className="pb-3">Segment</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {(data.recentLeads || []).map((lead) => (
                  <tr key={lead.leadRef} className="border-b border-slate-800">
                    <td className="py-3">
                      <div>
                        <p className="font-medium text-white">{lead.name}</p>
                        <p className="text-xs text-slate-400">{lead.leadRef}</p>
                      </div>
                    </td>
                    <td className="py-3">{lead.segment}</td>
                    <td className="py-3">{lead.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="text-lg font-semibold text-white">Today's follow-up summary</h3>
          <div className="mt-4 space-y-3">
            {(data.followUpSummary || []).length === 0 ? (
              <p className="text-sm text-slate-400">No follow-ups scheduled today.</p>
            ) : (
              (data.followUpSummary || []).map((item) => (
                <div key={item.leadRef} className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.leadRef} • {item.status}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      </div>
  );
}
