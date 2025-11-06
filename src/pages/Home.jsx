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
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Star Wars Character</h1>
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search by name..."
          className="border rounded px-3 py-2"
        />
      </header>

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
