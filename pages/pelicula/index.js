// import { useEffect, useState } from "react/cjs/react.production.min";
import { useState, useEffect } from "react/cjs/react.development";
import TrailerHome from "../../components/Home/TrailerHome";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import styles from "../../styles/Home.module.css";
import { getGenres, getTotalList } from "../api/genres/genres";
import { getMovieGenres, getMoviesPopular, getMovieTrailer } from "../api/movies/movies";
import { getSerieGenres, getSeriesPopular } from "../api/series/series";

export default function Index(props) {
  


  const [list, setList] = useState();

  const arrListSeries = [];
  

  useEffect(async () => {



    await props.list.genres.map((genr) => {
      getTotalList('movie' , genr.id).then((value) => arrListSeries.push(value));
    });
    if (typeof arrListSeries !== "undefined" && arrListSeries.length > 0) {

    }

    setList(await Promise.all(
      props.list.genres.map(async (item) => {
        return await getTotalList('movie' , item.id);
      })
    ));

  }, []);


  if (list) {
    

    return (
      <div>
        <TrailerHome movie={props.imgTrailer} link={'pelicula'} />
        {list.map((item, index) => {
          return (
            <SwiperMovie list={item.results} category={props.list.genres[index]} url="pelicula" />
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

  const list = await getGenres('movie');
  const imgTrailer = await getMovieTrailer();
  

  return { props: { list , imgTrailer} };
}
