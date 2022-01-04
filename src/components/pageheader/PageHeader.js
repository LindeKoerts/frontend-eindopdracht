import React from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <nav>
            <div className="nav-container">
                <h2>#WhatToWear.</h2>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/opdefiets" exact activeClassName="active-link">Op de fiets</NavLink>

                    </li>

                    <li>
                        <NavLink to="/eenstad" exact activeClassName="active-link">Een stad</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink>

                    </li>

                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Inloggen</NavLink>
                    </li>

                </ul>

            </div>

        </nav>

    );
}

export default Header;