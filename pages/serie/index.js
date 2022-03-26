// import { useEffect, useState } from "react/cjs/react.production.min";
import { useState, useEffect } from "react/cjs/react.development";
import TrailerHome from "../../components/Home/TrailerHome";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import styles from "../../styles/Home.module.css";
import { getGenres, getTotalList } from "../api/genres/genres";
import { getMovieGenres, getMoviesPopular, getMovieTrailer } from "../api/movies/movies";
import { getSerieGenres, getSeriesPopular } from "../api/series/series";

export default function Index(props) {
  const [serieTotal, setSerieTotal] = useState();
  const [list, setList] = useState();

  const arrListSeries = [];
  useEffect(async () => {
    await props.list.genres.map((genr) => {
      getTotalList('tv' , genr.id).then((value) => arrListSeries.push(value));
    });

    setList(await Promise.all(
      props.list.genres.map(async (item) => {
        return await getTotalList('tv', item.id);
      })
    ));

  }, []);

  // const mapFinal = Array.from(serieTotal?serieTotal:'')

  if (list) {
    

    return (
      <div>
        <TrailerHome movie={props.imgTrailer} link={'serie'} />
        {list.map((item, index) => {
          return (
            <SwiperMovie list={item.results} category={props.list.genres[index]} url="serie" />
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
  const imgTrailer = await getMovieTrailer();

  return { props: {list , imgTrailer} };
}