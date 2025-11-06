
import React from "react";

export default function Pagination({ page, totalCount, onPageChange }) {
  const pageSize = 10; // SWAPI default
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div className="flex items-center gap-2 justify-center pt-24 mt-6">
      <button onClick={() => onPageChange(1)} disabled={page === 1} className="px-3 py-1 rounded border">
        First
      </button>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="px-3 py-1 rounded border">
        Prev
      </button>

      <span className="px-3 py-1">{page} / {totalPages}</span>

      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} className="px-3 py-1 rounded border">
        Next
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={page === totalPages} className="px-3 py-1 rounded border">
        Last
      </button>
    </div>
  );
}
