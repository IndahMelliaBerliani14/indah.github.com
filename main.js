/*=====   NavigationBar ====*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle('show');
});

navClose.addEventListener("click", () => {
  navMenu.classList.toggle('show');
});

/*==== ACTIVE AND REMOVE MENU ====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  //active link
  navLink.forEach(n => n.classList.remove('aktip'));
  this.classList.add('aktip');
  
  // Remove Menu Mobile
  navMenu.classList.remove('show');
}


navLink.forEach(n => n.addEventListener('click', linkAction));





/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

/*====  efekmengetik  ====*/
const dynamicText = document.querySelector("h2 span");
const words = ["indah mellia berliana", "indah mellia berliana", "indah mellia berliana", "indah mellia berliana"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");
  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();


/*==>>  Dark Mode <<==*/
const darkMode = document.getElementById('darkmode');
const body = document.body;

darkMode.addEventListener("click", () => {
  body.classList.toggle('dark');
});



document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi semua slider
  document.querySelectorAll('.tkk-slider').forEach(slider => {
    const container = slider.querySelector('.tkk-slide-container');
    const slides = slider.querySelectorAll('.tkk-slide');
    const dots = slider.querySelectorAll('.tkk-slider-dot');
    const prevBtn = slider.querySelector('.tkk-slider-prev');
    const nextBtn = slider.querySelector('.tkk-slider-next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateSlider() {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    // Next slide
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    });
    
    // Previous slide
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    });
    
    // Click on dot
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
    // Auto slide (optional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  });
});