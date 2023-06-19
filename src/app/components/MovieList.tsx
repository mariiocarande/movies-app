import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { PaginationControl } from "react-bootstrap-pagination-control";

import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import { api } from "@/api/Api";
import { Movie } from "../types/types";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async (page: number) => {
    await api
      .get("/movie/popular", { params: { page } })
      .then((response: AxiosResponse) => {
        setMovies(response.data.results);
      })
      .catch((error: Error) => {
        console.error("Error authentication API: ", error.message);
      });
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  if (movies.length === 0) return <Spinner className="text-white" />;

  return (
    <div className="flex flex-col items-center">
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
        total={5000}
        limit={10}
        changePage={handlePageClick}
        ellipsis={1}
      />
    </div>
  );
};

export default MovieList;
