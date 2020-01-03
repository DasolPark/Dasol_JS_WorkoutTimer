const jsMainStopWatch = document.getElementById('jsMainStopWatch');
const jsStart = document.getElementById('jsStartBtn');
const jsStop = document.getElementById('jsStopBtn');
const jsClear = document.getElementById('jsClearBtn');

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

jsCompleteBtn.addEventListener('mousedown', inputCurrentWatch);
