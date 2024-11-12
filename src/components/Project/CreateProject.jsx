import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useSelector } from "react-redux";

const CreateProject = () => {
  const token = useSelector((state) => state.token.value);
  const [name, setName] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      totalHours: totalHours,
      date: date,
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
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
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

            <Datepicker
              useRange={false}
              asSingle={true}
              value={date}
              onChange={(date) => setDate(date)}
            />
            <input
              placeholder="Hours"
              type="number"
              min="0"
              max="24"
              value={totalHours}
              onChange={(e) => setTotalHours(e.target.value)}
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

export default CreateProject;
