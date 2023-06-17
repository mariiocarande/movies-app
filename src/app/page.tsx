"use client";
import { authenticate } from "../api/Api";
import { useEffect } from "react";
import MovieList from "./components/MovieList";
import Container from "./components/Container";

const Home = () => {
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <Container>
      <section>
        <div>
          <h1 className="text-5xl font-bold text-white">Movies App</h1>
        </div>
      </section>

      <section>
        <MovieList />
      </section>
    </Container>
  );
};

export default Home;
