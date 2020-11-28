import { timerID } from "./startTimer.js";

export const pauseTimer = () => {
  document.getElementById("start").classList.remove("hide");
  document.getElementById("pause").classList.add("hide");
  clearInterval(timerID);
};
