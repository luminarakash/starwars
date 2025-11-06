

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-l from-indigo-600 to-slate-50 text-black p-4 flex justify-between items-center shadow-md z-50">
      <div
  onClick={() => navigate("/")}
  className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-pink-800 
             inline-block px-4 py-2 rounded-xl border-2 border-transparent 
             bg-[length:200%_200%] 
             hover:scale-105 transition-transform duration-300 
             [border-image:linear-gradient(to_right,_#7c3aed,_#ec4899)_1]"
>
  Star Wars Character
</div>

      <div>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-400 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
