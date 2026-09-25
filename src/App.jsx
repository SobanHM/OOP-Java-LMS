import React from 'react';
import { LMSProvider, useLMS } from './context/LMSContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { StudentPortal } from './components/StudentPortal';
import { AdminPortal } from './components/AdminPortal';
import { AnnouncementPopup } from './components/AnnouncementPopup';
import { Footer } from './components/Footer';

function MainLayout() {
  const { userRole } = useLMS();

  return (
    <div class="lms-app">
      <Navbar />
      <AnnouncementPopup />

      {userRole === 'public' && <HomePage />}
      {userRole === 'student' && <StudentPortal />}
      {userRole === 'admin' && <AdminPortal />}

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <LMSProvider>
      <MainLayout />
    </LMSProvider>
  );
}

export default App;
