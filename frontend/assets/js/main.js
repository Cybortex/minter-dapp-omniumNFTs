


const days2 = document.getElementById('days2')
const hours2 = document.getElementById('hours2')
const minutes2 = document.getElementById('minutes2')
const seconds2 = document.getElementById('seconds2')

const countdown = new Date().getTime();

const countDownTime = new Date('August 28 2022 00:00:00');


function countdown2function() {
  const currentTime = new Date();s
  const diff = countDownTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor(diff / 1000) % 60;

  days2.innerHTML = d < 10 ? '0' + d: d;
  hours2.innerHTML = h < 10 ? '0' + h : h;
  minutes2.innerHTML = m < 10 ? '0' + m : m;
  seconds2.innerHTML = s < 10 ? '0' + s : s;

}
   
setInterval(countdown2function, 1000);


   
const days22 = document.getElementById('days22')
const hours22 = document.getElementById('hours22')
const minutes22 = document.getElementById('minutes22')
const seconds22 = document.getElementById('seconds22')

const countdown2 = new Date().getTime();

const countDownTime2 = new Date('August 28 2022 00:00:00');


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
  setInterval(countdown21function, 1000)


  // Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');


const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);



// Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});

