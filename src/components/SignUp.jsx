import React, { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      userName: userName,
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
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
    <div className="flex min-h-screen w-screen flex-col justify-center items-center px-0 py-0 lg:px-4 lg:py-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-black">SignUp</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
