import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, LogIn } from 'lucide-react';
import { useAuth } from './AuthContext';

interface LoginFormProps {
  onLoginSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      const success = login(email, password);
      
      if (success) {
        setError('');
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-purple-500/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyan-400/30 rounded-full animate-spin-slow-reverse"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-40 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-40 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>

      {/* Login form container */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
          {/* Glowing border effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-sm rounded-2xl -z-10"></div>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
              Admin Access
            </h2>
            <p className="text-gray-400 mt-2">Enter your credentials to access data</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Enter admin email"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-black/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </>
              )}
            </button>
          </form>

       
        </div>
      </div>
    </div>
  );
};

export default LoginForm;