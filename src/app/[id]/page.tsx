"use client";
import React, { useEffect } from "react";
import MovieDetail from "../components/MovieDetail";
import useMovies from "../hooks/useMovies";

interface Props {
  params: {
    id: string;
  };
}

const Detail: React.FC<Props> = ({ params }) => {
  const { fetchMovie, movieData } = useMovies();

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  return <MovieDetail movie={movieData} />;
};

export default Detail;
