// Combine both DOMContentLoaded listeners into one
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations for elements with data-animate
    const animateElements = () => {
        const elements = document.querySelectorAll('[data-animate]');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.feature_card, .reward_card, .supporter_card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });

    // Background particles animation
    const background = document.querySelector('.background-animation');
    if (background) {
        // Make existing particles visible
        const existingParticles = document.querySelectorAll('.particle');
        existingParticles.forEach(particle => {
            particle.style.opacity = '1';
        });

        // Create additional particles dynamically
        const particleCount = 8; // Total particles including the static ones
        
        for (let i = existingParticles.length + 1; i <= particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.opacity = '1'; // Make visible immediately
            
            // Random position
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const size = 8 + Math.random() * 20;
            const duration = 15 + Math.random() * 15;
            const delay = Math.random() * 10;
            
            particle.style.cssText = `
                position: fixed;
                top: ${top}vh;
                left: ${left}vw;
                font-size: ${size}px;
                opacity: 1;
                animation-duration: ${duration}s;
                animation-delay: ${delay}s;
                z-index: -1;
            `;
            
            particle.innerHTML = `
                <svg aria-hidden="true" focusable="false" viewBox="0 0 576 512">
                    <path fill="#e3aa42" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                </svg>
            `;
            
            background.appendChild(particle);
        }
        
        // Make particles interactive
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                const rect = particle.getBoundingClientRect();
                const x = rect.left + rect.width/2;
                const y = rect.top + rect.height/2;
                const distance = Math.sqrt(Math.pow(e.clientX - x, 2) + Math.pow(e.clientY - y, 2));
                
                if (distance < 100) {
                    particle.style.transform = `translate(${(e.clientX - x) * 0.1}px, ${(e.clientY - y) * 0.1}px)`;
                } else {
                    particle.style.transform = '';
                }
            });
        });
    }

    // Initial check for scroll animations
    animateElements();
    window.addEventListener('scroll', animateElements);
});