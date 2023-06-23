import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Movie } from "../types/types";
import dayjs from "dayjs";

interface Props {
  movie?: Movie;
}
const todayMonth = dayjs().month() + 1;
const todayYear = dayjs().year();

const MovieItem: React.FC<Props> = ({ movie }) => {
  const movieMonth = dayjs(movie?.release_date).month() + 1;
  const movieYear = dayjs(movie?.release_date).year();

  return (
    <div className="flex flex-col bg-slate-100 rounded-xl m-8 p-4 lg:w-[600px]">
      <div className="flex mb-6">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
          {movie?.title}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <Link
          href={`/${movie?.id}`}
          className="group relative mb-2 block overflow-hidden rounded-lg bg-gray-100 lg:mb-3 w-[300px]"
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

        <div className="flex flex-col w-min">
          <h3 className="mb-2 text-md font-bold text-black">Description: </h3>
          <span className="text-black">{movie?.overview || "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
