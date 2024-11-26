const API_KEY = "de6d94b323d426325f1330a0876d979d";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (listType, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${listType}?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching ${listType} movies: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Failed to fetch ${listType} movies:`, error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      id: data.id,
      title: data.title,
      overview: data.overview,
      poster_path: data.poster_path,
      releaseDate: data.release_date,
      rating: data.vote_average,
      tagline: data.tagline,
      voteCount: data.vote_count,
      genres: data.genres.map((genre) => genre.name),
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
