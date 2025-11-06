import React from "react";

const CharacterCard = ({ character, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-yellow-400"
    >
      <img
        src={`https://picsum.photos/seed/${character.name}/400/250`}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 bg-gray-900 text-center">
        <h3 className="text-lg font-semibold text-yellow-400">
          {character.name}
        </h3>
        <p className="text-gray-400 mt-1">
          Birth Year: {character.birth_year}
        </p>
        <p className="text-gray-400">
          Gender: {character.gender || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
