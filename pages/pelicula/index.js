import { useEffect, useState } from "react/cjs/react.production.min";
import TrailerHome from "../../components/Home/TrailerHome";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import { getGenres, getTotalList } from "../api/genres/genres";
import { getMovieTrailer, getMovieTrailerError } from "../api/movies/movies";

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
        <TrailerHome movie={props.imgTrailer?props.imgTrailer:props.imgTrailerError} link={'pelicula'} />
        {list.map((item, index) => {
          return (
            <SwiperMovie key={index} list={item.results} category={props.list.genres[index]} url="pelicula" />
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

  const random = Math.round(Math.random() * (5) + 1)
  const list = await getGenres('movie');
  const imgTrailer = await getMovieTrailer(random);
  const imgTrailerError = await getMovieTrailerError();

  return { props: { list , imgTrailer , imgTrailerError} };
}
