import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h2>Projects</h2>
      <p>Welcome to the Projects page!</p>

      <button onClick={() => navigate("/createproject")}>Create Project</button>
    </div>
  );
};

export default Projects;
