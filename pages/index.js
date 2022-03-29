import TrailerHome from "../components/Home/TrailerHome";
import { SwiperMovie } from "../components/swiper/SwiperMovies";
import styles from "../styles/Home.module.css";
import {
  getMovieGenres,
  getMoviesPopular,
  getMovieTrailer,
  getMovieTrailerError,
} from "./api/movies/movies";
import { getSerieGenres, getSeriesPopular } from "./api/series/series";

function Home(props) {

  return (
    <div className={styles.container}>
      <TrailerHome movie={props.imgTrailer?props.imgTrailer:props.imgTrailerError} link={"pelicula"} />

      <SwiperMovie
        list={props.moviePop}
        category={{ name: "PELICULAS POPULARES", id: "pop" }}
        url="pelicula"
      />
      <SwiperMovie
        list={props.seriePop}
        category={{ name: "SERIES POPULARES", id: "pop" }}
        url="serie"
      />
      <SwiperMovie
        list={props.movieComedy}
        category={{ name: "PELICULAS DE COMEDIA", id: "35" }}
        url="pelicula"
      />
      <SwiperMovie
        list={props.serieComedy}
        category={{ name: "SERIES DE COMEDIA", id: "35" }}
        url="serie"
      />
      <SwiperMovie
        list={props.movieDoc}
        category={{ name: "PELICULAS DE DOCUMENTALES", id: "99" }}
        url="pelicula"
      />
      <SwiperMovie
        list={props.serieDoc}
        category={{ name: "SERIES DE DOCUMENTALES", id: "99" }}
        url="serie"
      />
      <SwiperMovie
        list={props.movieMystery}
        category={{ name: "PELICULAS DE MISTERIO", id: "9648" }}
        url="pelicula"
      />
      <SwiperMovie
        list={props.serieMystery}
        category={{ name: "SERIES DE MISTERIO", id: "9648" }}
        url="serie"
      />

      <style jsx>{`
        h1 {
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {

  const random = Math.round(Math.random() * (5) + 1)-1
  const imgTrailer = await getMovieTrailer(random);
  const imgTrailerError = await getMovieTrailerError();
  const moviePop  = await getMoviesPopular()
  const  seriePop= await getSeriesPopular()
  const  movieComedy= await getMovieGenres(35)
  const serieComedy = await getSerieGenres(35)
  const  movieDoc= await getMovieGenres(99)
  const serieDoc = await getSerieGenres(99)
  const  movieMystery = await getMovieGenres(9648)
  const serieMystery = await getSerieGenres(9648)
  



  return { props: { imgTrailer , imgTrailerError , moviePop , movieComedy , movieDoc, movieMystery , seriePop , serieComedy , serieDoc , serieMystery }  };
}

export default Home;
