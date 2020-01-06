const jsMainStopWatch = document.getElementById('jsMainStopWatch');
const jsStart = document.getElementById('jsStartBtn');
const jsStop = document.getElementById('jsStopBtn');
const jsClear = document.getElementById('jsClearBtn');

const jsWorkoutTitle = document.getElementById('jsWorkoutTitle');
const jsWorkoutUl = document.getElementById('jsWorkoutUl');
const jsAddSetBtn = document.getElementById('jsAddSetBtn');
const jsKgWright = document.getElementById('jsKgWright');
const jsTimeWright = document.getElementById('jsTimeWright');
const jsSetWright = document.getElementById('jsSetWright');

const jsStopWatch = document.getElementById('jsStopWatch');
const jsCompleteBtn = document.getElementById('jsCompleteBtn');

let seconds = 0,
  minutes = 0,
  hours = 0,
  t;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  jsMainStopWatch.textContent =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);

  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}

function inputCurrentWatch() {
  jsStopWatch.textContent = jsMainStopWatch.textContent;
  jsCompleteBtn.removeEventListener('mousedown', inputCurrentWatch);
}

function addNewSet() {}

function removeSet() {}

// timer();

jsStart.addEventListener('click', () => {
  timer();
});

jsStop.addEventListener('click', () => {
  clearTimeout(t);
});

jsClear.addEventListener('click', () => {
  jsMainStopWatch.textContent = '00:00:00';
  seconds = 0;
  minutes = 0;
  hours = 0;
});

jsWorkoutTitle.addEventListener('click', () => {
  jsWorkoutTitle.value = window.prompt('PULL UP? PUSH UP?');
});

jsAddSetBtn.addEventListener('click', () => {
  addNewSet();
});

jsKgWright.addEventListener('click', () => {
  jsKgWright.value = window.prompt('KG?');
});

jsTimeWright.addEventListener('click', () => {
  jsTimeWright.value = window.prompt('TIMES?');
});

jsSetWright.addEventListener('click', () => {
  jsSetWright.value = window.prompt('SET?');
});

jsCompleteBtn.addEventListener('mousedown', inputCurrentWatch);
