// Project Data
/*
const projects = [
    {
        title: 'Project 1',
        description: 'A brief description of your first project. Explain what technologies you used and what problem it solves.',
        image: 'images/project1.jpg',
        github: 'https://github.com/yourusername/project1',
        live: 'https://project1.com'
    },
    {
        title: 'Project 2',
        description: 'Description of your second project. Highlight the key features and your role in development.',
        image: 'images/project2.jpg',
        github: 'https://github.com/yourusername/project2',
        live: 'https://project2.com'
    },
    // Add more projects as needed
];*/

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');
const projectsGrid = document.querySelector('.projects-grid');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Project Cards
/*
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="btn">GitHub</a>
                <a href="${project.live}" target="_blank" class="btn">Live Demo</a>
            </div>
        </div>
    `;
    return card;
}

// Render Projects
projects.forEach(project => {
    projectsGrid.appendChild(createProjectCard(project));
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
*/

// Contact Form Handling
/*
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        alert('Error sending message. Please try again later.');
        console.error('Form submission error:', error);
    }
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;

    if (!name.trim()) {
        showError('name', 'Name is required');
        isValid = false;
    }

    if (!email.trim()) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!message.trim()) {
        showError('message', 'Message is required');
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Remove any existing error message
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    field.parentElement.appendChild(errorDiv);
    field.classList.add('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add input event listeners for real-time validation
document.getElementById('name').addEventListener('input', () => {
    const field = document.getElementById('name');
    if (field.value.trim()) {
        field.classList.remove('error');
        const errorMessage = field.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});

document.getElementById('email').addEventListener('input', () => {
    const field = document.getElementById('email');
    if (field.value.trim() && isValidEmail(field.value)) {
        field.classList.remove('error');
        const errorMessage = field.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});

document.getElementById('message').addEventListener('input', () => {
    const field = document.getElementById('message');
    if (field.value.trim()) {
        field.classList.remove('error');
        const errorMessage = field.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
}); */