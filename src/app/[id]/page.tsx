"use client";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { api } from "@/api/Api";
import { AxiosResponse } from "axios";
import MovieItem from "../components/MovieItem";
import { HiArrowLeft } from "react-icons/hi2";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

const Detail: React.FC<Props> = ({ params }) => {
  const [movie, setMovie] = React.useState<Movie>();

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

  return (
    <Container>
      <div className="flex justify-start w-full">
        <Link href="/">
          <HiArrowLeft size={20} />
        </Link>
      </div>
      <section>
        <MovieItem movie={movie} />
      </section>
    </Container>
  );
};

export default Detail;
