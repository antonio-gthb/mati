document.addEventListener("DOMContentLoaded", () => {
    // 1. Header Shrink on Scroll for a premium feel
    const header = document.getElementById('header');
    const logo = header.querySelector('img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            logo.style.height = '60px';
        } else {
            header.style.padding = '20px 0';
            logo.style.height = '80px';
        }
    });

    // 2. Intersection Observer for Fade-In Animations
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
});
