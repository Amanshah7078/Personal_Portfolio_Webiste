// Smooth scroll on hover functionality
document.querySelectorAll('navbar href a').forEach(anchor => {
    let scrollInterval;

    anchor.addEventListener('mouseenter', function () {
        const targetSection = document.querySelector(this.getAttribute('href'));

        if (targetSection) {
            scrollInterval = setInterval(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100); // Adjust the scroll speed by changing the interval duration
        }
    });

    anchor.addEventListener('mouseleave', function () {
        clearInterval(scrollInterval); // Stop scrolling when the mouse leaves
    });
});

// Click smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (you can modify this as needed)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message, Aman will get back to you soon!');
    this.reset();
});




