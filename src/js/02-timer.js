import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      window.alert("Please choose a date in the future");
      document.querySelector("button[data-start]").disabled = true;
    } else {
      document.querySelector("button[data-start]").disabled = false;
    }
  },
};

flatpickr("#datetime-picker", options);

const daysElem = document.querySelector("[data-days]");
const hoursElem = document.querySelector("[data-hours]");
const minutesElem = document.querySelector("[data-minutes]");
const secondsElem = document.querySelector("[data-seconds]");
const startBtn = document.querySelector("[data-start]");

let countdown;

startBtn.addEventListener("click", () => {
  const selectedDate = new Date(document.querySelector("#datetime-picker").value);
  clearInterval(countdown);
  countdown = setInterval(() => {
    const currentDate = new Date();
    const timeLeft = selectedDate - currentDate;
    if (timeLeft < 0) {
      clearInterval(countdown);
      daysElem.textContent = "00";
      hoursElem.textContent = "00";
      minutesElem.textContent = "00";
      secondsElem.textContent = "00";
      startBtn.disabled = true;
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysElem.textContent = days.toString().padStart(2, "0");
    hoursElem.textContent = hours.toString().padStart(2, "0");
    minutesElem.textContent = minutes.toString().padStart(2, "0");
    secondsElem.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}
