import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div>
      <h1>create project page</h1>
      // napravi formu sa ovim poljima: ime projekta,datum pocetka i brojem sati
      u rasponu od 0-24
      <div className="flex min-h-screen w-screen flex-col justify-center items-center px-0 py-0 lg:px-4 lg:py-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg ">
          <h1 className="text-xl font-bold mb-4 text-black">Create Project</h1>
          <form className="space-y-4">
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
