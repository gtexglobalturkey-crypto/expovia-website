// Tiny pub-sub so the cinematic sequence can highlight the "Fuarlar" /
// "Exhibitions" nav link from inside Header while it points at it, without
// wiring a full context provider for one transient visual cue.
const target = new EventTarget();

export function emitFairyNavPoint(active) {
  target.dispatchEvent(new CustomEvent("point", { detail: { active } }));
}

export function onFairyNavPoint(handler) {
  const listener = (event) => handler(event.detail.active);

  target.addEventListener("point", listener);

  return () => target.removeEventListener("point", listener);
}
