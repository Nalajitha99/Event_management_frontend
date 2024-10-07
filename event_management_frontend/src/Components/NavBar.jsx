import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FaBars } from "react-icons/fa";
import { assets } from '../Assets/assets';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userType, setUserType] = useState(''); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('role');
        window.location.href = '/login';
    };

    useEffect(() => {
        const role = sessionStorage.getItem('role');
        if (role) {
            setUserType(role);
        }
    }, []); 

    return (
        <header>
            <div className='container'>
                <nav>
                    <div className="logo">
                        <img src={assets.logo12} alt="" style={{ width: "200px", height: "80px" }} />
                    </div>
                    <ul className={isOpen ? "nav-link active" : "nav-link"}>
                        {userType === 'ADMIN' ? (
                            <>
                                <li>
                                    <a href='/dashboard'>Dashboard</a>
                                </li>
                                <li>
                                    <a href='/addevent'>Add Event</a>
                                </li>
                                <li>
                                    <a href='/vieweventList'>View Events</a>
                                </li>
                                <li>
                                    <a href='/userList'>View Customers</a>
                                </li>
                                <li>
                                    <a href='/vieweventrequests'>View Event Requests</a>
                                </li>
                            </>
                        ) : userType === 'USER' ? (
                            <>
                                <li>
                                    <a href='/home'>Home</a>
                                </li>
                                <li>
                                    <a href='/about'>About</a>
                                </li>
                                <li>
                                    <a href='/viewevents'>Events</a>
                                </li>
                                <li>
                                    <a href='/mybookings'>My Bookings</a>
                                </li>
                            </>
                        ) : (
                            <li>
                                <span>Loading...</span>
                            </li>
                        )}
                        <li>
                            <button onClick={handleLogout}>Sign Out</button>
                        </li>
                    </ul>
                    <div className="barIcon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
