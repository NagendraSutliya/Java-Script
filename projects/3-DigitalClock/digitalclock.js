const clock = document.getElementById('clock');


setInterval(function digitalClock(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);