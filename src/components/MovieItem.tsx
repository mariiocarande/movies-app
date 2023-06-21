import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "../types/types";

interface Props {
  movie?: Movie;
}

const todayMonth = new Date().getMonth() + 1;
const todayYear = new Date().getFullYear();

const MovieItem: React.FC<Props> = ({ movie }) => {
  const movieMonth =
    new Date(Date.parse(movie?.release_date || "")).getMonth() + 1;
  const movieYear = new Date(
    Date.parse(movie?.release_date || "")
  ).getFullYear();

  return (
    <div className="flex flex-col bg-slate-100 rounded-xl m-8 p-4">
      <div className="flex mb-6 items-end justify-between gap-4">
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
            width={200}
            height={200}
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt="Poster of a movie"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          {movieMonth === todayMonth && movieYear === todayYear && (
            <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
              new
            </span>
          )}
        </Link>

        <div className="flex w-60 flex-col">
          <div>
            <h3 className="mb-2 text-md font-bold text-black">Description: </h3>
            <span className="text-black">{movie?.overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
