window.LMSComponents = {
  highlightJava(code) {
    if (!code) return '';
    let escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    // Simple Java syntax highlighter
    const keywords = ["public", "private", "protected", "class", "interface", "abstract", "extends", "implements", "static", "final", "void", "return", "new", "this", "super", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "try", "catch", "finally", "throw", "throws", "import", "package", "int", "double", "float", "char", "boolean", "String", "long", "short", "byte", "null", "true", "false"];
    
    // Process strings and comments first to avoid matching keywords inside them
    escaped = escaped.replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>');
    escaped = escaped.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
    escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
    
    // Keywords
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    // We must ensure we don't replace inside spans. For simplicity in this basic highlighter, 
    // we'll split by spans and only replace outside.
    const parts = escaped.split(/(<span class="[^"]+">[\s\S]*?<\/span>)/g);
    for (let i = 0; i < parts.length; i++) {
        if (!parts[i].startsWith('<span')) {
            parts[i] = parts[i].replace(keywordRegex, '<span class="keyword">$1</span>');
            parts[i] = parts[i].replace(/\b(\d+(\.\d+)?)\b/g, '<span class="number">$1</span>');
            parts[i] = parts[i].replace(/(@\w+)/g, '<span class="annotation">$1</span>');
        }
    }
    return parts.join('');
  },

  renderHeroStats(container) {
    if (!container || !window.LMS_DATA) return;
    const data = window.LMS_DATA;
    const totalWeeks = data.weeks?.length || 0;
    const totalResources = data.resources?.length || 0;
    const totalQuizzes = data.quizzes?.length || 0;
    const credits = data.courseInfo?.credits || 0;
    
    container.innerHTML = `
      <div class="stat-item"><span class="stat-number">${totalWeeks}</span><span class="stat-label">Weeks</span></div>
      <div class="stat-item"><span class="stat-number">${totalResources}</span><span class="stat-label">Resources</span></div>
      <div class="stat-item"><span class="stat-number">${totalQuizzes}</span><span class="stat-label">Quizzes</span></div>
      <div class="stat-item"><span class="stat-number">${credits}</span><span class="stat-label">Credits</span></div>
    `;
  },

  renderWeeks(container, department = 'all') {
    if (!container || !window.LMS_DATA) return;
    const weeks = window.LMS_DATA.weeks.filter(w => department === 'all' || w.department === 'all' || w.department === department);
    
    if (weeks.length === 0) {
        container.innerHTML = '<p>No course content available.</p>';
        return;
    }

    let html = '';
    weeks.forEach(week => {
        const isComplete = window.LMSProgress?.isWeekComplete(week.id) || false;
        
        let objectivesHtml = '';
        if (week.objectives && week.objectives.length) {
            objectivesHtml = `
                <div class="week-objectives">
                    <h4>Objectives</h4>
                    <ul>${week.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul>
                </div>
            `;
        }

        let resourcesHtml = '';
        if (week.resources && week.resources.length) {
            resourcesHtml = `
                <div class="week-resources">
                    <h4>Resources</h4>
                    <ul>${week.resources.map(res => `<li><a href="${res.path}" download class="badge badge-${res.type}">${res.name}</a></li>`).join('')}</ul>
                </div>
            `;
        }

        let codeHtml = '';
        if (week.codeExamples && week.codeExamples.length) {
            codeHtml = `
                <div class="week-code-examples">
                    <h4>Code Examples</h4>
                    ${week.codeExamples.map(codeEx => this.renderCodeBlock(codeEx)).join('')}
                </div>
            `;
        }

        html += `
            <div class="week-item glass-card">
                <div class="week-header" data-week="${week.id}">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <input type="checkbox" class="custom-checkbox week-completion" data-id="${week.id}" ${isComplete ? 'checked' : ''} aria-label="Mark week complete">
                        <span class="week-number badge">Week ${week.weekNum}</span>
                        <h3 class="week-title">${week.title}</h3>
                    </div>
                    <span class="week-toggle-icon">▼</span>
                </div>
                <div class="week-content">
                    ${objectivesHtml}
                    ${resourcesHtml}
                    ${codeHtml}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;

    // Attach events
    const headers = container.querySelectorAll('.week-header');
    headers.forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.classList.contains('week-completion')) return;
            const content = header.nextElementSibling;
            content.classList.toggle('expanded');
        });
    });

    const checkboxes = container.querySelectorAll('.week-completion');
    checkboxes.forEach(chk => {
        chk.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            if (window.LMSProgress) {
                window.LMSProgress.toggleWeekComplete(id);
                window.LMSApp?.renderAll(); // Full re-render to update progress
            }
        });
    });
    
    // Copy buttons
    const copyBtns = container.querySelectorAll('.code-copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const codeBlock = e.target.closest('.code-block-wrapper').querySelector('.code-block code');
            const rawCode = codeBlock.textContent;
            navigator.clipboard.writeText(rawCode).then(() => {
                const originalText = e.target.textContent;
                e.target.textContent = 'Copied!';
                e.target.classList.add('copied');
                setTimeout(() => {
                    e.target.textContent = originalText;
                    e.target.classList.remove('copied');
                }, 2000);
            });
        });
    });
  },

  renderCodeBlock(codeExample) {
    const highlighted = this.highlightJava(codeExample.code);
    return `
        <div class="code-block-wrapper">
            <div class="code-header">
                <span class="code-title">${codeExample.title}</span>
                <button class="code-copy-btn btn-sm">Copy</button>
            </div>
            <pre class="code-block"><code>${highlighted}</code></pre>
            ${codeExample.description ? `<p class="code-description">${codeExample.description}</p>` : ''}
        </div>
    `;
  },

  renderResources(container, category = 'all') {
    if (!container || !window.LMS_DATA) return;
    const resources = category === 'all' ? window.LMS_DATA.resources : window.LMS_DATA.resources.filter(r => r.category === category);
    
    if (!resources || resources.length === 0) {
        container.innerHTML = '<p>No resources found.</p>';
        return;
    }

    container.innerHTML = resources.map(res => `
        <div class="resource-card glass-card">
            <div class="resource-icon">${res.icon || '📄'}</div>
            <div class="resource-details">
                <h4 class="resource-name">${res.name}</h4>
                <div class="resource-meta">
                    <span class="badge badge-${res.type}">${res.type.toUpperCase()}</span>
                    <span>${res.size}</span>
                </div>
            </div>
            <a href="${res.path}" download class="resource-download-btn btn btn-primary btn-sm">Download</a>
        </div>
    `).join('');
  },

  renderResourceFilter(container) {
    if (!container) return;
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'book', label: '📚 Books' },
        { id: 'lecture', label: '📊 Lectures' },
        { id: 'note', label: '📝 Notes' },
        { id: 'outline', label: '📋 Outlines' }
    ];

    container.innerHTML = categories.map(cat => `
        <button class="filter-btn btn-secondary ${cat.id === (window.LMSApp?.currentResourceCategory || 'all') ? 'active' : ''}" data-category="${cat.id}">
            ${cat.label}
        </button>
    `).join('');

    const btns = container.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.dataset.category;
            if (window.LMSApp) {
                window.LMSApp.currentResourceCategory = cat;
                this.renderResources(document.getElementById('resource-grid'), cat);
            }
        });
    });
  },

  renderAnnouncements(container, department = 'all') {
    if (!container || !window.LMS_DATA) return;
    let announcements = window.LMS_DATA.announcements.filter(a => department === 'all' || a.department === 'all' || a.department === department);
    announcements.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!announcements.length) {
        container.innerHTML = '<p>No announcements.</p>';
        return;
    }

    container.innerHTML = announcements.map(ann => {
        const priorityBorder = ann.priority === 'urgent' ? 'border-left: 4px solid red;' : (ann.priority === 'important' ? 'border-left: 4px solid yellow;' : '');
        return `
        <div class="announcement-item glass-card" style="${priorityBorder}">
            <div class="announcement-dot"></div>
            <span class="announcement-date">${new Date(ann.date).toLocaleDateString()}</span>
            <h3 class="announcement-title">${ann.title}</h3>
            <p class="announcement-body">${ann.content}</p>
            <span class="announcement-dept-badge badge">${ann.department.toUpperCase()}</span>
        </div>
    `}).join('');
  },

  renderAssignments(container, department = 'all') {
    if (!container || !window.LMS_DATA) return;
    const assignments = window.LMS_DATA.assignments.filter(a => department === 'all' || a.department === 'all' || a.department === department);

    if (!assignments.length) {
        container.innerHTML = '<p>No assignments.</p>';
        return;
    }

    container.innerHTML = assignments.map(assign => `
        <div class="assignment-card glass-card">
            <div class="assignment-header">
                <h3 class="assignment-title">${assign.title}</h3>
                <span class="assignment-week badge">Week ${assign.weekNum}</span>
            </div>
            <div class="assignment-body">
                <p>${assign.description}</p>
                <div class="assignment-due"><strong>Due:</strong> ${new Date(assign.dueDate).toLocaleDateString()}</div>
                <ul class="assignment-tasks">
                    ${assign.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
  },

  renderQuizSelector(container) {
    if (!container || !window.LMS_DATA) return;
    const quizzes = window.LMS_DATA.quizzes;

    if (!quizzes || quizzes.length === 0) {
        container.innerHTML = '<p>No quizzes available.</p>';
        return;
    }

    container.innerHTML = quizzes.map(quiz => {
        const scoreData = window.LMSProgress?.getQuizScore(quiz.id);
        const scoreHtml = scoreData ? `<div class="quiz-score-badge">Best Score: ${scoreData.score}/${scoreData.total}</div>` : '';
        return `
        <div class="quiz-selector-card glass-card" data-quiz="${quiz.id}">
            <h3 class="quiz-title">${quiz.title}</h3>
            <p>Questions: ${quiz.questions.length}</p>
            ${scoreHtml}
            <button class="btn btn-primary btn-sm mt-2">Start Quiz</button>
        </div>
    `}).join('');

    const cards = container.querySelectorAll('.quiz-selector-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const quizId = parseInt(card.dataset.quiz);
            const quiz = window.LMS_DATA.quizzes.find(q => q.id === quizId);
            if (quiz && window.LMSQuiz) {
                window.LMSQuiz.startQuiz(document.getElementById('quiz-container'), quiz);
            }
        });
    });
  },

  renderCalendar(container, month = null, year = null) {
      // Basic calendar renderer (can be expanded)
  }
};
