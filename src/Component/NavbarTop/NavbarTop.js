import React from "react";
import "./NavbarTop.css";
import { NavbarData } from "../../Data/NavbarData";
import { MetaData } from "../../Data/MetaData";

export const NavbarTop = () => {
    const data = NavbarData();
    const metaData = MetaData();  // Assuming you're using metaData somewhere, otherwise you can remove this line
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top mt-sm-3">
            <div className="container-fluid">
                {/* Navbar Brand */}
                <a className="navbar-brand" href="/#">
                    {metaData.namaWeb}
                </a>

                {/* Toggle button for mobile view */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {data.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href={item.href}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
