'use client';

import { useEffect, useState } from 'react';

export default function QueuePage() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/panel/queue').then(async (response) => {
      const json = await response.json();
      setData(json);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {[['New leads', data.newLeads || []], ['Hot leads', data.hotLeads || []], ['Due today', data.dueToday || []], ['Overdue', data.overdue || []], ['Calls scheduled', data.callsScheduled || []], ['Recently contacted', data.recentlyContacted || []]].map(([title, items]) => (
        <div key={title} className="rounded-2xl border border-[#E8D5B0] bg-white p-5 shadow-[0_4px_20px_rgba(44,26,0,0.06)] flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#2C1A00]">{title}</h2>
            <span className="rounded-full bg-[#F5F2EC] px-2.5 py-0.5 text-xs font-semibold text-[#6B4F2A]">
              {items.length}
            </span>
          </div>
          <div className="mt-4 space-y-2 flex-1">
            {items.length === 0 ? (
              <p className="text-sm text-[#8C7A65] py-4 text-center">No items in this queue.</p>
            ) : (
              items.map((lead) => (
                <div key={lead.leadRef || lead._id} className="rounded-xl border border-[#E8D5B0]/70 bg-[#FAF8F5] p-3 text-sm text-[#2C1A00] shadow-xs">
                  <p className="font-semibold text-[#1F1E1A]">{lead.name}</p>
                  <p className="text-xs text-[#8C7A65] mt-0.5">{lead.leadRef} • <span className="capitalize">{lead.status}</span></p>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
