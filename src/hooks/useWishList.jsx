import { useState, useEffect } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (movie) => {
    setWishlist((prev) => [...prev, movie]);
  };

  const removeFromWishlist = (movieId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== movieId));
  };

  const toggleWishlist = (movie) => {
    if (wishlist.some((item) => item.id === movie.id)) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist(movie);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  return {
    wishlist,
    toggleWishlist,
    clearWishlist,
  };
};
