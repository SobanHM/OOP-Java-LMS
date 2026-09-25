import React from 'react';
import { useLMS } from '../context/LMSContext';
import { UserCheck, Calendar, BookOpen, FileText, Brain, Award } from 'lucide-react';

export const Hero = () => {
  const { data, department, setDepartment } = useLMS();

  return (
    <section class="lms-hero" id="home">
      <div class="hero-content container">
        <h1 class="hero-title">
          Object-Oriented Programming <span class="text-gradient">(Java)</span>
        </h1>
        <p class="hero-subtitle">
          Master OOP fundamentals, core pillars, design patterns, and practical Java applications tailored for AI & SWE degree programs.
        </p>

        <div class="hero-info">
          <div class="hero-badge-pill">
            <UserCheck size={16} class="text-gradient" />
            <span>Instructor: {data.courseInfo.instructor}</span>
          </div>
          <div class="hero-badge-pill">
            <Calendar size={16} class="text-gradient" />
            <span>{data.courseInfo.semester} — {data.courseInfo.university}</span>
          </div>
        </div>

        {/* Department Program Filter Tabs */}
        <div class="dept-tabs">
          <button
            class={`dept-tab ${department === 'all' ? 'active' : ''}`}
            onClick={() => setDepartment('all')}
          >
            All Programs
          </button>
          <button
            class={`dept-tab ${department === 'ai' ? 'active ai-tab' : ''}`}
            onClick={() => setDepartment('ai')}
          >
            🤖 AI Program
          </button>
          <button
            class={`dept-tab ${department === 'swe' ? 'active swe-tab' : ''}`}
            onClick={() => setDepartment('swe')}
          >
            💻 SWE Program
          </button>
        </div>

        {/* Hero Quick Stats */}
        <div class="hero-stats">
          <div class="glass-card stat-item">
            <div class="stat-number">16</div>
            <div class="stat-label">Course Weeks</div>
          </div>
          <div class="glass-card stat-item">
            <div class="stat-number">10</div>
            <div class="stat-label">Slides & Notes</div>
          </div>
          <div class="glass-card stat-item">
            <div class="stat-number">5</div>
            <div class="stat-label">Interactive Quizzes</div>
          </div>
          <div class="glass-card stat-item">
            <div class="stat-number">3.0</div>
            <div class="stat-label">Credit Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};
