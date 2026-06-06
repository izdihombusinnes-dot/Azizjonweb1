// LOADER
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1500);
});

// HEADER SCROLL EFFECT
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// LANGUAGE TOGGLE
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'uz';

langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    currentLang = lang;
    
    // Remove active class from all buttons
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update language display
    updateLanguage(lang);
  });
});

function updateLanguage(lang) {
  const uzElements = document.querySelectorAll('.lang-uz');
  const enElements = document.querySelectorAll('.lang-en');
  
  if (lang === 'uz') {
    uzElements.forEach(el => el.style.display = '');
    enElements.forEach(el => el.style.display = 'none');
  } else {
    uzElements.forEach(el => el.style.display = 'none');
    enElements.forEach(el => el.style.display = '');
  }
}

// SMOOTH SCROLL FOR NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// NAVBAR ACTIVE LINK
window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

// ACHIEVEMENT COUNTER ANIMATION
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  let current = 0;
  const increment = Math.ceil(target / 50);
  const duration = 2000;
  const steps = duration / 50;
  let step = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = current;
    step++;
  }, duration / steps);
}

// INTERSECTION OBSERVER FOR ANIMATIONS
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      
      // Animate counters
      if (entry.target.classList.contains('animate-counter')) {
        const counter = entry.target.querySelector('h3');
        if (counter) {
          animateCounter(counter);
        }
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.achievement-card, .service-card, .skills-column, .info-card, .large-card').forEach(el => {
  observer.observe(el);
});

// MOBILE MENU
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.style.display = 'none';
  });
});

// TECH ITEMS HOVER EFFECT
document.querySelectorAll('.tech-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    const icon = this.querySelector('i');
    if (icon) {
      icon.style.transform = 'rotateY(360deg)';
      icon.style.transition = 'transform 0.6s ease';
    }
  });
});

// PARALLAX EFFECT FOR BACKGROUND
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const bgGradients = document.querySelectorAll('.bg-gradient');
  
  bgGradients.forEach((gradient, index) => {
    gradient.style.transform = `translateY(${scrolled * (0.1 + index * 0.05)}px)`;
  });
});

// FLOATING TAGS ANIMATION
const floatingTags = document.querySelectorAll('.floating-tag');
floatingTags.forEach((tag, index) => {
  tag.style.animation = `floatTag ${3 + index * 0.5}s ease-in-out infinite`;
});

// TYPING ANIMATION FOR HERO TEXT
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Update language display
  updateLanguage('uz');
});

// RESPONSIVE MENU
function handleResize() {
  if (window.innerWidth > 768) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading effect to buttons
document.querySelectorAll('.primary-btn, .secondary-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    if (this.textContent.includes('Bog\'lanish') || this.textContent.includes('Contact')) {
      this.style.opacity = '0.7';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 200);
    }
  });
});

// Scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
