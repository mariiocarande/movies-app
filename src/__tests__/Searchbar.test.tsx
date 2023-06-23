import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Searchbar from "@/components/Searchbar";

describe("Searchbar", () => {
  it("should render", () => {
    const setSearchValue = jest.fn();
    const searchMovies = jest.fn();

    render(
      <Searchbar
        searchValue=""
        setSearchValue={setSearchValue}
        searchMovies={searchMovies}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search for a movie");
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call setSearchValue on input change", () => {
    const setSearchValue = jest.fn();
    const searchMovies = jest.fn();

    render(
      <Searchbar
        searchValue=""
        setSearchValue={setSearchValue}
        searchMovies={searchMovies}
      />
    );

    const inputElement = screen.getByPlaceholderText("Search for a movie");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(setSearchValue).toHaveBeenCalledWith("test");
  });

  it("should call searchMovies on button click", () => {
    const setSearchValue = jest.fn();
    const searchMovies = jest.fn();

    render(
      <Searchbar
        searchValue="test"
        setSearchValue={setSearchValue}
        searchMovies={searchMovies}
      />
    );

    const buttonElement = screen.getByText("Search");
    fireEvent.click(buttonElement);

    expect(searchMovies).toHaveBeenCalled();
  });

  it("should disable button when searchValue is empty", () => {
    const setSearchValue = jest.fn();
    const searchMovies = jest.fn();

    render(
      <Searchbar
        searchValue=""
        setSearchValue={setSearchValue}
        searchMovies={searchMovies}
      />
    );

    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeDisabled();
  });
});
