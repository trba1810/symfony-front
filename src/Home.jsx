import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Homepage with JWT Auth</h1>
      <ul>
        <li>
          <Link to={`Login`}>Login</Link>
        </li>
        <li>
          <Link to={`SignUp`}>SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
