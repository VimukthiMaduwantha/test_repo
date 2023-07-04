import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Styles/navBar.css'

function Naav() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                View Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/orderAtTable"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Order At Table
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/orderOnline"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Order Online
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Naav;