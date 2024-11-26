import { useState, useEffect, useRef } from "react";
import { MovieItem } from "./MovieItem";
import { fetchMovies } from "../api";

export const Carousel = ({ title, listType, movies: initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies); // Start with SSR movies
  const [page, setPage] = useState(2);
  const [isFetching, setIsFetching] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const carouselRef = useRef(null);

  // Fetch additional movies when page changes
  useEffect(() => {
    if (page === 2 && movies.length > 0) return;
    const loadMovies = async () => {
      setIsFetching(true);
      const newMovies = await fetchMovies(listType, page);
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setIsFetching(false);
    };
    loadMovies();
  }, [listType, page]);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);

      if (scrollLeft + clientWidth >= scrollWidth - 1 && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = 800;
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-section">
      <h2>{title}</h2>
      <div className="carousel-container">
        {canScrollLeft && (
          <button
            className="scroll-btn left"
            onClick={() => scrollCarousel(-1)}
            aria-label="Scroll Left"
          >
            ‹
          </button>
        )}
        <div className="carousel" ref={carouselRef} onScroll={handleScroll}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} listType={listType} />
          ))}
          {isFetching && <div className="loading">Loading...</div>}
        </div>
        {canScrollRight && (
          <button
            className="scroll-btn right"
            onClick={() => scrollCarousel(1)}
            aria-label="Scroll Right"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};
