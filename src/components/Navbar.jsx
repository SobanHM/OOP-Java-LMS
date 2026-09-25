import React from 'react';
import { useLMS } from '../context/LMSContext';
import { GraduationCap, Bell, User, ShieldCheck, Home } from 'lucide-react';

export const Navbar = () => {
  const { userRole, setUserRole, setShowAnnouncementPopup } = useLMS();

  return (
    <header className="lms-header" id="header">
      <div className="header-content container">
        <a href="#home" className="header-brand" onClick={() => setUserRole('public')}>
          <div className="brand-icon-wrapper">
            <GraduationCap size={24} />
          </div>
          <div className="brand-text">
            <span className="brand-university">The University of Larkano</span>
            <span className="brand-course">OOP — Java</span>
          </div>
        </a>

        {/* Role Switcher Navigation Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
            onClick={() => setShowAnnouncementPopup(true)}
            title="View Urgent Announcements"
          >
            <Bell size={15} className="text-warning" />
            <span>Notices</span>
          </button>

          <div style={{ display: 'flex', background: 'var(--bg-tertiary)', padding: '3px', borderRadius: '30px', border: '1px solid var(--glass-border)' }}>
            <button
              className={`dept-tab ${userRole === 'public' ? 'active' : ''}`}
              style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
              onClick={() => setUserRole('public')}
            >
              <Home size={14} style={{ display: 'inline', marginRight: '4px' }} /> Home
            </button>

            <button
              className={`dept-tab ${userRole === 'student' ? 'active swe-tab' : ''}`}
              style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
              onClick={() => setUserRole('student')}
            >
              <User size={14} style={{ display: 'inline', marginRight: '4px' }} /> Student Module
            </button>

            <button
              className={`dept-tab ${userRole === 'admin' ? 'active ai-tab' : ''}`}
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
