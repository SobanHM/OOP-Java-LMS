import React from 'react';
import { LMSProvider } from './context/LMSContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { Curriculum } from './components/Curriculum';
import { ResourceCenter } from './components/ResourceCenter';
import { Assignments } from './components/Assignments';
import { Announcements } from './components/Announcements';
import { QuizModule } from './components/QuizModule';
import { ProgressDashboard } from './components/ProgressDashboard';
import { Footer } from './components/Footer';

export function App() {
  return (
    <LMSProvider>
      <div class="lms-app">
        <Header />
        <Hero />
        <SearchBar />
        <Curriculum />
        <ResourceCenter />
        <Assignments />
        <Announcements />
        <QuizModule />
        <ProgressDashboard />
        <Footer />
      </div>
    </LMSProvider>
  );
}

export default App;
