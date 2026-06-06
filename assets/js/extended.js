// ====================================
//    COUNTER ANIMATION
// ====================================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                const target = parseInt(entry.target.dataset.target);
                const element = entry.target;
                let count = 0;
                const increment = target / 50;
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        element.textContent = Math.floor(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        element.textContent = target;
                    }
                };
                
                updateCount();
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

window.addEventListener('load', animateCounters);

// ====================================
//    SCROLL TO TOP BUTTON
// ====================================

function createScrollToTop() {
    const btn = document.createElement('button');
    btn.id = 'scrollToTop';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #00d4ff, #00ff88);
        color: #0a0e27;
        border: none;
        padding: 0.8rem;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
        } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createScrollToTop();

// ====================================
//    PARALLAX EFFECT
// ====================================

function parallaxEffect() {
    const bgGradients = document.querySelectorAll('.bg-gradient');
    
    window.addEventListener('scroll', () => {
        bgGradients.forEach((bg, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = window.scrollY * speed;
            bg.style.transform = `translateY(${yPos}px)`;
        });
    });
}

parallaxEffect();

// ====================================
//    DOCK ITEMS HOVER EFFECTS
// ====================================

function manageDockHover() {
    const dockItems = document.querySelectorAll('.dock-item');
    
    dockItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

manageDockHover();

console.log('%c✅ Portfolio enhanced with animations!', 'font-size: 14px; color: #00ff88; font-weight: bold;');