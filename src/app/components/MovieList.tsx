import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { api } from "@/api/Api";
import { AxiosResponse } from "axios";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async (page: number) => {
    await api
      .get("/movie/popular", { params: { page } })
      .then((response: AxiosResponse) => {
        setMovies(response.data.results.splice(0, 10));
        setTotalPages(response.data.total_pages);
      })
      .catch((error: Error) => {
        console.error("Error authentication API: ", error.message);
      });
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

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

      <div className="flex gap-4">
        {currentPage !== 1 && (
          <button
            className="bg-slate-100 rounded-sm border text-black"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
        )}
        {currentPage !== totalPages && (
          <button
            className="bg-slate-100 rounded-sm border text-black"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
