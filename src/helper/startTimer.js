import { timer } from "./timer.js";

export let timerID;
export const startTimer = () => {
  let timerFlag;
  document.getElementById("start").classList.add("hide");
  document.getElementById("pause").classList.remove("hide");
  document.getElementById("reset").classList.remove("hide");
  let min = document.getElementById("min").innerHTML;
  let sec = document.getElementById("sec").innerHTML;
  if (min == 25) {
    timerFlag = true;
  } else {
    timerFlag = false;
  }
  const timerDiv = document.getElementsByClassName("stop-watch");
  timerID = setInterval(() => {
    if (sec == 0 && min != 0) {
      sec = 60;
      min--;
    }
    sec--;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    if (sec == 0 && min == 0) {
      clearInterval(timerID);
      window.alert("Timer Up!!!");
      if (timerFlag == true) {
        timerFlag = false;
        timer(5, 0);
      } else {
        timerFlag = true;
        timer(25, 0);
      }
      startTimer();
    }
  }, 1000);
};
