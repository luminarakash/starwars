import React, { useEffect, useState } from "react";

const CharacterModal = ({ character, onClose }) => {
  const [extraData, setExtraData] = useState({ homeworld: "", films: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const homeworldRes = await fetch(character.homeworld);
        const homeworldData = await homeworldRes.json();

        const filmData = await Promise.all(
          character.films.map(async (filmUrl) => {
            const res = await fetch(filmUrl);
            const data = await res.json();
            return data.title;
          })
        );

        setExtraData({ homeworld: homeworldData.name, films: filmData });
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterDetails();
  }, [character]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 text-yellow-400 text-xl z-50">
        Fetching details...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative border border-yellow-500">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-yellow-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        <img
          src={`https://picsum.photos/seed/${character.name}/600/300`}
          alt={character.name}
          className="rounded-lg mb-4 w-full h-48 object-cover border border-gray-700"
        />

        <h2 className="text-3xl font-bold mb-4 text-yellow-400 text-center">
          {character.name}
        </h2>

        <div className="space-y-2 text-sm">
          <p><strong>Height:</strong> {character.height} cm</p>
          <p><strong>Mass:</strong> {character.mass} kg</p>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Homeworld:</strong> {extraData.homeworld}</p>

          <div className="mt-3">
            <strong>Films:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              {extraData.films.length > 0 ? (
                extraData.films.map((film, i) => <li key={i}>{film}</li>)
              ) : (
                <li>No films available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
