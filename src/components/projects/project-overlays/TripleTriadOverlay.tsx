import React from "react";
import "../Overlay.css";
import "./ThinkingCapOverlay.css";
import tttCard from "../../../imgs/triple-triad-tracker/tttCard.png";
import tttCardList from "../../../imgs/triple-triad-tracker/tttCardList.png";
import tttNPC from "../../../imgs/triple-triad-tracker/tttNPC.png";
import tttNPCList from "../../../imgs/triple-triad-tracker/tttNPCList.png";
import tttPack from "../../../imgs/triple-triad-tracker/tttPacks.png";

export default function ThinkingCapOverlay() {
  return (
    <div className="overlay-content">
      <p className="project-title">Triple Triad Tracker</p>
      <p className="project-summary">
        A Final Fantasy XIV card tracker for the game Triple Triad
      </p>
      <p className="project-summary">
        Made using: React, Typescript, Raelys' Another Triple Triad Tracker API
        and XIVAPI.
      </p>
      <p className="project-summary">
        Allows users to look up information about a Triple Triad card, opponents
        and purchasable card packs in game. Inspiration for the design is taken
        after Lodestone. While no searchable features are currently available, I
        plan to later implement them along with user specific interactions.
      </p>
      <img className="project-ex" src={tttCard} alt={"Card"} />
      <img className="project-ex" src={tttCardList} alt={"CardList"} />
      <img className="project-ex" src={tttNPC} alt={"NPC"} />
      <img className="project-ex" src={tttNPCList} alt={"NPCList"} />
      <img className="project-ex" src={tttPack} alt={"Pack"} />
    </div>
  );
}
