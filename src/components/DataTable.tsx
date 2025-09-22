import React, { useEffect, useState } from 'react';


interface Registration {
  [key: string]: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://e-quisition.onrender.com/api/sheet-data')
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

  if (loading) return <div className="text-center text-cyan-400">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Registered Participants</h2>
      <table className="w-full border border-cyan-400 rounded-xl overflow-hidden">
        <thead className="bg-cyan-900 text-white">
          <tr>
            {/* Dynamically render headers from first row */}
            {data[0] && Object.keys(data[0]).map((header) => (
              <th key={header} className="py-2 px-4">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan={data[0] ? Object.keys(data[0]).length : 1} className="text-center py-4">No registrations yet.</td></tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="even:bg-cyan-50/10">
                {Object.values(row).map((val, i) => (
                  <td key={i} className="py-2 px-4">{val}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
