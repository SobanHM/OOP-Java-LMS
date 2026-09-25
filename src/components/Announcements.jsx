import React from 'react';
import { useLMS } from '../context/LMSContext';
import { Bell, Calendar } from 'lucide-react';

export const Announcements = () => {
  const { data, department } = useLMS();

  const filteredAnnouncements = data.announcements.filter(
    (a) => department === 'all' || a.department === 'all' || a.department === department
  );

  return (
    <section class="section" id="announcements">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📢 Course Announcements</h2>
          <p class="section-subtitle">
            Stay up to date with lab notices, project guidelines, and exam schedules
          </p>
        </div>

        <div class="announcements-timeline">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              class={`announcement-item ${announcement.priority}`}
            >
              <div class="announcement-dot" />
              <div class="glass-card">
                <div class="announcement-meta">
                  <span class="announcement-date">
                    <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    {announcement.date}
                  </span>
                  {announcement.department !== 'all' && (
                    <span
                      class="badge"
                      style={{
                        background: announcement.department === 'ai' ? '#0891b2' : '#7c3aed',
                        color: 'white'
                      }}
                    >
                      {announcement.department.toUpperCase()} ONLY
                    </span>
                  )}
                </div>

                <h3 class="announcement-title">{announcement.title}</h3>
                <p class="announcement-body">{announcement.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
