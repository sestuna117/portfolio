import React from "react";
import "./Page.css";
import "./ProjectsPage.css";
import "../imgs/tc-player.png"

export default function ProjectsPage() {
  return (
    <div className="project-page">
      <div className="content-page">
        <div className="content-header">
          <h2 className="content-header-name">Projects</h2>
        </div>
        <div className="content-body">
          <div className="project-box">
            <div className="project-desc">
              <div className="project-name">Thinking Cap</div>
              <div className="project-summary">
                <p>A League of Legends stats tracker using Riots API</p>
                {/*<p>*/}
                {/*  Given a summoners (players) name, you will be able to see their*/}
                {/*  level, rank, 10 most recent matches, who they most recently played*/}
                {/*  with, their total win-rate on each champ for the displayed match.*/}
                {/*  For each match, you can see a general overview of how the teams*/}
                {/*  performed, analytics, and builds.*/}
                {/*</p>*/}
              </div>
            </div>
            <div className="project-preview">
              <img src={"../imgs/tc-player.png"} alt={"Thinking Cap"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
