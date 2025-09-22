import React, { useState } from 'react';
import { Sparkles, Zap, Rocket } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    branch: '',
    disclaimer: false
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.disclaimer) {
      alert('Please accept the disclaimer to continue!');
      return;
    }
    try {
      const response = await fetch('https://e-quisition.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          rollNo: formData.rollNo,
          branch: formData.branch
        })
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Registration failed');
        return;
      }
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setFormData({ name: '', rollNo: '', branch: '', disclaimer: false });
      }, 5000);
    } catch (err) {
      setError('Could not connect to server');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (showConfirmation) {
    return (
      <div className="max-w-lg mx-auto px-4 mb-20">
        <div className="relative bg-gradient-to-br from-green-400 via-cyan-400 to-blue-500 p-1 rounded-3xl animate-pulse">
          <div className="bg-black rounded-3xl p-8 text-center">
            <div className="text-6xl mb-6 animate-bounce">🎉🔥</div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-4 neon-glow">
              You're officially in!
            </h3>
            <p className="text-xl text-gray-300 mb-4">See you at E-Quisition</p>
            <div className="flex justify-center space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
              <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
              <Rocket className="w-6 h-6 text-purple-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 mb-20">
      {error && (
        <div className="mb-4 p-3 bg-red-700 text-white rounded-xl text-center animate-pulse">{error}</div>
      )}
      {/* Add custom animation for checkbox */}
      <style jsx>{`
        @keyframes scale-in {
          0% { transform: scale(0); }
          80% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.3s forwards;
        }
        .shadow-glow-sm {
          box-shadow: 0 0 8px 2px rgba(34, 211, 238, 0.6);
        }
      `}</style>
      
      <div className="relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-3xl blur opacity-75 animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-cyan-400/70 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30">
          
          {/* Header with icons */}
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-4 mb-4">
              <Sparkles className="w-8 h-8 text-cyan-400 animate-spin" />
              <Zap className="w-10 h-10 text-purple-500 animate-pulse" />
              <Rocket className="w-8 h-8 text-blue-400 animate-bounce" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 neon-glow mb-2">
              Join the Revolution
            </h2>
            <p className="text-gray-400 text-sm">Enter the matrix of innovation</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="block text-gray-300 font-semibold mb-3 text-sm tracking-wide">
                <Sparkles className="w-4 h-4 inline mr-2 text-cyan-400" />
                NAME
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
                  placeholder="Enter your name"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="form-group">
              <label className="block text-gray-300 font-semibold mb-3 text-sm tracking-wide">
                <Zap className="w-4 h-4 inline mr-2 text-purple-400" />
                ROLL NUMBER
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="rollNo"
                  value={formData.rollNo}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm"
                  placeholder="Enter your roll number"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            <div className="form-group">
              <label className="block text-gray-300 font-semibold mb-3 text-sm tracking-wide">
                <Rocket className="w-4 h-4 inline mr-2 text-blue-400" />
                BRANCH
              </label>
              <div className="relative">
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20 backdrop-blur-sm appearance-none cursor-pointer"
                >
                  <option value="">Select your branch</option>
                  <option value="CSE">Computer Science Engineering</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="EEE">Electrical & Electronics</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="CE">Civil Engineering</option>
                  <option value="CHE">Chemical Engineering</option>
                  <option value="MSC">Master of Science</option>
                  <option value="MBA">Master of Business Administration</option>
                  <option value="OTHER">Other</option>
                </select>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                {/* Custom dropdown arrow */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Fixed Enhanced Disclaimer with improved checkbox */}
            <div className="disclaimer-box relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gray-900/90 border-2 border-dashed border-yellow-400/60 rounded-2xl p-6">
                <label className="flex items-start space-x-4 cursor-pointer group">
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      name="disclaimer"
                      checked={formData.disclaimer}
                      onChange={handleChange}
                      className="sr-only" // Hide the actual checkbox
                    />
                    <div className={`w-6 h-6 rounded border-2 ${
                      formData.disclaimer 
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 border-transparent' 
                        : 'bg-black/50 border-cyan-400/70'
                      } flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-sm`}
                    >
                      {formData.disclaimer && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 text-white animate-scale-in" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2l4 -4" 
                          />
                        </svg>
                      )}
                    </div>
                    {formData.disclaimer && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <div className="text-sm font-bold leading-relaxed group-hover:text-yellow-300 transition-colors duration-300 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                    I'm signing up for E-Quisition knowing it's all on me — fun, chaos, or consequences. 
                    The organizers bear no responsibility. 😎⚡
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full relative group overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-2xl 
                hover:from-cyan-400 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 
                transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 
                neon-button flex items-center justify-center space-x-3">
                <Rocket className="w-6 h-6 animate-bounce" />
                <span>ENTER THE MATRIX</span>
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
            </button>
          </form>

          {/* Decorative corner elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;