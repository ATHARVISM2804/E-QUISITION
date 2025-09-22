import React, { useEffect, useState } from 'react';

interface Registration {
  name: string;
  email: string;
  otherField: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/e-quisition-data')
      .then(res => res.json())
      .then(setData)
      .catch(() => setError('Could not fetch data'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center text-cyan-400">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Registered Participants</h2>
      <table className="w-full border border-cyan-400 rounded-xl overflow-hidden">
        <thead className="bg-cyan-900 text-white">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Roll No</th>
            <th className="py-2 px-4">Branch</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan={3} className="text-center py-4">No registrations yet.</td></tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="even:bg-cyan-50/10">
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4">{row.email}</td>
                <td className="py-2 px-4">{row.otherField}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
