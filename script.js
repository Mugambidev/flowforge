// Utility Functions
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

// Navigation Module
const Navigation = {
  init() {
    const hamburger = $('#hamburger');
    const navLinks = $('#navLinks');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      hamburger.querySelector('i').classList.toggle('fa-bars', !isOpen);
      hamburger.querySelector('i').classList.toggle('fa-times', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    $$('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    window.addEventListener('scroll', () => {
      const header = $('header');
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
};

// Testimonial Slider Module
const TestimonialSlider = {
  current: 0,
  testimonials: [],
  dots: [],
  
  init() {
    this.testimonials = $$('.testimonial');
    const sliderPrev = $('.slider-prev');
    const sliderNext = $('.slider-next');
    const sliderDotsContainer = $('.slider-dots');

    this.testimonials.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
      dot.addEventListener('click', () => this.goTo(index));
      sliderDotsContainer.appendChild(dot);
    });

    this.dots = $$('.slider-dot');
    sliderPrev.addEventListener('click', () => this.prev());
    sliderNext.addEventListener('click', () => this.next());
    
    setInterval(() => this.next(), 5000);
  },

  goTo(index) {
    this.testimonials[this.current].classList.remove('active');
    this.dots[this.current].classList.remove('active');
    this.current = index;
    this.testimonials[this.current].classList.add('active');
    this.dots[this.current].classList.add('active');
  },

  next() {
    let nextIndex = this.current + 1;
    if (nextIndex >= this.testimonials.length) nextIndex = 0;
    this.goTo(nextIndex);
  },

  prev() {
    let prevIndex = this.current - 1;
    if (prevIndex < 0) prevIndex = this.testimonials.length - 1;
    this.goTo(prevIndex);
  }
};

// Stats Counter Module
const StatsCounter = {
  init() {
    const statsSection = $('.stats');
    const stats = [
      { element: $('#clientsCount'), end: 50, duration: 2000 },
      { element: $('#projectsCount'), end: 100, duration: 2000 },
      { element: $('#hoursCount'), end: 1000, duration: 2000 },
      { element: $('#efficiencyCount'), end: 35, duration: 2000, suffix: '%' }
    ];

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        stats.forEach(stat => this.animate(stat));
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  },

  animate({ element, end, duration, suffix = '' }) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * end) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
};

// Scroll Animations Module
const ScrollAnimations = {
  init() {
    const sections = $$('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  }
};

// Form Handling Module
const FormHandler = {
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  validateForm(form) {
    let isValid = true;
    const inputs = $$('input[required], textarea[required], select[required]', form);

    inputs.forEach(input => {
      const formGroup = input.closest('.form-group');
      const errorMessage = $('.error-message', formGroup);
      formGroup.classList.remove('invalid');

      if (!input.value.trim()) {
        errorMessage.textContent = `${input.name || input.id} is required`;
        formGroup.classList.add('invalid');
        isValid = false;
      } else if (input.type === 'email' && !this.validateEmail(input.value)) {
        errorMessage.textContent = 'Please enter a valid email';
        formGroup.classList.add('invalid');
        isValid = false;
      }
    });

    return isValid;
  },

  initContactForm() {
    const contactForm = $('#contactForm');
    const formSuccess = $('#formSuccess');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!this.validateForm(contactForm)) return;

      const formData = new FormData(contactForm);
      try {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        contactForm.reset();
        formSuccess.style.display = 'block';
        setTimeout(() => formSuccess.style.display = 'none', 3000);
      } catch (error) {
        alert('An error occurred. Please try again.');
      }
    });
  },

  initNewsletterForm() {
    const newsletterForm = $('#newsletterForm');
    const newsletterSuccess = $('#newsletterSuccess');
    const newsletterError = $('#newsletterError');

    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = $('#newsletterEmail');
      newsletterError.style.display = 'none';

      if (!this.validateEmail(emailInput.value)) {
        newsletterError.textContent = 'Please enter a valid email';
        newsletterError.style.display = 'block';
        return;
      }

      try {
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        newsletterForm.reset();
        newsletterSuccess.style.display = 'block';
        setTimeout(() => newsletterSuccess.style.display = 'none', 3000);
      } catch (error) {
        newsletterError.textContent = 'An error occurred. Please try again.';
        newsletterError.style.display = 'block';
      }
    });
  }
};

// Back to Top Module
const BackToTop = {
  init() {
    const backToTop = $('#backToTop');
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// Smooth Scroll Module
const SmoothScroll = {
  init() {
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = $(`#${targetId}`);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};

// Initialize Modules
document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  TestimonialSlider.init();
  StatsCounter.init();
  ScrollAnimations.init();
  FormHandler.initContactForm();
  FormHandler.initNewsletterForm();
  BackToTop.init();
  SmoothScroll.init();
  $('#currentYear').textContent = new Date().getFullYear();
});