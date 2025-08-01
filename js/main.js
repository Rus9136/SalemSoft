/*!
 * SalemSOFT Modern Interactive JavaScript
 * Tech-focused animations and interactions
 */

'use strict';

// Global state
const SalemSOFT = {
    // Configuration
    config: {
        animationDuration: 600,
        scrollOffset: 80,
        phoneNumber: '+77089752414',
        whatsappNumber: '77089752414',
        telegramUsername: '+77089752414',
        observerOptions: {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }
    },
    
    // State
    state: {
        mobileMenuOpen: false,
        modalOpen: false,
        isScrolled: false,
        mousePosition: { x: 0, y: 0 },
        observers: []
    },
    
    // DOM elements cache
    elements: {},
    
    // Initialize application
    init() {
        this.cacheElements();
        this.bindEvents();
        this.initComponents();
        this.setupScrollAnimations();
        this.initParallaxEffects();
        this.initTechEffects();
        console.log('🚀 SalemSOFT tech website initialized');
    },
    
    // Cache frequently used DOM elements
    cacheElements() {
        this.elements = {
            // Header elements
            header: document.querySelector('.header'),
            mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
            nav: document.querySelector('.nav'),
            navLinks: document.querySelectorAll('.nav-link'),
            
            // Modal elements
            modal: document.getElementById('contactModal'),
            modalCloseBtn: document.getElementById('closeModal'),
            openModalBtns: document.querySelectorAll('[id="openContactForm"], .btn-header'),
            
            // Success message
            successMessage: document.getElementById('successMessage'),
            
            // Forms
            contactForms: document.querySelectorAll('#contactForm, #mainContactForm'),
            
            // Buttons
            serviceButtons: document.querySelectorAll('.service-card .btn, .btn[data-service]'),
            phoneButtons: document.querySelectorAll('.phone, [href^="tel:"]'),
            
            // Smooth scroll links
            scrollLinks: document.querySelectorAll('a[href^="#"]'),
            
            // Animation elements
            animatedElements: document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right'),
            cards: document.querySelectorAll('.glass-card, .advantage-card, .service-card, .case-card, .testimonial-card'),
            techElements: document.querySelectorAll('.stat-number, .category-count, .tech-tag'),
            
            // Hero elements
            heroTitle: document.querySelector('.hero-title'),
            heroSubtitle: document.querySelector('.hero-subtitle'),
            
            // Interactive elements
            buttons: document.querySelectorAll('.btn'),
            contactMethods: document.querySelectorAll('.contact-method'),
            logoItems: document.querySelectorAll('.logo-item')
        };
    },
    
    // Bind all event listeners
    bindEvents() {
        // Mobile menu
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }
        
        // Modal controls
        this.elements.openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        });
        
        if (this.elements.modalCloseBtn) {
            this.elements.modalCloseBtn.addEventListener('click', () => this.closeModal());
        }
        
        if (this.elements.modal) {
            this.elements.modal.addEventListener('click', (e) => {
                if (e.target === this.elements.modal) {
                    this.closeModal();
                }
            });
        }
        
        // Form submissions
        this.elements.contactForms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        });
        
        // Service buttons
        this.elements.serviceButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (btn.textContent.includes('Подробнее') || btn.textContent.includes('Заказать') || btn.textContent.includes('Выбрать')) {
                    e.preventDefault();
                    this.openModal();
                }
            });
        });
        
        // Phone number formatting
        this.setupPhoneFormatting();
        
        // Smooth scrolling
        this.elements.scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });
        
        // Window events
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Touch events for mobile interactions
        document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        document.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        
        // Close mobile menu when clicking nav links
        this.elements.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.state.mobileMenuOpen) {
                    this.toggleMobileMenu();
                }
            });
        });
        
        // Enhanced button interactions
        this.setupButtonEffects();
        
        // Card hover effects
        this.setupCardEffects();
    },
    
    // Initialize components
    initComponents() {
        this.initPhoneFormatting();
        this.highlightActiveNavLink();
        this.initCounters();
        this.initTypewriter();
    },
    
    // Setup modern scroll animations using Intersection Observer
    setupScrollAnimations() {
        // Create intersection observer for fade-in animations
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.advantage-card, .service-card, .case-card');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            });
        }, this.config.observerOptions);
        
        // Observe all animated elements
        this.elements.animatedElements.forEach(element => {
            fadeObserver.observe(element);
        });
        
        // Observe cards for staggered animations
        this.elements.cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 100}ms`;
            fadeObserver.observe(card);
        });
        
        this.state.observers.push(fadeObserver);
    },
    
    // Initialize parallax and mouse tracking effects
    initParallaxEffects() {
        // Hero parallax effect
        if (this.elements.heroTitle) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                
                if (scrolled < window.innerHeight) {
                    this.elements.heroTitle.style.transform = `translateY(${parallax}px)`;
                    if (this.elements.heroSubtitle) {
                        this.elements.heroSubtitle.style.transform = `translateY(${parallax * 0.3}px)`;
                    }
                }
            });
        }
        
        // Mouse tracking for cards
        this.elements.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    },
    
    // Initialize tech-specific effects
    initTechEffects() {
        // Glowing effect for tech elements
        this.elements.techElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.textShadow = '0 0 20px currentColor';
                element.style.transform = 'scale(1.05)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.textShadow = '';
                element.style.transform = 'scale(1)';
            });
        });
        
        // Random tech grid animation
        this.animateTechGrid();
        
        // Digital noise effect
        this.initDigitalNoise();
    },
    
    // Animate tech grid background
    animateTechGrid() {
        setInterval(() => {
            const gridLines = document.querySelectorAll('body::after');
            if (gridLines.length > 0) {
                // Randomly pulse grid opacity
                document.documentElement.style.setProperty('--grid-opacity', Math.random() * 0.1 + 0.02);
            }
        }, 3000);
    },
    
    // Add digital noise effect
    initDigitalNoise() {
        const noiseElement = document.createElement('div');
        noiseElement.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            animation: noiseAnimation 0.5s steps(10) infinite;
        `;
        
        // Add noise animation keyframes
        if (!document.getElementById('noise-styles')) {
            const style = document.createElement('style');
            style.id = 'noise-styles';
            style.textContent = `
                @keyframes noiseAnimation {
                    0% { transform: translate(0, 0); }
                    20% { transform: translate(-5px, 2px); }
                    40% { transform: translate(-5px, -2px); }
                    60% { transform: translate(5px, 2px); }
                    80% { transform: translate(5px, -2px); }
                    100% { transform: translate(0, 0); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(noiseElement);
    },
    
    // Setup enhanced button effects
    setupButtonEffects() {
        this.elements.buttons.forEach(button => {
            // Ripple effect
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: rippleEffect 0.6s ease-out;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
            
            // Add ripple animation keyframes
            if (!document.getElementById('ripple-styles')) {
                const style = document.createElement('style');
                style.id = 'ripple-styles';
                style.textContent = `
                    @keyframes rippleEffect {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }
        });
    },
    
    // Setup card hover effects
    setupCardEffects() {
        this.elements.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Add glow effect
                card.style.boxShadow = 'var(--shadow-neon)';
                card.style.borderColor = 'var(--border-glow)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                card.style.borderColor = '';
            });
        });
    },
    
    // Initialize animated counters
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
        
        this.state.observers.push(counterObserver);
    },
    
    // Animate counter numbers
    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const start = Date.now();
        const suffix = element.textContent.replace(/[\d\s]/g, '');
        
        const updateCounter = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOutCubic);
            
            element.textContent = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    },
    
    // Initialize typewriter effect for hero title
    initTypewriter() {
        const heroTitle = this.elements.heroTitle;
        if (heroTitle && heroTitle.dataset.typewriter) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid var(--accent-color)';
            
            let index = 0;
            const typeWriter = () => {
                if (index < text.length) {
                    heroTitle.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 50);
                } else {
                    // Remove cursor after typing
                    setTimeout(() => {
                        heroTitle.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            // Start typewriter after page load
            setTimeout(typeWriter, 1000);
        }
    },
    
    // Handle mouse movement for interactive effects
    handleMouseMove(e) {
        this.state.mousePosition = { x: e.clientX, y: e.clientY };
        
        // Update hero background based on mouse position
        const hero = document.querySelector('.hero');
        if (hero) {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            hero.style.background = `
                radial-gradient(circle at ${x}% ${y}%, 
                    rgba(0, 102, 255, 0.1) 0%, 
                    transparent 50%),
                var(--background-primary)
            `;
        }
    },
    
    // Handle touch events for enhanced mobile experience
    handleTouchStart(e) {
        // Add touch ripple effect
        const touch = e.touches[0];
        const ripple = document.createElement('div');
        
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            left: ${touch.clientX - 10}px;
            top: ${touch.clientY - 10}px;
            background: var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: touchRipple 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Add touch ripple animation
        if (!document.getElementById('touch-styles')) {
            const style = document.createElement('style');
            style.id = 'touch-styles';
            style.textContent = `
                @keyframes touchRipple {
                    to {
                        transform: scale(3);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    handleTouchMove(e) {
        // Prevent default scrolling on specific elements
        if (e.target.closest('.modal-content')) {
            e.preventDefault();
        }
    },
    
    // Mobile menu toggle with enhanced animations
    toggleMobileMenu() {
        this.state.mobileMenuOpen = !this.state.mobileMenuOpen;
        
        if (this.elements.nav) {
            if (this.state.mobileMenuOpen) {
                this.elements.nav.style.display = 'block';
                this.elements.nav.style.animation = 'slideInFromTop 0.3s ease-out';
            } else {
                this.elements.nav.style.animation = 'slideOutToTop 0.3s ease-in';
                setTimeout(() => {
                    this.elements.nav.style.display = 'none';
                }, 300);
            }
        }
        
        // Animate hamburger menu with CSS transforms
        if (this.elements.mobileMenuToggle) {
            const spans = this.elements.mobileMenuToggle.querySelectorAll('span');
            if (this.state.mobileMenuOpen) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        }
        
        // Prevent body scroll
        document.body.style.overflow = this.state.mobileMenuOpen ? 'hidden' : '';
        
        // Add mobile menu animations
        if (!document.getElementById('mobile-menu-styles')) {
            const style = document.createElement('style');
            style.id = 'mobile-menu-styles';
            style.textContent = `
                @keyframes slideInFromTop {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes slideOutToTop {
                    from { transform: translateY(0); opacity: 1; }
                    to { transform: translateY(-100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    // Enhanced modal functions
    openModal() {
        if (this.elements.modal) {
            this.elements.modal.classList.add('active');
            this.state.modalOpen = true;
            document.body.style.overflow = 'hidden';
            
            // Animate modal content
            const modalContent = this.elements.modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }
            
            // Focus first input
            const firstInput = this.elements.modal.querySelector('input');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        }
        
        // Add modal animations
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
                @keyframes modalSlideIn {
                    from {
                        transform: translateY(-50px) scale(0.95);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
                @keyframes modalSlideOut {
                    from {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(-50px) scale(0.95);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    closeModal() {
        if (this.elements.modal) {
            const modalContent = this.elements.modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.style.animation = 'modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            }
            
            setTimeout(() => {
                this.elements.modal.classList.remove('active');
                this.state.modalOpen = false;
                document.body.style.overflow = '';
                
                // Reset form
                const form = this.elements.modal.querySelector('form');
                if (form) {
                    form.reset();
                    this.clearFormErrors(form);
                }
            }, 300);
        }
    },
    
    // Show success message with enhanced animation
    showSuccessMessage() {
        if (this.elements.successMessage) {
            this.elements.successMessage.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Animate success content
            const successContent = this.elements.successMessage.querySelector('.success-content');
            if (successContent) {
                successContent.style.animation = 'successBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }
            
            // Auto close after 5 seconds
            setTimeout(() => {
                this.closeSuccessMessage();
            }, 5000);
        }
        
        // Add success animation
        if (!document.getElementById('success-styles')) {
            const style = document.createElement('style');
            style.id = 'success-styles';
            style.textContent = `
                @keyframes successBounce {
                    0% {
                        transform: scale(0.3) rotate(-10deg);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.05) rotate(2deg);
                    }
                    70% {
                        transform: scale(0.95) rotate(-1deg);
                    }
                    100% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    closeSuccessMessage() {
        if (this.elements.successMessage) {
            const successContent = this.elements.successMessage.querySelector('.success-content');
            if (successContent) {
                successContent.style.animation = 'modalSlideOut 0.3s ease-in';
            }
            
            setTimeout(() => {
                this.elements.successMessage.classList.remove('active');
                document.body.style.overflow = '';
            }, 300);
        }
    },
    
    // Enhanced form handling with better UX
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Validate form
        if (!this.validateForm(form)) {
            // Shake form on validation error
            form.style.animation = 'shakeForm 0.5s ease-in-out';
            setTimeout(() => {
                form.style.animation = '';
            }, 500);
            return;
        }
        
        // Show loading state with enhanced animation
        this.setButtonLoading(submitBtn, true);
        
        // Simulate form submission
        this.submitForm(formData)
            .then(() => {
                this.closeModal();
                this.showSuccessMessage();
                form.reset();
                this.clearFormErrors(form);
                
                // Add success particle effect
                this.createParticleEffect();
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                this.showFormError(form, 'Произошла ошибка при отправке. Попробуйте еще раз.');
            })
            .finally(() => {
                this.setButtonLoading(submitBtn, false);
            });
        
        // Add form shake animation
        if (!document.getElementById('form-styles')) {
            const style = document.createElement('style');
            style.id = 'form-styles';
            style.textContent = `
                @keyframes shakeForm {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    // Create particle effect for success
    createParticleEffect() {
        const particles = [];
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: var(--accent-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                left: 50%;
                top: 50%;
                animation: particleExplosion ${Math.random() * 0.5 + 0.5}s ease-out forwards;
            `;
            
            const angle = (i / particleCount) * Math.PI * 2;
            const velocity = Math.random() * 100 + 50;
            
            particle.style.setProperty('--dx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--dy', Math.sin(angle) * velocity + 'px');
            
            document.body.appendChild(particle);
            particles.push(particle);
        }
        
        // Clean up particles
        setTimeout(() => {
            particles.forEach(particle => particle.remove());
        }, 1000);
        
        // Add particle animation
        if (!document.getElementById('particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes particleExplosion {
                    to {
                        transform: translate(var(--dx), var(--dy));
                        opacity: 0;
                        transform: scale(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    // Form validation (keeping existing logic)
    validateForm(form) {
        let isValid = true;
        this.clearFormErrors(form);
        
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'Это поле обязательно для заполнения');
                isValid = false;
            }
        });
        
        const phoneField = form.querySelector('input[type="tel"]');
        if (phoneField && phoneField.value) {
            const phoneRegex = /^\+?[7|8][\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(phoneField.value.replace(/\s/g, ''))) {
                this.showFieldError(phoneField, 'Введите корректный номер телефона');
                isValid = false;
            }
        }
        
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                this.showFieldError(emailField, 'Введите корректный email адрес');
                isValid = false;
            }
        }
        
        const consentField = form.querySelector('input[name="consent"]');
        if (consentField && !consentField.checked) {
            this.showFieldError(consentField, 'Необходимо согласие на обработку данных');
            isValid = false;
        }
        
        return isValid;
    },
    
    // Enhanced field error display
    showFieldError(field, message) {
        field.style.borderColor = 'var(--accent-color)';
        field.style.boxShadow = '0 0 0 3px rgba(0, 212, 170, 0.2)';
        
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.cssText = `
            color: var(--accent-color);
            font-size: 0.875rem;
            margin-top: 0.25rem;
            animation: fadeInError 0.3s ease-out;
        `;
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
        
        // Add error animation
        if (!document.getElementById('error-styles')) {
            const style = document.createElement('style');
            style.id = 'error-styles';
            style.textContent = `
                @keyframes fadeInError {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    showFormError(form, message) {
        let errorContainer = form.querySelector('.form-error');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.className = 'form-error';
            errorContainer.style.cssText = `
                background: rgba(0, 212, 170, 0.1);
                border: 1px solid var(--accent-color);
                color: var(--accent-color);
                padding: 1rem;
                border-radius: var(--border-radius);
                margin-bottom: 1rem;
                animation: fadeInError 0.3s ease-out;
            `;
            form.insertBefore(errorContainer, form.firstChild);
        }
        errorContainer.textContent = message;
    },
    
    clearFormErrors(form) {
        form.querySelectorAll('.field-error').forEach(error => error.remove());
        form.querySelectorAll('.form-error').forEach(error => error.remove());
        
        form.querySelectorAll('input, textarea, select').forEach(field => {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        });
    },
    
    // Enhanced button loading state
    setButtonLoading(button, loading) {
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
            button.dataset.originalText = button.textContent;
            button.innerHTML = `
                <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                    </svg>
                    Отправка...
                </span>
            `;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
            button.textContent = button.dataset.originalText || button.textContent;
        }
        
        // Add loading spinner animation
        if (!document.getElementById('loading-styles')) {
            const style = document.createElement('style');
            style.id = 'loading-styles';
            style.textContent = `
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    // Submit form (simulate API call)
    submitForm(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Form submitted with data:');
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }
                
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 1500);
        });
    },
    
    // Phone number formatting (keeping existing logic)
    setupPhoneFormatting() {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                this.formatPhoneNumber(e.target);
            });
            
            input.addEventListener('keydown', (e) => {
                if ([46, 8, 9, 27, 13, 65, 67, 86, 88].indexOf(e.keyCode) !== -1 ||
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 88 && e.ctrlKey === true) ||
                    (e.keyCode >= 35 && e.keyCode <= 40)) {
                    return;
                }
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        });
    },
    
    formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.startsWith('8')) {
                value = '7' + value.substring(1);
            }
            
            if (value.startsWith('7')) {
                value = value.substring(0, 11);
                const match = value.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
                if (match) {
                    value = '+7';
                    if (match[1]) value += ' ' + match[1];
                    if (match[2]) value += ' ' + match[2];
                    if (match[3]) value += ' ' + match[3];
                    if (match[4]) value += ' ' + match[4];
                }
            }
        }
        
        input.value = value;
    },
    
    initPhoneFormatting() {
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            if (!input.placeholder) {
                input.placeholder = '+7 ___ ___ __ __';
            }
        });
    },
    
    // Smooth scrolling (keeping existing logic)
    handleSmoothScroll(e) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - this.config.scrollOffset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    },
    
    // Enhanced scroll handling
    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header scroll effect with backdrop blur
        if (scrollTop > 50 && !this.state.isScrolled) {
            this.state.isScrolled = true;
            if (this.elements.header) {
                this.elements.header.style.background = 'rgba(15, 17, 23, 0.95)';
                this.elements.header.style.backdropFilter = 'blur(12px)';
                this.elements.header.style.boxShadow = 'var(--shadow-card)';
            }
        } else if (scrollTop <= 50 && this.state.isScrolled) {
            this.state.isScrolled = false;
            if (this.elements.header) {
                this.elements.header.style.background = '';
                this.elements.header.style.backdropFilter = '';
                this.elements.header.style.boxShadow = '';
            }
        }
        
        // Update active nav link
        this.highlightActiveNavLink();
        
        // Parallax effect for background elements
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    },
    
    // Highlight active navigation link (keeping existing logic)
    highlightActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        this.elements.navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            link.classList.remove('active');
            
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    },
    
    // Handle window resize
    handleResize() {
        if (window.innerWidth > 768 && this.state.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
    },
    
    // Enhanced keyboard navigation
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            if (this.state.modalOpen) {
                this.closeModal();
            }
            if (this.state.mobileMenuOpen) {
                this.toggleMobileMenu();
            }
            if (this.elements.successMessage.classList.contains('active')) {
                this.closeSuccessMessage();
            }
        }
        
        if (e.key === 'Enter' && e.target.closest('.service-card, .advantage-card')) {
            this.openModal();
        }
        
        // Add keyboard navigation for cards
        if (e.key === 'Tab') {
            this.elements.cards.forEach(card => {
                card.setAttribute('tabindex', '0');
            });
        }
    },
    
    // Cleanup function
    destroy() {
        this.state.observers.forEach(observer => {
            observer.disconnect();
        });
        this.state.observers = [];
    }
};

// Success message close function (global for inline onclick)
function closeSuccessMessage() {
    SalemSOFT.closeSuccessMessage();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SalemSOFT.init());
} else {
    SalemSOFT.init();
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    SalemSOFT.destroy();
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SalemSOFT;
}