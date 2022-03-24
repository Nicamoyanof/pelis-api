import Link from "next/link";
import { useState } from "react/cjs/react.development";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

// import { useState } from "react";
// import React, { useState } from "react";

function NavBar() {
  const [styleList, setStyleList] = useState("-200px");
  const [displayNabBar, setDisplayNabBar] = useState("block");
  const [displayClose, setDisplayClose] = useState("none");

  const pages = [
    { title: "Inicio", to: "/" },
    { title: "Series", to: "../serie" },
    { title: "Peliculas", to: "../pelicula" },
    { title: "Categorias", to: "../categoria" },
  ];

  // const menuDown = '150px'

  const toggleOpen = () => {
    if (typeof window === "object") {
      setStyleList(
        `${document.querySelector(".navBar").scrollHeight}px`
        // menuDown
      );
      setDisplayNabBar("none");
      setDisplayClose("block");
    }
  };
  const toggleClose = () => {
    setStyleList("-200px");
    setDisplayNabBar("block");
    setDisplayClose("none");
  };

  return (
    <>
      <ul
        style={{ top: styleList }}
        className={`listNavBarMobile md:p-1 duration-1000 z-40 bg-black block fixed  left-0 flex flex-col justify-start items-center text-white`}
      >
        {pages.map((list) => (
          <li key={list.title} className="md:text-2xl p-2 w-full">
            <Link href={`${list.to}`}>
              <a> {list.title} </a>
            </Link>
          </li>
        ))}
      </ul>
      <nav className="navBar flex flex-row fixed top-0 w-screen z-50 ">
        <FontAwesomeIcon
          style={{ display: displayClose }}
          onClick={toggleClose}
          className="md:w-5 text-white w-3.5  absolute top-0 bottom-0 left-3.5 m-auto cursor-pointer"
          icon={faXmark}
        />
        <FontAwesomeIcon
          style={{ display: displayNabBar }}
          onClick={toggleOpen}
          className="md:w-5 text-white w-3.5  absolute top-0 bottom-0 left-3.5 m-auto cursor-pointer"
          icon={faBars}
        />
        <Link href="/">
          <a className=" my-0 mx-auto ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nikshop-1a5d6.appspot.com/o/logo.svg?alt=media&token=61d424f5-e540-4a04-9708-c15daf8089b0"
              className="md:w-40 w-28 p-2 my-0 mx-auto "
            />
          </a>
        </Link>
        <ul className="hidden ">
          {pages.map((list) => (
            <li key={list.title} className="p-2">
              <Link href={list.to}>
                <a> {list.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        .navBar {
          background: #000;
        }
      `}</style>
    </>
  );
}

export default NavBar;
