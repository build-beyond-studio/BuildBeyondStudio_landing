'use client';

import { useEffect, useState } from 'react';

export default function SourcesPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/panel/sources')
      .then(async (response) => {
        if (!response.ok) throw new Error('Failed to load sources');
        const json = await response.json();
        setData(json);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const sections = [
    { title: 'Leads by source', items: data.bySource || [], description: 'Lead volume per acquisition channel' },
    { title: 'Leads by campaign', items: data.byCampaign || [], description: 'UTM campaign performance' },
    { title: 'Qualified leads by campaign', items: data.qualifiedByCampaign || [], description: 'Campaigns driving qualified, booked or warm leads' },
    { title: 'Hot leads by campaign', items: data.hotByCampaign || [], description: 'Campaigns driving immediate hot pipeline' },
    { title: 'Leads by medium', items: data.byMedium || [], description: 'Traffic medium (cpc, organic, direct, etc.)' },
    { title: 'Leads by content', items: data.byContent || [], description: 'Ad creative or content variation (utm_content)' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1F1E1A]">Sources & Ads</h1>
          <p className="text-xs sm:text-sm text-[#6B4F2A]">UTM attribution breakdown and campaign performance across all leads</p>
        </div>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sections.map(({ title, items, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)] flex flex-col"
          >
            <div className="border-b border-[#E8D5B0]/50 pb-3">
              <h2 className="text-base font-bold text-[#1F1E1A]">{title}</h2>
              <p className="text-xs text-[#8C7A65] mt-0.5">{description}</p>
            </div>

            <div className="mt-3.5 space-y-2 flex-1">
              {loading ? (
                <p className="py-6 text-center text-xs text-[#8C7A65]">Loading attribution data…</p>
              ) : items.length === 0 ? (
                <p className="py-6 text-center text-xs text-[#8C7A65]">No attribution data recorded yet.</p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm text-[#2C1A00]"
                  >
                    <span className="font-medium text-[#1F1E1A] truncate max-w-[200px]" title={item.label}>
                      {item.label}
                    </span>
                    <span className="inline-flex items-center rounded-lg bg-[#C8860A]/10 px-2.5 py-0.5 text-xs font-bold text-[#956408]">
                      {item.value}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
