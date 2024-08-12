import React, { useState } from 'react'
import './NavBar.css'
import { FaBars } from "react-icons/fa";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <header>
        <div className='container'>
        <nav>
            <div className="logo">
                <h2>DesignStudio</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
                <li>
                    <a href='/home'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/events'>Events</a>
                </li>
                <li>
                    <a href='/mybookings'>My Bookings</a>
                </li>
                <li>
                    <button href='/login'>LogIn / SignUp</button>
                </li>
            </ul>
            <div className="barIcon" onClick={toggleMenu}>
                <FaBars />
            </div>
        </nav>

    </div>
    </header>
  )
}

export default NavBar