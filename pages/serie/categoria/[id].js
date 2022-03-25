import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import ImgSwiper from "../../../components/swiper/imgSwiper";
import Link from "next/link";
import { useRouter } from "next/router";
import { getGenres, getTotalList } from "../../api/genres/genres";
import { getPageSerieTotal } from "../../api/series/series";

function Index(props) {
  if (props.listaTotal) {
    const totalList = props.listaTotal;

    // const arrFinal = [];

    const getGenres = props.genresTotal.genres.find((x) => x.id == props.id);
    useEffect(() => {
      // totalList.forEach((item) => {
      //   item.forEach((element) => {
      //     arrFinal.push(element);
      //   });
      // });
    }, []);
      return (
        <main className="xl:px-14 lg:px-7 sm:px-3 pt-20 relative px-2">
          <form className="md:flex md:mt-8 justify-around items-center w-full p-5 pt-0">
            <h1 className="text-center text-2xl font-semibold	mb-4 uppercase">
              {getGenres.name}
            </h1>
            <label className="relative ">
              <input
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
            {totalList.map((item) => (
              <Link href={`/serie/${item.id}`}>
              <a>
                <ImgSwiper img={item.poster_path} hover={false} />
              </a>
            </Link>
            ))}
          </div>

          <button className="bg-white" onClick={() => func()}>
            {" "}
            MAS SERIES
          </button>
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
export default Index;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "35" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params, res } = context;
  const { id } = params;

  const listaTotal = await getPageSerieTotal(id);
  const genresTotal = await getGenres('tv');

  return { props: { genresTotal, id, listaTotal }, revalidate: 1 };
}