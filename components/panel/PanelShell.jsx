'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Inbox,
  Clock,
  Radio,
  Filter,
  PhoneCall,
  UserCheck,
  CalendarCheck,
  BarChart3,
  Globe,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const navItems = [
  { href: '/panel', label: 'Overview', icon: LayoutDashboard },
  { href: '/panel/visitor-analytics', label: 'Visitor Analytics', icon: Globe },
  { href: '/panel/leads', label: 'Lead Inbox', icon: Inbox },
  { href: '/panel/follow-ups', label: 'Follow-ups', icon: CalendarCheck },
  { href: '/panel/reports', label: 'Reports & Analytics', icon: BarChart3 },
  { href: '/panel/queue', label: "Today's Queue", icon: Clock },
  { href: '/panel/sources', label: 'Sources & Ads', icon: Radio },
  { href: '/panel/funnel', label: 'Funnel', icon: Filter },
  { href: '/panel/calls', label: 'Cold Calls', icon: PhoneCall },
  { href: '/panel/talent', label: 'Talent', icon: UserCheck },
  { href: '/panel/settings', label: 'Settings', icon: Settings },
];

export default function PanelShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
  const [logoutError, setLogoutError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname === '/panel/login') {
    return children;
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/panel/logout', { method: 'POST' });
      if (!response.ok) {
        setLogoutError('Could not log out. Please try again.');
        return;
      }
      setLogoutConfirmationOpen(false);
      router.replace('/panel/login');
      router.refresh();
    } catch {
      setLogoutError('Could not log out. Check your connection and try again.');
    }
  };

  const currentPage = navItems.find((item) => item.href === pathname)?.label
    || (pathname.startsWith('/panel/leads/') ? 'Lead details' : 'Lead Management');

  return (
    <div className="bbs-panel-theme min-h-screen bg-[#F5F2EC] text-[#2C1A00]">
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 self-start flex-col border-r border-[#E8D5B0] bg-white p-5 lg:flex">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#956408]">Build Beyond Studio</p>
            <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-[#1F1E1A]">Admin Panel</h1>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto pr-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || (item.href !== '/panel' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-3.5 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#C8860A] text-white shadow-md shadow-[#C8860A]/25 font-semibold'
                      : 'text-[#514E46] hover:bg-[#F5EFE4] hover:text-[#1F1E1A]'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                      active ? 'text-white' : 'text-[#8A7456] group-hover:text-[#C8860A]'
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Log out shifted down to the bottom */}
          <div className="mt-auto pt-4 border-t border-[#E8D5B0]/60">
            <button
              type="button"
              onClick={() => setLogoutConfirmationOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-sm font-medium text-[#514E46] transition-all duration-200 hover:bg-[#F5EFE4] hover:text-[#1F1E1A] hover:border-[#C8860A]/50 cursor-pointer"
            >
              <LogOut className="h-4 w-4 text-[#8A7456]" />
              <span>Log out</span>
            </button>
          </div>
        </aside>

        {/* Mobile Slide-over Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col bg-white p-5 shadow-2xl transition-transform">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8D5B0]/60">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#956408]">Build Beyond Studio</p>
                  <h2 className="mt-0.5 text-xl font-bold text-[#1F1E1A]">Admin Panel</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-[#E8D5B0] p-1.5 text-[#514E46] hover:bg-[#F5EFE4] hover:text-[#1F1E1A] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 space-y-2.5 overflow-y-auto py-4 pr-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href || (item.href !== '/panel' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3.5 rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                        active
                          ? 'bg-[#C8860A] text-white shadow-md shadow-[#C8860A]/25 font-semibold'
                          : 'text-[#514E46] hover:bg-[#F5EFE4] hover:text-[#1F1E1A]'
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 shrink-0 ${
                          active ? 'text-white' : 'text-[#8A7456]'
                        }`}
                      />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-4 border-t border-[#E8D5B0]/60">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLogoutConfirmationOpen(true);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-3 text-sm font-semibold text-[#514E46] transition hover:bg-[#F5EFE4] hover:text-[#1F1E1A] cursor-pointer"
                >
                  <LogOut className="h-4 w-4 text-[#8A7456]" />
                  <span>Log out</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="sticky top-0 z-30">
            <header className="border-b border-[#E8D5B0] bg-white/90 px-4 py-3.5 sm:px-6 backdrop-blur-md shadow-xs">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="inline-flex items-center justify-center rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2 text-[#514E46] hover:bg-white hover:text-[#1F1E1A] hover:border-[#C8860A]/40 lg:hidden cursor-pointer"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#956408]">Private dashboard</p>
                    <h2 className="mt-0.5 text-lg sm:text-xl font-bold tracking-tight text-[#1F1E1A]">{currentPage}</h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLogoutConfirmationOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2 text-xs sm:text-sm font-medium text-[#514E46] transition hover:bg-white hover:text-[#1F1E1A] hover:border-[#C8860A]/40 shadow-xs cursor-pointer"
                >
                  <LogOut className="h-4 w-4 text-[#8A7456]" />
                  <span>Logout</span>
                </button>
              </div>
            </header>
          </div>

          <main className="p-4 sm:p-6 lg:p-8 flex-1">{children}</main>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      {logoutConfirmationOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLogoutConfirmationOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-confirmation-title"
            className="w-full max-w-sm rounded-2xl border border-[#E8D5B0] bg-white p-6 text-[#2C1A00] shadow-2xl"
          >
            <h2 id="logout-confirmation-title" className="text-lg font-semibold text-[#1F1E1A]">Log out of the Admin Panel?</h2>
            <p className="mt-2 text-sm text-[#6B4F2A]">You’ll need to sign in again to access the dashboard.</p>
            {logoutError ? <p role="alert" className="mt-3 text-sm text-red-700">{logoutError}</p> : null}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setLogoutError('');
                  setLogoutConfirmationOpen(false);
                }}
                className="rounded-xl border border-[#E8D5B0] bg-[#F5EFE4] px-4 py-2 text-sm font-medium text-[#2C1A00] hover:bg-[#F5F2EC] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-xl bg-[#C8860A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#A06A00] cursor-pointer"
              >
                Log out
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
