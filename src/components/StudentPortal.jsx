import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { SubmissionModal } from './SubmissionModal';
import { Send, Download } from 'lucide-react';

export const StudentPortal = () => {
  const { data, students, activeStudentId, setActiveStudentId, currentStudent, submissions } = useLMS();
  const [studentTab, setStudentTab] = useState('profile');
  const [selectedTaskForSubmission, setSelectedTaskForSubmission] = useState(null);

  const safeStudents = Array.isArray(students) && students.length > 0 ? students : data.students;
  const activeStudent = currentStudent || safeStudents[0];

  const studentSubmissions = (submissions && activeStudent && submissions[activeStudent.id]) || {};

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      {/* Student Selector Switcher */}
      <div className="glass-card" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)', border: '1px solid var(--secondary)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>
            {activeStudent.name ? activeStudent.name.charAt(0) : 'S'}
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>{activeStudent.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Roll No: {activeStudent.rollNo} • {activeStudent.department} Track
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Switch Student View:</span>
          <select
            className="search-input"
            style={{ padding: '0.5rem 0.85rem', background: '#0b1329', fontSize: '0.85rem' }}
            value={activeStudentId}
            onChange={(e) => setActiveStudentId(e.target.value)}
          >
            {safeStudents.map((st) => (
              <option key={st.id} value={st.id}>{st.name} ({st.rollNo})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Student Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <button className={`filter-btn ${studentTab === 'profile' ? 'active' : ''}`} onClick={() => setStudentTab('profile')}>👤 My Profile & Info</button>
        <button className={`filter-btn ${studentTab === 'study' ? 'active' : ''}`} onClick={() => setStudentTab('study')}>📚 My Study Spaces (Slides, Notes, Book, Lab)</button>
        <button className={`filter-btn ${studentTab === 'submissions' ? 'active' : ''}`} onClick={() => setStudentTab('submissions')}>📤 My Tasks & Submissions</button>
        <button className={`filter-btn ${studentTab === 'results' ? 'active' : ''}`} onClick={() => setStudentTab('results')}>📈 My Results & Gradebook</button>
        <button className={`filter-btn ${studentTab === 'attendance' ? 'active' : ''}`} onClick={() => setStudentTab('attendance')}>📅 My Attendance Record</button>
      </div>

      {/* TAB 1: PROFILE */}
      {studentTab === 'profile' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            👤 Personal Student Profile & Enrollment Details
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'white', marginTop: '0.2rem' }}>{activeStudent.name}</div>
            </div>
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Roll Number / ID</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-light)', marginTop: '0.2rem' }}>{activeStudent.rollNo}</div>
            </div>
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Department</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-light)', marginTop: '0.2rem' }}>{activeStudent.department}</div>
            </div>
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Official Email</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginTop: '0.2rem' }}>{activeStudent.email}</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: STUDY SPACES */}
      {studentTab === 'study' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📚 My Course Resources (Lecture PPTs, PDF Notes, Textbook & Lab Guides)
          </h3>
          <div className="resource-grid">
            {data.lectures.map((lec) => (
              <div key={`lec-${lec.id}`} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">📊</div>
                  <div>
                    <h3 className="resource-name">{lec.title}</h3>
                    <span className="badge badge-pptx">PPTX Presentation</span>
                  </div>
                </div>
                <a href={lec.path} download className="download-btn"><Download size={14} /> Download Presentation</a>
              </div>
            ))}
            {data.notes.map((note) => (
              <div key={`note-${note.id}`} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">📝</div>
                  <div>
                    <h3 className="resource-name">{note.title}</h3>
                    <span className="badge badge-pdf">PDF Notes</span>
                  </div>
                </div>
                <a href={note.path} download className="download-btn"><Download size={14} /> Download Study Guide</a>
              </div>
            ))}
            {data.courseInfoDocs.map((doc) => (
              <div key={`doc-${doc.id}`} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">📚</div>
                  <div>
                    <h3 className="resource-name">{doc.title}</h3>
                    <span className="badge badge-pdf">{doc.cat.toUpperCase()}</span>
                  </div>
                </div>
                <a href={doc.path} download className="download-btn"><Download size={14} /> Download Book / Outline</a>
              </div>
            ))}
            {data.labs.map((lab) => (
              <div key={`lab-${lab.id}`} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">🧪</div>
                  <div>
                    <h3 className="resource-name">{lab.title}</h3>
                    <span className="badge badge-pdf">LAB MANUAL</span>
                  </div>
                </div>
                <a href={lab.path} download className="download-btn"><Download size={14} /> Download Lab Exercise</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SUBMISSIONS */}
      {studentTab === 'submissions' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📤 My Assignments & Term Project Submissions
          </h3>
          <div className="assignments-grid">
            {data.assignments.map((ass) => {
              const sub = studentSubmissions[ass.id];

              return (
                <div key={ass.id} className="glass-card assignment-card">
                  <div className="assignment-header">
                    <span className="badge" style={{ background: ass.type === 'project' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(99, 102, 241, 0.2)', color: ass.type === 'project' ? '#fde68a' : '#c7d2fe' }}>
                      {ass.type.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--warning)' }}>Due: {ass.dueDate}</span>
                  </div>

                  <h3 className="assignment-title">{ass.title}</h3>
                  <p className="assignment-description">{ass.description}</p>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {sub ? (
                      <div>
                        <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>
                          ✓ {sub.status} ({sub.grade})
                        </span>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>File: {sub.fileName}</div>
                      </div>
                    ) : (
                      <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>
                        Pending Upload
                      </span>
                    )}

                    <button className="btn btn-primary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }} onClick={() => setSelectedTaskForSubmission(ass)}>
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
        <div className="glass-card">
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
                {activeStudent.marks ? activeStudent.marks.totalMarks : 0} / 100 ({activeStudent.marks ? activeStudent.marks.grade : 'N/A'})
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>GPA: {activeStudent.marks ? activeStudent.marks.gpa : '0.00'}</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div className="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quizzes Total (Out of 20)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-light)', margin: '0.2rem 0' }}>
                {activeStudent.marks ? (activeStudent.marks.quiz1 || 0) + (activeStudent.marks.quiz2 || 0) : 0} / 20
              </div>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Midterm Exam (Out of 30)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-light)', margin: '0.2rem 0' }}>
                {activeStudent.marks ? activeStudent.marks.midExam : 0} / 30
              </div>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Practical Lab Exam (Out of 20)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--success)', margin: '0.2rem 0' }}>
                {activeStudent.marks ? activeStudent.marks.labExam : 0} / 20
              </div>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Project Marks (Out of 20)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--warning)', margin: '0.2rem 0' }}>
                {activeStudent.marks ? activeStudent.marks.projectMarks : 0} / 20
              </div>
            </div>

            <div className="glass-card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Final Exam (Out of 40)</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white', margin: '0.2rem 0' }}>
                {activeStudent.marks ? activeStudent.marks.finalExam : 0} / 40
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: ATTENDANCE LOG */}
      {studentTab === 'attendance' && (
        <div className="glass-card">
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
                {activeStudent.attendance && activeStudent.attendance.length > 0 ? (
                  activeStudent.attendance.map((att, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: 'white' }}>{att.date}</td>
                      <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)' }}>{att.topic}</td>
                      <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                        {att.status === 'Present' ? (
                          <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>✓ Present</span>
                        ) : (
                          <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5' }}>✗ Absent</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      No attendance logged yet.
                    </td>
                  </tr>
                )}
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
