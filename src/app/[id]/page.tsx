"use client";
import React, { useEffect } from "react";
import { api } from "@/api/Api";
import { AxiosResponse } from "axios";
import { MovieDetailType } from "../types/types";
import MovieDetail from "../components/MovieDetail";

interface Props {
  params: {
    id: string;
  };
}

const Detail: React.FC<Props> = ({ params }) => {
  const [movie, setMovie] = React.useState<MovieDetailType>();

  useEffect(() => {
    const fetchMovie = async () => {
      await api
        .get(`/movie/${params.id}`)
        .then((response: AxiosResponse) => {
          setMovie(response.data);
        })
        .catch((error: Error) => {
          console.error("Error authentication API: ", error.message);
        });
    };

    fetchMovie();
  }, [params.id]);

  return <MovieDetail movie={movie} />;
};

export default Detail;
