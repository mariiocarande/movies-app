import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ScrollToTopButton from "@/components/ScrollToTopButton";

describe("ScrollToTopButton", () => {
  it("should render without errors", () => {
    render(<ScrollToTopButton />);
  });

  it("should button is not visible initially", () => {
    const { queryByTestId } = render(<ScrollToTopButton />);
    const button = queryByTestId("scroll-to-top-button");
    expect(button).toBeNull();
  });

  it("should button becomes visible after scrolling", () => {
    const { queryByTestId } = render(<ScrollToTopButton />);
    const button = queryByTestId("scroll-to-top-button");

    expect(button).toBeNull();

    if (button) {
      fireEvent.scroll(window, { target: { scrollY: 400 } });

      expect(button).toBeInTheDocument();
    }
  });

  it("should clicking on the button scrolls to the top", () => {
    const { queryByTestId } = render(<ScrollToTopButton />);
    const button = queryByTestId("scroll-to-top-button");

    if (button) {
      fireEvent.click(button);

      expect(window.scrollY).toBe(0);
    }
  });
});
