// Extended functionality

// Mouse interaction with loader
document.addEventListener('mousemove', (e) => {
  const loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('hidden')) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    loader.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(124,58,237,0.1), rgba(6,182,212,0.05))`;
  }
});

// Parallax effect
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.bg-gradient');
  const scrollY = window.scrollY;
  
  parallaxElements.forEach((el, index) => {
    el.style.transform = `translateY(${scrollY * 0.5 * (index + 1)}px)`;
  });
});

// Fade-in animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .project-card, .service-card, .social-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease';
  fadeInObserver.observe(el);
});

// Mobile menu toggle (if needed)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.style.display = 'none';
  }
});

// Dock items animation
const dockItems = document.querySelectorAll('.dock-item');
dockItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateX(-15px) scale(1.15)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateX(0) scale(1)';
  });
});

console.log('✨ Premium Aziz Asadov Portfolio Loaded!');
