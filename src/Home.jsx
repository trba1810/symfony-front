import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((state) => state.token.value);
  console.log("token: ", token);
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Homepage with JWT Auth</h1>
    </div>
  );
};

export default Home;
