import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";

const Projects = () => {
  const token = useSelector((state) => state.token.value);
  let navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/projects", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setProjects(data);
        console.log(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/projects/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== id)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p className="mb-4">Welcome to the Projects page!</p>

      <table className="w-3/4 mx-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-red-600">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Start Date</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-800">
              <td
                className="border border-gray-300 p-2"
                style={{ display: "none" }}
              >
                {project.id}
              </td>
              <td className="border border-gray-300 p-2">{project.name}</td>
              <td className="border border-gray-300 p-2">
                {project.startedAt}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => navigate(`/editproject/${project.id}`)}
                  className="flex items-center justify-center w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-150 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex items-center justify-center w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition duration-150 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => navigate("/createproject")}
        className="mt-4 bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition duration-150 ease-in-out"
      >
        Create Project
      </button>
    </div>
  );
};

export default Projects;
