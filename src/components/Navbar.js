import React, {useState, useEffect} from 'react';
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
                <div className="nav-one">
                    <p>{navOne}</p>
                </div>
                <div className="nav-two">
                    <p>{navTwo}</p>
                </div>
                <div className="nav-three">
                    <p>{navThree}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
