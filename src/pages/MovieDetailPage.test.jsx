import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useParams, useSearchParams } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { MovieDetailPage } from "./MovieDetailPage";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock("../hooks/useWishlist", () => ({
  useWishlist: jest.fn(),
}));

jest.mock("../hooks/useMovieDetails", () => ({
  useMovieDetails: jest.fn(),
}));

describe("MovieDetailPage", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("renders the movie details", () => {
    useParams.mockReturnValue({ movieId: "1" });
    useSearchParams.mockReturnValue([
      new URLSearchParams({ listType: "Upcoming" }),
    ]);
    useMovieDetails.mockReturnValue({
      movieDetails: {
        id: 1,
        title: "Inception",
        poster_path: "/inception.jpg",
        overview: "A mind-bending thriller",
        releaseDate: "2010-07-16",
        rating: 8.8,
        voteCount: 15000,
        genres: ["Action", "Sci-Fi"],
        tagline: "Your mind is the scene of the crime.",
      },
      loading: false,
      error: null,
    });
    useWishlist.mockReturnValue({
      wishlist: [],
      toggleWishlist: jest.fn(),
      clearWishlist: jest.fn(),
    });

    render(<MovieDetailPage />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(
      screen.getByText("Your mind is the scene of the crime.")
    ).toBeInTheDocument();
    expect(screen.getByText("A mind-bending thriller")).toBeInTheDocument();
    expect(screen.getByText("Release Date:")).toBeInTheDocument();
    expect(screen.getByText("2010-07-16")).toBeInTheDocument();
    expect(screen.getByText("Rating:")).toBeInTheDocument();
    expect(screen.getByText("8.8 (15000 votes)")).toBeInTheDocument();
    expect(screen.getByText("Genres:")).toBeInTheDocument();
    expect(screen.getByText("Action, Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("Add to Wishlist")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    useParams.mockReturnValue({ movieId: "1" });
    useSearchParams.mockReturnValue([
      new URLSearchParams({ listType: "Upcoming" }),
    ]);
    useMovieDetails.mockReturnValue({
      movieDetails: null,
      loading: true,
      error: null,
    });
    useWishlist.mockReturnValue({
      wishlist: [],
      toggleWishlist: jest.fn(),
      clearWishlist: jest.fn(),
    });

    render(<MovieDetailPage />);

    expect(screen.getByText("Loading movie details...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    useParams.mockReturnValue({ movieId: "1" });
    useSearchParams.mockReturnValue([
      new URLSearchParams({ listType: "Upcoming" }),
    ]);
    useMovieDetails.mockReturnValue({
      movieDetails: null,
      loading: false,
      error: "Failed to load movie details",
    });
    useWishlist.mockReturnValue({
      wishlist: [],
      toggleWishlist: jest.fn(),
      clearWishlist: jest.fn(),
    });

    render(<MovieDetailPage />);

    expect(
      screen.getByText("Failed to load movie details")
    ).toBeInTheDocument();
  });

  it("calls toggleWishlist when 'Add to Wishlist' button is clicked", () => {
    const toggleWishlistMock = jest.fn();

    useParams.mockReturnValue({ movieId: "1" });
    useSearchParams.mockReturnValue([
      new URLSearchParams({ listType: "Upcoming" }),
    ]);
    useMovieDetails.mockReturnValue({
      movieDetails: {
        id: 1,
        title: "Inception",
        poster_path: "/inception.jpg",
        overview: "A mind-bending thriller",
        releaseDate: "2010-07-16",
        rating: 8.8,
        voteCount: 15000,
        genres: ["Action", "Sci-Fi"],
        tagline: "Your mind is the scene of the crime.",
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
      voteCount: 15000,
      genres: ["Action", "Sci-Fi"],
      tagline: "Your mind is the scene of the crime.",
    });
  });

  it("renders 'Remove from Wishlist' button when movie is in the wishlist", () => {
    const toggleWishlistMock = jest.fn();

    useParams.mockReturnValue({ movieId: "1" });
    useSearchParams.mockReturnValue([
      new URLSearchParams({ listType: "Upcoming" }),
    ]);
    useMovieDetails.mockReturnValue({
      movieDetails: {
        id: 1,
        title: "Inception",
        poster_path: "/inception.jpg",
        overview: "A mind-bending thriller",
        releaseDate: "2010-07-16",
        rating: 8.8,
        voteCount: 15000,
        genres: ["Action", "Sci-Fi"],
        tagline: "Your mind is the scene of the crime.",
      },
      loading: false,
      error: null,
    });
    useWishlist.mockReturnValue({
      wishlist: [
        {
          id: 1,
          title: "Inception",
          poster_path: "/inception.jpg",
        },
      ],
      toggleWishlist: toggleWishlistMock,
      clearWishlist: jest.fn(),
    });

    render(<MovieDetailPage />);

    expect(screen.getByText("Remove from Wishlist")).toBeInTheDocument();
  });
});
