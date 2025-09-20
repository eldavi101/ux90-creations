// UX90 Creations - Digital Agency JavaScript

// Language Data
const translations = {
    en: {
        // Navigation
        "Home": "Home",
        "Services": "Services", 
        "About": "About",
        "Contact": "Contact",
        "Get Quote": "Get Quote",
        
        // Hero Section
        "Professional Digital Agency": "Professional Digital Agency",
        "We create stunning websites, mobile apps, and provide comprehensive digital marketing services to help your business grow online.": "We create stunning websites, mobile apps, and provide comprehensive digital marketing services to help your business grow online.",
        "Start Your Project": "Start Your Project",
        "Our Services": "Our Services",
        "100% On-Time Delivery": "100% On-Time Delivery",
        "Satisfaction Guaranteed": "Satisfaction Guaranteed",
        "24/7 Support": "24/7 Support",
        
        // Services Section
        "Our Professional Services": "Our Professional Services",
        "Comprehensive digital solutions to transform your business presence online": "Comprehensive digital solutions to transform your business presence online",
        "Web Development": "Web Development",
        "Professional team highly qualified in jQuery, JavaScript, Responsive Web Design, HTML, WordPress, Linux, Ajax, CSS, Apache and MySQL.": "Professional team highly qualified in jQuery, JavaScript, Responsive Web Design, HTML, WordPress, Linux, Ajax, CSS, Apache and MySQL.",
        "Custom Website Development": "Custom Website Development",
        "E-commerce Solutions": "E-commerce Solutions",
        "CMS Integration": "CMS Integration",
        "Responsive Design": "Responsive Design",
        "Learn More": "Learn More",
        
        "Desktop Applications": "Desktop Applications",
        "Custom desktop software solutions for Windows, macOS, and Linux. We create powerful applications using modern frameworks like Electron, .NET, Java, and native development tools.": "Custom desktop software solutions for Windows, macOS, and Linux. We create powerful applications using modern frameworks like Electron, .NET, Java, and native development tools.",
        "Cross-Platform Development": "Cross-Platform Development",
        "Electron Applications": "Electron Applications",
        "Native Windows Apps": "Native Windows Apps",
        "System Integration": "System Integration",
        
        "UX/UI Design": "UX/UI Design",
        "User-centered design solutions that create exceptional digital experiences. We focus on usability, accessibility, and beautiful interfaces that engage users and drive conversions.": "User-centered design solutions that create exceptional digital experiences. We focus on usability, accessibility, and beautiful interfaces that engage users and drive conversions.",
        "User Research & Testing": "User Research & Testing",
        "Wireframing & Prototyping": "Wireframing & Prototyping",
        "Interface Design": "Interface Design",
        "Design Systems": "Design Systems",
        
        "SEO Agency Services": "SEO Agency Services",
        "Google maps optimization, Google search optimization, Google My Business (GMB) setup, optimization and publishing, Local landing pages, Backlinks, Content optimization including errors and descriptions of categories or products, Monthly reports so you know what work we did and how much you improved.": "Google maps optimization, Google search optimization, Google My Business (GMB) setup, optimization and publishing, Local landing pages, Backlinks, Content optimization including errors and descriptions of categories or products, Monthly reports so you know what work we did and how much you improved.",
        "Local SEO": "Local SEO",
        "Technical SEO": "Technical SEO",
        "Content Optimization": "Content Optimization",
        "Monthly Reports": "Monthly Reports",
        
        "Mobile Applications": "Mobile Applications",
        "Native and cross-platform mobile applications for iOS and Android. React Native, Flutter, and native development solutions.": "Native and cross-platform mobile applications for iOS and Android. React Native, Flutter, and native development solutions.",
        "iOS Development": "iOS Development",
        "Android Development": "Android Development",
        "React Native": "React Native",
        "Flutter Development": "Flutter Development",
        
        "Online Stores": "Online Stores",
        "You can sell products, services and experiences online. Today's world is the perfect place for anyone who wants to sell online to do so clearly, precisely and accurately. We create an online store ready to sell any good or service.": "You can sell products, services and experiences online. Today's world is the perfect place for anyone who wants to sell online to do so clearly, precisely and accurately. We create an online store ready to sell any good or service.",
        "Shopify Development": "Shopify Development",
        "WooCommerce": "WooCommerce",
        "Payment Integration": "Payment Integration",
        "Inventory Management": "Inventory Management",
        
        // Why Choose Us
        "Why Choose UX90 Creations?": "Why Choose UX90 Creations?",
        "100% guarantee on time, service and delivery. We are interested in working with you once and many more times. That's why at UX90 Creations we are committed to providing all possible advice on your project or business idea.": "100% guarantee on time, service and delivery. We are interested in working with you once and many more times. That's why at UX90 Creations we are committed to providing all possible advice on your project or business idea.",
        "Proven Experience": "Proven Experience",
        "You will get huge advantages from years of work and projects that empower us to help clients worldwide. Simply, we are a web design agency focused on expansive digital marketing.": "You will get huge advantages from years of work and projects that empower us to help clients worldwide. Simply, we are a web design agency focused on expansive digital marketing.",
        "Optimal Solutions for Every Business": "Optimal Solutions for Every Business",
        "We believe in delivering optimal solutions for our clients, we seek to satisfy their particular needs. We are here to maximize your potential and help you get huge profits.": "We believe in delivering optimal solutions for our clients, we seek to satisfy their particular needs. We are here to maximize your potential and help you get huge profits.",
        "Innovative Thinking": "Innovative Thinking",
        "After years in the market, we have learned the right way that one can think innovatively. We have extensive experience in programming, web design and digital marketing. More than a decade that helps us provide the right solutions for clients.": "After years in the market, we have learned the right way that one can think innovatively. We have extensive experience in programming, web design and digital marketing. More than a decade that helps us provide the right solutions for clients.",
        "Appropriate Tools": "Appropriate Tools",
        "We have an extensive toolbox that is constantly growing. However, these tools can only be used to their full potential if you know which one to use in the right place.": "We have an extensive toolbox that is constantly growing. However, these tools can only be used to their full potential if you know which one to use in the right place.",
        
        // Contact Section
        "If you have any inquiry, we are always available": "If you have any inquiry, we are always available",
        "Our team is always in standby/active mode to help you handle all your business requirements.": "Our team is always in standby/active mode to help you handle all your business requirements.",
        "Our Location": "Our Location",
        "Miami, FL": "Miami, FL",
        "United States": "United States",
        "Phone": "Phone",
        "Email": "Email",
        "Send us a message": "Send us a message",
        "Your Name": "Your Name",
        "Your Email": "Your Email",
        "Phone Number": "Phone Number",
        "Service Needed": "Service Needed",
        "Select a service": "Select a service",
        "Desktop Applications": "Desktop Applications",
        "UX/UI Design": "UX/UI Design",
        "SEO Services": "SEO Services",
        "E-commerce": "E-commerce",
        "Other": "Other",
        "Your Message": "Your Message",
        "Send Message": "Send Message",
        "Ready to start your project?": "Ready to start your project?",
        "Chat with us on WhatsApp for immediate assistance": "Chat with us on WhatsApp for immediate assistance",
        "Chat on WhatsApp": "Chat on WhatsApp",
        
        // Footer
        "We are a team of web designers committed to our clients. UX90 Creations is the leading customer service agency since 2020. We create beautiful and functional websites, landing pages, marketplaces and custom solutions for our users.": "We are a team of web designers committed to our clients. UX90 Creations is the leading customer service agency since 2020. We create beautiful and functional websites, landing pages, marketplaces and custom solutions for our users.",
        "Services": "Services",
        "Desktop Apps": "Desktop Apps",
        "Mobile Apps": "Mobile Apps",
        "UX/UI Design": "UX/UI Design",
        "Contact": "Contact",
        "Follow Us": "Follow Us",
        "All rights reserved.": "All rights reserved.",
        "WE ARE ONE OF THE #1 WEB AGENCIES ON GOOGLE WITH GLOBAL SERVICE AND CUSTOMER SATISFACTION": "WE ARE ONE OF THE #1 WEB AGENCIES ON GOOGLE WITH GLOBAL SERVICE AND CUSTOMER SATISFACTION"
    },
    es: {
        // Navigation
        "UX90 Creations": "UX90 Creaciones",
        "Digital Agency": "Agencia Digital",
        "Home": "Inicio",
        "Services": "Servicios",
        "About": "Nosotros",
        "Contact": "Contacto",
        "Get Quote": "Cotizar",
        
        // Hero Section
        "Professional Digital Agency": "Agencia Digital Profesional",
        "We create stunning websites, mobile apps, and provide comprehensive digital marketing services to help your business grow online.": "Creamos sitios web impresionantes, aplicaciones móviles y brindamos servicios integrales de marketing digital para ayudar a crecer tu negocio en línea.",
        "Start Your Project": "Iniciar Proyecto",
        "Our Services": "Nuestros Servicios",
        "100% On-Time Delivery": "100% Entrega a Tiempo",
        "Satisfaction Guaranteed": "Satisfacción Garantizada",
        "24/7 Support": "Soporte 24/7",
        
        // Services Section
        "Our Professional Services": "Nuestros Servicios Profesionales",
        "Comprehensive digital solutions to transform your business presence online": "Soluciones digitales integrales para transformar la presencia de tu negocio en línea",
        "Web Development": "Desarrollo Web",
        "Professional team highly qualified in jQuery, JavaScript, Responsive Web Design, HTML, WordPress, Linux, Ajax, CSS, Apache and MySQL.": "Equipo profesional altamente calificado en jQuery, JavaScript, Diseño Web Responsivo, HTML, WordPress, Linux, Ajax, CSS, Apache y MySQL.",
        "Custom Website Development": "Desarrollo Web Personalizado",
        "E-commerce Solutions": "Soluciones E-commerce",
        "CMS Integration": "Integración CMS",
        "Responsive Design": "Diseño Responsivo",
        "Learn More": "Saber Más",
        
        "Desktop Applications": "Aplicaciones de Escritorio",
        "Custom desktop software solutions for Windows, macOS, and Linux. We create powerful applications using modern frameworks like Electron, .NET, Java, and native development tools.": "Soluciones de software de escritorio personalizadas para Windows, macOS y Linux. Creamos aplicaciones potentes utilizando frameworks modernos como Electron, .NET, Java y herramientas de desarrollo nativo.",
        "Cross-Platform Development": "Desarrollo Multiplataforma",
        "Electron Applications": "Aplicaciones Electron",
        "Native Windows Apps": "Apps Nativas Windows",
        "System Integration": "Integración de Sistema",
        
        "UX/UI Design": "Diseño UX/UI",
        "User-centered design solutions that create exceptional digital experiences. We focus on usability, accessibility, and beautiful interfaces that engage users and drive conversions.": "Soluciones de diseño centradas en el usuario que crean experiencias digitales excepcionales. Nos enfocamos en usabilidad, accesibilidad e interfaces hermosas que involucran a los usuarios y generan conversiones.",
        "User Research & Testing": "Investigación y Pruebas de Usuario",
        "Wireframing & Prototyping": "Wireframing y Prototipos",
        "Interface Design": "Diseño de Interfaz",
        "Design Systems": "Sistemas de Diseño",
        
        "SEO Agency Services": "Servicios de Agencia SEO",
        "Google maps optimization, Google search optimization, Google My Business (GMB) setup, optimization and publishing, Local landing pages, Backlinks, Content optimization including errors and descriptions of categories or products, Monthly reports so you know what work we did and how much you improved.": "Optimización de mapas de Google, Optimización de búsqueda de Google, Configuración, optimización y publicación de Google My Business (GMB), Páginas de destino locales, Vínculos de retroceso, Optimización de contenido incluyendo errores y descripciones de categorías o productos, Informes mensuales para que sepas qué trabajo hicimos y cuánto mejoraste.",
        "Local SEO": "SEO Local",
        "Technical SEO": "SEO Técnico",
        "Content Optimization": "Optimización de Contenido",
        "Monthly Reports": "Reportes Mensuales",
        
        "Mobile Applications": "Aplicaciones Móviles",
        "Native and cross-platform mobile applications for iOS and Android. React Native, Flutter, and native development solutions.": "Aplicaciones móviles nativas y multiplataforma para iOS y Android. Soluciones de desarrollo en React Native, Flutter y nativo.",
        "iOS Development": "Desarrollo iOS",
        "Android Development": "Desarrollo Android",
        "React Native": "React Native",
        "Flutter Development": "Desarrollo Flutter",
        
        "Online Stores": "Tiendas Online",
        "You can sell products, services and experiences online. Today's world is the perfect place for anyone who wants to sell online to do so clearly, precisely and accurately. We create an online store ready to sell any good or service.": "Usted puede vender online productos, servicios y experiencias. El mundo de HOY es el lugar perfecto para que cualquier persona que quiere vender online lo pueda hacer de forma clara, precisa y exacta. Nosotros creamos una Tienda Online lista para vender cualquier bien o servicio.",
        "Shopify Development": "Desarrollo Shopify",
        "WooCommerce": "WooCommerce",
        "Payment Integration": "Integración de Pagos",
        "Inventory Management": "Gestión de Inventario",
        
        // Why Choose Us
        "Why Choose UX90 Creations?": "¿Por Qué Elegir UX90 Creations?",
        "100% guarantee on time, service and delivery. We are interested in working with you once and many more times. That's why at UX90 Creations we are committed to providing all possible advice on your project or business idea.": "Garantía 100% en tiempo, servicio y entrega. Nos interesa trabajar con usted una y muchas veces más. Por eso en UX90 Creations estamos comprometidos a brindar toda la asesoría posible en su proyecto o idea de negocio.",
        "Proven Experience": "Experiencia Validada",
        "You will get huge advantages from years of work and projects that empower us to help clients worldwide. Simply, we are a web design agency focused on expansive digital marketing.": "Obtendrás enormes ventajas de años de trabajo y proyectos que nos empoderan a ayudar a clientes de todo el mundo. Simple, Somos una agencia de diseño web enfocados en marketing digital expansivo.",
        "Optimal Solutions for Every Business": "Soluciones Óptimas para Cada Negocio",
        "We believe in delivering optimal solutions for our clients, we seek to satisfy their particular needs. We are here to maximize your potential and help you get huge profits.": "Creemos en la entrega de soluciones óptimas para nuestros clientes, buscamos satisfacer sus necesidades particulares. Estamos aquí para maximizar su potencial y ayudarlos a obtener enormes ganancias.",
        "Innovative Thinking": "Pensar de Manera Innovadora",
        "After years in the market, we have learned the right way that one can think innovatively. We have extensive experience in programming, web design and digital marketing. More than a decade that helps us provide the right solutions for clients.": "Luego de años en el mercado, hemos aprendido la forma correcta en que uno puede pensar de manera innovadora. Tenemos una amplia experiencia en programación, diseño web y marketing digital. Más de una década que nos ayuda a proporcionar las soluciones justas para clientes.",
        "Appropriate Tools": "Herramientas Apropiadas",
        "We have an extensive toolbox that is constantly growing. However, these tools can only be used to their full potential if you know which one to use in the right place.": "Tenemos una extensa caja de herramientas que crece constantemente. Sin embargo, estas herramientas solo se pueden utilizar con todo su potencial si se sabe cuál usar en el lugar correcto.",
        
        // Contact Section
        "If you have any inquiry, we are always available": "Si tiene alguna consulta, siempre estamos disponibles",
        "Our team is always in standby/active mode to help you handle all your business requirements.": "Nuestro equipo siempre está en modo de espera/activo para ayudarlo a manejar todos los requisitos de su negocio.",
        "Our Location": "Nuestra Ubicación",
        "Miami, FL": "Miami, FL",
        "United States": "Estados Unidos",
        "Phone": "Teléfono",
        "Email": "Correo",
        "Send us a message": "Envíanos un mensaje",
        "Your Name": "Tu Nombre",
        "Your Email": "Tu Email",
        "Phone Number": "Número de Teléfono",
        "Service Needed": "Servicio Requerido",
        "Select a service": "Selecciona un servicio",
        "Desktop Applications": "Aplicaciones de Escritorio",
        "UX/UI Design": "Diseño UX/UI",
        "SEO Services": "Servicios SEO",
        "E-commerce": "E-commerce",
        "Other": "Otro",
        "Your Message": "Tu Mensaje",
        "Send Message": "Enviar Mensaje",
        "Ready to start your project?": "¿Listo para iniciar tu proyecto?",
        "Chat with us on WhatsApp for immediate assistance": "Chatea con nosotros en WhatsApp para asistencia inmediata",
        "Chat on WhatsApp": "Chatear en WhatsApp",
        
        // Footer
        "We are a team of web designers committed to our clients. UX90 Creations is the leading customer service agency since 2020. We create beautiful and functional websites, landing pages, marketplaces and custom solutions for our users.": "Somos un equipo de diseñadores web comprometidos con nuestros clientes. UX90 Creations es la agencia líder en servicio al cliente desde 2020. Creamos bellos y funcionales sitios web, landing pages, marketplaces y soluciones a la medida de nuestros usuarios.",
        "Services": "Servicios",
        "Desktop Apps": "Apps de Escritorio",
        "Mobile Apps": "Apps Móviles",
        "UX/UI Design": "Diseño UX/UI",
        "Contact": "Contacto",
        "Follow Us": "Síguenos",
        "All rights reserved.": "Todos los derechos reservados.",
        "WE ARE ONE OF THE #1 WEB AGENCIES ON GOOGLE WITH GLOBAL SERVICE AND CUSTOMER SATISFACTION": "SOMOS UNA DE LAS AGENCIAS WEB #1 EN GOOGLE CON SERVICIO GLOBAL Y SATISFACCIÓN AL CLIENTE"
    }
};

