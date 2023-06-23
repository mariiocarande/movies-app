"use client";
import React from "react";
import MovieDetail from "../../components/MovieDetail";

interface Props {
  params: {
    id: string;
  };
}

const Detail: React.FC<Props> = ({ params }) => (
  <MovieDetail movieId={params.id} />
);

export default Detail;
