import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const classBtn =
  "h-10 w-10 p-2 m-5 top-0 bottom-0  items-center flex justify-center rounded-full bg-slate-100  hover:bg-cyan-600 md:h-14 md:w-14 md:m-5";

const BtnResponsive = (props) => {
  return (
    <div className="absolute w-max flex items-center">
      <Link href={`../pelicula/${props.url}`}><a>
        <h2 className="tituloMovieTrailer md:text-7xl m-2 text-white text-center text-3xl font-semibold uppercase">{props.title?props.title:'Error'}</h2></a></Link>
        <button className={classBtn}>
          <FontAwesomeIcon icon={faPlay} className="w-4" />
        </button>
    </div>
  );
};
function TrailerHome( props ) {
  
  if(props){

    return (
    <div className="h-full relative">
      <div
        id="imgTrailer"
        className="w-screen h-full mt-12 max-h-screen "
      ></div>
      <div className="lg:p-10 justify-end  absolute top-0 z-20 h-full flex flex-col">
        {/* <Image
                className='w-2/6 lg:w-3/6'
                    // loader={myLoader}
                    src="https://occ-0-4799-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeeG_UFNIumdscqC3GMV9p7JIwdEv7R594l99naX9T-qxUHcrQN7PlJOizh2m0xwxvfdPDa6BTmyOeoJ-YMEdixaIen_S7XXCaXhNiiMd_D6O76EA_PBfigNp98yVdx7VRD66MrmEq3616gj76C538YROOPCWfWONMMwDr3PgXvooQ.webp?r=c95"
                    alt="Picture of the author"
                /> */}
        <BtnResponsive title={props.movie.title} link={'pelicula'} url={props.movie.id} />

        

      </div>
      <style jsx>{`
        
        #imgTrailer {
          position: relative;
          height: 56vw;
          background: #000;
          background-image: linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.3) 20%,
              rgba(0, 0, 0, 0.1) 50%,
              rgba(0, 0, 0, 0.3) 80%,
              rgba(0, 0, 0, 1) 100%
            ),
            url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path?props.movie.backdrop_path:props.movie.poster_path});
          background-size: cover;
        }
        h2{
          font-family: 'Bebas Neue', cursive;
        }
      `}</style>
    </div>
  );
  }
  

  
}

export default TrailerHome;
