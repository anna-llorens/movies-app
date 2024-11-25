import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetailPage } from "./MovieDetailPage";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
}));

jest.mock("../hooks/useWishlist", () => ({
  useWishlist: jest.fn(),
}));

jest.mock("../hooks/useMovieDetails", () => ({
  useMovieDetails: jest.fn(),
}));

describe("MovieDetailPage", () => {
  beforeAll(() => {
    useLocation.mockReturnValue({
      state: { movieId: 1, listType: "Upcoming" },
    });

    useWishlist.mockReturnValue({
      wishlist: [],
      toggleWishlist: jest.fn(),
      clearWishlist: jest.fn(),
    });
  });

  it("renders the movie details", () => {
    useMovieDetails.mockReturnValue({
      movieDetails: {
        title: "Inception",
        poster_path: "/inception.jpg",
        overview: "A mind-bending thriller",
        releaseDate: "2010-07-16",
        rating: 8.8,
        genres: ["Action", "Sci-Fi"],
      },
      loading: false,
      error: null,
    });

    render(<MovieDetailPage />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("A mind-bending thriller")).toBeInTheDocument();
    expect(screen.getByText("Release Date:")).toBeInTheDocument();
    expect(screen.getByText("2010-07-16")).toBeInTheDocument();
    expect(screen.getByText("Rating:")).toBeInTheDocument();
    expect(screen.getByText("8.8")).toBeInTheDocument();
    expect(screen.getByText("Genres:")).toBeInTheDocument();
    expect(screen.getByText("Action, Sci-Fi")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    useMovieDetails.mockReturnValue({
      movieDetails: null,
      loading: true,
      error: null,
    });

    render(<MovieDetailPage />);

    expect(screen.getByText("Loading movie details...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    useMovieDetails.mockReturnValue({
      movieDetails: null,
      loading: false,
      error: "Failed to load movie details",
    });

    render(<MovieDetailPage />);

    expect(
      screen.getByText("Failed to load movie details")
    ).toBeInTheDocument();
  });

  it("calls toggleWishlist when 'Add to Wishlist' button is clicked", () => {
    const toggleWishlistMock = jest.fn();

    useMovieDetails.mockReturnValue({
      movieDetails: {
        id: 1,
        title: "Inception",
        poster_path: "/inception.jpg",
        overview: "A mind-bending thriller",
        releaseDate: "2010-07-16",
        rating: 8.8,
        genres: ["Action", "Sci-Fi"],
      },
      loading: false,
      error: null,
    });
    useWishlist.mockReturnValue({
      wishlist: [],
      toggleWishlist: toggleWishlistMock,
      clearWishlist: jest.fn(),
    });

    render(<MovieDetailPage />);

    const button = screen.getByText("Add to Wishlist");
    fireEvent.click(button);

    expect(toggleWishlistMock).toHaveBeenCalledWith({
      id: 1,
      title: "Inception",
      poster_path: "/inception.jpg",
      overview: "A mind-bending thriller",
      releaseDate: "2010-07-16",
      rating: 8.8,
      genres: ["Action", "Sci-Fi"],
    });
  });
});
