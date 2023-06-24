import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
import { HiArrowLeft } from "react-icons/hi2";

import Spinner from "./Spinner";
import { LanguagesTypes } from "../types/types";
import useMovies from "@/hooks/useMovies";
import { formatToCurrency } from "@/utils/utils";

interface Props {
  movieId: string;
}

const MovieDetail: React.FC<Props> = ({ movieId }) => {
  const { fetchMovie, movieData } = useMovies();

  useEffect(() => {
    fetchMovie(movieId);
  }, [movieId]);

  return (
    <div className="min-h-screen bg-black" data-testid="movie-detail">
      <div
        className="flex bg-cover bg-center flex-col items-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`,
        }}
      >
        {movieData && (
          <div className="h-30 w-full bg-gradient-to-b from-black75 to-transparent p-2 absolute z-10">
            <div className="w-10">
              <Link href="/">
                <HiArrowLeft size={40} color="white" />
              </Link>
            </div>
          </div>
        )}
        <div className="flex justify-center w-full min-h-screen backdrop-blur-sm p-24">
          <div className="flex flex-col justify-center h-max w-max lg:w-full">
            <div className="flex flex-col bg-slate-100 shadow-xl shadow-black rounded-xl mt-4 p-4">
              {!movieData ? (
                <div className="flex justify-center" data-testid="spinner">
                  <Spinner className="text-black" />
                </div>
              ) : (
                <>
                  <div className="flex mb-6">
                    <h2 className="text-2xl font-bold text-blue-800 lg:text-5xl">
                      {movieData?.title}
                    </h2>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="group relative block overflow-hidden rounded-lg lg:min-w-max">
                      <Image
                        width={200}
                        height={200}
                        priority
                        src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
                        alt="Poster of a movie"
                        className="h-full w-full object-cover object-top transition duration-200 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-fit lg:w-max">
                      <div>
                        <h3 className="text-md font-bold text-black">
                          Description:{" "}
                        </h3>
                        <span className="text-black">
                          {movieData?.overview}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-black">
                          Release Date:{" "}
                        </h3>
                        <span className="text-black">
                          {movieData?.release_date}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-black">
                          Rating:{" "}
                        </h3>
                        <ReactStars
                          value={movieData?.vote_average / 2}
                          count={5}
                          size={24}
                          color2={"#ffd700"}
                          edit={false}
                        />
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-black">
                          Genres:{" "}
                        </h3>
                        <div className="flex gap-2">
                          {movieData?.genres.map((genre) => {
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
                        <h3 className="text-md font-bold text-black">
                          Original Language:{" "}
                        </h3>
                        <span className="text-black">
                          {movieData?.original_language === "en"
                            ? LanguagesTypes.en
                            : LanguagesTypes.es}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-black">
                          Votes:{" "}
                        </h3>
                        <span className="text-black">
                          👤{movieData?.vote_count}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-md font-bold text-black">
                          Budget:{" "}
                        </h3>
                        <span className="text-black">
                          {formatToCurrency(movieData?.budget)}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
