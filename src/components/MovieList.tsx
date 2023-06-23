import React, { useEffect, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import Searchbar from "./Searchbar";
import useMovies from "../hooks/useMovies";

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { fetchMovies, moviesData, searchMovies, isLoading } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    if (!searchValue) {
      fetchMovies(page);
    }

    if (searchValue) {
      searchMovies(searchValue, page);
    }
  };

  const displayList = () => {
    if (moviesData.results.length === 0 || !moviesData || isLoading) {
      return <Spinner data-testid="spinner" className="text-white mt-40" />;
    }

    return (
      <div>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ul className="p-0">
            {moviesData.results.map((movie) => (
              <li
                key={movie.id}
                data-testid="movie-item"
                className="flex justify-center"
              >
                <MovieItem movie={movie} />
              </li>
            ))}
          </ul>
        </div>

        <PaginationControl
          page={currentPage}
          between={4}
          total={moviesData.total_pages}
          limit={10}
          changePage={handlePageClick}
          ellipsis={1}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Searchbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchMovies={() => searchMovies(searchValue, currentPage)}
        isLoading={isLoading}
      />
      {displayList()}
    </div>
  );
};

export default MovieList;
