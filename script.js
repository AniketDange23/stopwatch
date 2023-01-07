const stopwatch = document.getElementById('stopwatch');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

let running = false;
let interval;
let elapsedTime = 0;

function start() {
  if (!running) {
    interval = setInterval(() => {
      elapsedTime++;
      updateStopwatch();
    }, 10);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(interval);
    running = false;
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  updateStopwatch();
}

function updateStopwatch() {
  const time = new Date(elapsedTime);
  hours.innerHTML = time.getUTCHours().toString().padStart(2, '0');
  minutes.innerHTML = time.getUTCMinutes().toString().padStart(2, '0');
  seconds.innerHTML = time.getUTCSeconds().toString().padStart(2, '0');
  milliseconds.innerHTML = time.getUTCMilliseconds().toString().padStart(2, '0');
}

const startButton = document.getElementById('start');
startButton.addEventListener('click', start);

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stop);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);
