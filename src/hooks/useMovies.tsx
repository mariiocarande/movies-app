import { useState } from "react";
import { api } from "@/api/Api";
import { AxiosResponse } from "axios";

import {
  FetchMoviesParams,
  MovieDetailType,
  MoviesDataType,
} from "../types/types";

const useMovies = () => {
  const [moviesData, setMoviesData] = useState<MoviesDataType>({
    results: [],
    total_pages: 0,
    total_results: 0,
    page: 1,
  });
  const [movieData, setMovieData] = useState<MovieDetailType>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (values?: FetchMoviesParams) => {
    setIsLoading(true);

    await api
      .get("/discover/movie", {
        params: {
          sort_by: values?.sort_by,
          with_genres: values?.with_genres,
          with_original_language: values?.with_original_language,
          primary_release_year: values?.primary_release_year,
          page: values?.page || 1,
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
