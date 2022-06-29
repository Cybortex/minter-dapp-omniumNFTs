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