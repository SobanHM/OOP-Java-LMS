import React from 'react';
import { LMSProvider } from './context/LMSContext';
import { Header } from './components/Header';
import { StudentProfile } from './components/StudentProfile';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { Curriculum } from './components/Curriculum';
import { ResourceCenter } from './components/ResourceCenter';
import { Assignments } from './components/Assignments';
import { Gradebook } from './components/Gradebook';
import { Announcements } from './components/Announcements';
import { QuizModule } from './components/QuizModule';
import { ProgressDashboard } from './components/ProgressDashboard';
import { Footer } from './components/Footer';

export function App() {
  return (
    <LMSProvider>
      <div class="lms-app">
        <Header />
        <StudentProfile />
        <Hero />
        <SearchBar />
        <Curriculum />
        <ResourceCenter />
        <Assignments />
        <Gradebook />
        <QuizModule />
        <Announcements />
        <ProgressDashboard />
        <Footer />
      </div>
    </LMSProvider>
  );
}

export default App;
