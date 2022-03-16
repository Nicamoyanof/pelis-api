



const imgUrlTrailer = 'https://occ-0-4799-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaTciS03BhENGzmipy3mpl3HXzLNGB0f5TID9CfhW_xBXCXXxRYEuZdOqvaJK7SZEPNlQLwFvatJ7OIi60ZU4_gnqFD5.webp?r=e96'
const classBtn = "lg:hidden items-center flex justify-center rounded-full bg-slate-100  hover:bg-cyan-600"
const classBtnDesktop = "lg:block hidden py-1 px-2 items-center flex justify-center rounded-sm bg-slate-100  hover:bg-cyan-600"
const BtnResponsive = () => {
    return (
        <span className='flex justify-around w-2/6'>
            <button className={classBtn} >
            </button>
            <button className={classBtn}>
            </button>
        </span>
    )

}
const BtnDesktop = () => {
    return (
        <span className='flex justify-between w-3/6'>
            <button className={classBtnDesktop} >
                Reproducir 
            </button>
            <button className={classBtnDesktop}>
                Mas Info 
            </button>
        </span>
    )

}

function TrailerHome() {
    return (
        <div className='h-full relative'>

            <div id='imgTrailer' className="w-screen h-full mt-12 max-h-screen "></div>
            <div className='lg:p-10 p-4 justify-evenly absolute top-0 z-20 h-full flex flex-col' >
                <img className='w-2/6 lg:w-3/6' src='https://occ-0-4799-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeeG_UFNIumdscqC3GMV9p7JIwdEv7R594l99naX9T-qxUHcrQN7PlJOizh2m0xwxvfdPDa6BTmyOeoJ-YMEdixaIen_S7XXCaXhNiiMd_D6O76EA_PBfigNp98yVdx7VRD66MrmEq3616gj76C538YROOPCWfWONMMwDr3PgXvooQ.webp?r=c95' />
                <BtnDesktop />
                <BtnResponsive />
            </div>
            <style jsx>{`
                #imgTrailer{
                    height: 56vw;
                    background: #000;
                    background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%,rgba(0,0,0,0.3) 20% , rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,1) 100%), url(${imgUrlTrailer});
                    background-size: cover;
                }

            `}</style>
        </div>
    )
}

export default TrailerHome