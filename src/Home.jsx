import React, { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState(null);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        
      }
    };

    fetchProjects();
  }, []);

  if (projects === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-50 uppercase text-sm leading-normal text-center">
            <th className="py-3 px-6 text-left">Key</th>
            <th className="py-3 px-6 text-left">Value</th>
          </tr>
        </thead>
        <tbody className="text-md font-sans leading-6 text-left text-gray-900">
          {Object.entries(projects).map(([key, value]) => (
            <tr key={key} className="border-b border-gray-200 hover:bg-gray-100">
              
              <td className="py-3 px-6 whitespace-nowrap">
                {typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}

export default Home;
