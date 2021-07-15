import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import './NavBar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <div className="nav-home">
                        <Link exact to="/" className="nav-home-link">Home</Link>
                    </div>

                    <div className="nav-fav">
                        <NavLink to="/favs" className="nav-fav-link">Favoritas</NavLink>
                    </div>
                </ul>
            </nav>
        </header>
    )
}