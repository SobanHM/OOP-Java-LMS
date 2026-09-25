import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { Download, FileText, Book, Presentation, ClipboardList } from 'lucide-react';

export const ResourceCenter = () => {
  const { data } = useLMS();
  const [filter, setFilter] = useState('all'); // 'all', 'book', 'lecture', 'note', 'outline'

  const categories = [
    { id: 'all', label: 'All Materials' },
    { id: 'book', label: '📚 Textbooks' },
    { id: 'lecture', label: '📊 Lecture Slides' },
    { id: 'note', label: '📝 Lecture Notes' },
    { id: 'outline', label: '📋 Outlines' }
  ];

  const filteredResources =
    filter === 'all'
      ? data.resources
      : data.resources.filter((r) => r.category === filter);

  const getBadgeClass = (type) => {
    switch (type) {
      case 'pdf': return 'badge-pdf';
      case 'pptx': return 'badge-pptx';
      case 'docx': return 'badge-docx';
      default: return 'badge-pdf';
    }
  };

  return (
    <section class="section" id="resources">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">📥 Resource Center</h2>
          <p class="section-subtitle">
            Download slides, notes, course outlines, and textbook materials directly
          </p>
        </div>

        {/* Resource Category Filters */}
        <div class="resource-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              class={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        <div class="resource-grid">
          {filteredResources.map((res) => (
            <div key={res.id} class="glass-card resource-card">
              <div>
                <div class="resource-header">
                  <div class="resource-icon-box">{res.icon}</div>
                  <div>
                    <h3 class="resource-name">{res.name}</h3>
                    <div class="resource-meta">
                      <span class={`badge ${getBadgeClass(res.type)}`}>
                        {res.type.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {res.size}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <a href={res.path} download class="download-btn">
                <Download size={16} />
                <span>Download File</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
