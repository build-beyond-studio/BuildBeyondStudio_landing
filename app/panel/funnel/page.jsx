'use client';

import { useEffect, useState } from 'react';

export default function FunnelPage() {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    fetch('/api/panel/funnel').then(async (response) => {
      const json = await response.json();
      setData(json);
    });
  }, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold text-white">Funnel conversion</h2>
      <div className="mt-5 space-y-3">
        {(data.data || []).map((step) => (
          <div key={step.label} className="rounded-xl border border-slate-800 bg-slate-950 p-3">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>{step.label}</span>
              <span className="font-medium text-sky-300">{step.count}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-sky-500" style={{ width: `${Math.min(step.percent || 0, 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
