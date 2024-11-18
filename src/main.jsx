import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import { Provider } from "react-redux";
import store from "./store.jsx";
import Projects from "./components/Project/Projects.jsx";
import CreateProject from "./components/Project/CreateProject.jsx";
import EditProject from "./components/Project/EditProject.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="projects" element={<Projects />} />
          <Route path="createproject" element={<CreateProject />} />
          <Route path="editproject" element={<EditProject />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
