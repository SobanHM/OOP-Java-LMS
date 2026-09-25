import React, { createContext, useContext, useState, useEffect } from 'react';
import { LMS_DATA } from '../data/lmsData';

const LMSContext = createContext();
const STORAGE_KEY = 'oop_lms_react_state_v2';

export const LMSProvider = ({ children }) => {
  const [department, setDepartment] = useState('all'); // 'all', 'ai', 'swe'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Enrolled status state
  const [isEnrolled, setIsEnrolled] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.isEnrolled ?? true;
      }
    } catch (e) {
      console.error(e);
    }
    return true;
  });

  // Completed weeks state
  const [completedWeeks, setCompletedWeeks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.completedWeeks || [];
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Quiz Scores state
  const [quizScores, setQuizScores] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.quizScores || {};
      }
    } catch (e) {
      console.error(e);
    }
    return {};
  });

  // Assignment submissions state
  const [submissions, setSubmissions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.submissions || {
          1: { date: '2026-09-25', fileName: 'Calculator.java', notes: 'Completed scanner validation', status: 'Graded', grade: '98/100' }
        };
      }
    } catch (e) {
      console.error(e);
    }
    return {
      1: { date: '2026-09-25', fileName: 'Calculator.java', notes: 'Completed scanner validation', status: 'Graded', grade: '98/100' }
    };
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          isEnrolled,
          completedWeeks,
          quizScores,
          submissions
        })
      );
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }, [isEnrolled, completedWeeks, quizScores, submissions]);

  const toggleWeekComplete = (weekId) => {
    setCompletedWeeks((prev) =>
      prev.includes(weekId) ? prev.filter((id) => id !== weekId) : [...prev, weekId]
    );
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

  const submitAssignment = (assignmentId, submissionData) => {
    setSubmissions((prev) => ({
      ...prev,
      [assignmentId]: {
        ...submissionData,
        date: new Date().toISOString().split('T')[0],
        status: 'Submitted',
        grade: 'Pending Review'
      }
    }));
  };

  const enrollStudent = (deptTrack) => {
    setIsEnrolled(true);
    if (deptTrack) setDepartment(deptTrack);
  };

  const resetProgress = () => {
    setCompletedWeeks([]);
    setQuizScores({});
    setSubmissions({});
    setIsEnrolled(true);
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
        isEnrolled,
        enrollStudent,
        completedWeeks,
        toggleWeekComplete,
        quizScores,
        saveQuizScore,
        submissions,
        submitAssignment,
        resetProgress
      }}
    >
      {children}
    </LMSContext.Provider>
  );
};

export const useLMS = () => useContext(LMSContext);
