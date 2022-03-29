import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react/cjs/react.production.min";
import ImgSwiper from "../../../components/swiper/imgSwiper";
import Link from "next/link";
import { getGenres } from "../../api/genres/genres";
import {  getPopSerieTotal } from "../../api/series/series";
import { getPopMovieTotal } from "../../api/movies/movies";

function PelisPopulares(props) {
  const arrProps = props.listaTotal;

  const [totalMovie, setTotalMovie] = useState(18);
  const [totalList, setTotalList] = useState();

  useEffect(() => {
    setTotalList(arrProps.slice(0, totalMovie ? totalMovie : 18));
  }, [totalMovie]);

  if (props.listaTotal) {

    const searchMovie = (e) => {
      setTotalList(
        props.listaTotal.filter((element) =>
          element.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    };

    setTotalList;

    const addMoviesView = () => {
      setTotalMovie(totalMovie + 18);
      setTotalList(props.listaTotal.slice(0, totalMovie));
    };

    return (
      <main className="xl:px-14 lg:px-7 sm:px-3 pt-20 relative px-2 min-h-screen ">
        <form className="md:flex md:mt-8 justify-around items-center w-full p-5 pt-0">
          <h1 className="text-center text-2xl font-semibold	mb-4 uppercase">
          {props.id}
          </h1>
          <label className="relative ">
            <input
              onChange={(e) => searchMovie(e)}
              className="2xl:text-xl focus:outline-0  pl-3 pr-10 py-3 w-full  font-semibold tracking-wider bg-neutral-900	text-white border-solid border-b-4 rounded-md border-b-red-700"
              type="search"
              placeholder="Buscar Serie"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-neutral-600 absolute w-5 top-0 bottom-0 m-auto right-2.5"
            />
          </label>
        </form>
        <div className="2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 mbx:grid-cols-2 grid grid-cols-1 relative gap-1.5 mt-5">
          {totalList && totalList.map((item, index) => (
            <Link href={`/pelicula/${item.id}`} key={index}>
              <a>
                <ImgSwiper img={item.poster_path} hover={false} />
              </a>
            </Link>
          ))}
        </div>

        <button className="2xl:text-xl focus:outline-0  pl-3 pr-10 py-3 w-full  font-semibold tracking-wider bg-neutral-900	text-white border-solid border-b-4 rounded-md border-b-red-700" onClick={addMoviesView}>
          MAS SERIES
        </button>
        {/* <div ref={moviesRef} ></div> */}
        <style jsx>{`
          h1 {
            color: white;
          }
          input::-webkit-search-decoration,
          input::-webkit-search-cancel-button,
          input::-webkit-search-results-button,
          input::-webkit-search-results-decoration {
            display: none;
          }
        `}</style>
      </main>
    );
  }
  return <div>Error</div>;
}
export default PelisPopulares;


export async function getStaticProps(context) {
  const id = 'Populares';

  const listaTotal = await getPopMovieTotal();
  const genresTotal = await getGenres("tv");

  return { props: { genresTotal, id, listaTotal }, revalidate: 1 };
}
