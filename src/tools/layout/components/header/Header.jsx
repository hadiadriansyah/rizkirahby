import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-purple" aria-label="Navbar">
                <div className="container">
                    <Link className='navbar-brand' to='/'><FontAwesomeIcon icon={faHouseChimney} /></Link>
                    <div className="text-white"><FontAwesomeIcon icon={faUser} /> Employee Management</div>
                </div>
            </nav>
        </header>
    );
}

export {Header}