'use strict';

let lastEvent;

function playAudio(time) {
    let beep = document.getElementById('myBeep');
    let audio = document.getElementById(`${time}minute`)? document.getElementById(`${time}minute`) : null;
    if (audio) {
        beep.play();
        audio.play();
    }
}

function calcTime(milliseconds) {
    return {
        hours : Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes : Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60)),
        seconds : Math.floor((milliseconds % (1000 * 60)) / 1000),
    };
}

function updateClock({hours, minutes, seconds}) {
    document.getElementById('demo').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';  
}

function myFunction() {
    let countDownDate = new Date();
    let time = 1;
    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = now - countDownDate.getTime();

        // Time calculations for days, hours, minutes and seconds and
        // Output the result in an element with id="demo"
        updateClock(calcTime(distance));

        //play appropriate recording based on elapsed time.
        playAudio(time/5);
  
        time++;

       
    }, 1000);
}