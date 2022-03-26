import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import { SwiperMovie } from "../../components/swiper/SwiperMovies";
import { getActorId, getActorMovies, getActorSerie } from "../api/actores/id";

function index() {
  const router = useRouter();
  const slug = router.query.id;

  const [actorId, setActorId] = useState();
  const [movieActor, setMovieActor] = useState();
  const [serieActor, setSerieActor] = useState();

  useEffect(() => {
    getActorId(slug).then((val) => setActorId(val));
    getActorMovies(slug).then((val) => setMovieActor(val));
    getActorSerie(slug).then((val) => setSerieActor(val));
  }, [slug]);

  if (actorId != undefined &&  movieActor!=undefined ) {
    const fecha = actorId.birthday ? actorId.birthday : "0-0-0";
    const arrNac = fecha.split("-");

    const currentTime = new Date();
    const year = currentTime.getFullYear();

    const txtBorn = `Nacio el ${arrNac[2]} del ${arrNac[1]} del ${arrNac[0]}`;

    const yearTotal = year - Number(arrNac[0])

    return (
      <div>
        <div className="sm:flex">
          <img
            src={`https://image.tmdb.org/t/p/original/${actorId.profile_path}`}
            className="sm:max-h-screen md:h-screen mt-10"
          />
          <div className="md:mt-16 sm:self-center sm:p-5">
            <p className="2xl:text-2xl lg:text-xl md:text-base sm:text-xs p-3 text-stone-500">
              {actorId.known_for_department}
            </p>
            <h1 className="2xl:text-6xl lg:text-4xl md:text-3xl	 sm:text-left text-center p-3 font-semibold text-3xl text-white">
              {actorId.name}
            </h1>
            <div className="">
              <div className="sm:justify-start flex items-center justify-center">
                
                <p className="2xl:text-lg p-3 text-stone-500">{actorId.deathday?`⚰️ ${actorId.deathday.slice(0,4)}`:`${yearTotal} años`}  </p>
                <p className="2xl:text-lg p-3 text-stone-500">{txtBorn}</p>
              </div>

              <p className="2xl:text-2xl lg:text-lg md:text-sm sm:text-xs sm:tracking-wider p-3 text-stone-500">
                {actorId.biography}
              </p>
            </div>
          </div>
        </div>
        {/* {getPlayVideo()} */}
        <SwiperMovie
          list={movieActor.cast}
          category="PARTICIPACIONES EN PELICULAS"
          url="/pelicula"
        />
        
      </div>
    );
  }
  return <div>404</div>;
}

export default index;
