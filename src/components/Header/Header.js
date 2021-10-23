import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Header = () => {
    return (

        <div className="header-container">
            <nav className="header-menu">
                <img className="header-logo" width="200px" height="100%" src={logo}/>
                <NavLink to="/author">O autorze</NavLink>
                <NavLink to="/technika">Technika</NavLink>
                <NavLink to="/movie">Filmy</NavLink>
                <NavLink to="/departures">Wyjazdy</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/archive">Archiwum</NavLink>
                <NavLink to="/teaching">Szkolenia</NavLink>
                <a><FontAwesomeIcon size="3x" icon={faPhone}/></a>
            </nav>

        </div>


    );
};

export default Header;