import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { SubmissionModal } from './SubmissionModal';
import { User, BookOpen, Send, Calendar, CheckCircle2, XCircle, Award, Trophy, Download } from 'lucide-react';

export const StudentPortal = () => {
  const { data, students, activeStudentId, setActiveStudentId, currentStudent, submissions } = useLMS();
  const [studentTab, setStudentTab] = useState('profile'); // 'profile', 'study', 'submissions', 'results', 'attendance'
  const [selectedTaskForSubmission, setSelectedTaskForSubmission] = useState(null);

  const studentSubmissions = submissions[currentStudent.id] || {};

  return (
    <div style={{ paddingTop: '100px' }} class="container">
      {/* Student Selector Switcher */}
      <div class="glass-card" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)', border: '1px solid var(--secondary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>
            {currentStudent.name.charAt(0)}
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>{currentStudent.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Roll No: {currentStudent.rollNo} • {currentStudent.department} Track
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Switch Student View:</span>
          <select
            class="search-input"
            style={{ padding: '0.5rem 0.85rem', background: '#0b1329', fontSize: '0.85rem' }}
            value={activeStudentId}
            onChange={(e) => setActiveStudentId(e.target.value)}
          >
            {students.map((st) => (
              <option key={st.id} value={st.id}>{st.name} ({st.rollNo})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Student Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <button class={`filter-btn ${studentTab === 'profile' ? 'active' : ''}`} onClick={() => setStudentTab('profile')}>👤 My Profile & Info</button>
        <button class={`filter-btn ${studentTab === 'study' ? 'active' : ''}`} onClick={() => setStudentTab('study')}>📚 My Study Spaces (Slides, Notes, Book, Lab)</button>
        <button class={`filter-btn ${studentTab === 'submissions' ? 'active' : ''}`} onClick={() => setStudentTab('submissions')}>📤 My Tasks & Submissions</button>
        <button class={`filter-btn ${studentTab === 'results' ? 'active' : ''}`} onClick={() => setStudentTab('results')}>📈 My Results & Gradebook</button>
        <button class={`filter-btn ${studentTab === 'attendance' ? 'active' : ''}`} onClick={() => setStudentTab('attendance')}>📅 My Attendance Record</button>
      </div>

      {/* TAB 1: PROFILE */}
      {studentTab === 'profile' && (
        <div class="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            👤 Personal Student Profile & Enrollment Details
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div class="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', marginTop: '0.2rem' }}>{currentStudent.name}</div>
            </div>
            <div class="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Roll Number / ID</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-light)', marginTop: '0.2rem' }}>{currentStudent.rollNo}</div>
            </div>
            <div class="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Department</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-light)', marginTop: '0.2rem' }}>{currentStudent.department}</div>
            </div>
            <div class="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Official Email</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginTop: '0.2rem' }}>{currentStudent.email}</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STUDY SPACES */}
      {studentTab === 'study' && (
        <div class="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📚 My Course Resources (Lecture PPTs, PDF Notes, Textbook & Lab Guides)
          </h3>
          <div class="resource-grid">
            {data.lectures.map((lec) => (
              <div key={`lec-${lec.id}`} class="glass-card resource-card">
                <div class="resource-header">
                  <div class="resource-icon-box">📊</div>
                  <div>
                    <h3 class="resource-name">{lec.title}</h3>
                    <span class="badge badge-pptx">PPTX Presentation</span>
                  </div>
                </div>
                <a href={lec.path} download class="download-btn"><Download size={14} /> Download Presentation</a>
              </div>
            ))}
            {data.notes.map((note) => (
              <div key={`note-${note.id}`} class="glass-card resource-card">
                <div class="resource-header">
                  <div class="resource-icon-box">📝</div>
                  <div>
                    <h3 class="resource-name">{note.title}</h3>
                    <span class="badge badge-pdf">PDF Notes</span>
                  </div>
                </div>
                <a href={note.path} download class="download-btn"><Download size={14} /> Download Study Guide</a>
              </div>
            ))}
            {data.courseInfoDocs.map((doc) => (
              <div key={`doc-${doc.id}`} class="glass-card resource-card">
                <div class="resource-header">
                  <div class="resource-icon-box">📚</div>
                  <div>
                    <h3 class="resource-name">{doc.title}</h3>
                    <span class="badge badge-pdf">{doc.cat.toUpperCase()}</span>
                  </div>
                </div>
                <a href={doc.path} download class="download-btn"><Download size={14} /> Download Book / Outline</a>
              </div>
            ))}
            {data.labs.map((lab) => (
              <div key={`lab-${lab.id}`} class="glass-card resource-card">
                <div class="resource-header">
                  <div class="resource-icon-box">🧪</div>
                  <div>
                    <h3 class="resource-name">{lab.title}</h3>
                    <span class="badge badge-pdf">LAB MANUAL</span>
                  </div>
                </div>
                <a href={lab.path} download class="download-btn"><Download size={14} /> Download Lab Exercise</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SUBMISSIONS */}
      {studentTab === 'submissions' && (
        <div class="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📤 My Assignments & Term Project Submissions
          </h3>
          <div class="assignments-grid">
            {data.assignments.map((ass) => {
              const sub = studentSubmissions[ass.id];

              return (
                <div key={ass.id} class="glass-card assignment-card">
                  <div class="assignment-header">
                    <span class="badge" style={{ background: ass.type === 'project' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(99, 102, 241, 0.2)', color: ass.type === 'project' ? '#fde68a' : '#c7d2fe' }}>
                      {ass.type.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--warning)' }}>Due: {ass.dueDate}</span>
                  </div>

                  <h3 class="assignment-title">{ass.title}</h3>
                  <p class="assignment-description">{ass.description}</p>

                  <div style={{ marginTop: '1.25rem', pt: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {sub ? (
                      <div>
                        <span class="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>
                          ✓ {sub.status} ({sub.grade})
                        </span>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>File: {sub.fileName}</div>
                      </div>
                    ) : (
                      <span class="badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>
                        Pending Upload
                      </span>
                    )}

                    <button class="btn btn-primary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }} onClick={() => setSelectedTaskForSubmission(ass)}>
                      <Send size={14} /> {sub ? 'Resubmit Code' : 'Upload Solution'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: RESULTS */}
      {studentTab === 'results' && (
        <div class="glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>
                📈 My Official Results & Transcripts
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Personal scorecard for Quizzes, Midterm, Lab Exam, Project, and Final Grade
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', padding: '0.75rem 1.5rem', borderRadius: '14px', textAlign: 'center', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>
                {currentStudent.marks.totalMarks} / 100 ({currentStudent.marks.grade})
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>GPA: {currentStudent.marks.gpa}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quizzes Total (Out of 20)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-light)', margin: '0.2rem 0' }}>
                {(currentStudent.marks.quiz1 || 0) + (currentStudent.marks.quiz2 || 0)} / 20
              </div>
            </div>

            <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Midterm Exam (Out of 30)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-light)', margin: '0.2rem 0' }}>
                {currentStudent.marks.midExam} / 30
              </div>
            </div>

            <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Practical Lab Exam (Out of 20)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--success)', margin: '0.2rem 0' }}>
                {currentStudent.marks.labExam} / 20
              </div>
            </div>

            <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Project Marks (Out of 20)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--warning)', margin: '0.2rem 0' }}>
                {currentStudent.marks.projectMarks} / 20
              </div>
            </div>

            <div class="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Final Exam (Out of 40)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', margin: '0.2rem 0' }}>
                {currentStudent.marks.finalExam} / 40
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ATTENDANCE LOG */}
      {studentTab === 'attendance' && (
        <div class="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📅 My Marked Attendance Record
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>Class Date</th>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>Lecture / Lab Topic</th>
                  <th style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', textAlign: 'right' }}>Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                {currentStudent.attendance.map((att, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'white' }}>{att.date}</td>
                    <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{att.topic}</td>
                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                      {att.status === 'Present' ? (
                        <span class="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>✓ Present</span>
                      ) : (
                        <span class="badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>✗ Absent</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Task Submission Modal */}
      {selectedTaskForSubmission && (
        <SubmissionModal
          assignment={selectedTaskForSubmission}
          onClose={() => setSelectedTaskForSubmission(null)}
        />
      )}
    </div>
  );
};
