const days = document.getElementById('days2')
const hours = document.getElementById('hours2')
const minutes = document.getElementById('minutes2')
const seconds = document.getElementById('seconds2')

const countdown = new Date().getTime();

const countDownTime = new Date('August 01 2022 00:00:00');


function countdown2function() {
  const currentTime = new Date();
  const diff = countDownTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d < 10 ? '0' + d: d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}
   
setInterval(countdown2function, 1000);


   
const days22 = document.getElementById('days22')
const hours22 = document.getElementById('hours22')
const minutes22 = document.getElementById('minutes22')
const seconds22 = document.getElementById('seconds22')

const countdown2 = new Date().getTime();

const countDownTime2 = new Date('August 01 2022 00:00:00');


function countdown21function() {
  const currentTime2 = new Date();
  const diff2 = countDownTime2 - currentTime2;

  const d2 = Math.floor(diff2 / 1000 / 60 / 60 / 24);
  const h2 = Math.floor((diff2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m2 = Math.floor((diff2 % (1000 * 60 * 60)) / (1000 * 60));
  const s2 = Math.floor(diff2 / 1000) % 60;

  days22.innerHTML = d2 < 10 ? '0' + d2: d2;
  hours22.innerHTML = h2 < 10 ? '0' + h2 : h2;
  minutes22.innerHTML = m2 < 10 ? '0' + m2 : m2;
  seconds22.innerHTML = s2 < 10 ? '0' + s2 : s2;
  }
  setInterval(countdown21function, 1000);

  
  
