// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }
    
    // Create email body
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
    `.trim();
    
    // Open mailto link
    const mailtoLink = `mailto:info@capitalareadevelopers.com?subject=Contact Form: ${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    document.querySelector('.contact-form').reset();
    
    // Show confirmation message
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you as soon as possible.');
    }, 100);
}

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle (optional - for future mobile menu implementation)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Capital Area Developers website loaded successfully!');
});