import React, {
  useRef,
  useEffect,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";
import PropTypes from "prop-types";

export type DisplayHandler = {
  setDisplay: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
};

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(
  ref: React.MutableRefObject<any>,
  setDisplay: Dispatch<SetStateAction<boolean>>,
  isMobile: boolean
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target) && isMobile) {
        setDisplay(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, ref, setDisplay]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props: PropsWithChildren<DisplayHandler>) {
  const { setDisplay, isMobile } = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setDisplay, isMobile);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideAlerter;
