import React, { useEffect } from "react";
import MovieItem from "./MovieItem";
import { api } from "@/api/Api";
import { AxiosResponse } from "axios";

const MovieList: React.FC = () => {
  const [movies, setMovies] = React.useState<Movies[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await api
        .get("/movie/popular", { params: { page: 1 } })
        .then((response: AxiosResponse) => {
          setMovies(response.data.results);
        })
        .catch((error: Error) => {
          console.error("Error authentication API: ", error.message);
        });
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex">
      <div className="mx-20 max-w-screen-2xl px-4 md:px-8">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieItem movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
