import React from "react";
import { render } from "@testing-library/react";
import MovieList from "@/components/MovieList";

describe("MovieList component", () => {
  it("should render", () => {
    render(<MovieList />);
  });
});
