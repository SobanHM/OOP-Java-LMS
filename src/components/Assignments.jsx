import React from 'react';
import { useLMS } from '../context/LMSContext';
import { CheckCircle2, Calendar, FileCode } from 'lucide-react';

export const Assignments = () => {
  const { data, department } = useLMS();

  const filteredAssignments = data.assignments.filter(
    (a) => department === 'all' || a.department === 'all' || a.department === department
  );

  return (
    <section class="section" id="assignments">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📝 Practical Assignments & Lab Tasks</h2>
          <p class="section-subtitle">
            Hands-on coding problems to master Java OOP fundamentals and software design
          </p>
        </div>

        <div class="assignments-grid">
          {filteredAssignments.map((assignment) => (
            <div key={assignment.id} class="glass-card assignment-card">
              <div class="assignment-header">
                <span class="week-number-badge" style={{ minWidth: 'auto' }}>
                  Week {assignment.weekNum}
                </span>
                <span class="assignment-due">
                  <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  Due: {assignment.dueDate}
                </span>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
