/* ===========================
   SCRIPT DE INTERACTIVIDAD
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initMobileMenu();
    initScrollEffects();
    initFormValidation();
    initAnimations();
});

/* ===========================
   MENÚ MÓVIL
   =========================== */

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ===========================
   EFECTOS DE SCROLL
   =========================== */

function initScrollEffects() {
    // Navegación activa al hacer scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Animación de elementos al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos
    const animateElements = document.querySelectorAll(
        '.skill-item, .stat-card, .project-card, .testimonial-card, .education-card, .timeline-content'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

/* ===========================
   VALIDACIÓN DE FORMULARIO
   =========================== */

function initFormValidation() {
    const form = document.querySelector('.contact-form');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores del formulario
        const name = form.querySelector('input[placeholder="Tu Nombre"]').value.trim();
        const email = form.querySelector('input[placeholder="Tu Email"]').value.trim();
        const subject = form.querySelector('input[placeholder="Asunto"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        // Validar campos
        if (!name || !email || !message) {
            showNotification('Por favor, rellena todos los campos requeridos.', 'error');
            return;
        }

        // Validar email
        if (!isValidEmail(email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }

        // Simular envío (en producción, enviar a servidor)
        showNotification('¡Mensaje enviado exitosamente! Me pondré en contacto pronto.', 'success');
        
        // Limpiar formulario
        form.reset();

        // Aquí iría el código para enviar el formulario al servidor
        console.log('Formulario enviado:', { name, email, subject, message });
    });
}

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos de notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        ${type === 'success' ? 'background: linear-gradient(135deg, #10b981, #059669);' : 
          type === 'error' ? 'background: linear-gradient(135deg, #ef4444, #dc2626);' :
          'background: linear-gradient(135deg, #3b82f6, #1d4ed8);'}
    `;

    document.body.appendChild(notification);

    // Remover notificación después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* ===========================
   ANIMACIONES ADICIONALES
   =========================== */

function initAnimations() {
    // Agregar eventos de hover a elementos interactivos
    const cards = document.querySelectorAll('.stat-card, .project-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Animación de números en estadísticas
    animateStatistics();

    // Efecto parallax (opcional)
    initParallax();
}

// Animar números en estadísticas
function animateStatistics() {
    const stats = document.querySelectorAll('.stat-card h3');
    let hasAnimated = false;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateNumbers(stat);
            }
        });
    }, observerOptions);

    const statsContainer = document.querySelector('.about-stats');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
}

function animateNumbers(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/\d/g, '');
    const duration = 2000;
    const start = Date.now();

    function update() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * number);
        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

// Efecto parallax
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;
            element.style.transform = `translateY(${distance * 0.5}px)`;
        });
    });
}

/* ===========================
   AGREGAR ESTILOS CSS PARA ANIMACIONES
   =========================== */

// Agregar estilos de notificación si no están presentes
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(10px, 10px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }

    .nav-link.active {
        color: #6366f1;
        font-weight: 600;
    }

    .nav-link.active::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        .contact-form .btn {
            margin-top: 10px;
        }
    }
`;

document.head.appendChild(styleSheet);

/* ===========================
   FUNCIONES UTILITARIAS
   =========================== */

// Función para scroll suave
function smoothScroll(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('¡Copiado al portapapeles!', 'success');
    }).catch(() => {
        showNotification('Error al copiar', 'error');
    });
}

// Agregar soporte para búsqueda de habilidades (opcional)
const searchSkills = (query) => {
    const skills = document.querySelectorAll('.badge');
    skills.forEach(skill => {
        if (skill.textContent.toLowerCase().includes(query.toLowerCase())) {
            skill.style.display = 'inline-block';
        } else {
            skill.style.display = 'none';
        }
    });
};

// Exportar funciones globales
window.smoothScroll = smoothScroll;
window.copyToClipboard = copyToClipboard;
window.searchSkills = searchSkills;

// Log de inicialización
console.log('✨ Portfolio iniciado correctamente');
