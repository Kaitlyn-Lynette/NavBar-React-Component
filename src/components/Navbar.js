import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll'
import './Navbar.css'



const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const name = 'Jane Doe'
    const navOne = "Topic1"
    const navTwo = "Topic2"
    const navThree = "Topic3"

    const changeBackground = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect (() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div className= {navbar ? "nav-active" : "nav-bar"}>
            <div className="nav-name">
                <h1>{name}</h1>
            </div>
            
            <div className= "nav-tabs">
                <ul className ="navbar-links">
                    <li><Link activeClass="active" to="navOne" spy={true} smooth={true} offset={50} duration={500}>{navOne}</Link></li>
                    <li><Link activeClass="active" to="navTwo" spy={true} smooth={true} offset={50} duration={500}>{navTwo}</Link></li>
                    <li><Link activeClass="active" to="navThree" spy={true} smooth={true} offset={50} duration={500}>{navThree}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
