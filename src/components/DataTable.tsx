import React, { useEffect, useState } from 'react';
import { ArrowLeft, Users, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Registration {
  _id: string;
  name: string;
  rollNo: string;
  branch: string;
  createdAt: string;
  updatedAt: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://e-quisition.vercel.app/data')
      .then(res => res.json())
      .then(result => {
        if (result.success && Array.isArray(result.data)) {
          setData(result.data);
        } else {
          setError('No data found');
        }
      })
      .catch(() => setError('Could not fetch data'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Database className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
          <div className="text-cyan-400 text-xl">Loading registrations...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 inline mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                E-Quisition Registrations
              </h1>
              <div className="flex items-center space-x-2 mt-2">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">{data.length} participants registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
          {data.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-400 mb-2">No registrations yet</h3>
              <p className="text-gray-500">Be the first to register for E-Quisition!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-cyan-600 to-purple-600">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wide">Sr. No.</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wide">Name</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wide">Roll No</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wide">Branch</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wide">Registered At</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {data.map((row, idx) => (
                    <tr key={row._id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="py-4 px-6 text-cyan-400 font-semibold">{idx + 1}</td>
                      <td className="py-4 px-6 text-gray-300">{row.name}</td>
                      <td className="py-4 px-6 text-gray-300">{row.rollNo}</td>
                      <td className="py-4 px-6 text-gray-300">{row.branch}</td>
                      <td className="py-4 px-6 text-gray-300">
                        {new Date(row.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats */}
        {data.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-cyan-400">{data.length}</div>
              <div className="text-gray-400">Total Registrations</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-purple-400">
                {new Set(data.map(item => item.branch)).size}
              </div>
              <div className="text-gray-400">Unique Branches</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
              <div className="text-2xl font-bold text-blue-400">Live</div>
              <div className="text-gray-400">Registration Status</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTable;
