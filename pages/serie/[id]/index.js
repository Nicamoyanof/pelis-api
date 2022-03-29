import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react/cjs/react.production.min";
import { SwiperMovie } from "../../../components/swiper/SwiperMovies";
import { getSerieId } from "../../api/series/id";
import { getSerieCredits, getSeriesSimilar } from "../../api/series/series";

function Index() {
  const router = useRouter();
  const slug = router.query.id;

  const [seriePage, setSeriePage] = useState();
  const [seriesSimilar, setSeriesSimilar] = useState();
  const [seasonsSerie, setSeasonsSerie] = useState();
  const [seasonsSerieFilter, setSeasonsSerieFilter] = useState();
  const [castCredits, setCastCredits] = useState();
  const [crewCredits, setCrewCredits] = useState();
  const selectRef = useRef();

  useEffect(() => {
    setSeasonsSerieFilter();
    getSerieId(slug).then((val) => setSeriePage(val));
    getSerieId(slug).then((val) => setSeasonsSerie(val.seasons));
    getSerieCredits(slug).then((val) => setCastCredits(val.cast));
    getSerieCredits(slug).then((val) => setCrewCredits(val.crew));
    // console.log(getSerieCredits(slug).then((val) => setCastCredits(val)))
    getSeriesSimilar(slug).then((val) => setSeriesSimilar(val));
    // selectRef.current.children[0].selected = 'inicio'
  }, [slug]);

  if (seriePage != undefined && seasonsSerie != undefined && castCredits!=undefined && crewCredits!= undefined) {
    const selectSeasons = (value) => {
      const output = seasonsSerie.filter((tv) => tv.season_number == value);
      setSeasonsSerieFilter(output[0]);
    };

    const imgPoster = () => {
      if (seasonsSerieFilter != undefined) {
        return `https://image.tmdb.org/t/p/original/${
          seasonsSerieFilter.poster_path
            ? seasonsSerieFilter.poster_path
            : seriePage.poster_path
        }`;
      } else if (seriePage.poster_path != undefined) {
        return `https://image.tmdb.org/t/p/original/${seriePage.poster_path}`;
      } else {
        return "../../img/Fondo_Negro.jpg";
      }
    };

    return (
      <div>
        <div className="sm:flex">
          <img
            src={imgPoster()}
            className="sm:max-h-screen md:h-screen mt-10 sm:w-6/12 w-screen"
          />
          <div className="md:mt-16 sm:self-center sm:p-5">
            <p className="2xl:text-2xl lg:text-xl md:text-base sm:text-xs p-3 text-stone-500">
              Serie
            </p>
            <h1 className="2xl:text-6xl lg:text-4xl md:text-3xl	 sm:text-left text-center p-3 font-semibold text-3xl text-white">
              {seriePage.name}
            </h1>
            <div className="">
              <div className="sm:justify-start flex items-center justify-center">
                <p className="2xl:text-lg p-3 text-stone-100 ">
                  {seriePage.release_date
                    ? seriePage.release_date.slice(0, 4)
                    : null}
                </p>
                <span className="2xl:text-lg block rounded-sm w-10 h-2 p-3 text-black bg-red-300 text-sm flex justify-center items-center">
                  +16
                </span>
                <p className="2xl:text-lg p-3 text-stone-500">
                  {seasonsSerie.length} Temporadas
                </p>
                <span className="2xl:text-lg block rounded-sm w-10 h-2 p-3 font-semibold text-white bg-red-900 text-sm flex justify-center items-center">
                  HD
                </span>
              </div>
              <div className="flex sm:justify-start sm:flex-row items-center p-3justify-center flex-col">
                <select
                  ref={selectRef}
                  onChange={(e) => selectSeasons(e.target.value)}
                  className="2xl:text-xl focus:outline-0 my-5 px-5 py-3   font-semibold tracking-wider bg-neutral-900	text-white border-solid border-b-4 rounded-md border-b-red-700"
                >
                  <option value="inicio">Inicio</option>
                  {seasonsSerie.map((season, index) => (
                    <option key={index} value={season.season_number}>
                      {season.name}
                    </option>
                  ))}
                </select>
                <h5 className="2xl:text-4xl text-white text-3xl text-semibold ml-5">
                  {seasonsSerieFilter
                    ? `${seasonsSerieFilter.episode_count} Episodios`
                    : ""}
                </h5>
              </div>
              <p className="2xl:text-2xl lg:text-lg md:text-sm sm:text-xs sm:tracking-wider p-3 text-stone-500">
                {seriePage.overview}
              </p>
              <span>
                <p className="p-3 text-stone-500">
                  Direccion:
                  {crewCredits.map((direct, index) => {
                    if (direct.known_for_department.includes("Directing")) {
                      return (
                        <Link
                          href={`../../persona/${direct.id}`}
                          key={index}
                          className="text-white no-underline"
                        >
                          <a className="py-3 px-1 text-white font-semibold">
                            {direct.name}
                          </a>
                        </Link>
                      );
                    }
                    return;
                  })}
                </p>
                <p className="p-3 text-stone-500">
                  Genero:
                  {/* {
                seriePage.genres.map((item)=>{
                  return(
                    <span className='p-3 text-white font-semibold'>{item[0].name}</span> 
                  )
                })
              } */}
                </p>
                <p className="p-3 text-stone-500">
                  Actores:
                  {castCredits.map((actor, index) => {
                    return (
                      <Link
                        href={`../../persona/${actor.id}`}
                        key={index}
                        className="text-white no-underline"
                      >
                        <a className="py-3 px-1 text-white font-semibold">
                          {actor.name}
                        </a>
                      </Link>
                    );
                  })}
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* {getPlayVideo()} */}
        <SwiperMovie
          list={seriesSimilar}
          category="SERIES SIMILARES"
          url="serie"
        />
      </div>
    );
  }
  return <div>404</div>;
}

export default Index;
