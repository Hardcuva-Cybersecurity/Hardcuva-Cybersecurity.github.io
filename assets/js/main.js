// Scroll reveal animation
const revealElements = document.querySelectorAll('.card, .step, .about-image, .hero-content');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Form submission via Formspree
const form = document.getElementById('contact-form');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if(response.ok){
            formMessage.textContent = 'Thank you! Your message has been sent.';
            form.reset();
        } else {
            formMessage.textContent = 'Oops! There was a problem. Please try again.';
        }
    } catch(error){
        formMessage.textContent = 'Oops! There was a problem. Please try again.';
    }
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Checkbox interaction animation
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        if(box.checked){
            box.parentElement.style.background = '#1f2933';
            box.parentElement.style.borderLeft = '4px solid #38bdf8';
        } else {
            box.parentElement.style.background = 'transparent';
            box.parentElement.style.borderLeft = 'none';
        }
    });
});

// Budget select animation
const budgetSelect = document.getElementById('budget');
budgetSelect.addEventListener('change', () => {
    budgetSelect.style.borderColor = '#fbbf24';
    setTimeout(() => {
        budgetSelect.style.borderColor = '#38bdf8';
    }, 500);
});