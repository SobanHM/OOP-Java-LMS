import React from 'react';
import { useLMS } from '../context/LMSContext';
import { GraduationCap, Bell, User, ShieldCheck, Home, UserCheck } from 'lucide-react';

export const Navbar = () => {
  const { userRole, setUserRole, setShowAnnouncementPopup } = useLMS();

  return (
    <header class="lms-header" id="header">
      <div class="header-content container">
        <a href="#home" class="header-brand" onClick={() => setUserRole('public')}>
          <div class="brand-icon-wrapper">
            <GraduationCap size={24} />
          </div>
          <div class="brand-text">
            <span class="brand-university">The University of Larkano</span>
            <span class="brand-course">OOP — Java</span>
          </div>
        </a>

        {/* Role Switcher Navigation Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            class="btn btn-secondary"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
            onClick={() => setShowAnnouncementPopup(true)}
            title="View Urgent Announcements"
          >
            <Bell size={15} class="text-warning" />
            <span>Notices</span>
          </button>

          <div style={{ display: 'flex', background: 'var(--bg-tertiary)', padding: '3px', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
            <button
              class={`dept-tab ${userRole === 'public' ? 'active' : ''}`}
              style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
              onClick={() => setUserRole('public')}
            >
              <Home size={14} style={{ display: 'inline', marginRight: '4px' }} /> Home
            </button>

            <button
              class={`dept-tab ${userRole === 'student' ? 'active swe-tab' : ''}`}
              style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
              onClick={() => setUserRole('student')}
            >
              <User size={14} style={{ display: 'inline', marginRight: '4px' }} /> Student Module
            </button>

            <button
              class={`dept-tab ${userRole === 'admin' ? 'active ai-tab' : ''}`}
              style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
              onClick={() => setUserRole('admin')}
            >
              <ShieldCheck size={14} style={{ display: 'inline', marginRight: '4px' }} /> Admin Portal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
