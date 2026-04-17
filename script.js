/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */

/**
 * Opens a modal with smooth animation
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

/**
 * Closes a modal with smooth animation
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

/**
 * Close modal when clicking outside the modal content
 */
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

/**
 * Close modal when pressing Escape key
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
});

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

/**
 * Smooth scroll to sections
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('openModal')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

/* ============================================
   PAGE LOAD ANIMATIONS
   ============================================ */

/**
 * Add animation when page loads
 */
window.addEventListener('load', function() {
    // Animate hero content
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const profileImage = document.querySelector('.profile-image');
    
    if (heroTitle) {
        heroTitle.style.animation = 'fadeInDown 0.8s ease forwards';
    }
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeInUp 0.8s ease 0.2s forwards';
    }
    if (profileImage) {
        profileImage.style.animation = 'fadeInScale 0.8s ease 0.4s forwards';
    }

    // Animate section cards on scroll
    animateSectionCardsOnScroll();
});

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

/**
 * Animate section cards when they come into view
 */
function animateSectionCardsOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    entry.target.style.opacity = '0';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-card').forEach(card => {
        observer.observe(card);
    });
}

/* ============================================
   ANIMATION KEYFRAMES (Added via CSS)
   ============================================ */

// Add animations to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Debounce function for better performance on scroll events
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

/**
 * Add keyboard navigation support
 */
document.addEventListener('keydown', function(event) {
    // Tab through buttons
    if (event.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('btn-open')) {
            // Button already has focus
        }
    }
});

/* ============================================
   INITIALIZATION
   ============================================ */

console.log('Portfolio JavaScript loaded successfully');
