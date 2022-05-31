import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div >
      <nav className="containerNav">
        <NavLink to="/" end className="navLink">
          Lançamentos
        </NavLink>
        <NavLink to="/series" end className="navLink">
          Series
        </NavLink>
        <NavLink to="/busca" className="navLink">
          Busca
        </NavLink>
        <NavLink to="/sobre" className="navLink">
          Sobre
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
