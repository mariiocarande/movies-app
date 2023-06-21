import React from "react";
import { render } from "@testing-library/react";
import Searchbar from "@/components/Searchbar";

describe("Searchbar component", () => {
  it("should render", () => {
    render(
      <Searchbar
        searchValue={""}
        setSearchValue={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        searchMovies={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
