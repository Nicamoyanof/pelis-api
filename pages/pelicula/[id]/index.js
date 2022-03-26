import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.production.min";
import { SwiperMovie } from "../../../components/swiper/SwiperMovies";
import { getMovieCredits, getMovieId } from "../../api/movies/id";
import { getMoviesSimilar } from "../../api/movies/movies";

function Index() {
  const router = useRouter();
  const slug = router.query.id;

  

  const [moviePage, setMoviePage] = useState();
  const [movieSimilar, setMovieSimilar] = useState();
  const [castCredits, setCastCredits] = useState();
  const [crewCredits, setCrewCredits] = useState();

  useEffect(() => {
    getMovieId(slug).then((val) => setMoviePage(val));
    getMoviesSimilar(slug).then((val) => setMovieSimilar(val));
    getMovieCredits(slug).then((val) => setCastCredits(val.cast));
    getMovieCredits(slug).then((val) => setCrewCredits(val.crew));
    
  }, [slug]);

  if (moviePage != undefined && castCredits!=undefined && crewCredits!= undefined) {

    

    const duration = () => {
      const durationTotal = Number(moviePage.runtime);
      const hoursTotal = parseInt(durationTotal / 60);
      const minutesFinal = parseInt(durationTotal % 60);
      return minutesFinal > 0
        ? `${hoursTotal}h ${minutesFinal} min`
        : `${hoursTotal}h`;
    };


    return (
      <div>
        <div className="sm:flex">
          <img
            src={`https://image.tmdb.org/t/p/original/${moviePage.poster_path}`}
            className="sm:max-h-screen md:h-screen mt-10"
          />
          <div className="md:mt-16 sm:self-center sm:p-5">
            <p className="2xl:text-2xl lg:text-xl md:text-base sm:text-xs p-3 text-stone-500">Pelicula</p>
            <h1 className="2xl:text-6xl lg:text-4xl md:text-3xl	 sm:text-left text-center p-3 font-semibold text-3xl text-white">
              {moviePage.title}
            </h1>
            <div className="">
              <div className="sm:justify-start flex items-center justify-center">
                <p className="2xl:text-lg p-3 text-stone-100 ">
                  {moviePage.release_date
                    ? moviePage.release_date.slice(0, 4)
                    : null}
                </p>
                <span className="2xl:text-lg block rounded-sm w-10 h-2 p-3 text-black bg-red-300 text-sm flex justify-center items-center">
                  +16
                </span>
                <p className='2xl:text-lg p-3 text-stone-500'>{duration()}</p>
                <span className="2xl:text-lg block rounded-sm w-10 h-2 p-3 font-semibold text-white bg-red-900 text-sm flex justify-center items-center">
                  HD
                </span>
              </div>

              <p className="2xl:text-2xl lg:text-lg md:text-sm sm:text-xs sm:tracking-wider p-3 text-stone-500">
                {moviePage.overview}
              </p>
              <span>
                {/* {getDirecting()} */}
                <p className="p-3 text-stone-500">
                  Genero:
                  {/* {
                moviePage.genres.map((item)=>{
                  return(
                    <span className='p-3 text-white font-semibold'>{item[0].name}</span> 
                  )
                })
              } */}
                </p>
                <p className="p-3 text-stone-500">
                  Actores:
                  {
                    castCredits.map((actor, index) => {
                      return (
                        <Link  href={`../../persona/${actor.id}`} key={index} className='text-white no-underline'><a className='py-3 px-1 text-white font-semibold'>{actor.name}</a></Link>
                      )
                    })
                  }
                </p>
                <p className="p-3 text-stone-500">
                  Direccion:
                  {
                    crewCredits.map((direct, index) => {
                      if(direct.known_for_department.includes('Directing')){
                         return (
                        <Link  href={`../../persona/${direct.id}`} key={index} className='text-white no-underline'><a className='py-3 px-1 text-white font-semibold'>{direct.name}</a></Link>
                      )
                      }
                      return
                    })
                  }
                </p>
                
              </span>
            </div>
          </div>
        </div>
        {/* {getPlayVideo()} */}
        <SwiperMovie  list={movieSimilar} category='PELICULAS SIMILARES' url='/pelicula' />
      </div>
    );
  }
  return <div>404</div>;
}

export default Index;
