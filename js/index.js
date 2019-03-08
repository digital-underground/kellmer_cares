'use strict';

let audio = document.getElementById('myBeep');
let events = [1, 5, 10, 15, 30, 60, 90, 120];
let x;

//update audio src with the next audio file
audio.addEventListener('ended', () => {
    audio.src = `data/${events[0]}_minutes.m4a`;
    audio.load();
});

function calcTime(milliseconds) {
    return {
        hours: Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((milliseconds % (1000 * 60)) / 1000),
    };
}

function updateClock({ hours, minutes, seconds }) {
    document.getElementById('demo').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';
}

function toggleStartButton(status) {
    document.getElementById('startButton').disabled = status;
}

function reset() {
    clearInterval(x);
    updateClock(calcTime(0));
    toggleStartButton(false);
}

function main() {
    toggleStartButton(true);
    audio.play();
    let countDownDate = new Date();

    // Update the count down every 1 second
    x = setInterval(function () {

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = now - countDownDate.getTime();

        // Time calculations for days, hours, minutes and seconds and
        // Output the result in an element with id="demo"
        updateClock(calcTime(distance));

        //play appropriate recording based on elapsed time.
        if (Math.floor(distance / 60000) === events[0]) {
            audio.play();
            //move to next audio event
            events = events.slice(1);
        }
    }, 333);
}