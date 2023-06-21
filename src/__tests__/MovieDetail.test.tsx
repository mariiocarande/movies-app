import React from "react";
import { render } from "@testing-library/react";
import MovieDetail from "@/components/MovieDetail";

describe("MovieDetail component", () => {
  it("should render", () => {
    render(<MovieDetail />);
  });
});
