import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { UserCheck, ShieldCheck, Award, BookOpen, CheckCircle, Sparkles, X } from 'lucide-react';

export const StudentProfile = () => {
  const { data, isEnrolled, enrollStudent, department } = useLMS();
  const [showModal, setShowModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('swe');

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    enrollStudent(selectedTrack);
    setShowModal(false);
  };

  return (
    <div class="container" style={{ marginTop: '95px', marginBottom: '-1rem' }}>
      <div class="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '1.25rem 1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.25rem', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}>
            SH
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {data.studentProfile.name}
              </h3>
              {isEnrolled ? (
                <span class="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', border: '1px solid rgba(16, 185, 129, 0.4)' }}>
                  <ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {data.studentProfile.enrollmentStatus}
                </span>
              ) : (
                <span class="badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>
                  Not Enrolled
                </span>
              )}
            </div>

            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', gap: '1.25rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
              <span>🆔 <strong>ID:</strong> {data.studentProfile.rollNo}</span>
              <span>🎓 <strong>Program:</strong> {department === 'ai' ? 'Artificial Intelligence (AI)' : department === 'swe' ? 'Software Engineering (SWE)' : 'AI & SWE Combined'}</span>
              <span>📅 <strong>Semester:</strong> Fall 2026</span>
            </div>
          </div>
        </div>

        <button
          class="btn btn-primary"
          onClick={() => setShowModal(true)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Sparkles size={16} />
          {isEnrolled ? 'Course Enrolled (Change Track)' : 'Enroll in CS-201 Course'}
        </button>
      </div>

      {/* Enrollment Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div class="glass-card" style={{ width: '100%', maxWidth: '520px', background: '#0f172a', border: '1px solid var(--primary-light)', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }} class="text-gradient">
                🎓 CS-201 Course Enrollment
              </h3>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Select your academic program track for Object-Oriented Programming (Java) at <strong>The University of Larkano</strong>.
            </p>

            <form onSubmit={handleEnrollSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1rem', borderRadius: '12px', background: selectedTrack === 'swe' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255,255,255,0.04)', border: selectedTrack === 'swe' ? '1px solid var(--secondary)' : '1px solid var(--glass-border)', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="track"
                    value="swe"
                    checked={selectedTrack === 'swe'}
                    onChange={() => setSelectedTrack('swe')}
                    style={{ accentColor: 'var(--secondary)' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: 'white' }}>💻 Software Engineering (SWE Track)</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Focuses on Software Design Patterns, UML Modeling & Architecture</div>
                  </div>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1rem', borderRadius: '12px', background: selectedTrack === 'ai' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.04)', border: selectedTrack === 'ai' ? '1px solid var(--accent)' : '1px solid var(--glass-border)', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="track"
                    value="ai"
                    checked={selectedTrack === 'ai'}
                    onChange={() => setSelectedTrack('ai')}
                    style={{ accentColor: 'var(--accent)' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: 'white' }}>🤖 Artificial Intelligence (AI Track)</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Focuses on Matrix Operations, Neural Networks & Algorithmic Java</div>
                  </div>
                </label>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" class="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Confirm Enrollment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
