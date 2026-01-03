// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });

                // Close mobile menu on click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            }
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Enhanced Form Submission Feedback
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form && status) {
    form.addEventListener('submit', function () {
        // Show sending state
        status.textContent = 'Sending your message...';
        status.style.color = '#007bff';
        status.style.opacity = '1';

        // Optional: Simulate success after delay (for testing without real submit)
        // Remove this block when live
        /*
        setTimeout(() => {
            status.textContent = 'Message sent successfully!';
            status.style.color = '#28a745';
            form.reset();
            setTimeout(() => {
                status.textContent = '';
            }, 5000);
        }, 1500);
        */
    });
}