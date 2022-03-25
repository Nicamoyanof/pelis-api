// import { useEffect, useState } from "react/cjs/react.production.min";
import { useState, useEffect } from "react/cjs/react.development";
import TrailerHome from "../../components/Home/TrailerHome";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import styles from "../../styles/Home.module.css";
import { getGenres, getTotalList } from "../api/genres/genres";
import { getMovieGenres, getMoviesPopular } from "../api/movies/movies";
import { getSerieGenres, getSeriesPopular } from "../api/series/series";

export default function Index(props) {
  const [serieTotal, setSerieTotal] = useState();
  const [list, setList] = useState();

  const arrListSeries = [];
 console.log(props.genres)
  useEffect(async () => {
    await props.genres.map((genr) => {
      getTotalList('tv' , genr.id).then((value) => arrListSeries.push(value));
    });
    if (typeof arrListSeries !== "undefined" && arrListSeries.length > 0) {
      console.log(arrListSeries);
    }

    setList(await Promise.all(
      props.genres.map(async (item) => {
        return await getTotalList('tv', item.id);
      })
    ));

  }, []);

  // const mapFinal = Array.from(serieTotal?serieTotal:'')

  if (list) {
    

    return (
      <div>
        <TrailerHome />
        {list.map((item, index) => {
          return (
            <SwiperMovie list={item.results} category={props.genres[index]} url="serie" />
          );
        })}

        <style jsx>{`
          h1 {
            color: #fff;
          }
        `}</style>
      </div>
    );
  }
  return <div>Error</div>;
}

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const list = await getGenres('tv');

  // Props returned will be passed to the page component

  return { props: list };
}
