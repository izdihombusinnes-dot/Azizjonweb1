// Language Toggle
const langBtns = document.querySelectorAll('.lang-btn');
const htmlLang = document.documentElement.lang;
let currentLang = htmlLang === 'en' ? 'en' : 'uz';

langBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.dataset.lang;
    currentLang = lang;
    
    // Update active button
    langBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Toggle language visibility
    document.querySelectorAll('.lang-uz').forEach(el => {
      el.style.display = lang === 'uz' ? 'inline' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = lang === 'en' ? 'inline' : 'none';
    });
  });
});

// Set initial language display
document.querySelectorAll('.lang-en').forEach(el => {
  el.style.display = 'none';
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

// Counter animation
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// Intersection Observer for counters
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.animated) {
      entry.target.animated = true;
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  }
});

// Nav link active state
function updateNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavLinks);
