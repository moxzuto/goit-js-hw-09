const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

function startChangingColor() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopChangingColor() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  const body = document.body;
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

