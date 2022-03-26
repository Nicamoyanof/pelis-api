import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import ImgSwiper from "./imgSwiper";
import { getId } from "../../redux/SeriePage/SeriePage-actions";

const breakpoint = {
  300: {
    slidesPerView: 1.5,
  },
  350: {
    slidesPerView: 1.7,
  },
  400: {
    slidesPerView: 2,
  },
  500: {
    slidesPerView: 2.5,
  },
  600: {
    slidesPerView: 3,
  },
  700: {
    slidesPerView: 3.5,
  },
  800: {
    slidesPerView: 3.7,
  },
  1000: {
    slidesPerView: 4,
  },
  1100: {
    slidesPerView: 4.5,
  },
  1200: {
    slidesPerView: 5,
  },
  1400: {
    slidesPerView: 5.7,
  },
  1631: {
    slidesPerView: 6.7,
  },
  1800: {
    slidesPerView: 7.1,
  },
  1900: {
    slidesPerView: 7.5,
  },
};



export function SwiperMovie(props) {
  
  
  if (props != undefined && props.list!= undefined) {

    const list = props.list;

    
    return (
      <div className="pl-3 my-10">
        <Link onClick={()=>props.getId(props.category.id)} href={`${props.url}/categoria/${props.category.id}`}>
          <a>
            <h3 className="lg:text-2xl text-red-100 text-lg font-medium mb-8 uppercase hover:text-red-400">
              {props.category.name}
            </h3>
          </a>
        </Link>

        <Swiper
          spaceBetween={2}
          slidesPerView={2}
          breakpoints={breakpoint}
          className="md:h-96 relative h-80 "
        >
          {list.map((item, index) => (
            <SwiperSlide key={index} className="h-full w-full swiperContainImg">
              <Link href={`/${props.url}/${item.id}`}>
                <a>
                  <ImgSwiper img={item.poster_path} hover={true} title={item.title?item.title:item.name} />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
                    .swiperContainImg{
                        position: relative;
                    
                    }
                    .swiper{
                        overflow: visible;
                    }
                    div::-webkit-scrollbar {
                        display: none;
                    }
                    `}</style>
      </div>
    );
  }
  return <h1>Error</h1>;
}


export default SwiperMovie