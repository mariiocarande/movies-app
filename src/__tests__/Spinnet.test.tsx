import React from "react";
import { render } from "@testing-library/react";
import Spinner from "@/components/Spinner";

describe("Spinner component", () => {
  it("should render", () => {
    render(<Spinner />);
  });
});
