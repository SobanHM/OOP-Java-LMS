import React, { createContext, useContext, useState, useEffect } from 'react';
import { LMS_DATA } from '../data/lmsData';

const LMSContext = createContext();

const STORAGE_KEY = 'oop_lms_react_state';

export const LMSProvider = ({ children }) => {
  const [department, setDepartment] = useState('all'); // 'all', 'ai', 'swe'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [completedWeeks, setCompletedWeeks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.completedWeeks || [];
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
    return [];
  });

  const [quizScores, setQuizScores] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.quizScores || {};
      }
    } catch (e) {
      console.error('Error loading quiz scores:', e);
    }
    return {};
  });

  // Save progress state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completedWeeks,
          quizScores
        })
      );
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }, [completedWeeks, quizScores]);

  const toggleWeekComplete = (weekId) => {
    setCompletedWeeks((prev) => {
      if (prev.includes(weekId)) {
        return prev.filter((id) => id !== weekId);
      } else {
        return [...prev, weekId];
      }
    });
  };

  const saveQuizScore = (quizId, scorePercentage) => {
    setQuizScores((prev) => {
      const currentBest = prev[quizId] || 0;
      if (scorePercentage > currentBest) {
        return { ...prev, [quizId]: Math.round(scorePercentage) };
      }
      return prev;
    });
  };

  const resetProgress = () => {
    setCompletedWeeks([]);
    setQuizScores({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <LMSContext.Provider
      value={{
        data: LMS_DATA,
        department,
        setDepartment,
        searchQuery,
        setSearchQuery,
        activeSection,
        setActiveSection,
        completedWeeks,
        toggleWeekComplete,
        quizScores,
        saveQuizScore,
        resetProgress
      }}
    >
      {children}
    </LMSContext.Provider>
  );
};

export const useLMS = () => useContext(LMSContext);
