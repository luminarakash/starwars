

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-400 ... text-black">
      <h2 className="text-3xl font-bold mb-6">Signup</h2>
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-6 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-700 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-700 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300"
        >
          Signup
        </button>
        <p
          className="text-sm text-gray-400 text-center cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Signup;
