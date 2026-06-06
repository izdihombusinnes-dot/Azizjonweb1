// Language Toggle
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'uz';

langBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.dataset.lang;
    currentLang = lang;
    
    langBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    document.querySelectorAll('.lang-uz').forEach(el => {
      el.style.display = lang === 'uz' ? 'inline' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = lang === 'en' ? 'inline' : 'none';
    });
  });
});

// Header scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Counter animation
function animateCounter(el, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 30);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.animated) {
      entry.target.animated = true;
      animateCounter(entry.target, parseInt(entry.target.dataset.target));
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => observer.observe(el));

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1500);
  }
});

console.log('✨ Premium Portfolio Loaded!');
