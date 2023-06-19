import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
import { HiArrowLeft } from "react-icons/hi2";

import Spinner from "./Spinner";
import { LanguagesTypes, MovieDetailType } from "../types/types";

interface Props {
  movie?: MovieDetailType;
}

const formatToCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const MovieDetail: React.FC<Props> = ({ movie }) => {
  return (
    <div className="min-h-screen bg-black">
      <div
        className="flex bg-cover bg-center flex-col items-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      >
        <div className="flex-1 backdrop-blur-sm p-24">
          <div className="flex justify-start w-full">
            <Link href="/">
              <HiArrowLeft size={40} />
            </Link>
          </div>
          <div className="w-full">
            {!movie ? (
              <div className="flex justify-center bg-slate-100 rounded-xl m-8 p-4 w-full">
                <div className="flex mb-6 gap-4">
                  <Spinner className="text-black" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col bg-slate-100 rounded-xl mt-4 p-4 w-full">
                <div className="flex mb-6 gap-4">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl">
                    {movie?.title}
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="group relative mb-2 block overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                    <Image
                      width={400}
                      height={400}
                      priority
                      src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                      alt="Poster of a movie"
                      className="h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="mb-2 text-md font-bold text-black">
                        Release Date:{" "}
                      </h3>
                      <span className="text-black">{movie?.release_date}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-md font-bold text-black">
                        Rating:{" "}
                      </h3>
                      <ReactStars
                        value={movie.vote_average / 2}
                        count={5}
                        size={24}
                        color2={"#ffd700"}
                        edit={false}
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 text-md font-bold text-black">
                        Genres:{" "}
                      </h3>
                      <div className="flex gap-2">
                        {movie?.genres.map((genre) => {
                          return (
                            <span
                              className="rounded-md p-2 bg-red-500 text-white"
                              key={genre.id}
                            >
                              {genre.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-md font-bold text-black">
                        Original Language:{" "}
                      </h3>
                      <span className="text-black">
                        {movie?.original_language === "en"
                          ? LanguagesTypes.en
                          : LanguagesTypes.es}
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-md font-bold text-black">
                        Votes:{" "}
                      </h3>
                      <span className="text-black">👤{movie?.vote_count}</span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-md font-bold text-black">
                        Budget:{" "}
                      </h3>
                      <span className="text-black">
                        {formatToCurrency(movie?.budget)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-6">
                  <div>
                    <h3 className="mb-2 text-md font-bold text-black">
                      Description:{" "}
                    </h3>
                    <span className="text-black">{movie?.overview}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
