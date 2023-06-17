import Image from 'next/image';
import React from 'react';

interface Props {
  movie?: Movie;
}

const MovieItem: React.FC<Props> = ({ movie }) => (
  <div className="bg-slate-100 rounded-xl m-8 p-4">
    <div className="flex mb-6 items-end justify-between gap-4">
      <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{movie?.title}</h2>
    </div>
    <div className="flex gap-10">
      <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
        <Image
          width={200}
          height={200}
          priority
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt="Photo by Rachit Tank"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">new</span>
      </a>

      <div className="flex w-60 flex-col">
        <div>
          <h3 className="mb-2 text-md font-bold text-black">Description: </h3>
        </div>
        <span className="text-black">
          {movie?.overview}
        </span>
      </div>
    </div>
  </div>
);

export default MovieItem;
