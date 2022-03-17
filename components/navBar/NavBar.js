import Link from "next/link";
import { useEffect, useState } from "react/cjs/react.development";
import { faBars, faCoffee, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function NavBar() {

    const [isOpen, setOpen] = useState(false)
    const [styleList, setStyleList] = useState('-200px')
    const [displayNabBar, setDisplayNabBar] = useState('block')
    const [displayClose, setDisplayClose] = useState('none')
    useEffect(()=>{

    },[])

    const pages = [
        { title: 'Inicio', to: '' },
        { title: 'Series', to: 'serie' },
        { title: 'Peliculas', to: 'pelicula' },
        { title: 'Categorias', to: 'categoria' }
    ];


    const toggleOpen = ()=>{
        setStyleList('3.5rem')
        setDisplayNabBar('none')
        setDisplayClose('block')
    }
    const toggleClose = ()=>{
        setStyleList('-200px')
        setDisplayNabBar('block')
        setDisplayClose('none')
    }


    return (
        <>
                <ul style={{top:styleList}} className={`listNavBarMobile duration-1000 z-40 bg-black block absolute  left-0 flex flex-col justify-start items-center text-white`}>
                    {
                        pages.map((list) => (
                            <li key={list.title} className='p-2 w-full'><Link to={list.to}><a> {list.title} </a></Link></li>
                        ))
                    }
                </ul>
            <nav className='navBar flex flex-row fixed top-0 w-screen z-50 '>
            <FontAwesomeIcon style={{display:displayClose}} onClick={toggleClose} className='text-white w-3.5  absolute top-0 bottom-0 left-3.5 m-auto cursor-pointer' icon={faXmark} />
            <FontAwesomeIcon style={{display:displayNabBar}} onClick={toggleOpen} className='text-white w-3.5  absolute top-0 bottom-0 left-3.5 m-auto cursor-pointer' icon={faBars} />
                <Link to='/'><img src="img/logo.svg" className='w-28 p-2 my-0 mx-auto ' /></Link>
                <ul className='hidden '>
                    {
                        pages.map((list) => (
                            <li key={list.title} className='p-2'><Link to={list.to}><a> {list.title} </a></Link></li>
                        ))
                    }
                </ul>
            </nav>
            <style jsx>{`
            .navBar{
                
                background: #000;
            }
            `}</style>
        </>
    )
}

export default NavBar