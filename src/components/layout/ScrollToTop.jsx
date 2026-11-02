import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Starts every link navigation at the top of the page. Back/forward (POP) is
// left to the browser so it can restore the previous scroll position, and
// links to an in-page section keep their own target. "instant" overrides the
// global `scroll-behavior: smooth`, which would animate across the new page.
function ScrollToTop() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP" || hash) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [key, hash, navigationType]);

  return null;
}

export default ScrollToTop;
