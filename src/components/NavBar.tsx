import React from "react";
import NavBarLink from "./NavBarLink";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink
        exact={true}
        className="nav-link nav-bar-name"
        to="/"
        activeClassName="selected"
      >
        Portfolio
      </NavLink>
      <ul className="nav-bar-list">
        {/*<NavBarLink exact={true} to={"/"} name={"Home"} />*/}
        <NavBarLink to={"/about"} name={"About Me"} />
        <NavBarLink to={"/projects"} name={"Projects"} />
        {/*<NavBarLink to={"/resume"} name={"Resume"} />*/}
        <NavBarLink to={"/contact"} name={"Contact"} />
      </ul>
    </nav>
  );
}
