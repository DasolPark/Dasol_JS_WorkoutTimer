const jsForm = document.querySelector('#js-greetingForm');
const input = jsForm.querySelector('input');
const jsGreetingName = document.querySelector('#js-greetingName');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  jsForm.classList.add(SHOWING_CN);
  jsForm.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  jsForm.classList.remove(SHOWING_CN);
  jsGreetingName.classList.add(SHOWING_CN);
  jsGreetingName.innerText = `Let's work out ${text}!!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

if (jsForm) {
  loadName();
}
