const clockEl = document.getElementById("clock");
const statusEl = document.getElementById("status");
const accumulatorEl = document.getElementById("accumulator");
const counterEl = document.getElementById("counter");

let elapsedSeconds = 0;
let intervalId = null;
let startedAt = 0;

function pad(value) {
  return String(value).padStart(2, "0");
}

function render() {
  const hours = Math.floor(elapsedSeconds / 3600) % 100;
  const minutes = Math.floor(elapsedSeconds / 60) % 60;
  const seconds = elapsedSeconds % 60;

  clockEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  // Illustrative 00H-3BH counter corresponding to the assembly counter idea.
  const counterValue = seconds % 60;
  const hexValue = counterValue.toString(16).toUpperCase().padStart(2, "0") + "H";
  accumulatorEl.textContent = hexValue;
  counterEl.textContent = hexValue;
}

function tick() {
  elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
  render();
}

document.getElementById("start").addEventListener("click", () => {
  if (intervalId !== null) return;
  startedAt = Date.now() - elapsedSeconds * 1000;
  intervalId = window.setInterval(tick, 200);
  statusEl.textContent = "CLOCK RUNNING";
  tick();
});

document.getElementById("pause").addEventListener("click", () => {
  if (intervalId !== null) {
    tick();
    window.clearInterval(intervalId);
    intervalId = null;
  }
  statusEl.textContent = "CLOCK PAUSED";
});

document.getElementById("reset").addEventListener("click", () => {
  if (intervalId !== null) window.clearInterval(intervalId);
  intervalId = null;
  elapsedSeconds = 0;
  startedAt = 0;
  statusEl.textContent = "READY TO START";
  render();
});

render();
