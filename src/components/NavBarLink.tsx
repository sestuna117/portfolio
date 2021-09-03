import { NavLink } from "react-router-dom";
import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import "./NavBarLink.css";

export type LinkDetail = {
  to: string;
  name: string;
  exact?: boolean;
  setDisplay: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
};

export default function NavBarLink(props: PropsWithChildren<LinkDetail>) {
  const { to, name, exact, setDisplay, isMobile } = props;
  return (
    <li className="nav-link-item">
      <NavLink
        exact={exact}
        className="nav-link"
        to={to}
        activeClassName="selected"
        {...(isMobile && { onClick: () => setDisplay(false) })}
      >
        {name}
      </NavLink>
    </li>
  );
}
