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
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.disclaimer) {
      alert('Please accept the disclaimer to continue!');
      return;
    }
    setLoading(true);
    try {
      // const response = await fetch('http://localhost:5000/submit', {
      const response = await fetch('https://e-quisition.onrender.com/submit', {
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
        setError(data.message || 'Registration failed');
        setLoading(false);
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
    setLoading(false);
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

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-6 animate-spin">
            <Rocket className="w-16 h-16 text-cyan-400" />
          </div>
          <div className="text-xl font-bold text-cyan-400 animate-pulse">Submitting...</div>
        </div>
      ) : (
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
              {/* ...existing code... */}
            </form>

            {/* Decorative corner elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;