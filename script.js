// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderDotsContainer = document.querySelector('.slider-dots');
let currentTestimonial = 0;

// Create dots for each testimonial
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        goToTestimonial(index);
    });
    sliderDotsContainer.appendChild(dot);
});

const sliderDots = document.querySelectorAll('.slider-dot');

function goToTestimonial(index) {
    testimonials[currentTestimonial].classList.remove('active');
    sliderDots[currentTestimonial].classList.remove('active');
    currentTestimonial = index;
    testimonials[currentTestimonial].classList.add('active');
    sliderDots[currentTestimonial].classList.add('active');
}

sliderNext.addEventListener('click', () => {
    let nextIndex = currentTestimonial + 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    goToTestimonial(nextIndex);
});

sliderPrev.addEventListener('click', () => {
    let prevIndex = currentTestimonial - 1;
    if (prevIndex < 0) prevIndex = testimonials.length - 1;
    goToTestimonial(prevIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
    let nextIndex = currentTestimonial + 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    goToTestimonial(nextIndex);
}, 5000);

// Stats Counter Animation
function animateStats() {
    const statsSection = document.querySelector('.stats');
    const clientsCount = document.getElementById('clientsCount');
    const projectsCount = document.getElementById('projectsCount');
    const hoursCount = document.getElementById('hoursCount');
    const countriesCount = document.getElementById('countriesCount');

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const animateValue = (element, start, end, duration) => {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    element.textContent = Math.floor(progress * (end - start) + start);
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);
            };

            animateValue(clientsCount, 0, 15, 2000);
            animateValue(projectsCount, 0, 30, 2000);
            animateValue(hoursCount, 0, 500, 2000);
            animateValue(countriesCount, 0, 1, 2000);

            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

animateStats();

// Section Fade-In Animation on Scroll
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
        contactForm.reset();
        formSuccess.style.display = 'block';
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 3000);
    }, 1000);
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Update Copyright Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});