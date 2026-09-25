import React from 'react';

export const Footer = () => {
  return (
    <footer class="lms-footer">
      <div class="footer-content container">
        <div class="footer-column">
          <h3>The University of Larkano</h3>
          <p>Department of Computer Science & Software Engineering</p>
          <p>Instructor: Soban Hussain</p>
          <p>Email: soban@uolrk.edu.pk</p>
        </div>

        <div class="footer-column">
          <h4>Course Information</h4>
          <p>CS-201: Object-Oriented Programming</p>
          <p>Language: Java (JDK 17+)</p>
          <p>Credits: 3 Credit Hours</p>
          <p>Programs: AI & SWE Degree Paths</p>
        </div>

        <div class="footer-column footer-links">
          <h4>Quick Navigation</h4>
          <a href="#weeks">📚 16-Week Curriculum</a>
          <a href="#resources">📥 Downloadable Resources</a>
          <a href="#assignments">📝 Practical Assignments</a>
          <a href="#quizzes">🧠 Interactive Quizzes</a>
          <a href="#progress-section">📊 Progress Dashboard</a>
        </div>
      </div>

      <div class="footer-copyright">
        <p>
          © 2026 The University of Larkano — OOP Java Learning Management System. Designed for AI & SWE Programs.
        </p>
      </div>
    </footer>
  );
};
