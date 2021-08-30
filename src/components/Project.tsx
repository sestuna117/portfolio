import React, { PropsWithChildren, useState } from "react";
import Overlay from "./projects/Overlay";
import { IoIosArrowForward } from "react-icons/all";

export type LinkDetail = {
  name: string;
  desc: string;
  img: string;
  OverlayComponent: JSX.Element;
};

export default function Project(props: PropsWithChildren<LinkDetail>) {
  const { name, img, desc, OverlayComponent } = props;
  const [overlayOn, setOverlayOn] = useState(false);

  return (
    <div>
      <div className="project-box">
        <div className="project-desc">
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
      </div>
      {overlayOn ? (
        <Overlay
          OverlayComponent={OverlayComponent}
          setDisplay={setOverlayOn}
        />
      ) : null}
    </div>
  );
}
