import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { Search, Book, FileText, Code, CheckCircle } from 'lucide-react';

export const SearchBar = () => {
  const { data, searchQuery, setSearchQuery } = useLMS();
  const [isOpen, setIsOpen] = useState(false);

  const getFilteredResults = () => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();

    const results = [];

    // Search Weeks
    data.weeks.forEach((week) => {
      if (
        week.title.toLowerCase().includes(query) ||
        week.topics.some((t) => t.toLowerCase().includes(query)) ||
        week.objectives.some((o) => o.toLowerCase().includes(query))
      ) {
        results.push({
          type: 'Week',
          icon: <Book size={16} class="text-primary-light" />,
          title: `Week ${week.weekNum}: ${week.title}`,
          meta: `Topics: ${week.topics.slice(0, 2).join(', ')}`,
          targetId: `week-${week.id}`
        });
      }
    });

    // Search Resources
    data.resources.forEach((res) => {
      if (res.name.toLowerCase().includes(query)) {
        results.push({
          type: 'Resource',
          icon: <FileText size={16} class="text-accent-light" />,
          title: res.name,
          meta: `Category: ${res.category.toUpperCase()} (${res.size})`,
          targetId: 'resources'
        });
      }
    });

    // Search Assignments
    data.assignments.forEach((ass) => {
      if (ass.title.toLowerCase().includes(query) || ass.description.toLowerCase().includes(query)) {
        results.push({
          type: 'Assignment',
          icon: <CheckCircle size={16} class="text-warning" />,
          title: ass.title,
          meta: `Due: ${ass.dueDate}`,
          targetId: 'assignments'
        });
      }
    });

    return results.slice(0, 8); // Limit to top 8
  };

  const results = getFilteredResults();

  const handleSelectResult = (targetId) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="search-section container">
      <div class="search-container">
        <div class="search-input-wrapper">
          <Search class="search-icon" size={20} />
          <input
            type="text"
            class="search-input"
            placeholder="Search course topics, slides, Java snippets, assignments..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && searchQuery.trim() && (
          <div class="search-results">
            {results.length > 0 ? (
              results.map((res, index) => (
                <div
                  key={index}
                  class="search-result-item"
                  onClick={() => handleSelectResult(res.targetId)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {res.icon}
                    <span class="search-result-title">{res.title}</span>
                  </div>
                  <span class="search-result-meta">{res.meta}</span>
                </div>
              ))
            ) : (
              <div class="search-result-item" style={{ color: 'var(--text-muted)' }}>
                No matching topics or resources found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
