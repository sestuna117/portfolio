import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { ImCross } from "react-icons/all";
import "./Overlay.css";
import { CSSTransition } from "react-transition-group";

export type OverlayParts = {
  OverlayComponent: JSX.Element;
  display: boolean;
  setDisplay: Dispatch<SetStateAction<boolean>>;
};

export default function Overlay(props: PropsWithChildren<OverlayParts>) {
  const { display, setDisplay, OverlayComponent } = props;

  return (
    <div>
      <CSSTransition
        in={display}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="overlay-on"
      >
        <div className="overlay-space">
          <div className="overlay">
            <ImCross
              className="overlay-exit"
              onClick={() => setDisplay(false)}
            />
            {OverlayComponent}
            <button
              className="overlay-exit-button"
              type={"button"}
              onClick={() => setDisplay(false)}
            >
              Close Project
            </button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
