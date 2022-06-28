import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = props => {
    return (
        <div className="Header">
            <NavLink to="/">Lista productos</NavLink>
            <NavLink to="/cart">Carrito</NavLink>
        </div>
    )
}

export default Header