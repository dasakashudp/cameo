import React from 'react';
import { HeroPanel } from './components/HeroPanel';
import { LoginForm } from './components/LoginForm';

export default function App() {
  return (
    <main className="app-container">
      {/* Left Panel: Hero Image & Branding */}
      <div className="hero-panel-wrapper">
        <HeroPanel />
      </div>

      {/* Right Panel: Login Form */}
      <div className="login-panel-wrapper">
         {/* Mobile Hero Background (Visible only on small screens) */}
         <div className="mobile-bg">
            <div className="mobile-bg-overlay"></div>
         </div>

        <LoginForm />
        
        {/* Decorative side line for large screens */}
        <div className="center-line"></div>
      </div>
    </main>
  );
}