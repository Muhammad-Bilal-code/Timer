var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var hours = 0;
var mins = 0;
var seconds = 0;
var miliSeconds = 0;
var interval;
var hoursDisp = document.getElementById("hoursDisp");
console.log(hoursDisp);
var minsDisp = document.getElementById("minsDisp");
console.log(minsDisp);
var secDisp = document.getElementById("secondsDisp");
console.log(secDisp);
var miliSecDisp = document.getElementById("miliSecondsDisp");
console.log(miliSecDisp);
// function display() {
//   // hoursDisp.innerHTML = hours;
//   minsDisp.innerHTML = mins;
//   secDisp.innerHTML = seconds;
//   miliSecDisp.innerHTML = miliSeconds;
// }
// display();

var interval;
var hours = 0;
var mins = 0;
var seconds = 0;
function handleStart() {
  start.style.display = "none";
  stop.style.display = "block";
  reset.style.display = "block";
  console.log("test");
  document.getElementById("hoursInpt").style.display = "none";
  document.getElementById("minsInpt").style.display = "none";
  document.getElementById("secondsInpt").style.display = "none";
  hours = hoursLabel.innerHTML;
  // console.log(hours);
  mins = minsLabel.innerHTML;
  // console.log(minsLabel.innerHTML);
  seconds = secondsLabel.innerHTML;
  // console.log(seconds);
  interval = setInterval(function () {
    // if (hours == 0) {
    // console.log("Bilal");
    seconds--;
    console.log(seconds);
    secondsLabel.innerHTML = seconds;
    if (seconds < 0 && hours == 0 && mins == 0) {
      seconds = 0;
      secondsLabel.innerText = seconds;
      mins = 0;
      minsLabel.innerText = mins;
      clearInterval(interval);

      // }
    }
    if (seconds < 0 && mins == 0 && hours > 0) {
      seconds = 60;
      secondsLabel.innerText = seconds;
      hours--;
      hoursLabel.innerText = hours;
      mins = 59;
      minsLabel.innerText = mins;
    }
    if (seconds < 0 && mins > 0) {
      seconds = 59;
      secondsLabel.innerText = seconds;
      mins--;
      minsLabel.innerText = mins;
    }
  }, 1000);
}

function handleStop() {
  console.log("Stop");
  start.style.display = "block";
  stop.style.display = "none";
  reset.style.display = "block";
  clearInterval(interval);
}

function handleReset() {
  hours = 0;
  mins = 0;
  seconds = 0;
  start.style.display = "block";
  stop.style.display = "none";
  reset.style.display = "none";
  console.log("Reset");
  clearInterval(interval);
  document.getElementById("hoursInpt").style.display = "block";
  document.getElementById("hoursInpt").value = hours;
  document.getElementById("hoursLabel").innerText = hours;
  document.getElementById("minsInpt").style.display = "block";
  document.getElementById("minsInpt").value = mins;
  document.getElementById("minsLabel").innerText = mins;
  document.getElementById("secondsInpt").style.display = "block";
  document.getElementById("secondsInpt").value = seconds;
  document.getElementById("secondsLabel").innerText = seconds;
}

var hoursLabel = document.getElementById("hoursLabel");
function handleHours(e) {
  // console.log(e.value);
  hoursLabel.innerHTML = e.value;
}
var minsLabel = document.getElementById("minsLabel");
function handleMins(e) {
  // console.log(e.value);
  minsLabel.innerHTML = e.value;
}
var secondsLabel = document.getElementById("secondsLabel");
function handleSeconds(e) {
  // console.log(e.value);
  secondsLabel.innerHTML = e.value;
}
