import React from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import DataTable from './DataTable';
import { LogOut, Shield } from 'lucide-react';

const ProtectedDataRoute: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Admin header with logout */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-purple-500/30 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Admin Dashboard
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-900/40 hover:text-red-300 transition-all duration-300"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      {/* Data table content */}
      <DataTable />
    </div>
  );
};

export default ProtectedDataRoute;