'use strict';

// function playOneMinute() {
//     let beep = document.getElementById('myBeep');
//     let oneMinuteAudio = document.getElementById('1minute');
//     beep.play();
//     oneMinuteAudio.play();
// }

// function playFiveMinute() {
//     let beep = document.getElementById('myBeep');
//     let fiveMinuteAudio = document.getElementById('5minute');
//     beep.play();
//     fiveMinuteAudio.play();
// }

// function playTenMinute() {
//     let beep = document.getElementById('myBeep');
//     let tenMinuteAudio = document.getElementById('10minute');
//     beep.play();
//     tenMinuteAudio.play();
// }

// function playFifteenMinute() {
//     let beep = document.getElementById('myBeep');
//     let fifteenMinuteAudio = document.getElementById('15minute');
//     beep.play();
//     fifteenMinuteAudio.play();
// }

// function playThirtyMinute() {
//     let beep = document.getElementById('myBeep');
//     let thirtyMinuteAudio = document.getElementById('30minute');
//     beep.play();
//     thirtyMinuteAudio.play();
// }

// function playSixtyMinute() {
//     let beep = document.getElementById('myBeep');
//     let sixtyMinuteAudio = document.getElementById('60minute');
//     beep.play();
//     sixtyMinuteAudio.play();
// }

// function playNinetyMinute() {
//     let beep = document.getElementById('myBeep');
//     let ninetyMinuteAudio = document.getElementById('90minute');
//     beep.play();
//     ninetyMinuteAudio.play();
// }

// function playHundredTwentyMinute() {
//     let beep = document.getElementById('myBeep');
//     let hundredTwentyMinuteAudio = document.getElementById('120minute');
//     beep.play();
//     hundredTwentyMinuteAudio.play();
// }
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
        let {hours, minutes, seconds} = calcTime(distance);
        document.getElementById('demo').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's ';

        playAudio(time/60);
        
        // if (time / 60 === .1) {
        //     // playOneMinute();
        //     testAudio(1);
        // }

        // if (time / 60 === 5) {
        //     // playFiveMinute();
        //     testAudio(5);
        // }

        // if (time / 60 === 10) {
        //     playTenMinute();
        // }

        // if (time / 60 === 15) {
        //     playFifteenMinute();
        // }

        // if (time / 60 === 30) {
        //     playThirtyMinute();
        // }

        // if (time / 60 === 60) {
        //     playSixtyMinute();
        // }

        // if (time / 60 === 90) {
        //     playNinetyMinute();
        // }

        // if (time / 60 === 120) {
        //     playHundredTwentyMinute();
        // }

        time++;

       
    }, 1000);
}