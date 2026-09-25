window.LMSQuiz = {
  currentQuiz: null,
  currentQuestionIndex: 0,
  answers: [],
  submitted: false,

  startQuiz(container, quiz) {
    this.currentQuiz = quiz;
    this.currentQuestionIndex = 0;
    this.answers = new Array(quiz.questions.length).fill(null);
    this.submitted = false;

    document.getElementById('quiz-selector').classList.add('hidden');
    container.classList.remove('hidden');

    this.renderQuestion(container);
  },

  renderQuestion(container) {
    if (!this.currentQuiz) return;
    const qCount = this.currentQuiz.questions.length;
    const question = this.currentQuiz.questions[this.currentQuestionIndex];
    const progressPct = ((this.currentQuestionIndex) / qCount) * 100;

    let html = `
      <div class="quiz-header">
          <h3 class="quiz-title">${this.currentQuiz.title}</h3>
          <div class="quiz-progress-bar" style="width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden; margin-top: 1rem;">
              <div class="quiz-progress-fill" style="width: ${progressPct}%; height: 100%; background: #06b6d4; transition: width 0.3s ease;"></div>
          </div>
      </div>
      
      <div class="quiz-question glass-card mt-4">
          <div class="quiz-question-number">Question ${this.currentQuestionIndex + 1} of ${qCount}</div>
          <p class="quiz-question-text" style="font-size: 1.1rem; margin: 1rem 0;">${question.question}</p>
          
          <div class="quiz-options">
              ${question.options.map((opt, i) => {
                  let classes = 'quiz-option';
                  if (this.answers[this.currentQuestionIndex] === i) classes += ' selected';
                  return `<div class="${classes}" data-index="${i}" style="padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer; transition: all 0.2s ease;">${opt}</div>`;
              }).join('')}
          </div>
      </div>
      
      <div class="quiz-nav mt-4" style="display: flex; justify-content: space-between;">
          <button class="btn btn-secondary ${this.currentQuestionIndex === 0 ? 'hidden' : ''}" id="quiz-prev-btn">Previous</button>
          <button class="btn btn-primary" id="quiz-next-btn">${this.currentQuestionIndex === qCount - 1 ? 'Submit' : 'Next'}</button>
          <button class="btn btn-secondary" id="quiz-exit-btn">Exit</button>
      </div>
    `;

    container.innerHTML = html;

    // Events
    const options = container.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.index);
            this.selectOption(idx);
            
            // visually update options
            options.forEach(o => o.classList.remove('selected', 'style-selected'));
            e.target.classList.add('selected');
            e.target.style.borderColor = '#06b6d4';
            e.target.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
        });
    });

    const prevBtn = container.querySelector('#quiz-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevQuestion(container));

    const nextBtn = container.querySelector('#quiz-next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (this.currentQuestionIndex === qCount - 1) {
                this.submitQuiz(container);
            } else {
                this.nextQuestion(container);
            }
        });
    }

    const exitBtn = container.querySelector('#quiz-exit-btn');
    if (exitBtn) exitBtn.addEventListener('click', () => this.exitQuiz());
  },

  selectOption(optionIndex) {
    this.answers[this.currentQuestionIndex] = optionIndex;
  },

  nextQuestion(container) {
    if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
        this.currentQuestionIndex++;
        this.renderQuestion(container);
    }
  },

  prevQuestion(container) {
    if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.renderQuestion(container);
    }
  },

  submitQuiz(container) {
    this.submitted = true;
    let score = 0;
    this.currentQuiz.questions.forEach((q, i) => {
        if (this.answers[i] === q.correctIndex) score++;
    });

    if (window.LMSProgress) {
        window.LMSProgress.saveQuizScore(this.currentQuiz.id, score, this.currentQuiz.questions.length);
        window.LMSProgress.renderDashboard(document.getElementById('progress-dashboard'));
    }

    this.showResults(container, score);
  },

  showResults(container, score) {
    const total = this.currentQuiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    
    let html = `
      <div class="quiz-result glass-card text-center p-4">
          <h2>Quiz Completed!</h2>
          <div class="quiz-score" style="font-size: 3rem; font-weight: bold; color: ${percentage >= 70 ? '#10b981' : '#f59e0b'};">${score} / ${total}</div>
          <p class="quiz-result-message">${percentage >= 70 ? 'Great job!' : 'Keep practicing!'}</p>
          <div class="mt-4">
              <button class="btn btn-primary" id="quiz-retry-btn">Retry Quiz</button>
              <button class="btn btn-secondary" id="quiz-back-btn">Back to Quizzes</button>
          </div>
      </div>
      <div class="quiz-review mt-4">
          <h3>Review Answers</h3>
          ${this.currentQuiz.questions.map((q, i) => {
              const isCorrect = this.answers[i] === q.correctIndex;
              return `
                  <div class="glass-card mt-2" style="border-left: 4px solid ${isCorrect ? '#10b981' : '#ef4444'}">
                      <p><strong>Q:</strong> ${q.question}</p>
                      <p><strong>Your Answer:</strong> ${this.answers[i] !== null ? q.options[this.answers[i]] : '<em>Not answered</em>'}</p>
                      ${!isCorrect ? `<p><strong>Correct Answer:</strong> ${q.options[q.correctIndex]}</p>` : ''}
                      <p class="text-sm mt-2" style="color: #64748b;"><em>Explanation: ${q.explanation}</em></p>
                  </div>
              `;
          }).join('')}
      </div>
    `;

    container.innerHTML = html;

    container.querySelector('#quiz-retry-btn').addEventListener('click', () => {
        this.startQuiz(container, this.currentQuiz);
    });

    container.querySelector('#quiz-back-btn').addEventListener('click', () => {
        this.exitQuiz();
    });
  },

  exitQuiz() {
    this.currentQuiz = null;
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-container').innerHTML = '';
    const selector = document.getElementById('quiz-selector');
    selector.classList.remove('hidden');
    
    if (window.LMSComponents) {
        window.LMSComponents.renderQuizSelector(selector);
    }
  }
};
