import { render, screen } from "@testing-library/react";
import MovieDetail from "@/components/MovieDetail";

jest.mock("../hooks/useMovies", () => {
  return jest.fn(() => ({
    fetchMovie: jest.fn(),
    movieData: {
      id: "640146",
      title: "Movie Title",
      backdrop_path: "/backdrop_path.jpg",
      poster_path: "/poster_path.jpg",
      overview: "Movie overview",
      release_date: "2022-01-01",
      vote_average: 8,
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Drama" },
      ],
      original_language: "en",
      vote_count: 1234,
      budget: 1000000,
    },
  }));
});

describe("MovieDetail component", () => {
  it("should render MovieDetail", () => {
    render(<MovieDetail movieId="640146" />);
    const movieDetailElement = screen.getByTestId("movie-detail");
    expect(movieDetailElement).toBeInTheDocument();
  });

  it("should render movie data", () => {
    render(<MovieDetail movieId="640146" />);

    expect(screen.getByTestId("movie-detail")).toBeInTheDocument();
    expect(screen.getByText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Movie overview")).toBeInTheDocument();
    expect(screen.getByText("2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
    expect(screen.getByText(/English/)).toBeInTheDocument();
    expect(screen.getByText("👤1234")).toBeInTheDocument();
    expect(screen.getByText("$1,000,000.00")).toBeInTheDocument();
  });
});
