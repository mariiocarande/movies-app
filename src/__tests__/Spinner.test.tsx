import React from "react";
import { render } from "@testing-library/react";
import Spinner from "@/components/Spinner";

describe("Spinner", () => {
  it("should render", () => {
    const { getByTestId } = render(<Spinner />);

    expect(getByTestId("spinner")).toBeInTheDocument();
  });

  it("adds a custom className when passed as a prop", () => {
    const { getByTestId } = render(<Spinner className="text-white" />);

    expect(getByTestId("spinner")).toHaveClass("text-white");
  });
});
