import React from 'react';
import { useLMS } from '../context/LMSContext';
import { Award, CheckCircle, RotateCcw, BookOpen } from 'lucide-react';

export const ProgressDashboard = () => {
  const { data, completedWeeks, quizScores, resetProgress } = useLMS();

  const totalWeeks = data.weeks.length;
  const completedCount = completedWeeks.length;
  const completionPercentage = Math.round((completedCount / totalWeeks) * 100);

  const quizScoreValues = Object.values(quizScores);
  const quizCount = quizScoreValues.length;
  const avgQuizScore = quizCount > 0
    ? Math.round(quizScoreValues.reduce((a, b) => a + b, 0) / quizCount)
    : 0;

  // Circle SVG metrics
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  return (
    <section class="section" id="progress-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📊 Your Learning Progress</h2>
          <p class="section-subtitle">
            Track completed syllabus topics, practice tasks, and quiz scores
          </p>
        </div>

        <div class="glass-card progress-dashboard">
          <div class="progress-top-row">
            {/* SVG Progress Wheel */}
            <div class="progress-circle-box">
              <svg width="150" height="150" viewBox="0 0 140 140" class="circle-svg">
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  strokeWidth="10"
                  fill="transparent"
                  class="circle-bg"
                />
                <circle
                  cx="70"
                  cy="70"
                  r={radius}
                  strokeWidth="10"
                  fill="transparent"
                  class="circle-fill"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
                <text
                  x="70"
                  y="75"
                  textAnchor="middle"
                  class="circle-text"
                  transform="rotate(90 70 70)"
                >
                  {completionPercentage}%
                </text>
              </svg>
              <div style={{ marginTop: '0.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                Course Completed
              </div>
            </div>

            {/* Progress Stat Cards */}
            <div class="progress-stats-grid">
              <div class="glass-card progress-stat-card">
                <div class="progress-stat-value">{completedCount} / {totalWeeks}</div>
                <div class="progress-stat-label">Weeks Completed</div>
              </div>

              <div class="glass-card progress-stat-card">
                <div class="progress-stat-value">{quizCount} / 5</div>
                <div class="progress-stat-label">Quizzes Passed</div>
              </div>

              <div class="glass-card progress-stat-card">
                <div class="progress-stat-value">{avgQuizScore}%</div>
                <div class="progress-stat-label">Average Quiz Score</div>
              </div>
            </div>
          </div>

          {/* 16-Week Completion Timeline */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                16-Week Completion Tracker:
              </h4>
              <button
                class="btn btn-secondary"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                onClick={resetProgress}
              >
                <RotateCcw size={14} /> Reset Progress
              </button>
            </div>

            <div class="progress-weeks-timeline">
              {data.weeks.map((w) => {
                const isDone = completedWeeks.includes(w.id);
                return (
                  <div
                    key={w.id}
                    class={`progress-dot ${isDone ? 'completed' : ''}`}
                    title={`Week ${w.weekNum}: ${w.title}`}
                  >
                    W{w.weekNum}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
