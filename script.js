document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentTestimonial = 0;
    
    // Show initial testimonial
    showTestimonial(currentTestimonial);
    
    // Next testimonial
    nextBtn.addEventListener('click', () => {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    // Previous testimonial
    prevBtn.addEventListener('click', () => {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });
    
    function showTestimonial(index) {
        testimonials[index].classList.add('active');
    }
    
    // Search tabs functionality
    const tabs = document.querySelectorAll('.search-tabs .tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
    
    // Set min date for check-in and check-out
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    
    checkInInput.min = today;
    checkOutInput.min = today;
    
    checkInInput.addEventListener('change', () => {
        if (checkInInput.value) {
            checkOutInput.min = checkInInput.value;
            if (checkOutInput.value < checkInInput.value) {
                checkOutInput.value = '';
            }
        }
    });
    
    // Mobile menu toggle (would need additional HTML/CSS)
    // This is a placeholder for mobile functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.classList.add('mobile-menu-toggle');
    document.querySelector('header .container').prepend(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the search data to your backend
            alert('Search functionality would be implemented here!');
        });
    }
    
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}!`);
                emailInput.value = '';
            }
        });
    }
    
    // Animation on scroll
    // This would require additional implementation with Intersection Observer API
    // or a library like AOS (Animate On Scroll)
    
    // Update current year for both footers
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = 
        document.querySelector('.footer-bottom p').innerHTML.replace(/\d{4}/, currentYear);
    document.querySelector('.simple-footer p').innerHTML = 
        document.querySelector('.simple-footer p').innerHTML.replace(/\d{4}/, currentYear);
});
