import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const token = useSelector((state) => state.token.value);
  const [name, setName] = useState("");
  const [startedAt, setStartedAt] = useState(new Date());
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      startedAt: startedAt,
    };

    fetch("http://127.0.0.1:8000/api/projects/create", {
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
      <h1>create project page</h1>
      // napravi formu sa ovim poljima: ime projekta,datum pocetka i brojem sati
      u rasponu od 0-24
      <div className="flex min-h-screen w-screen flex-col justify-center items-center px-0 py-0 lg:px-4 lg:py-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg ">
          <h1 className="text-xl font-bold mb-4 text-black">Create Project</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <DatePicker
              selected={startedAt}
              onChange={(date) => setStartedAt(date)}
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

export default CreateProject;
