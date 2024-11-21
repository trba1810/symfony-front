import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState("");
  const token = useSelector((state) => state.token.value);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/projects/getproject/${id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setProject(data);
    };

    fetchProject();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
    };
    fetch(`http://127.0.0.1:8000/api/projects/edit/${id}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) =>
        response.json().then((json) => {
          console.log(json);
          navigate("/projects");
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen w-screen flex-col justify-center items-center px-0 py-0 lg:px-4 lg:py-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg ">
          <h1 className="text-xl font-bold mb-4 text-black">Edit Project</h1>
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <input
              placeholder={project.name}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
