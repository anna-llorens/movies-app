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

  const toggleWishlist = (movie) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === movie.id)) {
        return prevWishlist.filter((item) => item.id !== movie.id);
      }
      return [...prevWishlist, movie];
    });
  };

  return { wishlist, toggleWishlist };
};
