"use client";
import { authenticate } from "../api/Api";
import { useEffect } from "react";
import MovieList from "./components/MovieList";

const Home = () => {
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-r from-slate-900 to-slate-700">
      <section>
        <div>
          <h1 className="text-5xl font-bold text-white">Movies App</h1>
        </div>
      </section>

      <section>
        <MovieList />
      </section>
    </main>
  );
};

export default Home;
