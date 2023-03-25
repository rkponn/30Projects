// lets save hands in variables
const secondsHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const digitalClock = document.querySelector('.digital');

const rotations = (time, divideBy) => {
    return ((time / divideBy) * 360) + 90;
};

function setDate() {
    // grab the current date for local time
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // set the rotation of the hands
    const secondsDegree = rotations(seconds, 60);
    const minutesDegree = rotations(minutes, 60);
    const hoursDegree = rotations(hours, 12);

    // set the rotation of the hands
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    let amPm;
    if (hours >= 12) {
        amPm = 'PM';
    } else {
        amPm = 'AM';
    }
    let digitalHour = hours % 12;
    // set digital clock in 12 hour format
    digitalClock.innerHTML = `${digitalHour}:${minutes}:${seconds} ${amPm}`;

}

setInterval(setDate, 1000);


