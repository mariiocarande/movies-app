import React, { useEffect, useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import Searchbar from "./Searchbar";
import useMovies from "../hooks/useMovies";
import { Movie } from "../types/types";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { fetchMovies, moviesData, searchMovies, isLoading } = useMovies();

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (moviesData) {
      setMovies(moviesData.results);
    }
  }, [moviesData]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const displayList = () => {
    if (movies.length === 0 || !movies || isLoading) {
      return <Spinner className="text-white" />;
    }

    return (
      <div>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
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
        searchMovies={() => searchMovies(searchValue)}
      />
      {displayList()}
    </div>
  );
};

export default MovieList;
