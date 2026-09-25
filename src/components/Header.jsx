import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { GraduationCap, Menu, X, BookOpen } from 'lucide-react';

export const Header = () => {
  const { activeSection, setActiveSection } = useLMS();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'weeks', label: 'Weeks' },
    { id: 'resources', label: 'Resources' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'quizzes', label: 'Quizzes' },
    { id: 'progress-section', label: 'Progress' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header class="lms-header" id="header">
      <div class="header-content container">
        <a href="#home" class="header-brand" onClick={() => handleNavClick('home')}>
          <div class="brand-icon-wrapper">
            <GraduationCap size={24} />
          </div>
          <div class="brand-text">
            <span class="brand-university">The University of Larkano</span>
            <span class="brand-course">OOP — Java</span>
          </div>
        </a>

        <nav class="lms-nav">
          <div class={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                class={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            class="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};
