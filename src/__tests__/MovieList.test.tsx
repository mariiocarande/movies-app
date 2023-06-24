import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieList from "@/components/MovieList";

jest.mock("../hooks/useMovies", () => {
  return jest.fn(() => ({
    fetchMovies: jest.fn(),
    moviesData: {
      results: [
        { id: 1, title: "The Matrix", director: "Lana Wachowski" },
        { id: 2, title: "The Godfather", director: "Francis Ford Coppola" },
      ],
    },
  }));
});

describe("MovieList component", () => {
  it("should render searchbar", () => {
    render(<MovieList />);
    const searchbarElement = screen.getByPlaceholderText(/Search for a movie/i);
    expect(searchbarElement).toBeInTheDocument();
  });

  it("should render movie items", async () => {
    render(<MovieList />);
    const movieItemElements = await screen.findAllByTestId("movie-item");
    expect(movieItemElements.length).toBeGreaterThan(0);
  });

  it("should can search movies", async () => {
    render(<MovieList />);
    const searchbarElement = screen.getByPlaceholderText(/Search for a movie/i);
    await act(async () => {
      userEvent.type(searchbarElement, "avengers");
      const searchButton = screen.getByText(/Search/i);
      userEvent.click(searchButton);
    });
    const movieItemElements = await screen.findAllByTestId("movie-item");
    expect(movieItemElements.length).toBeGreaterThan(0);
  });
});
