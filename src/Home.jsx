import React, { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(()=> {
  //   fetch('http://127.0.0.1:8000/projects').then(res=>{
  //     return res.json();
  //   })
  // })

  useEffect(() => {
    async function fetchProjects() {
      let response = await fetch("http://127.0.0.1:8000/projects");
      response = await response.json();
      setProjects(response);
    }

    fetchProjects();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Project List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Started At</th>
              <th className="px-4 py-2 text-left">Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b">
                <td className="px-4 py-2 text-center">{project.id}</td>
                <td className="px-4 py-2 text-left">{project.name}</td>
                <td className="px-4 py-2 text-left">
                  {new Date(project.startedAt).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-center">{project.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
