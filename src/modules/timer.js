const timer = (idSection, deadline) => {
  const section = document.getElementById(idSection);
  const timerHours = section.querySelector('.count_2 span');
  const timerMinutes = section.querySelector('.count_3 span');
  const timerSeconds = section.querySelector('.count_4 span');
  const timerdays = section.querySelector('.count_1 span');
  let timerStart = null;

  const getTimeRemaining = () => {
    const dateNow = new Date().getTime();
    const dateStop = new Date(deadline).getTime();
    const deltaTime = Math.floor((dateStop - dateNow) / 1000);
    let seconds = deltaTime % 60;
    let minutes = Math.floor((deltaTime / 60) % 60);
    let hours = Math.floor((deltaTime / 60 / 60) % 24);
    let days = Math.floor(deltaTime / 60 / 60 / 24);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    days = days < 10 ? '0' + days : days;
    if (deltaTime <= 0) {
      seconds = '00';
      minutes = '00';
      hours = '00';
      days = '00';
    }
    return {
      days,
      deltaTime,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();
    timerdays.textContent = getTime.days;
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    if (timerStart === null) {
      timerStart = setInterval(updateClock, 1000);
    }

    if (getTime.deltaTime <= 0) {
      clearInterval(timerStart);
      timerStart = null;
    }
  };
  updateClock();
};
export default timer;
