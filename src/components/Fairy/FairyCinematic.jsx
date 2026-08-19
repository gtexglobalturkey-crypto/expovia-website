import "./FairyCinematic.css";

import { useEffect, useRef, useState } from "react";

import { useTranslation } from "../../hooks/useTranslation";

import fairyGreet from "../../assets/images/fairy/fairy-greet.png";
import fairyPoint from "../../assets/images/fairy/fairy-point.png";
import fairyInform from "../../assets/images/fairy/fairy-inform.png";
import fairyCheer from "../../assets/images/fairy/fairy-cheer.png";

import { TIMELINE, fairyCinematicContent } from "./fairyCinematicScript";
import { emitFairyNavPoint } from "./fairyNavSignal";

const SESSION_KEY = "expovia_fairy_intro_played";

// Which of the four existing poses is "on screen" during each phase, and
// whether the character layer should be visible at all. Re-using the same
// four static illustrations across every beat (no new artwork), softened
// with crossfades so pose swaps don't read as hard cuts.
const POSE_BY_PHASE = {
  idle: null,
  particles: null,
  enter: fairyCheer,
  land: fairyGreet,
  talkIntro: fairyGreet,
  point: fairyPoint,
  showExpomate: fairyInform,
  farewell: fairyCheer,
  signatureWait: null,
  signature: null,
  signatureFade: null,
  finished: null,
};

function FairyCinematic() {
  const { language } = useTranslation();
  const copy = fairyCinematicContent[language] ?? fairyCinematicContent.en;

  const alreadyPlayed =
    typeof sessionStorage !== "undefined" &&
    sessionStorage.getItem(SESSION_KEY) === "1";

  const [phase, setPhase] = useState(() =>
    alreadyPlayed ? "finished" : "pending",
  );
  const rootRef = useRef(null);

  useEffect(() => {
    if (alreadyPlayed) {
      return undefined;
    }

    const node = rootRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const timers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          sessionStorage.setItem(SESSION_KEY, "1");

          let elapsed = 0;

          TIMELINE.forEach((step) => {
            timers.push(setTimeout(() => setPhase(step.phase), elapsed));
            elapsed += step.duration;
          });

          timers.push(setTimeout(() => setPhase("finished"), elapsed));
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    emitFairyNavPoint(phase === "point");
  }, [phase]);

  if (phase === "finished" || phase === "pending") {
    return (
      <div
        ref={rootRef}
        className="fairy-cinematic"
        data-phase={phase}
        aria-hidden="true"
      />
    );
  }

  const pose = POSE_BY_PHASE[phase];
  const showParticles =
    phase === "particles" || phase === "enter" || phase === "farewell";
  const showCard = phase === "talkIntro" || phase === "showExpomate";
  const cardText =
    phase === "talkIntro" ? copy.talkIntro : copy.showExpomate;

  return (
    <div
      ref={rootRef}
      className="fairy-cinematic"
      data-phase={phase}
      aria-hidden="true"
    >
      <div className="fairy-cinematic__anchor">
        {showCard && (
          <div className="fairy-cinematic__card">
            <p>{cardText}</p>
          </div>
        )}

        {(phase === "signature" || phase === "signatureFade") && (
          <p
            className={`fairy-cinematic__signature fairy-cinematic__signature--${phase}`}
          >
            {copy.signature} 👋
          </p>
        )}

        <div
          className={`fairy-cinematic__stage fairy-cinematic__stage--${phase}`}
        >
          {showParticles && (
            <div className="fairy-cinematic__particles">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="fairy-cinematic__particle"
                  style={{ "--i": i }}
                />
              ))}
            </div>
          )}

          {pose && (
            <img
              key={pose}
              src={pose}
              alt=""
              className="fairy-cinematic__figure"
            />
          )}

          {phase === "showExpomate" && (
            <div className="fairy-cinematic__device">
              <span className="fairy-cinematic__device-tag">
                {copy.expomateTag}
              </span>

              <span className="fairy-cinematic__device-note">
                {copy.expomateNote}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FairyCinematic;
