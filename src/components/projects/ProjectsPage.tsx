import React, { useEffect } from "react";
import "../Page.css";
import "./ProjectsPage.css";
import tcPlayer from "../../imgs/thinking-cap/tc-player.png";
import tcLogo from "../../imgs/thinking-cap/tc-logo.png";
import tttCard from "../../imgs/triple-triad-tracker/tttCard.png";
import blankLogo from "../../imgs/pictures/blank.png";
import ThinkingCapOverlay from "./project-overlays/ThinkingCapOverlay";
import TripleTriadOverlay from "./project-overlays/TripleTriadOverlay";
import Project from "./Project";

const PROJECTS = [
  {
    name: "Thinking Cap",
    desc: "A League of Legends stats tracker using Riots API",
    logo: tcLogo,
    img: tcPlayer,
    OverlayComponent: ThinkingCapOverlay,
  },
  {
    name: "Triple Triad Tracker (Work in Progress)",
    desc: "A Final Fantasy XIV card tracker for the game Triple Triad",
    logo: blankLogo,
    img: tttCard,
    OverlayComponent: TripleTriadOverlay,
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="project-page">
      <div className="content-page">
        <div className="content-header">
          <h2 className="content-header-name">Projects</h2>
        </div>
        <div className="content-body">
          {PROJECTS.map(({ name, desc, logo, img, OverlayComponent }) => (
            <Project
              key={name}
              name={name}
              desc={desc}
              logo={logo}
              img={img}
              OverlayComponent={OverlayComponent()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
