import React, { useEffect, useState } from "react";
import useCharacters from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";
import CharacterModal from "../components/CharacterModal";
import Pagination from "../components/Pagination";

export default function Home(){
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, loading, error } = useCharacters({ page, search });
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // attach addedAt timestamp to each character for date added
    const enriched = data.results?.map(ch => ({ ...ch, _addedAt: new Date().toISOString() })) || [];
    setCharacters(enriched);
  }, [data]);

  const openModal = (char) => {
    setSelected(char);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto pt-24 p-4">
      

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {!loading && characters.length === 0 && <p>No characters found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map(ch => (
          <CharacterCard key={ch.url} character={ch} onOpen={openModal}/>
        ))}
      </div>

      <Pagination page={page} totalCount={data.count || 0} onPageChange={(p) => setPage(p)} />

      <CharacterModal open={modalOpen} onClose={() => setModalOpen(false)} character={selected} />
    </div>
  );
}
