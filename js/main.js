// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // You can add your JavaScript code here
    console.log('Website loaded successfully!');
    
    // Example: Form submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form handling logic here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});