window.LMSApp = {
  currentDepartment: 'all',
  currentResourceCategory: 'all',

  init() {
    if (!window.LMS_DATA) {
        console.error('LMS_DATA not found. Please ensure data.js is loaded correctly.');
        return;
    }

    this.renderAll();
    this.setupNavigation();
    this.setupDepartmentTabs();
    this.setupSearch();
    this.setupScrollAnimations();
    this.setupMobileMenu();
  },

  renderAll() {
    LMSComponents.renderHeroStats(document.getElementById('hero-stats'));
    LMSComponents.renderWeeks(document.getElementById('weeks-container'), this.currentDepartment);
    LMSComponents.renderResourceFilter(document.getElementById('resource-filter'));
    LMSComponents.renderResources(document.getElementById('resource-grid'), this.currentResourceCategory);
    LMSComponents.renderAssignments(document.getElementById('assignments-grid'), this.currentDepartment);
    LMSComponents.renderAnnouncements(document.getElementById('announcements-timeline'), this.currentDepartment);
    LMSComponents.renderQuizSelector(document.getElementById('quiz-selector'));
    LMSProgress.renderDashboard(document.getElementById('progress-dashboard'));
  },

  setupNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navLinks = document.getElementById('nav-links');
            if (navLinks.classList.contains('mobile-open')) {
                navLinks.classList.remove('mobile-open');
            }
        });
    });

    // Intersection Observer for highlighting nav active state
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: `-${header.offsetHeight}px 0px 0px 0px`,
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Header scroll opacity
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
  },

  setupDepartmentTabs() {
    const tabs = document.querySelectorAll('.dept-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            const dept = e.target.dataset.dept;
            this.switchDepartment(dept);
        });
    });
  },

  setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            searchResults.classList.add('hidden');
            searchResults.innerHTML = '';
            return;
        }

        const data = window.LMS_DATA;
        let resultsHtml = '';

        // Search weeks
        data.weeks.forEach(w => {
            if (w.title.toLowerCase().includes(query) || (w.topics && w.topics.some(t => t.toLowerCase().includes(query)))) {
                resultsHtml += `<div class="search-result-item" data-target="weeks">Week ${w.weekNum}: ${w.title}</div>`;
            }
        });

        // Search resources
        data.resources.forEach(r => {
            if (r.name.toLowerCase().includes(query)) {
                resultsHtml += `<div class="search-result-item" data-target="resources">Resource: ${r.name}</div>`;
            }
        });

        // Search announcements
        data.announcements.forEach(a => {
            if (a.title.toLowerCase().includes(query)) {
                resultsHtml += `<div class="search-result-item" data-target="announcements">Announcement: ${a.title}</div>`;
            }
        });

        if (resultsHtml) {
            searchResults.innerHTML = resultsHtml;
            searchResults.classList.remove('hidden');

            const items = searchResults.querySelectorAll('.search-result-item');
            items.forEach(item => {
                item.addEventListener('click', () => {
                    const targetId = item.dataset.target;
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                    searchResults.classList.add('hidden');
                    searchInput.value = '';
                });
            });
        } else {
            searchResults.innerHTML = '<div style="padding: 1rem;">No results found.</div>';
            searchResults.classList.remove('hidden');
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('#search-container')) {
            searchResults.classList.add('hidden');
        }
    });
  },

  setupScrollAnimations() {
    const animatedEls = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    animatedEls.forEach(el => observer.observe(el));
  },

  setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.getElementById('nav-links');

    if (btn && links) {
        btn.addEventListener('click', () => {
            links.classList.toggle('mobile-open');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.lms-nav')) {
                links.classList.remove('mobile-open');
            }
        });
    }
  },

  switchDepartment(dept) {
    this.currentDepartment = dept;
    LMSComponents.renderWeeks(document.getElementById('weeks-container'), dept);
    LMSComponents.renderAssignments(document.getElementById('assignments-grid'), dept);
    LMSComponents.renderAnnouncements(document.getElementById('announcements-timeline'), dept);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.LMSApp.init();
});
