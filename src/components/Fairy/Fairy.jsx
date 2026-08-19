import "./Fairy.css";

import { useEffect, useRef, useState } from "react";

const ENTER_DURATION = 500;
const EXIT_DURATION = 500;

// Phases: hidden -> entering -> visible -> exiting -> gone.
// No persistence layer on purpose — Fairy runs this sequence once per
// mount. A hard refresh remounts the page (and Fairy with it); an SPA
// route change away and back also remounts it fresh, which matches
// "won't repeat on the same page load, may run again on reload".
function Fairy({ pose, alt, message, gesture, delay, hold, className = "" }) {
  const [phase, setPhase] = useState("hidden");
  const timersRef = useRef([]);

  useEffect(() => {
    const schedule = (fn, ms) => {
      timersRef.current.push(setTimeout(fn, ms));
    };

    schedule(() => setPhase("entering"), delay);
    schedule(() => setPhase("visible"), delay + ENTER_DURATION);
    schedule(() => setPhase("exiting"), delay + ENTER_DURATION + hold);
    schedule(
      () => setPhase("gone"),
      delay + ENTER_DURATION + hold + EXIT_DURATION,
    );

    const timers = timersRef.current;

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [delay, hold]);

  if (phase === "hidden" || phase === "gone") {
    return null;
  }

  return (
    <div
      className={`fairy fairy--${gesture} fairy--${phase} ${className}`}
      aria-hidden="true"
    >
      <div className="fairy-bubble">
        <p>{message}</p>
      </div>

      <img
        src={pose}
        alt={alt}
        className="fairy-figure"
      />
    </div>
  );
}

export default Fairy;
