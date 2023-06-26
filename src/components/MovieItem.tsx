import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { Movie } from "../types/types";
import { currentMonth, currentYear } from "@/utils/utils";

interface Props {
  movie?: Movie;
}
const MovieItem: React.FC<Props> = ({ movie }) => {
  const movieMonth = dayjs(movie?.release_date).month() + 1;
  const movieYear = dayjs(movie?.release_date).year();

  return (
    <div className="flex flex-col lg:flex-row bg-slate-100 shadow-xl shadow-black rounded-xl m-8 lg:w-[600px]">
      <Link
        href={`/${movie?.id}`}
        className="group relative block overflow-hidden bg-gray-100 w-full rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none "
      >
        <Image
          width={200}
          height={200}
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt="Poster of a movie"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        {movieMonth === currentMonth && movieYear === currentYear && (
          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            new
          </span>
        )}
      </Link>
      <div className="flex flex-col w-full p-4">
        <h2 className="text-2xl font-bold text-blue-800 lg:text-4xl">
          {movie?.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col w-auto">
            <span className="text-black">{movie?.overview || "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
