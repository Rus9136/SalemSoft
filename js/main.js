/*!
 * SalemSOFT - Anthropic-style Interactions
 * Clean, minimal animations with smooth reveals
 */

'use strict';

// Global state
const SalemSOFT = {
    // Configuration
    config: {
        animationDuration: 800,
        scrollOffset: 100,
        phoneNumber: '+77089752414',
        whatsappNumber: '77089752414',
        telegramUsername: '+77089752414',
        observerOptions: {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    },
    
    // State
    state: {
        mobileMenuOpen: false,
        isScrolled: false,
        observers: []
    },
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.initScrollAnimations();
        this.initNavigation();
        this.initForms();
        console.log('✨ SalemSOFT anthropic-style website initialized');
    },
    
    cacheElements() {
        this.elements = {
            // Navigation
            nav: document.querySelector('.nav'),
            navToggle: document.querySelector('.nav-toggle'),
            navMenu: document.querySelector('.nav-menu'),
            dropdownMenus: document.querySelectorAll('.dropdown-menu'),
            
            // Animation elements
            reveals: document.querySelectorAll('.reveal, .fade-in, .slide-in-left, .slide-in-right, .scale-in'),
            
            // Forms
            forms: document.querySelectorAll('form'),
            
            // Buttons and links
            ctaButtons: document.querySelectorAll('.btn-primary'),
            phoneLinks: document.querySelectorAll('a[href^="tel:"]'),
            messengerLinks: document.querySelectorAll('a[href*="wa.me"], a[href*="t.me"]')
        };
    },
    
    bindEvents() {
        // Scroll events
        window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
        
        // Navigation events
        if (this.elements.navToggle) {
            this.elements.navToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        }
        
        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && this.state.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        });
        
        // Form events
        this.elements.forms.forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });
        
        // Button hover effects
        this.elements.ctaButtons.forEach(btn => {
            btn.addEventListener('mouseenter', this.handleButtonHover.bind(this));
        });
        
        // Analytics for phone/messenger clicks
        this.elements.phoneLinks.forEach(link => {
            link.addEventListener('click', () => this.trackEvent('phone_click'));
        });
        
        this.elements.messengerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const platform = e.target.href.includes('wa.me') ? 'whatsapp' : 'telegram';
                this.trackEvent('messenger_click', { platform });
            });
        });
    },
    
    handleScroll() {
        const scrollY = window.scrollY;
        const isScrolled = scrollY > 50;
        
        // Update nav appearance
        if (isScrolled !== this.state.isScrolled) {
            this.state.isScrolled = isScrolled;
            if (this.elements.nav) {
                this.elements.nav.style.background = isScrolled 
                    ? 'rgba(250, 249, 245, 0.98)' 
                    : 'rgba(250, 249, 245, 0.95)';
                this.elements.nav.style.boxShadow = isScrolled 
                    ? '0 2px 20px rgba(20, 20, 19, 0.1)' 
                    : 'none';
            }
        }
    },
    
    initScrollAnimations() {
        // Create intersection observer for reveal animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.config.observerOptions);
        
        // Observe all reveal elements
        this.elements.reveals.forEach(el => {
            // Initially hide elements
            el.style.opacity = '0';
            el.style.transform = this.getInitialTransform(el);
            
            observer.observe(el);
        });
        
        this.state.observers.push(observer);
    },
    
    getInitialTransform(element) {
        if (element.classList.contains('slide-in-left')) {
            return 'translateX(-30px)';
        }
        if (element.classList.contains('slide-in-right')) {
            return 'translateX(30px)';
        }
        if (element.classList.contains('scale-in')) {
            return 'scale(0.95)';
        }
        return 'translateY(20px)'; // Default fade-in
    },
    
    animateElement(element) {
        // Get delay from class or data attr
        const delayClass = Array.from(element.classList).find(c => c.startsWith('delay-'));
        const delay = delayClass ? parseInt(delayClass.split('-')[1]) * 100 : 0;
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0) translateY(0) scale(1)';
        }, delay);
    },
    
    initNavigation() {
        // Handle dropdown menus
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const dropdown = item.querySelector('.dropdown-menu');
            if (!dropdown) return;
            
            let hoverTimer;
            
            item.addEventListener('mouseenter', () => {
                clearTimeout(hoverTimer);
                dropdown.style.display = 'flex';
                requestAnimationFrame(() => {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.transform = 'translateY(0)';
                });
            });
            
            item.addEventListener('mouseleave', () => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
                
                hoverTimer = setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 300);
            });
        });
    },
    
    toggleMobileMenu() {
        this.state.mobileMenuOpen = !this.state.mobileMenuOpen;
        
        if (this.state.mobileMenuOpen) {
            this.openMobileMenu();
        } else {
            this.closeMobileMenu();
        }
    },
    
    openMobileMenu() {
        this.elements.navMenu.classList.add('active');
        this.elements.navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate hamburger lines
        const spans = this.elements.navToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    },
    
    closeMobileMenu() {
        this.state.mobileMenuOpen = false;
        this.elements.navMenu.classList.remove('active');
        this.elements.navToggle.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset hamburger lines
        const spans = this.elements.navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    },
    
    initForms() {
        // Add floating label effect
        const inputs = document.querySelectorAll('.form-input, .form-textarea');
        
        inputs.forEach(input => {
            // Handle focus/blur for floating labels
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Phone number formatting
            if (input.type === 'tel') {
                input.addEventListener('input', this.formatPhoneNumber);
            }
        });
    },
    
    formatPhoneNumber(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.startsWith('7')) {
            value = value.substring(1);
        } else if (value.startsWith('8')) {
            value = value.substring(1);
        }
        
        if (value.length >= 10) {
            value = value.substring(0, 10);
            const formatted = `+7 ${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 10)}`;
            e.target.value = formatted;
        }
    },
    
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправляем...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.showFormSuccess(form);
            this.trackEvent('form_submit', { form: form.className });
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
            }, 2000);
        }, 1500);
    },
    
    showFormSuccess(form) {
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.innerHTML = `
            <div style="
                background: #E47B44; 
                color: white; 
                padding: 16px 24px; 
                border-radius: 12px; 
                margin-top: 16px;
                text-align: center;
                opacity: 0;
                transform: translateY(10px);
                transition: all 0.3s ease;
            ">
                ✓ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
        `;
        
        form.appendChild(successMsg);
        
        // Animate in
        requestAnimationFrame(() => {
            const msg = successMsg.querySelector('div');
            msg.style.opacity = '1';
            msg.style.transform = 'translateY(0)';
        });
        
        // Remove after delay
        setTimeout(() => {
            successMsg.remove();
        }, 5000);
    },
    
    handleButtonHover(e) {
        const btn = e.target;
        
        // Add subtle scale effect
        btn.style.transition = 'all 0.2s ease';
        btn.style.transform = 'translateY(-2px) scale(1.02)';
        
        // Reset on mouse leave
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        }, { once: true });
    },
    
    // Smooth scroll to anchor
    smoothScrollTo(target, offset = 80) {
        const element = document.querySelector(target);
        if (!element) return;
        
        const elementPosition = element.offsetTop - offset;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    },
    
    // Analytics tracking (replace with actual analytics)
    trackEvent(event, data = {}) {
        if (typeof gtag !== 'undefined') {
            gtag('event', event, data);
        }
        console.log('📊 Event:', event, data);
    },
    
    // Clean up
    destroy() {
        this.state.observers.forEach(observer => observer.disconnect());
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SalemSOFT.init());
} else {
    SalemSOFT.init();
}

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause expensive operations
    } else {
        // Resume operations
    }
});

// Global utility functions
window.SalemSOFT = SalemSOFT;