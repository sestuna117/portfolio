import React, { useState } from "react";
import "./Page.css";
import "./ProjectsPage.css";
import tcPlayer from "../imgs/thinking-cap/tc-player.png";
import ThinkingCapOverlay from "./projects/ThinkingCapOverlay";
import Project from "./Project";

const PROJECTS = [
  {
    name: "Thinking Cap",
    desc: "A League of Legends stats tracker using Riots API",
    img: tcPlayer,
    OverlayComponent: ThinkingCapOverlay,
  },
];

export default function ProjectsPage() {
  return (
    <div className="project-page">
      <div className="content-page">
        <div className="content-header">
          <h2 className="content-header-name">Projects</h2>
        </div>
        <div className="content-body">
          {PROJECTS.map(({ name, desc, img, OverlayComponent }) => (
            <Project
              key={name}
              name={name}
              desc={desc}
              img={img}
              OverlayComponent={OverlayComponent()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