// Current language (default: English)
let currentLanguage = 'en';

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set default language
    switchLanguage('en');
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize form handling
    initializeForm();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize navbar scroll effect
    initializeNavbarScroll();
}

// Language Switching
function switchLanguage(lang) {
    currentLanguage = lang;
    document.body.setAttribute('data-lang', lang);
    
    // Update language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en], [data-es]');
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update select options
    updateSelectOptions();
}

function updateSelectOptions() {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const options = serviceSelect.querySelectorAll('option');
        options.forEach(option => {
            const translation = option.getAttribute(`data-${currentLanguage}`);
            if (translation) {
                option.textContent = translation;
            }
        });
    }
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });
}

// Navbar scroll effect
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Form Handling
function initializeForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add floating label effect
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        if (input) {
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                group.classList.add('focused');
            }
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!validateForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLanguage === 'en' ? 'Sending...' : 'Enviando...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        showNotification(
            currentLanguage === 'en' ? 'Message sent successfully!' : '¡Mensaje enviado exitosamente!',
            'success'
        );
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Remove focused class from form groups
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('focused'));
    }, 1500);
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'service', 'message'];
    const missingFields = [];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            missingFields.push(field);
        }
    });
    
    if (missingFields.length > 0) {
        showNotification(
            currentLanguage === 'en' ? 
            'Please fill in all required fields.' : 
            'Por favor complete todos los campos requeridos.',
            'error'
        );
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification(
            currentLanguage === 'en' ? 
            'Please enter a valid email address.' : 
            'Por favor ingrese un email válido.',
            'error'
        );
        return false;
    }
    
    return true;
}

