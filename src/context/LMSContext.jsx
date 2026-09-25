import React, { createContext, useContext, useState, useEffect } from 'react';
import { LMS_DATA } from '../data/lmsData';

const LMSContext = createContext();
const STORAGE_KEY = 'oop_lms_v3_role_state';

export const LMSProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('public'); // 'public', 'student', 'admin'
  const [department, setDepartment] = useState('all'); // 'all', 'ai', 'swe'
  const [activeStudentId, setActiveStudentId] = useState('2026-CS-042');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAnnouncementPopup, setShowAnnouncementPopup] = useState(true);

  // Dynamic state arrays
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.students && Array.isArray(parsed.students)) return parsed.students;
      }
    } catch (e) {
      console.error(e);
    }
    return LMS_DATA.students;
  });

  const [completedWeeks, setCompletedWeeks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.completedWeeks && Array.isArray(parsed.completedWeeks)) return parsed.completedWeeks;
      }
    } catch (e) {
      console.error(e);
    }
    return [1];
  });

  const [quizScores, setQuizScores] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.quizScores) return parsed.quizScores;
      }
    } catch (e) {
      console.error(e);
    }
    return { 1: 100, 2: 90 };
  });

  const [announcements, setAnnouncements] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.announcements && Array.isArray(parsed.announcements)) return parsed.announcements;
      }
    } catch (e) {
      console.error(e);
    }
    return LMS_DATA.announcements;
  });

  const [assignments, setAssignments] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.assignments && Array.isArray(parsed.assignments)) return parsed.assignments;
      }
    } catch (e) {
      console.error(e);
    }
    return LMS_DATA.assignments;
  });

  const [submissions, setSubmissions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.submissions) return parsed.submissions;
      }
    } catch (e) {
      console.error(e);
    }
    return {
      '2026-CS-042': {
        1: { date: '2026-09-25', fileName: 'Calculator.java', code: 'public class Solution {}', notes: 'Completed with 0 errors', status: 'Graded', grade: '98/100' }
      }
    };
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          students,
          completedWeeks,
          quizScores,
          announcements,
          assignments,
          submissions
        })
      );
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }, [students, completedWeeks, quizScores, announcements, assignments, submissions]);

  const toggleWeekComplete = (weekId) => {
    setCompletedWeeks((prev) =>
      prev.includes(weekId) ? prev.filter((id) => id !== weekId) : [...prev, weekId]
    );
  };

  const saveQuizScore = (quizId, scorePercentage) => {
    setQuizScores((prev) => ({ ...prev, [quizId]: Math.round(scorePercentage) }));
  };

  // Admin Actions
  const enrollStudentAdmin = (newStudent) => {
    const studentRecord = {
      id: newStudent.rollNo,
      name: newStudent.name,
      rollNo: newStudent.rollNo,
      email: newStudent.email || `${newStudent.rollNo.toLowerCase()}@uolrk.edu.pk`,
      department: newStudent.department === 'ai' ? 'Artificial Intelligence' : 'Software Engineering',
      track: newStudent.department,
      enrolledDate: new Date().toISOString().split('T')[0],
      attendance: [
        { date: new Date().toISOString().split('T')[0], topic: 'Course Registration', status: 'Present' }
      ],
      marks: {
        quiz1: 0, quiz2: 0, quiz3: 0, quiz4: 0, quiz5: 0,
        midExam: 0, labExam: 0, projectMarks: 0, finalExam: 0,
        totalMarks: 0, grade: 'Pending', gpa: '0.00'
      }
    };

    setStudents((prev) => [...prev, studentRecord]);
    setActiveStudentId(studentRecord.id);
  };

  const markAttendanceAdmin = (date, topic, attendanceMap) => {
    setStudents((prev) =>
      prev.map((student) => {
        const status = attendanceMap[student.id] || 'Present';
        const updatedAttendance = [
          { date, topic, status },
          ...student.attendance.filter((a) => a.date !== date)
        ];
        return { ...student, attendance: updatedAttendance };
      })
    );
  };

  const updateMarksAdmin = (studentId, updatedMarks) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === studentId) {
          const total =
            (updatedMarks.quiz1 || 0) +
            (updatedMarks.quiz2 || 0) +
            (updatedMarks.midExam || 0) +
            (updatedMarks.labExam || 0) +
            (updatedMarks.projectMarks || 0) +
            (updatedMarks.finalExam || 0);

          let grade = 'F';
          let gpa = '0.00';
          if (total >= 90) { grade = 'A+'; gpa = '4.00'; }
          else if (total >= 80) { grade = 'A'; gpa = '3.75'; }
          else if (total >= 70) { grade = 'B'; gpa = '3.00'; }
          else if (total >= 60) { grade = 'C'; gpa = '2.00'; }

          return {
            ...student,
            marks: {
              ...student.marks,
              ...updatedMarks,
              totalMarks: total,
              grade,
              gpa
            }
          };
        }
        return student;
      })
    );
  };

  const addAssignmentAdmin = (newAssignment) => {
    const item = {
      id: Date.now(),
      title: newAssignment.title,
      description: newAssignment.description,
      weekNum: newAssignment.weekNum || 1,
      dueDate: newAssignment.dueDate,
      type: newAssignment.type || 'assignment',
      maxScore: 100
    };
    setAssignments((prev) => [item, ...prev]);
  };

  const addAnnouncementAdmin = (newAnnouncement) => {
    const item = {
      id: Date.now(),
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      date: new Date().toISOString().split('T')[0],
      department: 'all',
      priority: newAnnouncement.priority || 'normal',
      isNew: true
    };
    setAnnouncements((prev) => [item, ...prev]);
  };

  // Student Actions
  const submitTaskStudent = (studentId, assignmentId, submissionData) => {
    setSubmissions((prev) => ({
      ...prev,
      [studentId]: {
        ...(prev[studentId] || {}),
        [assignmentId]: {
          ...submissionData,
          date: new Date().toISOString().split('T')[0],
          status: 'Submitted',
          grade: 'Pending Review'
        }
      }
    }));
  };

  const currentStudent = students.find((s) => s.id === activeStudentId) || students[0];

  return (
    <LMSContext.Provider
      value={{
        data: LMS_DATA,
        userRole,
        setUserRole,
        department,
        setDepartment,
        completedWeeks,
        toggleWeekComplete,
        quizScores,
        saveQuizScore,
        students,
        activeStudentId,
        setActiveStudentId,
        currentStudent,
        announcements,
        assignments,
        submissions,
        searchQuery,
        setSearchQuery,
        showAnnouncementPopup,
        setShowAnnouncementPopup,
        enrollStudentAdmin,
        markAttendanceAdmin,
        updateMarksAdmin,
        addAssignmentAdmin,
        addAnnouncementAdmin,
        submitTaskStudent
      }}
    >
      {children}
    </LMSContext.Provider>
  );
};

export const useLMS = () => useContext(LMSContext);
