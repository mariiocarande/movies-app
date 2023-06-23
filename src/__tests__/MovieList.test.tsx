import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieList from "@/components/MovieList";

describe("MovieList component", () => {
  it("should render searchbar", () => {
    render(<MovieList />);
    const searchbarElement = screen.getByPlaceholderText(/Search for a movie/i);
    expect(searchbarElement).toBeInTheDocument();
  });

  it("should render spinner", () => {
    render(<MovieList />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
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
