import { NavLink } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import "./NavBarLink.css";

export type LinkDetail = {
  to: string;
  name: string;
  exact?: boolean;
};

export default function NavBarLink(props: PropsWithChildren<LinkDetail>) {
  const { to, name, exact } = props;
  return (
    <li className="nav-link-item">
      <NavLink
        exact={exact}
        className="nav-link"
        to={to}
        activeClassName="selected"
      >
        {name}
      </NavLink>
    </li>
  );
}
