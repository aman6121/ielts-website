// navbar js starts 

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}) 

// navbar js ends 
// ========================================================================

//  carousel js starts 

const slides = document.querySelectorAll('.slide');  
const next = document.querySelector('#next'); 
const prev = document.querySelector('#prev');  
const auto = true;  
const intervalTime = 9000;

let slideInterval; 

const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class 
    current.classList.remove('current'); 
    // check for next slide 
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
setTimeout(() => current.classList.remove('current'));
}; 

//====================== PREVIOUS SLIDE ================//

const prevSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class 
    current.classList.remove('current'); 
    // check for next slide 
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to last
        slides[slides.length - 1].classList.add('current');
    }
setTimeout(() => current.classList.remove('current'));
};  

// button events 
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        // run next slide at interval time 
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        // run next slide at interval time 
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    }
});  

// Auto slide 

if(auto) {
    // run next slide at interval time 
    slideInterval = setInterval(nextSlide,intervalTime);
}

//  carousel js ends 