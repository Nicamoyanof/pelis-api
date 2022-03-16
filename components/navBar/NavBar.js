import Link from "next/link";
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react/cjs/react.development";



function NavBar() {

    const pages = [
        { title: 'Series', href: '/serie' },
        { title: 'Peliculas', href: '/pelicula' },
        { title: 'Categorias', href: '/categoria' },
        { title: 'Inicio', href: '/' }
    ];

    const [isOpen, setOpen] = useState(false)



    return (
        <>
            <nav className='navBar flex flex-row fixed top-0 w-screen justify-center '>
                <Hamburger className='hidden absolute left-0 justify-self-start' toggled={isOpen} toggle={setOpen} color="#fff" size={10} />
                <ul className='bg-black block absolute top-14 left-0 flex flex-col justify-start items-center text-white'>
                    {
                        pages.map((list) => (
                            <li className='p-2 w-full'><Link href={list.href}><a> {list.title} </a></Link></li>
                        ))
                    }
                </ul>
                <Link href='/'><img src="img/logo.svg" className='w-28 p-2 ' /></Link>
                <ul className='hidden '>
                    {
                        pages.map((list) => (
                            <li className='p-2'><Link href={list.href}><a> {list.title} </a></Link></li>
                        ))
                    }
                </ul>
            </nav>
            <style jsx>{`
            .navBar{
                backdrop-filter: blur(10px);
                background: #0009
            }
            .hamburger-react{
                display: none;
            }
            `}</style>
        </>
    )
}

export default NavBar