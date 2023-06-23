import React from "react";
import { render } from "@testing-library/react";
import MovieItem from "@/components/MovieItem";

describe("MovieItem component", () => {
  it("should render", () => {
    render(<MovieItem />);
  });
});
