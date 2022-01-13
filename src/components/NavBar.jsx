import React from 'react'
import { NavBarData } from './NavBarData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid container">
                    <span><FontAwesomeIcon icon={faHouseUser} className='me-2 mb-1'/><a className="navbar-brand" href="#">WeToLive</a></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <ul className="d-flex navbar-nav mb-2">
                    <li className="nav-item">
                        <a className="btn btn-outline-success" href="#">Log in</a>
                        </li>
                        <li className="nav-item">
                        <a className="btn btn-outline-primary" href="#">Sign in</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
