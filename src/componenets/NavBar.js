import React from 'react'
import FilterPage from './FilterPage'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/copywriter/">CopyWriter</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" style={{ width: '70%'}}>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/copywriter/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" data-bs-toggle="modal" data-bs-target="#filter-page">
                                    Filters
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/copywriter/seller" className="nav-link">
                                    Seller
                                </Link>
                            </li>
                        </ul>
                        <div className="check-btn">
                            <button className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#login-page">
                                Login
                            </button>
                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#sign-up-page">
                                Sign-up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <FilterPage/>
            <LoginPage/>
            <SignUpPage/>
        </div>
    )
}
export default NavBar