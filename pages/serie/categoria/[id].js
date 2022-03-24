import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getMoviesPopular } from "../../api/movies/movies";

function Index() {
  const [moviePop, setMoviePop] = useState();

  useEffect(() => {
    getMoviesPopular().then((val) => setMoviePop(val));
    console.log(moviePop);
  }, []);

  return (
    <main className="mt-20">
      <form className="w-screen p-5">
        <input
          className="2xl:text-xl focus:outline-0  px-5 py-3 w-full  font-semibold tracking-wider bg-neutral-900	text-white border-solid border-b-4 rounded-md border-b-red-700"
          type="search"
          placeholder="Buscar Serie"
        />
      </form>
      <style jsx>{`
        h1 {
          color: white;
        }
      `}</style>
    </main>
  );
}

export default Index;
