import React from "react"
import "./NavbarTop.css"
import { NavbarData } from "../../Data/NavbarData"
import { MetaData } from "../../Data/MetaData";

export const NavbarTop = () => {
    const data = NavbarData();
    const metaData = MetaData();
    return(
        <div className="row navbar-top rounded">
            <div className="col-sm-8 rounded left-navbar">
                <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand" href="/#">{metaData.namaWeb}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
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
                </nav>
            </div>
            <div className="col-sm-4 right-logo-main">
                <img className="right-logo"src="./logo.svg" alt="logo"/>
            </div>
        </div>
    )
}