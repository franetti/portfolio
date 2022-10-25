import React, {useRef, useEffect} from 'react'
import './Header.css'
// import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from '../Assets/menu.svg'
import gsap from 'gsap'
function Header({ timeline }) {
    let li1 = useRef(null)
    let li2 = useRef(null)
    let li3 = useRef(null)
    let li4 = useRef(null)
    let li5 = useRef(null)

    useEffect(() => {
        timeline.from([li1,li2,li3,li4], {
            opacity: 0,
            duration: 1,
            delay: 0.7,
            y: 20,
            stagger: {
                amount: .6
            }
        },"+=3.5")
    })
    return (
        <div>
            <header>
                <div id="logo"></div>
                <div className="toggle-menu">
                    <img src={MenuIcon} alt="" />
                </div>
                <ul className="menu-items">
                    <li ref={el => li1 =el}>
                        <Link to="hero" smooth={true} duration={2000} className='li'>Inicio</Link>
                    </li>
                    <li ref={el => li2 =el}>
                        <Link to="project1" smooth={true} duration={2000} className='li'>Proyectos</Link>
                    </li>
                    <li ref={el => li3 =el}>
                        <Link to="about_container" smooth={true} duration={2000} className='li'>Sobre</Link>
                    </li>
                    <li ref={el => li4 =el}>
                        <Link to="contact_container" smooth={true} duration={2000} className='li'>Contacto</Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header
