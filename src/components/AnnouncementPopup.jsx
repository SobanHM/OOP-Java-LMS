import React from 'react';
import { useLMS } from '../context/LMSContext';
import { Bell, X, Calendar } from 'lucide-react';

export const AnnouncementPopup = () => {
  const { announcements, showAnnouncementPopup, setShowAnnouncementPopup } = useLMS();

  if (!showAnnouncementPopup) return null;

  const safeAnnouncements = Array.isArray(announcements) && announcements.length > 0 ? announcements : [];
  if (safeAnnouncements.length === 0) return null;

  const urgentAnnouncements = safeAnnouncements.filter((a) => a.priority === 'urgent' || a.isNew);
  const latestAnnouncement = urgentAnnouncements[0] || safeAnnouncements[0];

  if (!latestAnnouncement) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '560px', background: '#090e1f', border: '1px solid var(--primary-light)', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--error) 0%, var(--primary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              <Bell size={20} />
            </div>
            <div>
              <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.25)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.4)' }}>
                📢 Official Course Notice
              </span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} />
                {latestAnnouncement.date}
              </div>
            </div>
          </div>

          <button
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.25rem' }}
            onClick={() => setShowAnnouncementPopup(false)}
          >
            <X size={22} />
          </button>
        </div>

        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', marginBottom: '0.85rem' }}>
          {latestAnnouncement.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
          {latestAnnouncement.content}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>The University of Larkano — CS-201</span>
          <button
            className="btn btn-primary"
            onClick={() => setShowAnnouncementPopup(false)}
          >
            Got it, Continue to Portal
          </button>
        </div>
      </div>
    </div>
  );
};
