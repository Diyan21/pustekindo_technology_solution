import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Single-Page App Content */}
      <div className="flex-1">
        <Home />
      </div>

      {/* Dark Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppButton />
    </div>
  );
}
