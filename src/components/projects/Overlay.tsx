import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { ImCross } from "react-icons/all";
import "./Overlay.css";

export type OverlayParts = {
  OverlayComponent: JSX.Element;
  setDisplay: Dispatch<SetStateAction<boolean>>;
};

export default function Overlay(props: PropsWithChildren<OverlayParts>) {
  const { setDisplay, OverlayComponent } = props;

  return (
    <div className="overlay">
      <ImCross className="overlay-exit" onClick={() => setDisplay(false)} />
      {OverlayComponent}
    </div>
  );
}
