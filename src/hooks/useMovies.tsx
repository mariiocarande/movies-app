import { api } from "@/api/Api";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Movie, MovieDetailType } from "../types/types";

export interface MoviesDataType {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

const useMovies = () => {
  const [moviesData, setMoviesData] = useState<MoviesDataType>({
    results: [],
    total_pages: 0,
    total_results: 0,
    page: 1,
  });
  const [movieData, setMovieData] = useState<MovieDetailType>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (page?: number) => {
    setIsLoading(true);

    await api
      .get("/movie/popular", { params: { page } })
      .then((response: AxiosResponse) => {
        setMoviesData(response.data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        console.error("API Error: ", error.message);
      });
  };

  const fetchMovie = async (id: string) => {
    setIsLoading(true);

    await api
      .get(`/movie/${id}`)
      .then((response: AxiosResponse) => {
        setMovieData(response.data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        console.error("API Error: ", error.message);
      });
  };

  const searchMovies = async (searchValue: string, page: number) => {
    setIsLoading(true);

    await api
      .get("/search/movie", {
        params: {
          query: searchValue,
          page,
        },
      })
      .then((response: AxiosResponse) => {
        setMoviesData(response.data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        console.error("API Error: ", error.message);
      });
  };

  return {
    isLoading,
    fetchMovies,
    fetchMovie,
    searchMovies,
    movieData,
    moviesData,
  };
};

export default useMovies;
