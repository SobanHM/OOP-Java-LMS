import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { CodeBlock } from './CodeBlock';
import { ChevronDown, Download, CheckSquare, Square } from 'lucide-react';

export const Curriculum = () => {
  const { data, department, completedWeeks, toggleWeekComplete } = useLMS();
  const [expandedWeeks, setExpandedWeeks] = useState({ 1: true });

  const safeWeeks = data && Array.isArray(data.weeks) ? data.weeks : [];
  const safeCompletedWeeks = Array.isArray(completedWeeks) ? completedWeeks : [];

  const filteredWeeks = safeWeeks.filter(
    (w) => !department || department === 'all' || w.department === 'all' || w.department === department
  );

  const toggleExpand = (id) => {
    setExpandedWeeks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section" id="weeks">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">📚 16-Week Course Curriculum</h2>
          <p className="section-subtitle">
            Comprehensive OOP Java syllabus designed for AI & SWE students
          </p>
        </div>

        <div className="weeks-container">
          {filteredWeeks.map((week) => {
            const isExpanded = !!expandedWeeks[week.id];
            const isCompleted = safeCompletedWeeks.includes(week.id);

            return (
              <div key={week.id} id={`week-${week.id}`} className="glass-card week-item">
                <div className="week-header" onClick={() => toggleExpand(week.id)}>
                  <div className="week-header-left">
                    <span className="week-number-badge">Week {week.weekNum}</span>
                    <h3 className="week-title">{week.title}</h3>
                  </div>

                  <div className="week-header-right">
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (toggleWeekComplete) toggleWeekComplete(week.id);
                      }}
                      title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
                    >
                      {isCompleted ? (
                        <CheckSquare size={22} style={{ color: 'var(--success)' }} />
                      ) : (
                        <Square size={22} />
                      )}
                    </button>

                    <ChevronDown
                      size={20}
                      className={`chevron-icon ${isExpanded ? 'expanded' : ''}`}
                    />
                  </div>
                </div>

                {isExpanded && (
                  <div className="week-content">
                    <h4 className="week-section-title">🎯 Learning Objectives</h4>
                    <ul className="objectives-list">
                      {week.objectives && week.objectives.map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                      ))}
                    </ul>

                    <h4 className="week-section-title">📖 Core Topics Covered</h4>
                    <ul className="topics-list">
                      {week.topics && week.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>

                    {week.resources && week.resources.length > 0 && (
                      <>
                        <h4 className="week-section-title">📥 Lecture Slides & Notes</h4>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                          {week.resources.map((res, idx) => (
                            <a
                              key={idx}
                              href={res.path}
                              download
                              className="download-btn"
                              style={{ margin: 0, padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
                            >
                              <Download size={14} />
                              <span>{res.name}</span>
                            </a>
                          ))}
                        </div>
                      </>
                    )}

                    {week.codeExamples && week.codeExamples.length > 0 && (
                      <>
                        <h4 className="week-section-title">💻 Code Examples</h4>
                        {week.codeExamples.map((ex, idx) => (
                          <CodeBlock
                            key={idx}
                            title={ex.title}
                            code={ex.code}
                            description={ex.description}
                          />
                        ))}
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
