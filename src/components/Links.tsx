import React from "react";
import { IoLogoGithub, SiLinkedin, SiSteam } from "react-icons/all";
import "./Links.css";

export default function Links() {
  return (
    <div className="links-container">
      <a
        className="link link-linkedin"
        href={"#"}
        target={"_blank"}
        rel="noreferrer"
      >
        <SiLinkedin className="link-icon" />
      </a>
      <a
        className="link link-steam"
        href={"https://steamcommunity.com/profiles/76561198190497477"}
        target={"_blank"}
        rel="noreferrer"
      >
        <SiSteam className="link-icon" />
      </a>
      <a
        className="link link-github"
        href={"https://github.com/sestuna117"}
        target={"_blank"}
        rel="noreferrer"
      >
        <IoLogoGithub className="link-icon" />
      </a>
    </div>
  );
}
