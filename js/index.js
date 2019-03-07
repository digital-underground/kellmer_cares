'use strict';

let beep = document.getElementById('myBeep');
let events = [1, 5, 10, 15, 30, 60, 90, 120];
let x;

// beep.addEventListener('ended', () => {
//     console.log('i fired');
//     beep.src = `data/${events[0]}_minutes.m4a`;
//     beep.load();
// });


function playAudio(time) {
    let audio = document.getElementById(`${time}minute`);
    console.log(`${time}minute`)
    toggleStartButton(true);
    beep.play();
    audio.play();
    events = events.slice(1);
}

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

// function addAudio() {
    // let audioContainer = document.getElementById('audio-container');
    // audioContainer.innerHTML = `
    // <audio id="1minute" source src="data/1_minute.mp3" type="audio/mp3" autostart="false">
    // </audio>

    // <audio id="5minute">
    //     <source src="data/5_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="10minute">
    //     <source src="data/10_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="15minute">
    //     <source src="data/15_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="30minute">
    //     <source src="data/30_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="60minute">
    //     <source src="data/60_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="90minute">
    //     <source src="data/90_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="120minute">
    //     <source src="data/120_minutes.m4a" type="audio/mp4">
    // </audio>

    // <audio id="myBeep">
    //     <source src="data/beep.mp3" type="audio/mp4">
    // `;
// }

function myFunction() {
    // toggleStartButton(true);
    // addAudio();
    // beep.play();
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
        if (Math.floor(distance / 1000) === events[0]) {
            // toggleStartButton(true);
            playAudio(events[0]);
            // beep.play();
            // events = events.slice(1);
        }

    }, 333);
}