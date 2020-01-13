const jsMainStopWatch = document.getElementById('jsMainStopWatch');
const jsStart = document.getElementById('jsStartBtn');
const jsStop = document.getElementById('jsStopBtn');
const jsClear = document.getElementById('jsClearBtn');

const jsMain = document.querySelector('.main');
const jsAddWorkoutBtn = document.querySelector('#jsAddWorkoutBtn');

const jsWorkoutUl = document.getElementById('jsWorkoutUl');
const jsAddSetBtn = document.getElementById('jsAddSetBtn');
const jsStopWatch = document.getElementById('jsStopWatch');
const jsCompleteBtn = document.getElementById('jsCompleteBtn');

let seconds = 0,
  minutes = 0,
  hours = 0,
  t;

let newWorkoutId = 0;
let newSetId = 0;

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
  jsCompleteBtn.removeEventListener('click', inputCurrentWatch);
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

// Add Workout
jsAddWorkoutBtn.addEventListener('click', e => {
  const divTitle = document.createElement('div');
  divTitle.classList.add('main__workoutTitle');
  divTitle.style = 'margin-top:20px';

  const divAddWorkoutTitle = document.createElement('div');
  divAddWorkoutTitle.classList.add('main__addWorkoutTitle');

  const btnAddWokroutTitle = document.createElement('button');
  btnAddWokroutTitle.classList.add('main__addWorkoutBtn');
  btnAddWokroutTitle.id = `jsAddWorkoutBtn${newWorkoutId}`;
  btnAddWokroutTitle.textContent = '-';
  btnAddWokroutTitle.addEventListener('click', () => {
    divTitle.parentNode.removeChild(divTitle);
    newUl.parentNode.removeChild(newUl);
  });
  divAddWorkoutTitle.appendChild(btnAddWokroutTitle);
  divTitle.appendChild(divAddWorkoutTitle);

  const labelWorkoutTitle = document.createElement('label');
  labelWorkoutTitle.classList.add('main__addWorkoutTitleText');
  labelWorkoutTitle.textContent = 'Title';
  divTitle.appendChild(labelWorkoutTitle);

  const inputWorkoutTitle = document.createElement('input');
  inputWorkoutTitle.classList.add('main__workoutTitleInput');
  divTitle.appendChild(inputWorkoutTitle);

  jsMain.appendChild(divTitle);

  const newUl = document.createElement('ul');
  newUl.classList.add('main__workoutChecker');

  const li = document.createElement('li');
  li.classList.add('main__workoutCheckerList');

  const divBtn = document.createElement('div');
  divBtn.classList.add('main__delSet');
  const minusBtn = document.createElement('button');
  minusBtn.classList.add('main__delSetBtn');
  minusBtn.id = 'jsDelSetBtn';
  minusBtn.textContent = '+';
  divBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.classList.add('main__workoutCheckerList');

    const divBtn = document.createElement('div');
    divBtn.classList.add('main__delSet');
    const minusBtn = document.createElement('button');
    minusBtn.classList.add('main__delSetBtn');
    minusBtn.id = 'jsDelSetBtn';
    minusBtn.textContent = '-';
    divBtn.addEventListener('click', () => {
      li.parentNode.removeChild(li);
    });
    divBtn.appendChild(minusBtn);

    const divKg = document.createElement('div');
    divKg.classList.add('main__kg');
    const inputKg = document.createElement('input');
    inputKg.classList.add('main__wrightBox');
    const spanKg = document.createElement('span');
    spanKg.classList.add('main__kgText');
    spanKg.textContent = 'KG';
    divKg.appendChild(inputKg);
    divKg.appendChild(spanKg);

    const divTimes = document.createElement('div');
    divTimes.classList.add('main__times');
    const inputTimes = document.createElement('input');
    inputTimes.classList.add('main__wrightBox');
    const spanTimes = document.createElement('span');
    spanTimes.classList.add('main__timesText');
    spanTimes.textContent = 'TIMES';
    divTimes.appendChild(inputTimes);
    divTimes.appendChild(spanTimes);

    const divSet = document.createElement('div');
    divSet.classList.add('main__set');
    const inputSet = document.createElement('input');
    inputSet.classList.add('main__wrightBox');
    const spanSet = document.createElement('span');
    spanSet.classList.add('main__setText');
    spanSet.textContent = 'SET';
    divSet.appendChild(inputSet);
    divSet.appendChild(spanSet);

    const divStopWatch = document.createElement('div');
    divStopWatch.classList.add('main__stopwatch');
    divStopWatch.textContent = '00:00:00';

    const divComBtn = document.createElement('div');
    divComBtn.classList.add('main__completeBtnWrapper');
    const completBtn = document.createElement('button');
    completBtn.classList = 'main__completeBtn';
    completBtn.id = `jsCompleteBtn${newSetId}`;
    newSetId++;
    completBtn.textContent = 'COMPLETE';
    function inputCurrentWatchOthers() {
      divStopWatch.textContent = jsMainStopWatch.textContent;
      completBtn.removeEventListener('click', inputCurrentWatchOthers);
    }
    completBtn.addEventListener('click', inputCurrentWatchOthers);
    divComBtn.appendChild(completBtn);

    li.appendChild(divBtn);
    li.appendChild(divKg);
    li.appendChild(divTimes);
    li.appendChild(divSet);
    li.appendChild(divStopWatch);
    li.appendChild(divComBtn);
    newUl.appendChild(li);
    jsMain.appendChild(newUl);
  });
  divBtn.appendChild(minusBtn);

  const divKg = document.createElement('div');
  divKg.classList.add('main__kg');
  const inputKg = document.createElement('input');
  inputKg.classList.add('main__wrightBox');
  const spanKg = document.createElement('span');
  spanKg.classList.add('main__kgText');
  spanKg.textContent = 'KG';
  divKg.appendChild(inputKg);
  divKg.appendChild(spanKg);

  const divTimes = document.createElement('div');
  divTimes.classList.add('main__times');
  const inputTimes = document.createElement('input');
  inputTimes.classList.add('main__wrightBox');
  const spanTimes = document.createElement('span');
  spanTimes.classList.add('main__timesText');
  spanTimes.textContent = 'TIMES';
  divTimes.appendChild(inputTimes);
  divTimes.appendChild(spanTimes);

  const divSet = document.createElement('div');
  divSet.classList.add('main__set');
  const inputSet = document.createElement('input');
  inputSet.classList.add('main__wrightBox');
  const spanSet = document.createElement('span');
  spanSet.classList.add('main__setText');
  spanSet.textContent = 'SET';
  divSet.appendChild(inputSet);
  divSet.appendChild(spanSet);

  const divStopWatch = document.createElement('div');
  divStopWatch.classList.add('main__stopwatch');
  divStopWatch.textContent = '00:00:00';

  const divComBtn = document.createElement('div');
  divComBtn.classList.add('main__completeBtnWrapper');
  const completBtn = document.createElement('button');
  completBtn.classList = 'main__completeBtn';
  completBtn.id = `jsCompleteBtn${newSetId}`;
  newSetId++;
  completBtn.textContent = 'COMPLETE';
  function inputCurrentWatchOthers() {
    divStopWatch.textContent = jsMainStopWatch.textContent;
    completBtn.removeEventListener('click', inputCurrentWatchOthers);
  }
  completBtn.addEventListener('click', inputCurrentWatchOthers);
  divComBtn.appendChild(completBtn);

  li.appendChild(divBtn);
  li.appendChild(divKg);
  li.appendChild(divTimes);
  li.appendChild(divSet);
  li.appendChild(divStopWatch);
  li.appendChild(divComBtn);
  newUl.appendChild(li);
  jsMain.appendChild(newUl);
});

