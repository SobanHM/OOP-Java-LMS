import React from 'react';
import { useLMS } from '../context/LMSContext';
import { Curriculum } from './Curriculum';
import { SearchBar } from './SearchBar';
import { UserCheck, Calendar, BookOpen, ShieldCheck, User, Sparkles, Award } from 'lucide-react';

export const HomePage = () => {
  const { data, setUserRole } = useLMS();

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Header with Instructor Portrait */}
      <section class="lms-hero" style={{ paddingTop: '20px' }}>
        <div class="hero-content container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', textAlign: 'left', marginBottom: '3rem' }}>
            {/* Instructor Photo Card */}
            <div style={{ position: 'relative' }}>
              <div style={{ width: '220px', height: '280px', borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--primary-light)', boxShadow: '0 20px 40px rgba(99, 102, 241, 0.35)' }}>
                <img
                  src={data.courseInfo.photoUrl}
                  alt={data.courseInfo.instructor}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800, whiteSpace: 'nowrap', boxShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>
                iCoMET 2026 Author
              </div>
            </div>

            {/* Course Title & Instructor Meta */}
            <div style={{ maxWidth: '640px' }}>
              <span class="badge" style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#67e8f9', padding: '0.4rem 0.85rem', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                🎓 {data.courseInfo.university}
              </span>
              <h1 class="hero-title" style={{ fontSize: '2.75rem', margin: '0.5rem 0' }}>
                Object-Oriented Programming <span class="text-gradient">(Java)</span>
              </h1>
              <p class="hero-subtitle" style={{ margin: '0 0 1.25rem 0' }}>
                Official course portal for Software Engineering (SWE) and Artificial Intelligence (AI) programs.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                <div class="hero-badge-pill">
                  <UserCheck size={16} class="text-gradient" />
                  <span>Instructor: {data.courseInfo.instructor} ({data.courseInfo.email})</span>
                </div>
                <div class="hero-badge-pill">
                  <Calendar size={16} class="text-gradient" />
                  <span>{data.courseInfo.semester} — CS-201</span>
                </div>
              </div>

              {/* Action Portal Switcher Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  class="btn btn-primary"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
                  onClick={() => setUserRole('student')}
                >
                  <User size={18} /> Open Student Module
                </button>

                <button
                  class="btn btn-secondary"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
                  onClick={() => setUserRole('admin')}
                >
                  <ShieldCheck size={18} /> Open Admin / Teacher Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Live Search */}
      <SearchBar />

      {/* Course Curriculum Accordion */}
      <Curriculum />
    </div>
  );
};
