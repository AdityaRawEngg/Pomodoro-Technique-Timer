import { timer } from "../helper/timer.js";
import { timerHandler } from "./timerHandler.js";

export const displayTimer = () => {
  const rootDiv = document.getElementById("root");
  const timerDiv = document.createElement("div");
  const minPara = document.createElement("p");
  const spanMin = document.createElement("span");
  const secPara = document.createElement("p");
  const spanSec = document.createElement("span");
  spanMin.innerHTML = "m";
  spanSec.innerHTML = "s";
  timerDiv.id = "timer";
  minPara.id = "min";
  secPara.id = "sec";
  timerDiv.appendChild(minPara);
  timerDiv.appendChild(spanMin);
  timerDiv.appendChild(secPara);
  timerDiv.appendChild(spanSec);
  rootDiv.appendChild(timerDiv);
  rootDiv.appendChild(timerHandler());
  timer(25, 0);
};
