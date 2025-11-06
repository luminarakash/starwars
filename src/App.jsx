import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const data = await response.json();
        setCharacters(data.results || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch characters.");
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [page]);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-t from-indigo-400 ... text-white flex flex-col items-center py-10 px-4">
      

      {loading ? (
        <p className="text-gray-400 text-lg">Loading...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map((char, index) => (
            <CharacterCard
              key={index}
              character={char}
              onSelect={() => setSelectedCharacter(char)}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 disabled:opacity-40"
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-yellow-400 font-semibold text-lg">
          Page {page}
        </span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsAuthenticated(true);
  }, []);

  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <CharacterPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

