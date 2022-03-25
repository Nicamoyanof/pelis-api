import React from "react";

function ImgSwiper(props) {
  if (props.hover) {
    return (
      <div className="containerImgSwiper cursor-pointer h-full">
        <img
          className="h-full w-full object-fill"
          src={`https://image.tmdb.org/t/p/original/${props.img}`}
        />
        <div>
          <p></p>
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            .containerImgSwiper:hover {
              position: absolute;
              width: 324px;
              z-index: 10;
              height: 446px;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              border-radius: 6px;
              overflow: hidden;
              box-shadow: 0 0 57px #000;
            }
          }
        `}</style>
      </div>
    );
  }
  return (
    <div className="containerImgSwiper cursor-pointer h-full rounded overflow-hidden	">
      <img
        className="h-full w-full object-fill"
        src={`https://image.tmdb.org/t/p/original/${props.img}`}
      />
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default ImgSwiper;
