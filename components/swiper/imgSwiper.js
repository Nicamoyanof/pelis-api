import React from 'react'

function ImgSwiper(props ) {
  return (
    <div className='containerImgSwiper cursor-pointer md:h-96  h-80	'>
        <img className='h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${props.img}`}/>
        <div>
            <p>

            </p>
        </div>
        <style jsx>{`
        @media (min-width:768px) {
          .containerImgSwiper:hover{
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
  )
}

export default ImgSwiper