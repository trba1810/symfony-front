import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const EditProject = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(`/api/projects/${id}`);
      const data = await response.json();
    };

    fetchProject();
  }, [id]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default EditProject;
