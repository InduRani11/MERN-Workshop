import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav classname="navbar navbar-expand-lg bg-body-tertiary">
            <div classname="container-fluid">
                <Link classname="navbar-brand" To="#">Navbar</Link>
                <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span classname="navbar-toggler-icon"></span>
                </button>
                <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
                        <li classname="nav-item">
                            <Link classname="nav-linkactive" aria-current="page" To="#">Home</Link>
                        </li>
                        <li classname="nav-item">
                            <Link classname="nav-Link" To="#">Link</Link>
                        </li>
                        <li classname="nav-item dropdown">
                            <Link classname="nav-linkdropdown-toggle" To="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul classname="dropdown-menu">
                                <li><Link classname="dropdown-item" To="#">Action</Link></li>
                                <li><Link classname="dropdown-item" To="#">Another action</Link></li>
                                <li classname="dropdown-divider"></li>
                                <li><Link classname="dropdown-item" To="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li classname="nav-item">
                            <Link classname="nav-linkdisabled" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    <form classname="d-flex" role="search">
                        <textarea classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"></textarea>
                            <button classname="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
