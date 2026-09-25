window.LMSProgress = {
  STORAGE_KEY: 'oop_lms_progress',

  getData() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : { completedWeeks: [], quizScores: {} };
  },

  saveData(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  getCompletedWeeks() {
    return new Set(this.getData().completedWeeks);
  },

  isWeekComplete(weekId) {
    return this.getCompletedWeeks().has(weekId);
  },

  toggleWeekComplete(weekId) {
    const data = this.getData();
    const idx = data.completedWeeks.indexOf(weekId);
    if (idx === -1) {
        data.completedWeeks.push(weekId);
    } else {
        data.completedWeeks.splice(idx, 1);
    }
    this.saveData(data);
    return this.isWeekComplete(weekId);
  },

  getQuizScore(quizId) {
    return this.getData().quizScores[quizId] || null;
  },

  saveQuizScore(quizId, score, total) {
    const data = this.getData();
    const existing = data.quizScores[quizId];
    if (!existing || score > existing.score) {
      data.quizScores[quizId] = { score, total, date: new Date().toISOString() };
      this.saveData(data);
    }
  },

  getOverallProgress() {
    const data = this.getData();
    const totalWeeks = window.LMS_DATA?.weeks?.length || 1;
    const weeksCompleted = data.completedWeeks.length;
    const quizScores = Object.values(data.quizScores);
    const quizzesTaken = quizScores.length;
    const totalQuizzes = window.LMS_DATA?.quizzes?.length || 0;
    const avgScore = quizzesTaken > 0 ? Math.round(quizScores.reduce((sum, q) => sum + (q.score / q.total * 100), 0) / quizzesTaken) : 0;
    const percentage = Math.round((weeksCompleted / totalWeeks) * 100);
    
    return { weeksCompleted, totalWeeks, quizzesTaken, totalQuizzes, avgScore, percentage };
  },

  renderDashboard(container) {
    if (!container) return;
    const stats = this.getOverallProgress();
    
    // Circular progress SVG
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (stats.percentage / 100) * circumference;

    container.innerHTML = `
      <div class="progress-overview glass-card">
          <div class="progress-circle-container">
              <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle class="progress-circle-bg" cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" stroke-width="10" />
                  <circle class="progress-circle-fill" cx="50" cy="50" r="40" fill="none" stroke="#06b6d4" stroke-width="10" 
                          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" transform="rotate(-90 50 50)" 
                          stroke-linecap="round" style="transition: stroke-dashoffset 1s ease-in-out;" />
              </svg>
              <div class="progress-percentage text-gradient" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; font-size: 1.2rem;">${stats.percentage}%</div>
          </div>
          
          <div class="progress-stats-grid">
              <div class="progress-stat">
                  <span class="progress-stat-value">${stats.weeksCompleted} / ${stats.totalWeeks}</span>
                  <span class="progress-stat-label">Weeks Completed</span>
              </div>
              <div class="progress-stat">
                  <span class="progress-stat-value">${stats.quizzesTaken} / ${stats.totalQuizzes}</span>
                  <span class="progress-stat-label">Quizzes Taken</span>
              </div>
              <div class="progress-stat">
                  <span class="progress-stat-value">${stats.avgScore}%</span>
                  <span class="progress-stat-label">Average Score</span>
              </div>
          </div>
      </div>
      
      <div style="margin-top: 2rem;">
          <button class="progress-reset-btn btn btn-secondary" id="reset-progress-btn">Reset All Progress</button>
      </div>
    `;

    const resetBtn = container.querySelector('#reset-progress-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => this.resetProgress());
    }
  },

  resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem(this.STORAGE_KEY);
      this.renderDashboard(document.getElementById('progress-dashboard'));
      if (window.LMSApp) {
          window.LMSApp.renderAll();
      }
    }
  }
};
