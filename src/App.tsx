import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import FloatingParticles from './components/FloatingParticles';
import Timeline from './components/Timeline';
import RegistrationForm from './components/RegistrationForm';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Enhanced Header */}
        <header className="text-center pt-12 px-4 mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-sm"></div>
          <div className="absolute top-10 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute top-20 right-10 w-16 h-16 border border-cyan-400/30 rounded-full animate-spin-slow-reverse"></div>
          
          {/* Circuit-like lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
          
          {/* Main title with enhanced effects */}
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 cyber-glow animate-float glitch-effect">
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
                E-QUISITION
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 opacity-70 blur-[2px]"></span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 animate-glitch-offset"></span>
              </span>
            </h1>
            {/* Pulsing glow behind text */}
            <div className="absolute -inset-x-10 top-1/2 -translate-y-1/2 h-20 bg-purple-500/20 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
          </div>
          
          {/* Enhanced description with styled container */}
          <div className="relative max-w-3xl mx-auto mb-10 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-sm rounded-lg -z-10"></div>
            <p className="text-lg text-cyan-200 font-light mb-3 animate-fade-in">Where innovation meets entrepreneurship</p>
            <p className="text-lg text-purple-200 font-light mb-3 animate-fade-in" style={{animationDelay: "0.2s"}}>A flagship event by E-Cell NIT Hamirpur</p>
            <p className="text-lg text-blue-200 font-light mb-3 animate-fade-in" style={{animationDelay: "0.4s"}}>Turning visionary ideas into business realities</p>
            <p className="text-lg text-cyan-200 font-light animate-fade-in" style={{animationDelay: "0.6s"}}>Join us to ignite your entrepreneurial journey</p>
          </div>
          
          {/* Subtitle with enhanced styling */}
          <p className="text-xl md:text-2xl text-gray-300 font-semibold tracking-wide mb-6">
            E-Cell <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-shimmer">NIT Hamirpur</span>
          </p>
          
          {/* Enhanced indicator dots */}
          <div className="flex justify-center space-x-8 text-gray-400 mb-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping-glow"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping-glow" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping-glow" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Added call to action button */}
          <button className="mt-6 px-8 py-3 bg-transparent border border-purple-500 rounded-full text-purple-300 hover:bg-purple-900/30 hover:text-white transition-all duration-300 font-medium tracking-wide animate-pulse-subtle">
            DISCOVER MORE
          </button>
        </header>

        {/* Timeline Section */}
        <Timeline />

        {/* Registration Form */}
        <RegistrationForm />

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500">
          <p className="text-sm">Made with ⚡ by Mr Atharv</p>
        </footer>
      </div>
    </div>
  );
}

export default App;