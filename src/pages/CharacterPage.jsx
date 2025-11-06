import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import { logout } from "../utils/auth";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white pt-24 py-10 px-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-yellow-400">Star Wars Character</h1>
        <button
          onClick={() => {
            logout();
            window.location.reload();
          }}
          className="px-4 py-2 bg-blue-900 rounded-md hover:bg-red-400"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
        <span className="text-yellow-400 font-semibold text-lg">Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          Next
        </button>
      </div>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
};

export default CharacterPage;

