import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { Award, Calendar, CheckCircle2, XCircle, Trophy, BarChart3, GraduationCap } from 'lucide-react';

export const Gradebook = () => {
  const { data, quizScores } = useLMS();
  const [activeTab, setActiveTab] = useState('attendance'); // 'attendance', 'quizzes', 'exams'

  return (
    <section class="section" id="gradebook-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📊 Student Performance & Gradebook Hub</h2>
          <p class="section-subtitle">
            View attendance records, quiz breakdown, and exam grade performance
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            class={`filter-btn ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            📅 Attendance Record ({data.studentProfile.attendanceRate}%)
          </button>

          <button
            class={`filter-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
            onClick={() => setActiveTab('quizzes')}
          >
            🧠 Quiz Marks Scorecard
          </button>

          <button
            class={`filter-btn ${activeTab === 'exams' ? 'active' : ''}`}
            onClick={() => setActiveTab('exams')}
          >
            📈 Exam Marks & Transcripts
          </button>
        </div>

        {/* Tab 1: Attendance Log */}
        {activeTab === 'attendance' && (
          <div class="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>
                  📅 Fall 2026 Class Attendance Record
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  CS-201 Object-Oriented Programming (Java) — Lecture & Lab Sessions
                </p>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--success)', padding: '0.6rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--success)' }}>
                  {data.studentProfile.attendanceRate}%
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Overall Attendance</div>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--glass-border)' }}>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>Date</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>Lecture / Lab Topic</th>
                    <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', textAlign: 'right' }}>Attendance Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.attendanceRecords.map((record, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'white' }}>{record.date}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{record.topic}</td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        {record.status === 'Present' ? (
                          <span class="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>
                            <CheckCircle2 size={14} style={{ display: 'inline', marginRight: '4px' }} /> Present
                          </span>
                        ) : (
                          <span class="badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>
                            <XCircle size={14} style={{ display: 'inline', marginRight: '4px' }} /> Absent
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Quiz Marks Breakdown */}
        {activeTab === 'quizzes' && (
          <div class="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              🧠 Itemized Quiz Performance & Scorecard
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {data.quizzes.map((quiz) => {
                const scorePct = quizScores[quiz.id];

                return (
                  <div key={quiz.id} class="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span class="week-number-badge" style={{ fontSize: '0.75rem', minWidth: 'auto' }}>Week {quiz.weekNum}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{quiz.questions.length} Questions</span>
                    </div>

                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
                      {quiz.title}
                    </h4>

                    {scorePct !== undefined ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Best Score:</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: scorePct >= 80 ? 'var(--success)' : 'var(--warning)' }}>
                          {scorePct}%
                        </span>
                      </div>
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem', fontStyle: 'italic' }}>
                        Not completed yet
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Exam Marks Report Card */}
        {activeTab === 'exams' && (
          <div class="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>
                  📈 Official Examination Report Card & Transcripts
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Midterm, Lab Exam, Assignment Weightage & GPA Summary
                </p>
              </div>

              <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', padding: '0.75rem 1.5rem', borderRadius: '14px', textAlign: 'center', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>
                  {data.examMarks.overallGpa}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Projected Cumulative GPA</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Midterm Exam ({data.examMarks.midterm.weight})</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-light)', margin: '0.3rem 0' }}>
                  {data.examMarks.midterm.score} / {data.examMarks.midterm.maxScore}
                </div>
                <span class="badge" style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#67e8f9' }}>Grade: {data.examMarks.midterm.grade}</span>
              </div>

              <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Practical Lab Exam ({data.examMarks.labExam.weight})</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)', margin: '0.3rem 0' }}>
                  {data.examMarks.labExam.score} / {data.examMarks.labExam.maxScore}
                </div>
                <span class="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>Grade: {data.examMarks.labExam.grade}</span>
              </div>

              <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Assignments Avg ({data.examMarks.assignmentsAvg.weight})</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-light)', margin: '0.3rem 0' }}>
                  {data.examMarks.assignmentsAvg.score} / {data.examMarks.assignmentsAvg.maxScore}
                </div>
                <span class="badge" style={{ background: 'rgba(129, 140, 248, 0.2)', color: '#c7d2fe' }}>Grade: {data.examMarks.assignmentsAvg.grade}</span>
              </div>

              <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Final Project ({data.examMarks.finalProject.weight})</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--warning)', margin: '0.3rem 0' }}>
                  {data.examMarks.finalProject.score} / {data.examMarks.finalProject.maxScore}
                </div>
                <span class="badge" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fde68a' }}>Grade: {data.examMarks.finalProject.grade}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
