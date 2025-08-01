/*!
 * SalemSOFT Forms Handler
 * Advanced form handling, validation and submission
 */

'use strict';

const FormsHandler = {
    // Configuration
    config: {
        emailAPI: null, // Replace with actual email service endpoint
        telegramBotToken: null, // Replace with Telegram bot token if using
        telegramChatId: null, // Replace with Telegram chat ID if using
        
        // Validation rules
        validation: {
            phone: {
                pattern: /^\+?[7|8][\d\s\-\(\)]{10,}$/,
                message: 'Введите корректный номер телефона'
            },
            email: {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email адрес'
            },
            name: {
                minLength: 2,
                pattern: /^[а-яёa-z\s\-]+$/i,
                message: 'Имя должно содержать только буквы'
            }
        },
        
        // Messages
        messages: {
            success: 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.',
            error: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.',
            loading: 'Отправка...',
            required: 'Это поле обязательно для заполнения',
            consent: 'Необходимо согласие на обработку персональных данных'
        }
    },
    
    // Form data storage
    formData: {},
    
    // Initialize forms handler
    init() {
        this.bindFormEvents();
        this.setupFormEnhancements();
        this.loadSavedData();
        console.log('Forms handler initialized');
    },
    
    // Bind form-related events
    bindFormEvents() {
        // All contact forms
        const forms = document.querySelectorAll('form[id*="contact"], form[id*="Contact"]');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
            
            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', (e) => this.validateField(e.target));
                input.addEventListener('input', (e) => this.clearFieldError(e.target));
            });
        });
        
        // Phone number inputs
        const phoneInputs = document.querySelectorAll('input[type="tel"], input[name*="phone"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', (e) => this.formatPhone(e.target));
            input.addEventListener('paste', (e) => {
                setTimeout(() => this.formatPhone(e.target), 10);
            });
        });
        
        // Auto-save form data
        const formInputs = document.querySelectorAll('form input, form textarea, form select');
        formInputs.forEach(input => {
            if (input.type !== 'checkbox' && input.type !== 'radio') {
                input.addEventListener('input', () => this.saveFormData());
            }
        });
    },
    
    // Setup form enhancements
    setupFormEnhancements() {
        // Add input labels animation
        this.setupFloatingLabels();
        
        // Add character counters for textareas
        this.setupCharacterCounters();
        
        // Setup file inputs if any
        this.setupFileInputs();
        
        // Add form progress indicators
        this.setupFormProgress();
    },
    
    // Handle form submission
    async handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Validate entire form
        if (!this.validateForm(form)) {
            this.focusFirstError(form);
            return;
        }
        
        // Collect form data
        const formData = this.collectFormData(form);
        
        // Show loading state
        this.setSubmissionState(submitBtn, 'loading');
        
        try {
            // Submit form
            const result = await this.submitForm(formData, form);
            
            if (result.success) {
                this.handleSubmissionSuccess(form);
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.handleSubmissionError(form, error.message);
        } finally {
            this.setSubmissionState(submitBtn, 'normal');
        }
    },
    
    // Collect form data
    collectFormData(form) {
        const formData = new FormData(form);
        const data = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Add metadata
        data.timestamp = new Date().toISOString();
        data.page = window.location.pathname;
        data.userAgent = navigator.userAgent;
        data.referrer = document.referrer;
        
        // Clean phone number
        if (data.phone) {
            data.phone = this.cleanPhoneNumber(data.phone);
        }
        
        return data;
    },
    
    // Submit form data
    async submitForm(data, form) {
        // Simulate API call for demo (replace with actual implementation)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Log data for development
                console.log('Form submission data:', data);
                
                // Simulate success/failure
                if (Math.random() > 0.1) {
                    // Send to multiple endpoints if configured
                    this.sendToEmail(data);
                    this.sendToTelegram(data);
                    this.saveToLocalStorage(data);
                    
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    },
    
    // Send data to email service
    async sendToEmail(data) {
        if (!this.config.emailAPI) {
            console.log('Email API not configured');
            return;
        }
        
        try {
            const response = await fetch(this.config.emailAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'info@salemsoft.kz',
                    subject: `Новая заявка с сайта от ${data.firstName || data.name}`,
                    html: this.formatEmailTemplate(data)
                })
            });
            
            if (!response.ok) {
                throw new Error('Email service error');
            }
            
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Email sending failed:', error);
        }
    },
    
    // Send data to Telegram
    async sendToTelegram(data) {
        if (!this.config.telegramBotToken || !this.config.telegramChatId) {
            console.log('Telegram bot not configured');
            return;
        }
        
        const message = this.formatTelegramMessage(data);
        const url = `https://api.telegram.org/bot${this.config.telegramBotToken}/sendMessage`;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: this.config.telegramChatId,
                    text: message,
                    parse_mode: 'HTML'
                })
            });
            
            if (!response.ok) {
                throw new Error('Telegram API error');
            }
            
            console.log('Telegram message sent successfully');
        } catch (error) {
            console.error('Telegram sending failed:', error);
        }
    },
    
    // Format email template
    formatEmailTemplate(data) {
        return `
            <h2>Новая заявка с сайта SalemSOFT</h2>
            <p><strong>Дата:</strong> ${new Date(data.timestamp).toLocaleString('ru-RU')}</p>
            
            <h3>Контактная информация:</h3>
            <ul>
                ${data.firstName ? `<li><strong>Имя:</strong> ${data.firstName} ${data.lastName || ''}</li>` : ''}
                ${data.name ? `<li><strong>Имя:</strong> ${data.name}</li>` : ''}
                ${data.phone ? `<li><strong>Телефон:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>` : ''}
                ${data.email ? `<li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>` : ''}
                ${data.company ? `<li><strong>Компания:</strong> ${data.company}</li>` : ''}
            </ul>
            
            ${data.service ? `<p><strong>Интересующая услуга:</strong> ${this.getServiceName(data.service)}</p>` : ''}
            ${data.budget ? `<p><strong>Бюджет:</strong> ${this.getBudgetRange(data.budget)}</p>` : ''}
            ${data.timeline ? `<p><strong>Сроки:</strong> ${this.getTimelineText(data.timeline)}</p>` : ''}
            
            ${data.message ? `
                <h3>Сообщение:</h3>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
            ` : ''}
            
            <hr>
            <p><small>
                <strong>Техническая информация:</strong><br>
                Страница: ${data.page}<br>
                Referrer: ${data.referrer || 'Прямой переход'}
            </small></p>
        `.trim();
    },
    
    // Format Telegram message
    formatTelegramMessage(data) {
        let message = `🔔 <b>Новая заявка с сайта SalemSOFT</b>\n\n`;
        
        if (data.firstName || data.name) {
            message += `👤 <b>Имя:</b> ${data.firstName || data.name} ${data.lastName || ''}\n`;
        }
        
        if (data.phone) {
            message += `📞 <b>Телефон:</b> ${data.phone}\n`;
        }
        
        if (data.email) {
            message += `📧 <b>Email:</b> ${data.email}\n`;
        }
        
        if (data.company) {
            message += `🏢 <b>Компания:</b> ${data.company}\n`;
        }
        
        if (data.service) {
            message += `🛠 <b>Услуга:</b> ${this.getServiceName(data.service)}\n`;
        }
        
        if (data.message) {
            message += `\n💬 <b>Сообщение:</b>\n${data.message}\n`;
        }
        
        message += `\n⏰ ${new Date(data.timestamp).toLocaleString('ru-RU')}`;
        
        return message;
    },
    
    // Get service name by code
    getServiceName(code) {
        const services = {
            '1c-implementation': 'Внедрение 1С',
            '1c-support': 'Сопровождение 1С:ИТС',
            'web-cash': 'Веб-кассы и ОФД',
            'cloud': 'Облачные решения',
            'bi-analytics': 'BI-аналитика',
            'consulting': 'IT-консалтинг',
            'other': 'Другое'
        };
        return services[code] || code;
    },
    
    // Get budget range text
    getBudgetRange(code) {
        const ranges = {
            'under-500k': 'До 500 000 тенге',
            '500k-1m': '500 000 - 1 000 000 тенге',
            '1m-3m': '1 - 3 млн тенге',
            '3m-5m': '3 - 5 млн тенге',
            'over-5m': 'Свыше 5 млн тенге'
        };
        return ranges[code] || code;
    },
    
    // Get timeline text
    getTimelineText(code) {
        const timelines = {
            'asap': 'Как можно скорее',
            '1-month': 'В течение месяца',
            '2-3-months': '2-3 месяца',
            '6-months': 'До полугода',
            'flexible': 'Гибкие сроки'
        };
        return timelines[code] || code;
    },
    
    // Handle successful submission
    handleSubmissionSuccess(form) {
        // Clear form
        form.reset();
        this.clearAllErrors(form);
        
        // Close modal if open
        const modal = document.getElementById('contactModal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Show success message
        this.showSuccessMessage();
        
        // Clear saved form data
        this.clearSavedData();
        
        // Track success event (if analytics is configured)
        this.trackFormSubmission(form, 'success');
    },
    
    // Handle submission error
    handleSubmissionError(form, message) {
        this.showFormError(form, message || this.config.messages.error);
        this.trackFormSubmission(form, 'error');
    },
    
    // Show success message
    showSuccessMessage() {
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('active');
                document.body.style.overflow = '';
            }, 5000);
        } else {
            // Fallback alert
            alert(this.config.messages.success);
        }
    },
    
    // Validate entire form
    validateForm(form) {
        let isValid = true;
        this.clearAllErrors(form);
        
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        // Check consent checkbox
        const consentInput = form.querySelector('input[name="consent"]');
        if (consentInput && !consentInput.checked) {
            this.showFieldError(consentInput, this.config.messages.consent);
            isValid = false;
        }
        
        return isValid;
    },
    
    // Validate individual field
    validateField(field) {
        const value = field.value.trim();
        const fieldType = field.type || field.tagName.toLowerCase();
        const fieldName = field.name;
        
        // Clear previous errors
        this.clearFieldError(field);
        
        // Required field check
        if (field.hasAttribute('required') && !value) {
            this.showFieldError(field, this.config.messages.required);
            return false;
        }
        
        // Skip validation if field is empty and not required
        if (!value && !field.hasAttribute('required')) {
            return true;
        }
        
        // Field-specific validation
        switch (fieldType) {
            case 'email':
                if (!this.config.validation.email.pattern.test(value)) {
                    this.showFieldError(field, this.config.validation.email.message);
                    return false;
                }
                break;
                
            case 'tel':
                const cleanPhone = this.cleanPhoneNumber(value);
                if (!this.config.validation.phone.pattern.test(cleanPhone)) {
                    this.showFieldError(field, this.config.validation.phone.message);
                    return false;
                }
                break;
                
            case 'text':
                if (fieldName && fieldName.includes('name') || fieldName === 'firstName' || fieldName === 'lastName') {
                    if (value.length < this.config.validation.name.minLength) {
                        this.showFieldError(field, `Минимум ${this.config.validation.name.minLength} символа`);
                        return false;
                    }
                    if (!this.config.validation.name.pattern.test(value)) {
                        this.showFieldError(field, this.config.validation.name.message);
                        return false;
                    }
                }
                break;
        }
        
        return true;
    },
    
    // Show field error
    showFieldError(field, message) {
        field.classList.add('error');
        field.style.borderColor = '#dc2626';
        
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.cssText = `
            color: #dc2626; 
            font-size: 0.875rem; 
            margin-top: 0.25rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
        `;
        errorElement.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            ${message}
        `;
        
        field.parentNode.appendChild(errorElement);
    },
    
    // Clear field error
    clearFieldError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        
        const error = field.parentNode.querySelector('.field-error');
        if (error) {
            error.remove();
        }
    },
    
    // Show form-level error
    showFormError(form, message) {
        let errorContainer = form.querySelector('.form-error');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.className = 'form-error';
            errorContainer.style.cssText = `
                background: #fef2f2; 
                border: 1px solid #fecaca; 
                color: #dc2626; 
                padding: 1rem; 
                border-radius: 0.5rem; 
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            `;
            form.insertBefore(errorContainer, form.firstChild);
        }
        
        errorContainer.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            ${message}
        `;
    },
    
    // Clear all form errors
    clearAllErrors(form) {
        form.querySelectorAll('.field-error').forEach(error => error.remove());
        form.querySelectorAll('.form-error').forEach(error => error.remove());
        form.querySelectorAll('.error').forEach(field => {
            field.classList.remove('error');
            field.style.borderColor = '';
        });
    },
    
    // Focus first error field
    focusFirstError(form) {
        const firstError = form.querySelector('.error');
        if (firstError) {
            firstError.focus();
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    },
    
    // Set submission state
    setSubmissionState(button, state) {
        switch (state) {
            case 'loading':
                button.classList.add('loading');
                button.disabled = true;
                button.dataset.originalText = button.textContent;
                button.textContent = this.config.messages.loading;
                break;
                
            case 'normal':
                button.classList.remove('loading');
                button.disabled = false;
                button.textContent = button.dataset.originalText || 'Отправить заявку';
                break;
        }
    },
    
    // Phone number formatting
    formatPhone(input) {
        let value = input.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            // Convert 8 to 7
            if (value.startsWith('8')) {
                value = '7' + value.substring(1);
            }
            
            // Format Kazakhstan numbers
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
    
    // Clean phone number for validation
    cleanPhoneNumber(phone) {
        return phone.replace(/\D/g, '');
    },
    
    // Setup floating labels
    setupFloatingLabels() {
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea, select');
            const label = group.querySelector('label');
            
            if (input && label) {
                input.addEventListener('focus', () => {
                    label.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        label.classList.remove('focused');
                    }
                });
                
                // Check initial state
                if (input.value) {
                    label.classList.add('focused');
                }
            }
        });
    },
    
    // Setup character counters
    setupCharacterCounters() {
        const textareas = document.querySelectorAll('textarea[maxlength]');
        textareas.forEach(textarea => {
            const maxLength = textarea.getAttribute('maxlength');
            const counter = document.createElement('div');
            counter.className = 'character-counter';
            counter.style.cssText = 'text-align: right; font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;';
            
            const updateCounter = () => {
                const remaining = maxLength - textarea.value.length;
                counter.textContent = `${textarea.value.length}/${maxLength}`;
                counter.style.color = remaining < 20 ? '#dc2626' : '#9ca3af';
            };
            
            textarea.addEventListener('input', updateCounter);
            textarea.parentNode.appendChild(counter);
            updateCounter();
        });
    },
    
    // Setup file inputs
    setupFileInputs() {
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const files = Array.from(e.target.files);
                console.log('Files selected:', files.map(f => f.name));
            });
        });
    },
    
    // Setup form progress
    setupFormProgress() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const requiredFields = form.querySelectorAll('[required]');
            if (requiredFields.length > 3) { // Only for longer forms
                this.addProgressIndicator(form, requiredFields);
            }
        });
    },
    
    // Add progress indicator
    addProgressIndicator(form, requiredFields) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'form-progress';
        progressContainer.style.cssText = `
            background: #f3f4f6;
            border-radius: 0.5rem;
            padding: 0.5rem;
            margin-bottom: 1.5rem;
        `;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.style.cssText = `
            height: 4px;
            background: linear-gradient(90deg, #1e40af 0%, #3b82f6 100%);
            border-radius: 2px;
            transition: width 0.3s ease;
            width: 0%;
        `;
        
        const progressText = document.createElement('div');
        progressText.style.cssText = `
            font-size: 0.75rem;
            color: #6b7280;
            margin-top: 0.25rem;
            text-align: center;
        `;
        
        progressContainer.appendChild(progressBar);
        progressContainer.appendChild(progressText);
        form.insertBefore(progressContainer, form.firstChild);
        
        const updateProgress = () => {
            const filledFields = Array.from(requiredFields).filter(field => field.value.trim());
            const progress = (filledFields.length / requiredFields.length) * 100;
            
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `Заполнено ${filledFields.length} из ${requiredFields.length} обязательных полей`;
        };
        
        requiredFields.forEach(field => {
            field.addEventListener('input', updateProgress);
        });
        
        updateProgress();
    },
    
    // Save form data to localStorage
    saveFormData() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const formData = {};
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                if (input.name && input.type !== 'password' && input.name !== 'consent') {
                    formData[input.name] = input.value;
                }
            });
            
            if (Object.keys(formData).length > 0) {
                localStorage.setItem(`salemsoft_form_${form.id || 'default'}`, JSON.stringify(formData));
            }
        });
    },
    
    // Load saved form data
    loadSavedData() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            const saved = localStorage.getItem(`salemsoft_form_${form.id || 'default'}`);
            if (saved) {
                try {
                    const data = JSON.parse(saved);
                    Object.keys(data).forEach(key => {
                        const input = form.querySelector(`[name="${key}"]`);
                        if (input && data[key]) {
                            input.value = data[key];
                        }
                    });
                } catch (e) {
                    console.error('Error loading saved form data:', e);
                }
            }
        });
    },
    
    // Clear saved form data
    clearSavedData() {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('salemsoft_form_'));
        keys.forEach(key => localStorage.removeItem(key));
    },
    
    // Save submission to localStorage for backup
    saveToLocalStorage(data) {
        const submissions = JSON.parse(localStorage.getItem('salemsoft_submissions') || '[]');
        submissions.push(data);
        
        // Keep only last 10 submissions
        if (submissions.length > 10) {
            submissions.splice(0, submissions.length - 10);
        }
        
        localStorage.setItem('salemsoft_submissions', JSON.stringify(submissions));
    },
    
    // Track form submission for analytics
    trackFormSubmission(form, status) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                form_id: form.id,
                form_name: form.name || 'contact_form',
                status: status
            });
        }
        
        // Yandex Metrica
        if (typeof ym !== 'undefined') {
            ym(/* counter_id */, 'reachGoal', `form_${status}`);
        }
        
        console.log(`Form submission tracked: ${status}`);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => FormsHandler.init());
} else {
    FormsHandler.init();
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormsHandler;
}