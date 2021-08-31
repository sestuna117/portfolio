import React from "react";
import { IoIosArrowForward } from "react-icons/all";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import Links from "../Links";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="content-page">
        <div className={"home-text"}>
          <div className={"home-intro"}>Hi, my name is Shio Chio.</div>
          <p className={"home-title"}>Aspiring Web Developer</p>
          <p className={"home-status"}>
            Currently a university student at Stony Brook University working
            towards Bachelors Degree in Computer Science.
          </p>
          <NavLink className="nav-link" to="/about" activeClassName="selected">
            <span className="learn-more">
              More about me <IoIosArrowForward className="learn-more-arrow" />
            </span>
          </NavLink>
        </div>
        <Links />
      </div>
    </div>
  );
}
