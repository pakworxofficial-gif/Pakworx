 
     // Navigation functionality
     document.addEventListener('DOMContentLoaded', function () {
         // Mobile menu toggle
         const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
         const navMenu = document.querySelector('nav ul');

         mobileMenuBtn.addEventListener('click', function () {
             navMenu.classList.toggle('active');
         });

         // Page navigation
         const pageLinks = document.querySelectorAll('a[data-page]');
         const pages = document.querySelectorAll('.page');

         pageLinks.forEach(link => {
             link.addEventListener('click', function (e) {
                 e.preventDefault();
                 const targetPage = this.getAttribute('data-page');

                 // Hide all pages
                 pages.forEach(page => {
                     page.classList.remove('active');
                 });

                 // Show target page
                 document.getElementById(targetPage).classList.add('active');

                 // Close mobile menu if open
                 navMenu.classList.remove('active');

                 // Scroll to top
                 window.scrollTo(0, 0);
             });
         });

         // Portfolio filtering
         const filterBtns = document.querySelectorAll('.filter-btn');
         const portfolioItems = document.querySelectorAll('.portfolio-item');

         filterBtns.forEach(btn => {
             btn.addEventListener('click', function () {
                 // Remove active class from all buttons
                 filterBtns.forEach(b => b.classList.remove('active'));

                 // Add active class to clicked button
                 this.classList.add('active');

                 const filter = this.getAttribute('data-filter');

                 portfolioItems.forEach(item => {
                     if (filter === 'all' || item.getAttribute('data-category') === filter) {
                         item.style.display = 'block';
                     } else {
                         item.style.display = 'none';
                     }
                 });
             });
         });

         // Form submission
         const contactForm = document.getElementById('contactForm');
         const appointmentForm = document.getElementById('appointmentForm');

         if (contactForm) {
             contactForm.addEventListener('submit', function (e) {
                 e.preventDefault();
                 alert('Thank you for your message! We will get back to you soon.');
                 this.reset();
             });
         }

         if (appointmentForm) {
             appointmentForm.addEventListener('submit', function (e) {
                 e.preventDefault();
                 alert('Your appointment has been booked successfully! We will confirm via email.');
                 this.reset();
             });
         }

         // Create floating particles
         function createParticles(containerId, count) {
             const container = document.getElementById(containerId);
             if (!container) return;

             for (let i = 0; i < count; i++) {
                 const particle = document.createElement('div');
                 particle.classList.add('particle');

                 // Random size
                 const size = Math.random() * 6 + 2;
                 particle.style.width = `${size}px`;
                 particle.style.height = `${size}px`;

                 // Random position
                 particle.style.left = `${Math.random() * 100}%`;
                 particle.style.top = `${Math.random() * 100}%`;

                 // Random animation delay
                 particle.style.animationDelay = `${Math.random() * 10}s`;

                 container.appendChild(particle);
             }
         }

         // Create particles for each page
         createParticles('particles-home', 200);
         createParticles('particles-about', 139);
         createParticles('particles-team', 133);
         createParticles('particles-packages', 123);
         createParticles('particles-contact', 134);
         createParticles('particles-appointment', 125);

         // Cursor effect
         const cursorDot = document.querySelector('.cursor-dot');
         const cursorOutline = document.querySelector('.cursor-outline');

         document.addEventListener('mousemove', function (e) {
             const posX = e.clientX;
             const posY = e.clientY;

             cursorDot.style.left = `${posX}px`;
             cursorDot.style.top = `${posY}px`;

             cursorOutline.style.left = `${posX}px`;
             cursorOutline.style.top = `${posY}px`;
         });

         // Add hover effect to interactive elements
         const interactiveElements = document.querySelectorAll('a, button, .service-card, .team-card, .portfolio-item, .package-card');

         interactiveElements.forEach(el => {
             el.addEventListener('mouseenter', function () {
                 cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
             });

             el.addEventListener('mouseleave', function () {
                 cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
             });
         });
     });
 