import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { Upload, Code, FileCode, CheckCircle, X, Send } from 'lucide-react';

export const SubmissionModal = ({ assignment, onClose }) => {
  const { submitAssignment } = useLMS();

  const [fileName, setFileName] = useState(`${assignment.title.replace(/[^a-zA-Z0-9]/g, '_')}.java`);
  const [codeContent, setCodeContent] = useState(`public class Solution {\n    public static void main(String[] args) {\n        // Your Java assignment code here\n        System.out.println("Assignment Solution for ${assignment.title}");\n    }\n}`);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAssignment(assignment.id, {
      fileName,
      code: codeContent,
      notes
    });
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1600);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', zIndex: 2200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div class="glass-card" style={{ width: '100%', maxWidth: '640px', background: '#0b1329', border: '1px solid var(--primary)', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <span class="week-number-badge" style={{ fontSize: '0.75rem' }}>Week {assignment.weekNum} Submission</span>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', marginTop: '0.3rem' }}>
              {assignment.title}
            </h3>
          </div>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                📄 Java Source File Name:
              </label>
              <input
                type="text"
                class="search-input"
                style={{ padding: '0.65rem 1rem' }}
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                💻 Paste Java Solution Code:
              </label>
              <textarea
                rows={7}
                style={{ width: '100%', background: '#070b14', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '1rem', color: '#e2e8f0', fontFamily: 'var(--font-code)', fontSize: '0.88rem', outline: 'none' }}
                value={codeContent}
                onChange={(e) => setCodeContent(e.target.value)}
                required
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                💬 Additional Comments / Lab Notes (Optional):
              </label>
              <input
                type="text"
                class="search-input"
                style={{ padding: '0.65rem 1rem' }}
                placeholder="e.g. Executed successfully on JDK 17 with 0 errors"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button type="button" class="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Send size={16} /> Submit Task Code
              </button>
            </div>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle size={54} class="text-success" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>Task Submitted Successfully!</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              Your Java code solution for <strong>{assignment.title}</strong> has been received and logged in your student portal.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
