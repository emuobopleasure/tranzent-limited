// Short vibration feedback for form results.
// Works on Android browsers; iOS Safari ignores vibrate(), so it silently does nothing there.

function canVibrate() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  if (typeof navigator.vibrate !== "function") return false;
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  } catch {}
  return true;
}

function buzz(pattern) {
  if (!canVibrate()) return;
  try {
    navigator.vibrate(pattern);
  } catch {}
}

export const haptics = {
  success: () => buzz(40),          // one short buzz
  error: () => buzz([60, 60, 60]),  // double buzz
};