
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("No user found! Please signup first.");
      navigate("/signup");
      return;
    }

    if (user.email === email && user.password === password) {
      alert("Login successful!");
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-400 ... text-black">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleLogin}
        className="bg-gray-600 p-6 rounded-lg shadow-md w-80 flex flex-col gap-4"
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
          Login
        </button>
        <p
          className="text-sm text-gray-400 text-center cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/signup")}
        >
          Don’t have an account? Signup
        </p>
      </form>
    </div>
  );
};

export default Login;
