'use strict'

const secondsHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function SetDate () {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = (seconds/60)*360+90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = (minutes/60)*360+90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (hours/12)*360+90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(SetDate, 1000);