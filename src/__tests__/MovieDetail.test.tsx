import { render, screen } from "@testing-library/react";
import MovieDetail from "@/components/MovieDetail";

describe("MovieDetail component", () => {
  it("should render MovieDetail", () => {
    render(<MovieDetail movieId="640146" />);
    const movieDetailElement = screen.getByTestId("movie-detail");
    expect(movieDetailElement).toBeInTheDocument();
  });
});
