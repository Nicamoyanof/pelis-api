import { useEffect, useState } from "react/cjs/react.production.min";
import TrailerHome from "../../components/Home/TrailerHome";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import { getGenres, getTotalList } from "../api/genres/genres";
import { getMovieTrailer, getMovieTrailerError } from "../api/movies/movies";

export default function Index(props) {
  const [list, setList] = useState();

  const arrListSeries = [];

  useEffect( () => {
    async function fetchData(){
      await props.list.genres.map((genr) => {
      getTotalList('tv' , genr.id).then((value) => arrListSeries.push(value));
    });
    }
    fetchData();

    async function fetchList(){
      setList(await Promise.all(
      props.list.genres.map(async (item) => {
        return await getTotalList('tv', item.id);
      })
    ));
    }
    fetchList();
    

  }, []);


  if (list) {
    

    return (
      <div>
        <TrailerHome movie={props.imgTrailer?props.imgTrailer:props.imgTrailerError} link={'serie'} />
        {list.map((item, index) => {
          return (
            <SwiperMovie key={index} list={item.results} category={props.list.genres[index]} url="serie" />
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
  const imgTrailerError = await getMovieTrailerError();

  return { props: {list , imgTrailer , imgTrailerError} };
}