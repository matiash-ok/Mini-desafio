import React from "react";
import './navbar.scss';
import {NavLink} from "react-router-dom"



const Navbar = () => {
    return (
        <div className="Navbar w-100 d-flex justify-content-around">
            <NavLink to="/">Tabla</NavLink> 
            <NavLink to="/formulario">Formularios</NavLink> 
        </div>
    )
}

export default Navbar