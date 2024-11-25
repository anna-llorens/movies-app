import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api";

export const useMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const details = await fetchMovieDetails(movieId);
          setMovieDetails(details);
          setError(null);
        } catch (err) {
          console.error("Error fetching movie details:", err);
          setError("Failed to load movie details.");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setError("Invalid movie ID.");
      setLoading(false);
    }
  }, [movieId]);

  return { movieDetails, loading, error };
};
