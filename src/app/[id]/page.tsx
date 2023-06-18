"use client";
import React, { useEffect } from "react";
import Container from "../components/Container";
import { api } from "@/api/Api";
import { AxiosResponse } from "axios";
import MovieItem from "../components/MovieItem";
import { HiArrowLeft } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

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

  if (!movie) return;

  return (
    <Container>
      <div className="flex justify-start w-full">
        <Link href="/">
          <HiArrowLeft size={40} />
        </Link>
      </div>
      <section className="w-full">
        {!movie ? (
          <>Loading...</>
        ) : (
          <div className="flex flex-col bg-slate-100 rounded-xl m-8 p-4 w-full">
            <div className="flex mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {movie?.title}
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
              <Link
                href={`/${movie?.id}`}
                className="group relative mb-2 block overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <Image
                  width={400}
                  height={400}
                  priority
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-col">
                <div>
                  <h3 className="mb-2 text-md font-bold text-black">
                    Release Date:{" "}
                  </h3>
                  <span className="text-black">{movie?.release_date}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold text-black">
                    Popularity:{" "}
                  </h3>
                  <span className="text-black">{movie?.popularity}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold text-black">
                    Genres:{" "}
                  </h3>
                  <span className="text-black">{movie?.genre_ids}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold text-black">
                    Language:{" "}
                  </h3>
                  <span className="text-black">{movie?.original_language}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-md font-bold text-black">Votes: </h3>
                  <span className="text-black">{movie?.vote_count}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div>
                <h3 className="mb-2 text-md font-bold text-black">
                  Description:{" "}
                </h3>
                <span className="text-black">{movie?.overview}</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Detail;
