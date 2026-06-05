/* ==========================
   FADE UP ANIMATION
========================== */

const animatedElements = document.querySelectorAll(
    ".hero-left, .hero-right, .about-card, .project-card, .skill-card, .social-card, .experience-card"
);

const animationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0px)";

            }

        });

    },
    {
        threshold:0.1
    }
);

animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(60px)";

    element.style.transition =
    "all .8s ease";

    animationObserver.observe(element);

});

/* ==========================
   HERO FLOATING EFFECT
========================== */

const heroAvatar =
document.querySelector(".avatar-area");

if(heroAvatar){

    let position = 0;

    setInterval(() => {

        position += 0.03;

        heroAvatar.style.transform =
        `translateY(${Math.sin(position) * 10}px)`;

    },16);

}

/* ==========================
   FLOATING TAGS
========================== */

const floatingTags =
document.querySelectorAll(".floating-tag");

floatingTags.forEach((tag,index)=>{

    let pos = 0;

    setInterval(()=>{

        pos += 0.02;

        tag.style.transform =
        `translateY(${Math.sin(pos + index)*8}px)`;

    },16);

});

/* ==========================
   PROJECT CARD GLOW
========================== */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(124,58,237,.18),
        rgba(255,255,255,.03))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,.03)";

    });

});

/* ==========================
   SECTION STAGGER EFFECT
========================== */

const staggerCards =
document.querySelectorAll(
".skill-card,.social-card,.experience-card"
);

staggerCards.forEach((card,index)=>{

    card.style.transitionDelay =
    `${index * 0.08}s`;

});
