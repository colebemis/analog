(document => {
  const secondHand = document.querySelector('.hand-second');
  const minuteHand = document.querySelector('.hand-minute');
  const hourHand = document.querySelector('.hand-hour');

  let rotations = [0, 0, 0]; // [seconds, minutes, hours]

  function setTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    if (seconds === 0) {
      rotations[0]++;
    }

    if (minutes === 0 && seconds === 0) {
      rotations[1]++;
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      rotations[2]++;
    }

    const secondsDeg = (seconds / 60 * 360) + (rotations[0] * 360);
    const minutesDeg = (minutes / 60 * 360) + (rotations[1] * 360);
    const hoursDeg = (hours / 12 * 360) + (minutes / 60 * 30) + (rotations[2] * 360);

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  }

  setTime();
  setInterval(setTime, 1000);
})(document);
