import React, { useEffect, useState } from "react";
import NavBarLink from "./NavBarLink";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/all";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import OutsideAlerter from "./ClickOffHandler";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  function resizeScreen() {
    setIsMobile(window.innerWidth <= 768);
  }

  window.addEventListener("resize", resizeScreen);

  useEffect(() => {
    if (!isMobile) {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  return (
    <OutsideAlerter setDisplay={setDropdownOpen} isMobile={isMobile}>
      <nav className={classNames("nav-bar", { "nav-bar-mobile": isMobile })}>
        <div className="nav-bar-primary">
          <NavLink
            exact={true}
            className="nav-link nav-bar-name"
            to="/"
            activeClassName="selected"
          >
            Jason Guo
          </NavLink>
          <GiHamburgerMenu
            className="nav-bar-dropdown"
            onClick={() => setDropdownOpen((prev) => !prev)}
          />
        </div>
        <CSSTransition
          in={dropdownOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
          classNames="navbar-list"
        >
          <ul className="nav-bar-list">
            <NavBarLink
              exact={true}
              to={"/"}
              name={"Home"}
              setDisplay={setDropdownOpen}
              isMobile={isMobile}
            />
            <NavBarLink
              to={"/about"}
              name={"About Me"}
              setDisplay={setDropdownOpen}
              isMobile={isMobile}
            />
            <NavBarLink
              to={"/projects"}
              name={"Projects"}
              setDisplay={setDropdownOpen}
              isMobile={isMobile}
            />
            {/*<NavBarLink to={"/resume"} name={"Resume"} setDisplay={setDropdownOpen} />*/}
            <NavBarLink
              to={"/contact"}
              name={"Contact"}
              setDisplay={setDropdownOpen}
              isMobile={isMobile}
            />
          </ul>
        </CSSTransition>
      </nav>
    </OutsideAlerter>
  );
}
