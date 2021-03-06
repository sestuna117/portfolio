import React, { PropsWithChildren, useState } from "react";
import Overlay from "./Overlay";
import "./Project.css";
import { IoIosArrowForward } from "react-icons/all";

export type LinkDetail = {
  name: string;
  desc: string;
  logo: string;
  img: string;
  OverlayComponent: JSX.Element;
};

export default function Project(props: PropsWithChildren<LinkDetail>) {
  const { name, img, logo, desc, OverlayComponent } = props;
  const [overlayOn, setOverlayOn] = useState(false);

  return (
    <div className="project-box">
      <div className="project-desc">
        <img
          className="project-logo"
          src={logo}
          alt={name}
          onClick={() => {
            setOverlayOn(true);
          }}
        />
        <div
          className="project-name"
          onClick={() => {
            setOverlayOn(true);
          }}
        >
          {name}
        </div>
        <div className="project-summary">
          <p
            onClick={() => {
              setOverlayOn(true);
            }}
          >
            {desc}
          </p>
          <p
            className="learn-more"
            onClick={() => {
              setOverlayOn(true);
            }}
          >
            Learn More{<IoIosArrowForward className="learn-more-arrow" />}
          </p>
        </div>
      </div>
      <img
        className="project-preview"
        src={img}
        alt={name}
        onClick={() => {
          setOverlayOn(true);
        }}
      />
      <Overlay
        OverlayComponent={OverlayComponent}
        display={overlayOn}
        setDisplay={setOverlayOn}
      />
    </div>
  );
}
