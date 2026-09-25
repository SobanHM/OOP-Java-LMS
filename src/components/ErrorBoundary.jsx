import React from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LMS Portal Error Caught:', error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: '#0a0e1a', color: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
          <div style={{ width: '100%', maxWidth: '520px', background: '#111827', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', margin: '0 auto 1.25rem auto' }}>
              <AlertTriangle size={32} />
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem' }}>
              Portal Display Recovery
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              The portal detected saved local browser data compatibility issue. Clicking below will reset local cached state and restore full visibility.
            </p>

            <button
              onClick={this.handleReset}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: 'white', fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}
            >
              <RotateCcw size={18} /> Reset Cache & Reload Portal
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
