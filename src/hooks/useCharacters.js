// import { useEffect, useState } from "react";
// import { fetchPeople } from "../api/swapi";

// export default function useCharacters({ page = 1, search = "" }) {
//   const [data, setData] = useState({ results: [], count: 0 });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let cancelled = false;
//     setLoading(true);
//     setError(null);
//     fetchPeople(page, search)
//       .then(res => {
//         if (!cancelled) setData(res);
//       })
//       .catch(err => {
//         if (!cancelled) setError(err.message || "Error fetching");
//       })
//       .finally(() => {
//         if (!cancelled) setLoading(false);
//       });

//     return () => (cancelled = true);
//   }, [page, search]);

//   return { data, loading, error };
// }
