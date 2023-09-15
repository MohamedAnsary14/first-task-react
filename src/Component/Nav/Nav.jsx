import React from 'react'
import '../Nav/Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return <>
        <nav className="navbar navbar-expand-lg p-2 fixed-top ">
            <div className="container">
                <Link id='Nav-Logo' className="navbar-brand" to={'/'}>START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to={'about'}>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'portfolio'}>PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'contact'}>CONTACT</Link>
                        </li>
                       
                    </ul>
                    
                </div>
            </div>
        </nav>



    </>
}
