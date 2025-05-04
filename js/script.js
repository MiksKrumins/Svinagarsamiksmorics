// Site interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in effect for page load
    document.body.classList.add('loaded');

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Make image placeholders interactive
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');

    imagePlaceholders.forEach(placeholder => {
        // Add hover effect
        placeholder.addEventListener('mouseenter', function() {
            this.classList.add('image-placeholder-hover');
        });

        placeholder.addEventListener('mouseleave', function() {
            this.classList.remove('image-placeholder-hover');
        });
    });
});

// Add vintage paper texture effect and advanced animations
document.addEventListener('DOMContentLoaded', function() {
    console.log("Vintage paper effect initialized");

    // Add 3D tilt effect to important elements
    const tiltElements = document.querySelectorAll('.nav-image, .timeline-item, .quote-card, .character-card, .location-card');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            // Get position of element
            const rect = this.getBoundingClientRect();

            // Calculate mouse position relative to element
            const xPos = (e.clientX - rect.left) / rect.width - 0.5;
            const yPos = (e.clientY - rect.top) / rect.height - 0.5;

            // Limit the tilt to a subtle amount
            const tiltMax = 5;
            const tiltX = tiltMax * yPos * -1;
            const tiltY = tiltMax * xPos;

            // Apply transform
            this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;

            // Add subtle shadow movement
            const shadowX = 10 * xPos;
            const shadowY = 10 * yPos;
            this.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(44, 36, 22, 0.3)`;
        });

        // Reset transform on mouse leave
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';

            // Restore the hover effect with a smooth transition
            setTimeout(() => {
                this.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
            }, 50);
        });

        // Remove transition on mouse enter for smooth movement
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'none';
        });
    });

    // Add interactive page corners
    const pageContainer = document.querySelector('.page-container');
    if (pageContainer) {
        // Create and append page corner element
        const pageCorner = document.createElement('div');
        pageCorner.classList.add('page-corner');
        pageCorner.innerHTML = '<div class="page-corner-fold"></div>';
        pageContainer.appendChild(pageCorner);

        // Add animation on hover
        pageCorner.addEventListener('mouseenter', function() {
            this.classList.add('page-corner-hover');
        });

        pageCorner.addEventListener('mouseleave', function() {
            this.classList.remove('page-corner-hover');
        });
    }

    // Add typewriter effect to headings
    const headings = document.querySelectorAll('h1:not(.site-title), h2:not(.section-title)');

    headings.forEach(heading => {
        const originalText = heading.textContent;
        heading.textContent = '';

        let i = 0;
        const typingSpeed = 50; // ms per character

        const typeWriter = () => {
            if (i < originalText.length) {
                heading.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        };

        // Start typing effect when scrolled into view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        typeWriter();
                    }, 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(heading);
    });
});