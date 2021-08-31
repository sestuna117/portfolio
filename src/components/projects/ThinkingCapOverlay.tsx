import React from "react";
import "./Overlay.css";
import tcPlayer from "../../imgs/thinking-cap/tc-player.png";
import tcAnalytics from "../../imgs/thinking-cap/tc-analytics.png";
import tcBuilds from "../../imgs/thinking-cap/tc-builds.png";
import tcMatch from "../../imgs/thinking-cap/tc-full-match.png";
import tcHome from "../../imgs/thinking-cap/tc-home.png";
import tcMHome from "../../imgs/thinking-cap/tc-mobile-home.png";
import tcMPlayer from "../../imgs/thinking-cap/tc-mobile-player.png";

export default function ThinkingCapOverlay() {
  return (
    <div className="overlay-content">
      <p>
        Given a summoners (players) name, you will be able to see their level,
        rank, 10 most recent matches, who they most recently played with, their
        total win-rate on each champ for the displayed match. For each match,
        you can see a general overview of how the teams performed, analytics,
        and builds.
      </p>
      <img className="project-ex" src={tcHome} alt={"Home"} />
      <img className="project-ex" src={tcPlayer} alt={"Player"} />
      <img className="project-ex" src={tcMatch} alt={"Match"} />
      <img className="project-ex" src={tcAnalytics} alt={"Analytics"} />
      <img className="project-ex" src={tcBuilds} alt={"Builds"} />
      <div>
        <img className="project-ex-mobile" src={tcMHome} alt={"Home Mobile"} />
        <img
          className="project-ex-mobile"
          src={tcMPlayer}
          alt={"Player Mobile"}
        />
      </div>
    </div>
  );
}
