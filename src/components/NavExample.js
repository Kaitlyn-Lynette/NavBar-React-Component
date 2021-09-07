import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavExample.css";

const NavExample = () => {
  const [navbar, setNavbar] = useState(false);

  const name = "Jane Doe";
  const navOne = "Section1";
  const navTwo = "Section2";
  const navThree = "Section3";

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 0.1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={navbar ? "nav-active" : "navbar"}
    >
      <Navbar.Brand href="#home" className="nav-brand">
        {name}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-links">
            <Nav.Link href="#pageone">{navOne}</Nav.Link>
            <Nav.Link href="#pagetwo">{navTwo}</Nav.Link>
            <Nav.Link href="#pagethree">{navThree}</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavExample;
