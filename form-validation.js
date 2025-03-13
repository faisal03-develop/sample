document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        initFormValidation(contactForm);
    }
});

function initFormValidation(form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const subjectInput = form.querySelector('#subject');
    const messageInput = form.querySelector('#message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');
    
    // Form submission event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        resetErrorMessages();
        
        // Validate form
        let isValid = true;
        
        // Validate name
        if (!validateName(nameInput.value)) {
            displayError(nameError, 'Please enter a valid name (minimum 2 characters)');
            isValid = false;
        }
        
        // Validate email
        if (!validateEmail(emailInput.value)) {
            displayError(emailError, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone (if provided)
        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            displayError(phoneError, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate subject
        if (!validateSubject(subjectInput.value)) {
            displayError(subjectError, 'Please enter a subject (minimum 3 characters)');
            isValid = false;
        }
        
        // Validate message
        if (!validateMessage(messageInput.value)) {
            displayError(messageError, 'Please enter a message (minimum 10 characters)');
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            // In a real application, you would submit the form data to the server here
            // For this example, we'll just show a success message
            formSuccess.style.display = 'block';
            formSuccess.textContent = 'Thank you for your message! I will get back to you soon.';
            
            // Reset form
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });
    
    // Real-time validation
    nameInput.addEventListener('blur', function() {
        if (this.value && !validateName(this.value)) {
            displayError(nameError, 'Please enter a valid name (minimum 2 characters)');
        } else {
            nameError.style.display = 'none';
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            displayError(emailError, 'Please enter a valid email address');
        } else {
            emailError.style.display = 'none';
        }
    });
    
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            displayError(phoneError, 'Please enter a valid phone number');
        } else {
            phoneError.style.display = 'none';
        }
    });
    
    subjectInput.addEventListener('blur', function() {
        if (this.value && !validateSubject(this.value)) {
            displayError(subjectError, 'Please enter a subject (minimum 3 characters)');
        } else {
            subjectError.style.display = 'none';
        }
    });
    
    messageInput.addEventListener('blur', function() {
        if (this.value && !validateMessage(this.value)) {
            displayError(messageError, 'Please enter a message (minimum 10 characters)');
        } else {
            messageError.style.display = 'none';
        }
    });
}

// Validation functions
function validateName(name) {
    return name.trim().length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;
    return phoneRegex.test(phone);
}

function validateSubject(subject) {
    return subject.trim().length >= 3;
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

// Display error message
function displayError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Reset all error messages
function resetErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.style.display = 'none';
    });
    
    const formSuccess = document.getElementById('formSuccess');
    if (formSuccess) {
        formSuccess.style.display = 'none';
    }
} 