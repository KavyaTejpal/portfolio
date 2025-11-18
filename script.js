// Typing animation
const texts = ["Tech Enthusiast", "Like to build cool stuff", "Passionate about open source"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    const displayElement = document.getElementById("typeEffect");

    if (isDeleting) {
        displayElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        displayElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// Start animation when page loads
window.onload = typeEffect;

// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        // Show navbar after scrolling 100px
        nav.style.top = '0';
    } else {
        // Hide navbar at top
        nav.style.top = '-100px';
    }

    lastScroll = currentScroll;
});
