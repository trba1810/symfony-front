import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setter } from "../tokenSlice";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };
    fetch("http://127.0.0.1:8000/api/login_check", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(setter(json.token));
        navigate("/");
        console.log(json);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Header />

      <div className="flex min-h-screen w-screen flex-col justify-center items-center px-0 py-0 lg:px-4 lg:py-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-black"
              >
                Email address
              </label>
              <div className="mt-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full p-2  border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full p-2 border placeholder-black bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
