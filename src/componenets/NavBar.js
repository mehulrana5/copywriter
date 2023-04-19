import React from 'react'
import FilterForm from './FilterForm'

const NavBar = () => {
    // var myModal = document.getElementById('myModal')
    // var myInput = document.getElementById('myInput')
    // myModal.addEventListener('shown.bs.modal', function () {
    //     myInput.focus()
    // })
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CopyWriter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav" style={{ width: '70%', alignItems: 'center' }}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Filter
                                </a>
                            </li>
                        </ul>
                        {/* <button className="btn btn-outline-success" >Search</button> */}
                        <div className="check-btn">
                            <button className="btn btn-outline-light">Login</button>
                            <button className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FilterForm/>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Apply</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
