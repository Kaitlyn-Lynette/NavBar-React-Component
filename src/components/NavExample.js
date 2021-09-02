import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import "./NavExample.css";

const NavExample = () => {
  const [navbar, setNavbar] = useState(false);

  const name = "Jane Doe";
  const navOne = "Topic1";
  const navTwo = "Topic2";
  const navThree = "Topic3";

      const changeBackground = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 0.5) {
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
    <Navbar collapseOnSelect expand="lg" className={navbar ? "nav-active" : "navbar"}>
      <div className="nav-brand" href="#">
        {name}
      </div>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="nav-tabs">
          <ul className="nav-links">
            <li>
              <Link
                activeClass="active"
                to="pageone"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {navOne}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="pagetwo"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {navTwo}
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="pagethree"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {navThree}
              </Link>
            </li>
          </ul>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

// const Navbar = () => {
//     const [navbar, setNavbar] = useState(false)

//     const name = 'Jane Doe'
//     const navOne = "Topic1"
//     const navTwo = "Topic2"
//     const navThree = "Topic3"

//     const changeBackground = () => {
//         console.log(window.scrollY)
//         if(window.scrollY >= 0.5) {
//             setNavbar(true)
//         } else {
//             setNavbar(false)
//         }
//     }

//     useEffect (() => {
//         changeBackground()
//         window.addEventListener("scroll", changeBackground)
//     })

//     return (
//         <div className= {navbar ? "nav-active" : "nav-bar"}>
//             <div className="nav-name">
//                 <h1>{name}</h1>
//             </div>

//             <div className= "nav-tabs">
//                 <ul className ="navbar-links">
//                     <li><Link activeClass="active" to="pageone" spy={true} smooth={true} offset={50} duration={500}>{navOne}</Link></li>
//                     <li><Link activeClass="active" to="pagetwo" spy={true} smooth={true} offset={50} duration={500}>{navTwo}</Link></li>
//                     <li><Link activeClass="active" to="pagethree" spy={true} smooth={true} offset={50} duration={500}>{navThree}</Link></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

export default NavExample;