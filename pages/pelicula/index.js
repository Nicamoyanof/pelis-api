import { UseState, UseEffect } from "react";
import TrailerHome from "../../components/Home/TrailerHome";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import { getGenres, getTotalList } from "../api/genres/genres";
import { getMovieTrailer } from "../api/movies/movies";

export default function Index(props) {
  


  const [list, setList] = UseState();

  const arrListSeries = [];
  

  UseEffect(async () => {



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

  const list = await getGenres('movie');
  const imgTrailer = await getMovieTrailer();
  

  return { props: { list , imgTrailer} };
}