jsCompleteBtn.addEventListener('click', inputCurrentWatch);

// Add Set
jsAddSetBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.classList.add('main__workoutCheckerList');

  const divBtn = document.createElement('div');
  divBtn.classList.add('main__delSet');
  const minusBtn = document.createElement('button');
  minusBtn.classList.add('main__delSetBtn');
  minusBtn.id = 'jsDelSetBtn';
  minusBtn.textContent = '-';
  divBtn.addEventListener('click', () => {
    li.parentNode.removeChild(li);
  });
  divBtn.appendChild(minusBtn);

  const divKg = document.createElement('div');
  divKg.classList.add('main__kg');
  const inputKg = document.createElement('input');
  inputKg.classList.add('main__wrightBox');
  const spanKg = document.createElement('span');
  spanKg.classList.add('main__kgText');
  spanKg.textContent = 'KG';
  divKg.appendChild(inputKg);
  divKg.appendChild(spanKg);

  const divTimes = document.createElement('div');
  divTimes.classList.add('main__times');
  const inputTimes = document.createElement('input');
  inputTimes.classList.add('main__wrightBox');
  const spanTimes = document.createElement('span');
  spanTimes.classList.add('main__timesText');
  spanTimes.textContent = 'TIMES';
  divTimes.appendChild(inputTimes);
  divTimes.appendChild(spanTimes);

  const divSet = document.createElement('div');
  divSet.classList.add('main__set');
  const inputSet = document.createElement('input');
  inputSet.classList.add('main__wrightBox');
  const spanSet = document.createElement('span');
  spanSet.classList.add('main__setText');
  spanSet.textContent = 'SET';
  divSet.appendChild(inputSet);
  divSet.appendChild(spanSet);

  const divStopWatch = document.createElement('div');
  divStopWatch.classList.add('main__stopwatch');
  divStopWatch.textContent = '00:00:00';

  const divComBtn = document.createElement('div');
  divComBtn.classList.add('main__completeBtnWrapper');
  const completBtn = document.createElement('button');
  completBtn.classList = 'main__completeBtn';
  completBtn.id = `jsCompleteBtn${newSetId}`;
  newSetId++;
  completBtn.textContent = 'COMPLETE';
  function inputCurrentWatchOthers() {
    divStopWatch.textContent = jsMainStopWatch.textContent;
    completBtn.removeEventListener('click', inputCurrentWatchOthers);
  }
  completBtn.addEventListener('click', inputCurrentWatchOthers);
  divComBtn.appendChild(completBtn);

  li.appendChild(divBtn);
  li.appendChild(divKg);
  li.appendChild(divTimes);
  li.appendChild(divSet);
  li.appendChild(divStopWatch);
  li.appendChild(divComBtn);
  jsWorkoutUl.appendChild(li);
});
