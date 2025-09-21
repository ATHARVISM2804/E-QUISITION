import React, { useEffect, useState } from 'react';
import { Zap, Sparkles, Rocket, Code, Database, Globe } from 'lucide-react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prev => (prev < 100 ? prev + Math.random() * 10 : 100));
    }, 200);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Custom animations for particles */}
      <style jsx global>{`
        @keyframes gentle-float-0 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -20px); }
          50% { transform: translate(60px, 0); }
          75% { transform: translate(30px, 20px); }
        }
        @keyframes gentle-float-1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-30px, -20px); }
          50% { transform: translate(-60px, 0); }
          75% { transform: translate(-30px, 20px); }
        }
        @keyframes gentle-float-2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, 30px); }
          50% { transform: translate(0, 60px); }
          75% { transform: translate(-20px, 30px); }
        }
        @keyframes gentle-float-3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-20px, 30px); }
          50% { transform: translate(0, 60px); }
          75% { transform: translate(20px, 30px); }
        }
      `}</style>

      {/* Dynamic background with more movement */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/40 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      
      {/* Enhanced floating particles system with smoother, more controlled movement */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          // Create more predictable, smoother movements for each particle
          const direction = i % 4; // 0: up-right, 1: up-left, 2: down-right, 3: down-left
          const speed = 0.005 + (Math.random() * 0.01); // Very slow speed
          const size = Math.random() * 3 + 1;
          
          return (
            <div
              key={i}
              className={`absolute rounded-full opacity-70 ${
                i % 3 === 0 ? 'bg-cyan-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-blue-500'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: `blur(${size * 0.5}px)`,
                animation: `gentle-float-${direction} ${30 + Math.random() * 40}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            ></div>
          );
        })}
      </div>

      <div className="text-center relative z-10">
        {/* Sleeker logo animation */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Glowing outer ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400 opacity-75 animate-ping-slow"></div>
            
            {/* Rotating rings with glassmorphism effect */}
            <div className="absolute inset-0 rounded-full backdrop-blur-sm border border-white/20 animate-spin" 
                 style={{animationDuration: '8s'}}></div>
            <div className="absolute inset-4 rounded-full backdrop-blur-sm border border-white/20 animate-spin-reverse" 
                 style={{animationDuration: '6s'}}></div>
                 
            {/* Glowing core */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse shadow-[0_0_15px_rgba(139,92,246,0.8)]">
              <div className="absolute inset-0 bg-black/30 rounded-full backdrop-blur-md flex items-center justify-center">
                <Zap className="w-8 h-8 text-white animate-glitch" />
              </div>
            </div>
            
            {/* Orbiting tech icons */}
            <div className="absolute inset-0 animate-orbit" style={{animationDuration: '12s'}}>
              <Code className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 text-cyan-400" />
            </div>
            <div className="absolute inset-0 animate-orbit-reverse" style={{animationDuration: '10s'}}>
              <Database className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 text-purple-400" />
            </div>
            <div className="absolute inset-0 animate-orbit" style={{animationDuration: '14s', animationDelay: '2s'}}>
              <Globe className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
            </div>
            
            {/* Pulsing light beams */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-40 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50"
                  style={{transform: `rotate(${i * 30}deg)`, animationDelay: `${i * 0.2}s`}}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Title with glitch effect */}
        <div className="mb-8 relative">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 mb-4 animate-glitch-text relative overflow-hidden">
            E-QUISITION
            <span className="absolute inset-0 text-cyan-400 animate-glitch-skew" style={{clipPath: 'polygon(0 25%, 100% 25%, 100% 30%, 0 30%)'}}>E-QUISITION</span>
            <span className="absolute inset-0 text-purple-500 animate-glitch-skew" style={{clipPath: 'polygon(0 40%, 100% 40%, 100% 45%, 0 45%)'}}>E-QUISITION</span>
          </div>
          <div className="text-lg text-gray-400 mb-2 animate-fade-in">E-Cell NIT Hamirpur</div>
        </div>
        
        {/* Sleeker progress bar */}
        <div className="w-64 h-1 bg-gray-800/60 rounded-full mx-auto mb-4 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full"
            style={{width: `${progress}%`, transition: 'width 0.3s ease-out'}}
          ></div>
        </div>
        
        {/* Typewriter-style status messages */}
        <p className="text-gray-400 text-sm h-5 font-mono">
          {progress < 30 ? "Initializing..." : 
           progress < 60 ? "Loading resources..." : 
           progress < 90 ? "Preparing interface..." : 
           "Ready to launch..."}
          <span className="animate-blink">_</span>
        </p>
      </div>
      
      {/* Corner decorative elements */}
      <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-cyan-500/40 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-purple-500/40 animate-pulse"></div>
    </div>
  );
};

export default Preloader;