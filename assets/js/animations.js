/* ====================================
   PARALLAX BACKGROUND
==================================== */

const gradients =
document.querySelectorAll(".bg-gradient");

window.addEventListener("mousemove", e => {

const x =
e.clientX / window.innerWidth;

const y =
e.clientY / window.innerHeight;

gradients.forEach((gradient,index)=>{

const speed =
(index + 1) * 20;

gradient.style.transform =
`translate(
${x * speed}px,
${y * speed}px
)`;

});

});

/* ====================================
   PROJECT CARDS
==================================== */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width) - 0.5) * 12;

const rotateX =
((y / rect.height) - 0.5) * -12;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"translateY(0)";

});

});

/* ====================================
   SKILL CARDS
==================================== */

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow =
"0 20px 40px rgba(6,182,212,.15)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow =
"none";

});

});

/* ====================================
   SOCIAL CARDS
==================================== */

const socialCards =
document.querySelectorAll(".social-card");

socialCards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform =
"translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"translateY(0) scale(1)";

});

});

/* ====================================
   ACHIEVEMENTS
==================================== */

const achievements =
document.querySelectorAll(
".achievement-card"
);

achievements.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave", () => {

card.style.transform =
"translateY(0)";

});

});

/* ====================================
   HEADER BLUR
==================================== */

const pageHeader =
document.querySelector(".header");

window.addEventListener("scroll", () => {

if(!pageHeader) return;

const scroll =
window.scrollY;

pageHeader.style.backdropFilter =
`blur(${20 + scroll/50}px)`;

});

/* ====================================
   FLOATING DOCK EFFECT
==================================== */

const dockButtons =
document.querySelectorAll(".dock-item");

dockButtons.forEach(btn => {

btn.addEventListener("mousemove", e => {

const rect =
btn.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

btn.style.transform =
`
translate(
${(x-30)/10}px,
${(y-30)/10}px
)
`;

});

btn.addEventListener("mouseleave", () => {

btn.style.transform =
"translate(0,0)";

});

});

/* ====================================
   HERO STATS GLOW
==================================== */

const stats =
document.querySelectorAll(
".stat-item h3"
);

setInterval(() => {

stats.forEach(stat => {

stat.style.filter =
"drop-shadow(0 0 18px rgba(124,58,237,.6))";

setTimeout(() => {

stat.style.filter =
"none";

},1000);

});

},4000);

/* ====================================
   AVATAR GLOW
==================================== */

const avatar =
document.querySelector(
".avatar-area img"
);

if(avatar){

setInterval(() => {

avatar.style.boxShadow =
"0 0 100px rgba(124,58,237,.45)";

setTimeout(() => {

avatar.style.boxShadow =
"0 0 60px rgba(124,58,237,.25)";

},1200);

},3500);

}
