let seconds = 1;
let minutes = 1;
let hours = 1;

const secondText = document.querySelector("#secondText");
const minuteText = document.querySelector("#minuteText");
const hourText = document.querySelector("#hourText");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

let intervalIDSec;
let intervalIDMin;
let intervalIDHour;

startBtn.addEventListener("click", function () {
  intervalIDSec = setInterval(function () {
    secondText.innerHTML = seconds;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
    }
  }, 10);

  console.log(intervalIDSec);

  intervalIDMin = setInterval(function () {
    minuteText.innerHTML = minutes;
    minutes++;

    if (minutes === 59) {
      minutes = 0;
    }
  }, 600);

  console.log(intervalIDMin);

  intervalIDHour = setInterval(function () {
    hourText.innerHTML = hours;
    hours++;
  }, 3600);

  console.log(intervalIDHour);
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalIDSec);
  clearInterval(intervalIDMin);
  clearInterval(intervalIDHour);
});

resetBtn.addEventListener("click", function () {
  console.log("Reset pressed");
});
