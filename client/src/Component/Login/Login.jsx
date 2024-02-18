import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleConfirm = async () => {
    try {
      console.log("Username:", username);
      console.log("Password:", password);
      const response = await axios.post("http://localhost:8000/auth/login", {
        username,
        password,
      });
      console.log(response.data);
      console.log("User logged in successfully !");
    } catch (error) {
      console.error("Error posting user data:", error);
    }
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <form className=" border-gray-200  p-10">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            UserName:
          </label>
          <input
            id="username"
            type="text"
            placeholder="UserName"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div> */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          className="h-10 px-5 text-white uppercase transition-colors duration-150 border border-gray-300  bg-gray-900 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          onClick={handleConfirm}
        >
          Login
        </button>

        <Link to="/register">Don't have Accout. Register</Link>
      </form>
    </div>
  );
};

export default Login;