// Notifications
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Account for fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.service-card, .feature-item, .contact-item, .hero-content, .hero-image'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Add CSS for animations
    addScrollAnimationCSS();
}

function addScrollAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .service-card.animate-on-scroll {
            transform: translateY(50px) scale(0.95);
        }
        
        .service-card.animate-in {
            transform: translateY(0) scale(1);
        }
        
        .hero-content.animate-on-scroll {
            transform: translateX(-50px);
        }
        
        .hero-content.animate-in {
            transform: translateX(0);
        }
        
        .hero-image.animate-on-scroll {
            transform: translateX(50px);
        }
        
        .hero-image.animate-in {
            transform: translateX(0);
        }
    `;
    document.head.appendChild(style);
}

// Utility Functions
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

// Performance optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images are present
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add global click tracking (for analytics)
function trackClick(element, action) {
    // This is where you would integrate with Google Analytics or other tracking
    console.log('Click tracked:', element, action);
    
    // Example Google Analytics integration:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'click', {
    //         event_category: 'engagement',
    //         event_label: action
    //     });
    // }
}

// Add click tracking to important elements
document.addEventListener('DOMContentLoaded', () => {
    const trackableElements = document.querySelectorAll(
        '.btn-primary, .btn-secondary, .service-btn, .whatsapp-btn, .whatsapp-float'
    );
    
    trackableElements.forEach(element => {
        element.addEventListener('click', () => {
            trackClick(element, element.textContent || element.className);
        });
    });
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
    // You could send this to an error tracking service
});

// Expose functions to global scope for HTML onclick handlers
window.switchLanguage = switchLanguage;

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
