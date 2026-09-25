import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { SubmissionModal } from './SubmissionModal';
import { CheckCircle2, Calendar, Send, CheckSquare, Clock } from 'lucide-react';

export const Assignments = () => {
  const { data, department, submissions } = useLMS();
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const filteredAssignments = data.assignments.filter(
    (a) => department === 'all' || a.department === 'all' || a.department === department
  );

  return (
    <section class="section" id="assignments">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📝 Practical Assignments & Task Submissions</h2>
          <p class="section-subtitle">
            Submit your Java code solutions online and track submission grades
          </p>
        </div>

        <div class="assignments-grid">
          {filteredAssignments.map((assignment) => {
            const submission = submissions[assignment.id];

            return (
              <div key={assignment.id} class="glass-card assignment-card">
                <div class="assignment-header">
                  <span class="week-number-badge" style={{ minWidth: 'auto' }}>
                    Week {assignment.weekNum}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {submission ? (
                      <span class="badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', border: '1px solid rgba(16, 185, 129, 0.4)' }}>
                        <CheckSquare size={12} style={{ display: 'inline', marginRight: '3px' }} />
                        {submission.status} ({submission.grade})
                      </span>
                    ) : (
                      <span class="assignment-due">
                        <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                        Due: {assignment.dueDate}
                      </span>
                    )}
                  </div>
                </div>

                <h3 class="assignment-title">{assignment.title}</h3>
                <p class="assignment-description">{assignment.description}</p>

                <h4 class="assignment-tasks-title">Key Task Requirements:</h4>
                <ul class="assignment-tasks-list">
                  {assignment.tasks.map((task, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} class="text-accent-light" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                {/* Submission Action Button */}
                <div style={{ marginTop: '1.25rem', pt: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {submission ? (
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Submitted file: <code style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-code)' }}>{submission.fileName}</code>
                    </div>
                  ) : (
                    <div style={{ fontSize: '0.85rem', color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={14} /> Pending Submission
                    </div>
                  )}

                  <button
                    class="btn btn-primary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    onClick={() => setSelectedAssignment(assignment)}
                  >
                    <Send size={14} />
                    {submission ? 'Resubmit Code' : 'Submit Task Code'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Submission Modal Dialog */}
      {selectedAssignment && (
        <SubmissionModal
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
        />
      )}
    </section>
  );
};
