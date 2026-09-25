import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { Send } from 'lucide-react';

export const AdminPortal = () => {
  const {
    data,
    students,
    enrollStudentAdmin,
    markAttendanceAdmin,
    updateMarksAdmin,
    addAssignmentAdmin,
    assignments
  } = useLMS();

  const [spaceTab, setSpaceTab] = useState('enroll');

  // Enrollment Form State
  const [newStudent, setNewStudent] = useState({ name: '', rollNo: '', department: 'swe', email: '' });

  // Assignment Creation State
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', weekNum: 1, dueDate: '', type: 'assignment' });

  // Attendance Marker State
  const [attDate, setAttDate] = useState(new Date().toISOString().split('T')[0]);
  const [attTopic, setAttTopic] = useState('Java OOP Hands-on Practical Lab');
  const [attMap, setAttMap] = useState({ '2026-CS-042': 'Present', '2026-AI-014': 'Present', '2026-SWE-088': 'Present' });

  // Marks Entry State
  const [selectedStudentForMarks, setSelectedStudentForMarks] = useState('2026-CS-042');
  const [marksForm, setMarksForm] = useState({ quiz1: 10, quiz2: 9, midExam: 27, labExam: 18, projectMarks: 19, finalExam: 36 });

  const safeStudents = Array.isArray(students) && students.length > 0 ? students : data.students;
  const safeAssignments = Array.isArray(assignments) && assignments.length > 0 ? assignments : data.assignments;

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.rollNo) return;
    enrollStudentAdmin(newStudent);
    setNewStudent({ name: '', rollNo: '', department: 'swe', email: '' });
    alert(`Student ${newStudent.name} successfully enrolled!`);
  };

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    if (!newAssignment.title) return;
    addAssignmentAdmin(newAssignment);
    setNewAssignment({ title: '', description: '', weekNum: 1, dueDate: '', type: 'assignment' });
    alert('Assignment / Project task successfully created and published!');
  };

  const handleAttendanceSubmit = (e) => {
    e.preventDefault();
    markAttendanceAdmin(attDate, attTopic, attMap);
    alert(`Attendance marked for ${safeStudents.length} students on ${attDate}!`);
  };

  const handleMarksSubmit = (e) => {
    e.preventDefault();
    updateMarksAdmin(selectedStudentForMarks, marksForm);
    alert('Student exam & project marks updated successfully!');
  };

  return (
    <div style={{ paddingTop: '100px' }} className="container">
      {/* Admin Header Banner */}
      <div className="glass-card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)', border: '1px solid var(--accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="badge" style={{ background: '#0891b2', color: 'white', padding: '0.35rem 0.75rem', marginBottom: '0.4rem' }}>
              👑 Teacher & Admin Management Console
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>
              Instructor Control Panel — Soban Hussain
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              The University of Larkano — CS-201 Object-Oriented Programming (Java)
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '0.75rem 1.25rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-light)' }}>
              {safeStudents.length} Enrolled Students
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI & SWE Departments</div>
          </div>
        </div>
      </div>

      {/* Feature Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <button className={`filter-btn ${spaceTab === 'enroll' ? 'active' : ''}`} onClick={() => setSpaceTab('enroll')}>👥 Enroll Student</button>
        <button className={`filter-btn ${spaceTab === 'lecture' ? 'active' : ''}`} onClick={() => setSpaceTab('lecture')}>📊 Lecture Slides (PPT)</button>
        <button className={`filter-btn ${spaceTab === 'notes' ? 'active' : ''}`} onClick={() => setSpaceTab('notes')}>📝 Study Notes (PDF)</button>
        <button className={`filter-btn ${spaceTab === 'course-info' ? 'active' : ''}`} onClick={() => setSpaceTab('course-info')}>📚 Course-Info (Book & Outline)</button>
        <button className={`filter-btn ${spaceTab === 'lab' ? 'active' : ''}`} onClick={() => setSpaceTab('lab')}>🧪 Lab Manuals</button>
        <button className={`filter-btn ${spaceTab === 'assignment' ? 'active' : ''}`} onClick={() => setSpaceTab('assignment')}>📝 Assignments & Projects</button>
        <button className={`filter-btn ${spaceTab === 'results' ? 'active' : ''}`} onClick={() => setSpaceTab('results')}>📈 Marks & Result Entry</button>
        <button className={`filter-btn ${spaceTab === 'attendance' ? 'active' : ''}`} onClick={() => setSpaceTab('attendance')}>📅 Mark Attendance</button>
      </div>

      {/* SPACE 1: ENROLL STUDENT */}
      {spaceTab === 'enroll' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              👤 Register & Enroll New Student
            </h3>
            <form onSubmit={handleEnrollSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Student Full Name:</label>
                <input type="text" className="search-input" style={{ padding: '0.65rem 1rem' }} placeholder="e.g. Muhammad Ali" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} required />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Roll Number / Student ID:</label>
                <input type="text" className="search-input" style={{ padding: '0.65rem 1rem' }} placeholder="e.g. 2026-SWE-102" value={newStudent.rollNo} onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })} required />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Department Program Track:</label>
                <select className="search-input" style={{ padding: '0.65rem 1rem', background: '#0b1329' }} value={newStudent.department} onChange={(e) => setNewStudent({ ...newStudent, department: e.target.value })}>
                  <option value="swe">Software Engineering (SWE)</option>
                  <option value="ai">Artificial Intelligence (AI)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enroll Student into CS-201</button>
            </form>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              📋 Currently Enrolled Students ({safeStudents.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '380px', overflowY: 'auto' }}>
              {safeStudents.map((st) => (
                <div key={st.id} className="glass-card" style={{ padding: '0.85rem 1rem', background: 'rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white' }}>{st.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{st.rollNo} • {st.department}</div>
                  </div>
                  <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>Enrolled</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SPACE 2: LECTURE SLIDES */}
      {spaceTab === 'lecture' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📊 Lecture Presentation Slides Space (PPT / PPTX)
          </h3>
          <div className="resource-grid">
            {data.lectures.map((lec) => (
              <div key={lec.id} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">📊</div>
                  <div>
                    <h3 className="resource-name">{lec.title}</h3>
                    <span className="badge badge-pptx">PPTX • {lec.size}</span>
                  </div>
                </div>
                <a href={lec.path} download className="download-btn"><Send size={14} /> Download Presentation</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SPACE 3: NOTES */}
      {spaceTab === 'notes' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📝 Study Guide Notes Space (PDF)
          </h3>
          <div className="resource-grid">
            {data.notes.map((note) => (
              <div key={note.id} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">📝</div>
                  <div>
                    <h3 className="resource-name">{note.title}</h3>
                    <span className="badge badge-pdf">PDF • {note.size}</span>
                  </div>
                </div>
                <a href={note.path} download className="download-btn"><Send size={14} /> Download Notes</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SPACE 4: COURSE-INFO (BOOK & OUTLINE) */}
      {spaceTab === 'course-info' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📚 Course-Info Space (Textbook & Official Outlines)
          </h3>
          <div className="resource-grid">
            {data.courseInfoDocs.map((doc) => (
              <div key={doc.id} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">{doc.cat === 'book' ? '📚' : '📋'}</div>
                  <div>
                    <h3 className="resource-name">{doc.title}</h3>
                    <span className={`badge ${doc.type === 'pdf' ? 'badge-pdf' : 'badge-docx'}`}>{doc.type.toUpperCase()} • {doc.size}</span>
                  </div>
                </div>
                <a href={doc.path} download className="download-btn"><Send size={14} /> Download Document</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SPACE 5: LAB MANUALS */}
      {spaceTab === 'lab' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            🧪 Lab-Manual Space (Practical Worksheets)
          </h3>
          <div className="resource-grid">
            {data.labs.map((lab) => (
              <div key={lab.id} className="glass-card resource-card">
                <div className="resource-header">
                  <div className="resource-icon-box">🧪</div>
                  <div>
                    <h3 className="resource-name">{lab.title}</h3>
                    <span className="badge badge-pdf">PDF Manual • {lab.size}</span>
                  </div>
                </div>
                <a href={lab.path} download className="download-btn"><Send size={14} /> Download Lab Guide</a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SPACE 6: ASSIGNMENT & PROJECT CREATION */}
      {spaceTab === 'assignment' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              📝 Create & Publish New Assignment or Project
            </h3>
            <form onSubmit={handleAssignmentSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Task Type:</label>
                <select className="search-input" style={{ padding: '0.65rem 1rem', background: '#0b1329' }} value={newAssignment.type} onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}>
                  <option value="assignment">Weekly Coding Assignment</option>
                  <option value="project">Semester Capstone Project</option>
                </select>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Title:</label>
                <input type="text" className="search-input" style={{ padding: '0.65rem 1rem' }} placeholder="e.g. BankAccount Inheritance Hierarchy" value={newAssignment.title} onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })} required />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Due Date:</label>
                <input type="date" className="search-input" style={{ padding: '0.65rem 1rem' }} value={newAssignment.dueDate} onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })} required />
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Description & Details:</label>
                <textarea rows={3} style={{ width: '100%', background: '#070b14', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.85rem', color: 'white' }} value={newAssignment.description} onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })} required />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Publish Task to Students</button>
            </form>
          </div>

          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
              📋 Published Tasks & Projects ({safeAssignments.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {safeAssignments.map((ass) => (
                <div key={ass.id} className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="badge" style={{ background: ass.type === 'project' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(99, 102, 241, 0.2)', color: ass.type === 'project' ? '#fde68a' : '#c7d2fe' }}>
                      {ass.type.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--warning)' }}>Due: {ass.dueDate}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', marginTop: '0.4rem' }}>{ass.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{ass.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SPACE 7: RESULTS & MARKS MANAGEMENT */}
      {spaceTab === 'results' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📈 Result & Marks Entry Space (Quizzes, Midterm, Lab, Final Exam, Project, Total Out Of 100)
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Select Student to Update Marks:</label>
            <select
              className="search-input"
              style={{ padding: '0.75rem 1rem', background: '#0b1329', maxWidth: '400px' }}
              value={selectedStudentForMarks}
              onChange={(e) => setSelectedStudentForMarks(e.target.value)}
            >
              {safeStudents.map((st) => (
                <option key={st.id} value={st.id}>{st.name} ({st.rollNo})</option>
              ))}
            </select>
          </div>

          <form onSubmit={handleMarksSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quiz 1 (Out of 10):</label>
                <input type="number" max={10} className="search-input" style={{ padding: '0.6rem 1rem' }} value={marksForm.quiz1} onChange={(e) => setMarksForm({ ...marksForm, quiz1: Number(e.target.value) })} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Quiz 2 (Out of 10):</label>
                <input type="number" max={10} className="search-input" style={{ padding: '0.6rem 1rem' }} value={marksForm.quiz2} onChange={(e) => setMarksForm({ ...marksForm, quiz2: Number(e.target.value) })} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Midterm Exam (Out of 30):</label>
                <input type="number" max={30} className="search-input" style={{ padding: '0.6rem 1rem' }} value={marksForm.midExam} onChange={(e) => setMarksForm({ ...marksForm, midExam: Number(e.target.value) })} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lab Exam (Out of 20):</label>
                <input type="number" max={20} className="search-input" style={{ padding: '0.6rem 1rem' }} value={marksForm.labExam} onChange={(e) => setMarksForm({ ...marksForm, labExam: Number(e.target.value) })} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Project Marks (Out of 20):</label>
                <input type="number" max={20} className="search-input" style={{ padding: '0.6rem 1rem' }} value={marksForm.projectMarks} onChange={(e) => setMarksForm({ ...marksForm, projectMarks: Number(e.target.value) })} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Final Exam (Out of 40):</label>
                <input type="number" max={40} className="search-input" style={{ padding: '0.6rem 1rem' }} value={marksForm.finalExam} onChange={(e) => setMarksForm({ ...marksForm, finalExam: Number(e.target.value) })} />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Update & Publish Student Grade</button>
          </form>
        </div>
      )}

      {/* SPACE 8: ATTENDANCE MARKER */}
      {spaceTab === 'attendance' && (
        <div className="glass-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            📅 Mark Student Attendance Space
          </h3>

          <form onSubmit={handleAttendanceSubmit}>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Class Date:</label>
                <input type="date" className="search-input" style={{ padding: '0.65rem 1rem' }} value={attDate} onChange={(e) => setAttDate(e.target.value)} required />
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Lecture / Lab Topic Name:</label>
                <input type="text" className="search-input" style={{ padding: '0.65rem 1rem' }} value={attTopic} onChange={(e) => setAttTopic(e.target.value)} required />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'white', marginBottom: '0.75rem' }}>Mark Students:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {safeStudents.map((st) => (
                  <div key={st.id} className="glass-card" style={{ padding: '0.85rem 1.25rem', background: 'rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontWeight: 700, color: 'white' }}>{st.name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.75rem' }}>({st.rollNo})</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <label style={{ color: '#6ee7b7', cursor: 'pointer', fontWeight: 600 }}>
                        <input type="radio" name={`att-${st.id}`} value="Present" checked={(attMap[st.id] || 'Present') === 'Present'} onChange={() => setAttMap({ ...attMap, [st.id]: 'Present' })} /> Present
                      </label>
                      <label style={{ color: '#fca5a5', cursor: 'pointer', fontWeight: 600 }}>
                        <input type="radio" name={`att-${st.id}`} value="Absent" checked={attMap[st.id] === 'Absent'} onChange={() => setAttMap({ ...attMap, [st.id]: 'Absent' })} /> Absent
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Save & Publish Attendance Record</button>
          </form>
        </div>
      )}
    </div>
  );
};
