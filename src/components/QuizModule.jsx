import React, { useState } from 'react';
import { useLMS } from '../context/LMSContext';
import { Brain, CheckCircle, XCircle, RefreshCw, Trophy, ArrowRight } from 'lucide-react';

export const QuizModule = () => {
  const { data, quizScores, saveQuizScore } = useLMS();

  const [activeQuizId, setActiveQuizId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const activeQuiz = data.quizzes.find((q) => q.id === activeQuizId);

  const handleStartQuiz = (quizId) => {
    setActiveQuizId(quizId);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizSubmitted(false);
  };

  const handleOptionClick = (optionIdx) => {
    if (selectedOption !== null) return; // Prevent re-selection
    setSelectedOption(optionIdx);

    const question = activeQuiz.questions[currentQuestionIndex];
    if (optionIdx === question.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      // Quiz finished
      setQuizSubmitted(true);
      const finalScorePct = ((score + (selectedOption === activeQuiz.questions[currentQuestionIndex].correctIndex ? 0 : 0)) / activeQuiz.questions.length) * 100;
      saveQuizScore(activeQuiz.id, (score / activeQuiz.questions.length) * 100);
    }
  };

  return (
    <section class="section" id="quizzes">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">🧠 Interactive Knowledge Quizzes</h2>
          <p class="section-subtitle">
            Test your comprehension of Java OOP concepts with instant feedback and explanations
          </p>
        </div>

        {/* Quiz Cards Selector */}
        {!activeQuiz ? (
          <div class="quiz-selector">
            {data.quizzes.map((quiz) => {
              const bestScore = quizScores[quiz.id];

              return (
                <div
                  key={quiz.id}
                  class="glass-card quiz-card"
                  onClick={() => handleStartQuiz(quiz.id)}
                >
                  <div class="quiz-card-icon">🧠</div>
                  <h3 class="quiz-card-title">{quiz.title}</h3>
                  <div class="quiz-card-meta">
                    Week {quiz.weekNum} • {quiz.questions.length} Questions
                  </div>

                  {bestScore !== undefined ? (
                    <div style={{ marginTop: '0.85rem', color: 'var(--success)', fontWeight: 700 }}>
                      <Trophy size={16} style={{ display: 'inline', marginRight: '4px' }} />
                      Best Score: {bestScore}%
                    </div>
                  ) : (
                    <div style={{ marginTop: '0.85rem', color: 'var(--text-muted)' }}>
                      Not attempted yet
                    </div>
                  )}

                  <button class="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                    Start Quiz
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          /* Active Quiz Interface */
          <div class="quiz-active-container">
            <div class="glass-card">
              {!quizSubmitted ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 class="quiz-card-title" style={{ margin: 0 }}>{activeQuiz.title}</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Question {currentQuestionIndex + 1} of {activeQuiz.questions.length}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div class="quiz-progress-bar">
                    <div
                      class="quiz-progress-fill"
                      style={{
                        width: `${((currentQuestionIndex + 1) / activeQuiz.questions.length) * 100}%`
                      }}
                    />
                  </div>

                  {/* Question text */}
                  <div class="quiz-question-text">
                    {activeQuiz.questions[currentQuestionIndex].question}
                  </div>

                  {/* Options */}
                  <div class="quiz-options">
                    {activeQuiz.questions[currentQuestionIndex].options.map((opt, optIdx) => {
                      const isCorrect = optIdx === activeQuiz.questions[currentQuestionIndex].correctIndex;
                      const isSelected = selectedOption === optIdx;

                      let optionClass = 'quiz-option';
                      if (selectedOption !== null) {
                        if (isCorrect) optionClass += ' correct';
                        else if (isSelected) optionClass += ' incorrect';
                        else optionClass += ' disabled';
                      }

                      return (
                        <div
                          key={optIdx}
                          class={optionClass}
                          onClick={() => handleOptionClick(optIdx)}
                        >
                          <span>{opt}</span>
                          {selectedOption !== null && isCorrect && <CheckCircle size={18} class="text-success" />}
                          {selectedOption !== null && isSelected && !isCorrect && <XCircle size={18} class="text-error" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  {selectedOption !== null && (
                    <div class="quiz-explanation">
                      💡 <strong>Explanation:</strong>{' '}
                      {activeQuiz.questions[currentQuestionIndex].explanation}
                    </div>
                  )}

                  {/* Navigation controls */}
                  <div class="quiz-nav-btns">
                    <button class="btn btn-secondary" onClick={() => setActiveQuizId(null)}>
                      Cancel
                    </button>

                    {selectedOption !== null && (
                      <button class="btn btn-primary" onClick={handleNextQuestion}>
                        {currentQuestionIndex < activeQuiz.questions.length - 1 ? (
                          <>
                            Next Question <ArrowRight size={16} />
                          </>
                        ) : (
                          'Submit Quiz'
                        )}
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Quiz Results Summary */
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                  <Trophy size={48} class="text-accent-light" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 class="section-title">Quiz Completed!</h3>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-light)', margin: '1rem 0' }}>
                    {Math.round((score / activeQuiz.questions.length) * 100)}%
                  </div>
                  <p class="section-subtitle" style={{ marginBottom: '2rem' }}>
                    You scored {score} out of {activeQuiz.questions.length} questions correctly.
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button class="btn btn-primary" onClick={() => handleStartQuiz(activeQuiz.id)}>
                      <RefreshCw size={16} /> Try Again
                    </button>
                    <button class="btn btn-secondary" onClick={() => setActiveQuizId(null)}>
                      Back to All Quizzes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
