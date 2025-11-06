
// small map, fallback color if species unknown
export const speciesColor = {
  Human: "from-yellow-100 to-yellow-300",
  Droid: "from-gray-100 to-gray-300",
  Wookiee: "from-red-100 to-red-300",
  "Twi'lek": "from-purple-100 to-purple-300",
  // fallback
  default: "from-sky-100 to-sky-300",
};

// helper to get class
export const getSpeciesGradient = (speciesName) =>
  speciesColor[speciesName] || speciesColor.default;
