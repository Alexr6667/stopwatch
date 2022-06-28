const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", function () {
  console.log("Start pressed");
});

stopBtn.addEventListener("click", function () {
  console.log("Stop pressed");
});

resetBtn.addEventListener("click", function () {
  console.log("Reset pressed");
});
