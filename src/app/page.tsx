"use client"
import { authenticate } from '../api/Api';
import { useEffect } from 'react';
import List from './components/MovieList';

const Home = () => {
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-slate-900 to-slate-700">
      <section>
        <div>
          <h1 className="text-5xl font-bold text-white">Movies App</h1>
        </div>
      </section>

      <section>
        <List />
      </section>
    </main>
  );
};

export default Home;
