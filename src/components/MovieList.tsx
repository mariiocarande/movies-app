import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { PaginationControl } from "react-bootstrap-pagination-control";

import MovieItem from "./MovieItem";
import Searchbar from "./Searchbar";
import Spinner from "./Spinner";
import useMovies from "../hooks/useMovies";
import { currentYear, yearOptions } from "@/utils/utils";
import { FetchMoviesParams, InitialValues } from "@/types/types";
import ScrollToTopButton from "./ScrollToTopButton";

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { fetchMovies, moviesData, searchMovies, isLoading } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    if (!searchValue) {
      fetchMovies({ page });
    }

    if (searchValue) {
      searchMovies(searchValue, page);
    }
  };

  const displayList = () => {
    if (moviesData.results.length === 0 || !moviesData || isLoading) {
      return <Spinner data-testid="spinner" className="text-white mt-40" />;
    }

    return (
      <div>
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ul className="p-0">
            {moviesData.results.map((movie) => (
              <li
                key={movie.id}
                data-testid="movie-item"
                className="flex justify-center"
              >
                <MovieItem movie={movie} />
              </li>
            ))}
          </ul>
        </div>
        <ScrollToTopButton />

        <PaginationControl
          page={currentPage}
          between={4}
          total={moviesData.total_pages}
          limit={10}
          changePage={handlePageClick}
          ellipsis={1}
        />
      </div>
    );
  };

  const handleSubmit = (values: FetchMoviesParams) => {
    fetchMovies(values);
  };

  const initialValues: InitialValues = {
    with_genres: "",
    primary_release_year: currentYear.toString(),
    with_original_language: "",
    sort_by: "popularity.desc",
    page: 1,
  };

  return (
    <div className="flex flex-col items-center">
      <Searchbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchMovies={() => searchMovies(searchValue, currentPage)}
        isLoading={isLoading}
      />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleReset, dirty }) => {
          const onResetForm = () => {
            handleReset();
            fetchMovies();
          };

          return (
            <Form className="lg:flex space-y-4 lg:space-y-0 items-center gap-2 bg-slate-100 rounded-md p-4">
              <div className="flex items-center">
                <label
                  htmlFor="with_genres"
                  className="text-black font-bold mr-2"
                >
                  Genre:
                </label>
                <Field
                  as="select"
                  id="with_genres"
                  name="with_genres"
                  className="flex w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Genres</option>
                  <option value="28">Action</option>
                  <option value="12">Adventure</option>
                  <option value="16">Animation</option>
                  <option value="80">Crime</option>
                  <option value="99">Documentary</option>
                  <option value="10751">Family</option>
                  <option value="14">Fantasy</option>
                  <option value="36">History</option>
                  <option value="27">Horror</option>
                  <option value="10402">Music</option>
                  <option value="9648">Mystery</option>
                  <option value="10749">Romance</option>
                  <option value="878">Science Fiction</option>
                  <option value="10770">TV Movie</option>
                  <option value="53">Thriller</option>
                  <option value="10752">War</option>
                  <option value="37">Western</option>
                  <option value="35">Comedy</option>
                  <option value="18">Drama</option>
                </Field>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="primary_release_year"
                  className="text-black font-bold mr-2"
                >
                  Year:
                </label>
                <Field
                  as="select"
                  id="primary_release_year"
                  name="primary_release_year"
                  className="flex w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Years</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="with_original_language"
                  className="text-black font-bold mr-2"
                >
                  Language:
                </label>
                <Field
                  as="select"
                  id="with_original_language"
                  name="with_original_language"
                  className="flex w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">-</option>
                  <option value="en">🇺🇸 English</option>
                  <option value="es">🇪🇸 Spanish</option>
                </Field>
              </div>
              <div className="flex items-center">
                <label htmlFor="sort_by" className="text-black font-bold mr-2">
                  Sort By:
                </label>
                <Field
                  as="select"
                  id="sort_by"
                  name="sort_by"
                  className="flex border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">None</option>
                  <option value="popularity.desc">
                    Popularity (Descending)
                  </option>
                  <option value="popularity.asc">Popularity (Ascending)</option>
                </Field>
              </div>
              <div className="lg:flex lg:items-center space-y-2 lg:space-y-0 lg:space-x-2">
                <button
                  type="submit"
                  className="flex justify-center w-full lg:w-fit px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-80"
                  disabled={!dirty}
                >
                  Apply Filters
                </button>
                <button
                  type="button"
                  onClick={onResetForm}
                  className="flex justify-center w-full lg:w-fit px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-80"
                >
                  Clear Filters
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
      {displayList()}
    </div>
  );
};

export default MovieList;
