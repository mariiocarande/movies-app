import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchMovies: () => void;
  isLoading: boolean;
}

const Searchbar: React.FC<SearchBarProps> = ({
  setSearchValue,
  searchMovies,
  searchValue,
  isLoading,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.currentTarget.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchValue !== "") {
      event.preventDefault();
      searchMovies();
    }
  };

  return (
    <div className="p-2 m-4 rounded-md bg-white">
      <div className="flex gap-2">
        <input
          placeholder="Search for a movie"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md gap-2 disabled:opacity-80"
          type="button"
          onClick={searchMovies}
          disabled={searchValue.length === 0 || isLoading}
        >
          Search
          <HiMagnifyingGlass size="20" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
