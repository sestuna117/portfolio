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
  console.log(display);

  return (
    <div>
      <CSSTransition
        in={display}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="alert"
      >
        <div className="overlay">
          <ImCross className="overlay-exit" onClick={() => setDisplay(false)} />
          {OverlayComponent}
        </div>
      </CSSTransition>
    </div>
  );
}
