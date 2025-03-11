const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setTime() {
    const now = new Date();
    const hours = 9;
    const minutes = 10;
    const seconds = now.getSeconds();

    const hourDegrees = ((hours / 12) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const secondDegrees = ((seconds / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setTime, 1000);
