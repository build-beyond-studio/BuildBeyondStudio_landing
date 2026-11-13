'use client';

import { useEffect, useState } from 'react';
import {
  AlertCircle,
  Building,
  CheckCircle2,
  KeyRound,
  Lock,
  PlusCircle,
  Save,
  Shield,
  UserCheck,
  UserPlus,
  Users,
  UserX
} from 'lucide-react';

export default function SettingsPage() {
  const [values, setValues] = useState({});
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingSettings, setSavingSettings] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  // New user invite form state
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'sales' });
  const [creatingUser, setCreatingUser] = useState(false);

  // Password change state
  const [passwordTarget, setPasswordTarget] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [updatingPassword, setUpdatingPassword] = useState(false);

  const loadData = async () => {
    try {
      const [settingsRes, usersRes, sessionRes] = await Promise.all([
        fetch('/api/panel/settings'),
        fetch('/api/panel/users'),
        fetch('/api/panel/session'),
      ]);

      const settingsJson = await settingsRes.json();
      const usersJson = await usersRes.json();
      const sessionJson = await sessionRes.json();

      setValues(settingsJson.values || {});
      setUsers(usersJson.users || []);
      setCurrentUser(sessionJson.user || null);
    } catch (err) {
      console.error(err);
      setFeedback({ type: 'error', message: 'Failed to load panel settings' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const saveSettings = async (e) => {
    e?.preventDefault();
    setSavingSettings(true);
    setFeedback({ type: '', message: '' });
    try {
      const res = await fetch('/api/panel/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Failed to save settings');
      setFeedback({ type: 'success', message: 'Business settings updated successfully!' });
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Error saving settings' });
    } finally {
      setSavingSettings(false);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setFeedback({ type: '', message: '' });
    try {
      const res = await fetch('/api/panel/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to create user');

      setFeedback({ type: 'success', message: `User ${newUser.email} invited successfully!` });
      setShowInviteModal(false);
      setNewUser({ name: '', email: '', password: '', role: 'sales' });
      await loadData();
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message || 'Error creating user' });
    } finally {
      setCreatingUser(false);
    }
  };

  const handleUpdateStatus = async (email, currentStatus) => {
    const nextStatus = currentStatus === 'active' ? 'inactive' : 'active';
    try {
      const res = await fetch('/api/panel/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, status: nextStatus }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to update user status');

      setFeedback({ type: 'success', message: `User ${email} status changed to ${nextStatus}` });
      await loadData();
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    }
  };

  const handleUpdateRole = async (email, newRole) => {
    try {
      const res = await fetch('/api/panel/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role: newRole }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to change role');

      setFeedback({ type: 'success', message: `User ${email} role changed to ${newRole}` });
      await loadData();
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!passwordTarget || !newPassword) return;
    setUpdatingPassword(true);
    try {
      const res = await fetch('/api/panel/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: passwordTarget, password: newPassword }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to update password');

      setFeedback({ type: 'success', message: `Password for ${passwordTarget} updated successfully!` });
      setPasswordTarget(null);
      setNewPassword('');
      setTimeout(() => setFeedback({ type: '', message: '' }), 4000);
    } catch (err) {
      setFeedback({ type: 'error', message: err.message });
    } finally {
      setUpdatingPassword(false);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1F1E1A]">Settings & Administration</h1>
          <p className="text-xs sm:text-sm text-[#6B4F2A]">
            Configure business contact coordinates, email notifications, and manage team access
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
              <AlertCircle className="h-4 w-4 text-rose-600" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}
      </div>

      {/* Business Coordinates Card */}
      <form onSubmit={saveSettings} className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
        <div className="border-b border-[#E8D5B0]/50 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[#1F1E1A] flex items-center gap-2">
              <Building className="h-4 w-4 text-[#C8860A]" />
              <span>Business Information & Integration Links</span>
            </h2>
            <p className="text-xs text-[#8C7A65] mt-0.5">
              These coordinates power WhatsApp click-to-chat links, calendar bookings, and alert emails
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1.5">
              Agency WhatsApp Number
            </label>
            <input
              value={values.whatsappNumber || ''}
              onChange={(e) => setValues({ ...values, whatsappNumber: e.target.value })}
              placeholder="e.g. 919876543210"
              className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F1E1A] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1.5">
              Calendly / Booking URL
            </label>
            <input
              value={values.calendarUrl || ''}
              onChange={(e) => setValues({ ...values, calendarUrl: e.target.value })}
              placeholder="https://calendly.com/your-org/strategy"
              className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F1E1A] outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B4F2A] mb-1.5">
              Notification Alert Recipients (Comma-separated)
            </label>
            <input
              value={values.alertRecipients || ''}
              onChange={(e) => setValues({ ...values, alertRecipients: e.target.value })}
              placeholder="admin@buildbeyondstudio.com, sales@buildbeyondstudio.com"
              className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1F1E1A] outline-none"
            />
          </div>
        </div>

        <div className="mt-5 pt-3 flex justify-end border-t border-[#E8D5B0]/50">
          <button
            type="submit"
            disabled={savingSettings}
            className="inline-flex items-center gap-2 rounded-xl bg-[#C8860A] px-5 py-2 text-xs font-bold text-white shadow-md shadow-[#C8860A]/20 hover:bg-[#A06A00] transition disabled:opacity-50 cursor-pointer"
          >
            <Save className="h-4 w-4" />
            <span>{savingSettings ? 'Saving…' : 'Save Business Settings'}</span>
          </button>
        </div>
      </form>

      {/* PHASE 8: USER MANAGEMENT & ROLE-BASED ACCESS CONTROL */}
      <div className="rounded-2xl border border-[#E8D5B0] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(44,26,0,0.06)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E8D5B0]/50 pb-3">
          <div>
            <h2 className="text-base font-bold text-[#1F1E1A] flex items-center gap-2">
              <Users className="h-4 w-4 text-[#C8860A]" />
              <span>Team Access & User Management</span>
            </h2>
            <p className="text-xs text-[#8C7A65] mt-0.5">
              Manage accounts, configure admin and sales roles, reset credentials, or deactivate members
            </p>
          </div>

          {currentUser?.role === 'admin' && (
            <button
              type="button"
              onClick={() => setShowInviteModal(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#C8860A] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-[#A06A00] transition cursor-pointer"
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>Invite New User</span>
            </button>
          )}
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-xs text-[#2C1A00]">
            <thead>
              <tr className="border-b border-[#E8D5B0] text-[#8C7A65]">
                <th className="pb-3 font-semibold uppercase tracking-wider">Member Name</th>
                <th className="pb-3 font-semibold uppercase tracking-wider">Email Address</th>
                <th className="pb-3 font-semibold uppercase tracking-wider">Assigned Role</th>
                <th className="pb-3 font-semibold uppercase tracking-wider">Account Status</th>
                <th className="pb-3 font-semibold uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8D5B0]/40">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-6 text-center text-[#8C7A65]">No users found.</td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.email} className="hover:bg-[#FAF8F5]/60">
                    <td className="py-3 font-bold text-[#1F1E1A]">{u.name}</td>
                    <td className="py-3 font-medium text-[#514E46]">{u.email}</td>
                    <td className="py-3">
                      {currentUser?.role === 'admin' ? (
                        <select
                          value={u.role || 'sales'}
                          onChange={(e) => handleUpdateRole(u.email, e.target.value)}
                          className="rounded-lg border border-[#E8D5B0] bg-[#FAF8F5] px-2 py-1 text-xs font-semibold text-[#1F1E1A] outline-none"
                        >
                          <option value="admin">Administrator</option>
                          <option value="sales">Sales Representative</option>
                        </select>
                      ) : (
                        <span className="capitalize font-semibold text-[#1F1E1A]">{u.role}</span>
                      )}
                    </td>
                    <td className="py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md font-bold uppercase text-[10px] ${
                        u.status === 'active' || !u.status
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {u.status || 'active'}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      {currentUser?.role === 'admin' ? (
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setPasswordTarget(u.email);
                              setNewPassword('');
                            }}
                            className="inline-flex items-center gap-1 rounded-lg border border-[#E8D5B0] bg-[#FAF8F5] px-2 py-1 text-[11px] font-semibold text-[#514E46] hover:bg-[#F5EFE4] hover:text-[#1F1E1A] transition cursor-pointer"
                          >
                            <KeyRound className="h-3 w-3 text-[#C8860A]" />
                            <span>Password</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleUpdateStatus(u.email, u.status || 'active')}
                            className={`rounded-lg px-2 py-1 text-[11px] font-bold transition cursor-pointer ${
                              u.status === 'inactive'
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                : 'border border-rose-300 text-rose-700 hover:bg-rose-50'
                            }`}
                          >
                            {u.status === 'inactive' ? 'Activate' : 'Deactivate'}
                          </button>
                        </div>
                      ) : (
                        <span className="text-[#8C7A65] italic">View only</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Invite New User */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-[#E8D5B0] bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-[#1F1E1A] flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-[#C8860A]" />
              <span>Invite New Team Member</span>
            </h3>
            <p className="text-xs text-[#8C7A65] mt-1">
              Add a new user to collaborate in the BBS Admin Panel.
            </p>

            <form onSubmit={handleCreateUser} className="mt-4 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#6B4F2A] mb-1">Full Name</label>
                <input
                  required
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2.5 text-xs font-semibold text-[#1F1E1A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6B4F2A] mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="sarah@buildbeyondstudio.com"
                  className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2.5 text-xs font-semibold text-[#1F1E1A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6B4F2A] mb-1">Initial Password</label>
                <input
                  required
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  placeholder="Minimum 6 characters"
                  className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2.5 text-xs font-semibold text-[#1F1E1A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#6B4F2A] mb-1">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2.5 text-xs font-semibold text-[#1F1E1A] outline-none"
                >
                  <option value="sales">Sales Representative</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <div className="mt-5 flex justify-end gap-2.5 pt-3 border-t border-[#E8D5B0]/60">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-[#8C7A65] hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creatingUser}
                  className="rounded-xl bg-[#C8860A] px-4 py-2 text-xs font-bold text-white hover:bg-[#A06A00] transition disabled:opacity-50"
                >
                  {creatingUser ? 'Creating…' : 'Create Account'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Change Password */}
      {passwordTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl border border-[#E8D5B0] bg-white p-6 shadow-2xl">
            <h3 className="text-base font-bold text-[#1F1E1A] flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-[#C8860A]" />
              <span>Reset Password</span>
            </h3>
            <p className="text-xs text-[#8C7A65] mt-1">
              Set a new secure password for <span className="font-semibold text-[#1F1E1A]">{passwordTarget}</span>.
            </p>

            <form onSubmit={handleChangePassword} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#6B4F2A] mb-1">New Password</label>
                <input
                  required
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-[#E8D5B0] bg-[#FAF8F5] p-2.5 text-xs font-semibold text-[#1F1E1A] outline-none"
                />
              </div>

              <div className="mt-4 flex justify-end gap-2 pt-2 border-t border-[#E8D5B0]/60">
                <button
                  type="button"
                  onClick={() => setPasswordTarget(null)}
                  className="rounded-xl px-3 py-1.5 text-xs font-semibold text-[#8C7A65] hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updatingPassword || !newPassword}
                  className="rounded-xl bg-[#C8860A] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#A06A00] transition disabled:opacity-50"
                >
                  {updatingPassword ? 'Saving…' : 'Update Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
