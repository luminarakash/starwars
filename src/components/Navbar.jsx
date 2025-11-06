import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");    
    setIsAuthenticated(false);          
    navigate("/login");                 // redirect to login page
  };

  return (
    <nav className="bg-blue-600 text-white p-2 flex justify-between items-center">
      <div className="font-bold text-3xl">Star Wars Character</div>
      <div>
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-blue-900 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

