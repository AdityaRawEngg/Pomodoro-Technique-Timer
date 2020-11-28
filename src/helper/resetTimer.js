import { timerID } from "./startTimer.js";
import { timer } from "./timer.js";

export const resetTimer = () => {
  //   resetbtn.classList.add("hide");
  document.getElementById("start").classList.remove("hide");
  document.getElementById("pause").classList.add("hide");
  document.getElementById("reset").classList.add("hide");
  timer(25, 0);
  clearInterval(timerID);
};
