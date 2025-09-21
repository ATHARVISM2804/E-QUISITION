import React, { useEffect, useRef, useState } from 'react';

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const timelineItems = [
    { time: '5:00 – 5:10 PM', title: 'Opening Ceremony ✨', desc: 'Lamp lighting & felicitation' },
    { time: '5:10 – 5:20 PM', title: 'Meet E-Cell 🚀', desc: 'A quick peek into the world of E-Cell' },
    { time: '5:20 – 5:30 PM', title: 'Icebreaker 🎉', desc: 'Fun activity to warm up the crowd' },
    { time: '5:30 – 5:50 PM', title: 'Round 1 💡', desc: 'The first challenge begins' },
    { time: '5:50 – 6:20 PM', title: 'Guest Talk 🎤', desc: 'Q&A + special session with Mr. Vivek Tiwari' },
    { time: '6:20 – 7:20 PM', title: 'Round 2 🔥', desc: 'Things get more exciting' },
    { time: '7:20 – 7:35 PM', title: 'Round 3 ⚡', desc: 'The final showdown' },
    { time: '7:35 – 7:40 PM', title: 'Vote of Thanks 🙏', desc: 'Gratitude in a nutshell' },
    { time: '7:40 – 8:00 PM', title: 'Surprise Event 👀✨', desc: 'Stay tuned till the end' }
  ];

  // Animation keyframes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineElements = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Animate items sequentially
    timelineItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 300);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 mb-20" ref={timelineRef}>
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>

      {/* Enhanced attractive heading without icons */}
      <div className="relative text-center mb-20">
        {/* Background glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 neon-glow inline-block relative">
          Event Timeline
        </h2>
        
        {/* Underline with animation */}
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full"></div>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ml-2 animate-pulse"></div>
        </div>
        
        {/* Subtitle text */}
        <p className="mt-4 text-gray-400 text-sm italic">Your roadmap to an electrifying experience</p>
      </div>
      
      <div className="relative">
        {/* Timeline line - centered for desktop, left for mobile */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-blue-500 shadow-lg shadow-cyan-400/50"></div>
        
        {timelineItems.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={`timeline-item relative mb-12 transition-all duration-1000 transform ${
              visibleItems[index] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Desktop Layout - Alternating sides */}
            <div className="hidden md:flex items-center">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black shadow-xl shadow-cyan-400/60 z-10 pulse-dot"></div>
              
              {/* Content - alternating sides */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8 text-left'}`}>
                <div className={`timeline-card bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 
                  hover:border-cyan-400/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30
                  ${index % 2 === 0 ? 'slide-in-right' : 'slide-in-left'}`}>
                  <div className="text-cyan-400 font-bold text-sm mb-2 tracking-wide">{item.time}</div>
                  <div className="text-white font-bold text-xl mb-2 neon-text">{item.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{item.desc}</div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60 animate-ping"></div>
                  <div className={`absolute ${index % 2 === 0 ? '-left-2' : '-right-2'} top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full`}></div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - All on right side */}
            <div className="md:hidden flex items-center">
              {/* Timeline dot */}
              <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black shadow-xl shadow-cyan-400/60 z-10 pulse-dot"></div>
              
              {/* Content */}
              <div className="ml-16 w-full">
                <div className="timeline-card bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-5 border border-gray-700/50 
                  hover:border-cyan-400/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30">
                  <div className="text-cyan-400 font-bold text-sm mb-2 tracking-wide">{item.time}</div>
                  <div className="text-white font-bold text-lg mb-2 neon-text">{item.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{item.desc}</div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-60 animate-ping"></div>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;