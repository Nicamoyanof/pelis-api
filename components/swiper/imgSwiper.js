import React from "react";

function ImgSwiper(props) {
  const imgBackground = props.img
    ? `https://image.tmdb.org/t/p/original/${props.img}`
    : "img/Fondo_Negro.jpg";

  if (props.hover) {
    return (
      <div className="containerImgSwiper cursor-pointer h-full relative flex items-center justify-center">
        <img className="h-full w-full object-fill" src={imgBackground} />
        <p className="text-white absolute text-center align-middle  ">{props.img?'':props.title}</p>
        <style jsx>{`
          @media (min-width: 768px) {
            .containerImgSwiper:hover {
              position: absolute;
              z-index: 20;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              border-radius: 6px;
              overflow: hidden;
              box-shadow: 0 0 57px #000;
              transform: scale(1.2);
            }
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className="containerImgSwiper cursor-pointer h-full rounded overflow-hidden	">
      <img className="h-full w-full object-fill" src={imgBackground} />
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default ImgSwiper;
