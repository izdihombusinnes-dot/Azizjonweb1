// Loader o'chirish
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1000);
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    navbar.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Navbar linklariga click qilganda menu o'chirish
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  });
});

// Document-ga click qilganda menu o'chirish
document.addEventListener('click', function(event) {
  const isClickInsideMenu = navbar.contains(event.target);
  const isClickInsideBtn = mobileMenuBtn.contains(event.target);
  
  if (!isClickInsideMenu && !isClickInsideBtn && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll reveal animatsiyasi
const reveals = document.querySelectorAll('.reveal');

function reveal() {
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();

// Responsive navbar height
function adjustNavbar() {
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  
  if (window.innerWidth <= 768) {
    navbar.style.position = 'absolute';
    navbar.style.top = '70px';
    navbar.style.left = '0';
    navbar.style.right = '0';
    navbar.style.width = '100%';
    navbar.style.flexDirection = 'column';
  } else {
    navbar.style.position = 'relative';
    navbar.style.top = 'auto';
    navbar.style.left = 'auto';
    navbar.style.right = 'auto';
    navbar.style.width = 'auto';
    navbar.style.flexDirection = 'row';
  }
}

window.addEventListener('resize', adjustNavbar);
adjustNavbar();

// Touch device optimization
function isTouchDevice() {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
  document.body.classList.add('touch-device');
}
