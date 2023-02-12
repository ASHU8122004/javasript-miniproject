const timed = document.querySelector("#timed");
const startb = document.querySelector("#startb");
const pauseb = document.querySelector("#pauseb");
const resetb = document.querySelector("#resetb");

let starttime = 0;
let currenttime = 0;
let pausetime = true;
let elapsedtime = 0;
let intervalId;
let hrs = 0;
let secs = 0;
let mins = 0;

startb.addEventListener("click", () => {
    if(pausetime){
        pausetime = false;
        starttime = Date.now() - elapsedtime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseb.addEventListener("click", () => {
    if(!pausetime){
        pausetime = true;
        elapsedtime = Date.now() - starttime;
        clearInterval(intervalId);
    }
});
resetb.addEventListener("click", () => {
    pausetime = true;
    clearInterval(intervalId);
    let starttime = 0;
    let currenttime = 0;
    let elapsedtime = 0;
    let hrs = 0;
    let secs = 0;
    let mins = 0;
    timed.textContent = "00:00:00"
});

function updateTime(){
    elapsedtime = Date.now() - starttime;
    secs = Math.floor((elapsedtime / 1000) % 60);
    mins = Math.floor((elapsedtime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);

    secs = zero(secs);
    mins = zero(mins);
    hrs = zero(hrs);
    timed.textContent = `${hrs}:${mins}:${secs}`;

    function zero(handling){
        return ((("0") + handling).length > 2 ? handling : "0" + handling);
    }
}

