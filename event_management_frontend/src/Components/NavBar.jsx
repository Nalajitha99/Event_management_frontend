import React, { useState } from 'react'
import './NavBar.css'
import { FaBars } from "react-icons/fa";
import { assets } from '../Assets/assets'

const NavBar = ({userType}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <header>
        <div className='container'>
        <nav>
            <div className="logo">
                <img src={assets.logo1} alt="" style={{width:"200px",height:"80px"}}/>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
                {userType === 'admin' ? (
              <>
                <li>
                    <a href='/dashboard'>Dashboard</a>
                </li>
                <li>
                    <a href='/addevent'>Add Event</a>
                </li>
                <li>
                    <a href='/viewevents'>View Events</a>
                </li>
                <li>
                    <a href='/viewcustomers'>View Customers</a>
                </li>
                <li>
                    <a href='/vieweventrequests'>View Event Requests</a>
                </li>
              </>
            ) : (
              <>
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
                    <button href='/login'>Sign Out</button>
                </li>
              </>
            )}
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