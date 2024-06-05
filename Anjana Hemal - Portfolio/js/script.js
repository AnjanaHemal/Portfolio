document.addEventListener('DOMContentLoaded', function () {

    // Navigation bar highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Form submitted successfully!');
    });

     // Lightbox effect for project images
     const modal = document.getElementById('lightbox-modal');
     const modalImg = document.getElementById('lightbox-image');
     const closeBtn = document.querySelector('.lightbox-modal .close');
 
     const images = document.querySelectorAll('.project img');
     images.forEach(image => {
         image.addEventListener('click', function () {
             modal.style.display = 'flex';
             modalImg.src = this.src;
         });
     });
 
     closeBtn.addEventListener('click', function () {
         modal.style.display = 'none';
     });
 
     window.addEventListener('click', function (event) {
         if (event.target === modal) {
             modal.style.display = 'none';
         }
     });
});
