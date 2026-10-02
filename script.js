// Menú Hamburguesa para Móviles
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Desplazamiento suave
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('active');
    }
}

// Lógica del Carrusel de Servicios
let currentServiceSlide = 0;

function initServiceDots() {
    const slides = document.querySelectorAll('.carousel-slide-card');
    const dotsContainer = document.getElementById('servicesDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot-service');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToServiceSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function updateServiceCarousel() {
    const track = document.getElementById('servicesTrack');
    const dots = document.querySelectorAll('.dot-service');

    if (track) {
        track.style.transform = `translateX(-${currentServiceSlide * 100}%)`;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentServiceSlide);
    });
}

function moveServiceSlide(direction) {
    const totalSlides = document.querySelectorAll('.carousel-slide-card').length;
    currentServiceSlide = (currentServiceSlide + direction + totalSlides) % totalSlides;
    updateServiceCarousel();
}

function goToServiceSlide(index) {
    currentServiceSlide = index;
    updateServiceCarousel();
}

// Diccionario de Traducciones Bilingüe (Español / Inglés)
const translations = {
    es: {
        nav_home: "Home",
        nav_about: "Quiénes Somos",
        nav_services: "Servicios",
        nav_offices: "Oficinas",
        nav_contact: "Contáctanos",
        hero_title: "Tu aliado de confianza que construye historias de éxito.",
        hero_subtitle: "Despacho internacional de abogados especializado en operaciones transfronterizas.",
        about_tag: "EXPERIENCIA INTERNACIONAL",
        about_title: "Quiénes Somos",
        about_highlight: "Conectamos tu negocio con el mundo.",
        about_text: "Sedco Asesores es una firma legal internacional con sede en México y oficinas en Nueva York, Miami, Dallas y Chihuahua que brinda asesoría especializada a empresas latinoamericanas y españolas para expandir sus operaciones a Estados Unidos, ofreciendo un servicio integral con experiencia local y transfronteriza.",
        stat_offices: "Oficinas Clave en México y EE. UU.",
        stat_exp: "Años de Experiencia Legal",
        stat_focus: "Enfoque Transfronterizo",
        stat_areas: "Áreas de Especialización",
        services_title: "NUESTROS SERVICIOS",
        srv_corp_title: "Corporativo",
        srv_corp_desc: "Brindamos asesoría legal a empresas nacionales e internacionales en México y Latinoamérica, con experiencia en sectores como manufactura, comercio, farmacéutica, hotelería y telecomunicaciones.",
        srv_corp_li1: "Constitución de sociedades",
        srv_corp_li2: "Gobierno corporativo",
        srv_corp_li3: "Acuerdos de accionistas",
        srv_corp_li4: "Registros societarios",
        srv_ma_title: "Fusiones y Adquisiciones",
        srv_ma_desc: "Asesoramos a empresas e inversionistas en fusiones, escisiones y compraventas en México y Latinoamérica, abarcando reestructuración, auditoría, negociación y cierre de operaciones.",
        srv_ma_li1: "Fusión y escisión",
        srv_ma_li2: "Joint ventures",
        srv_ma_li3: "Compraventa de activos",
        srv_contract_title: "Contratos",
        srv_contract_desc: "Creación de políticas contractuales corporativas que garanticen operaciones transparentes, justas y alineadas con el gobierno corporativo.",
        srv_contract_li1: "Políticas contractuales",
        srv_contract_li2: "Distribución y suministro",
        srv_contract_li3: "Factoraje y crédito",
        srv_realestate_title: "Inmobiliario",
        srv_realestate_desc: "Asesoramos en la adquisición, financiamiento y desarrollo de proyectos inmobiliarios residenciales, comerciales e industriales en México y EE. UU.",
        srv_realestate_li1: "Compraventa de inmuebles",
        srv_realestate_li2: "Proyectos turísticos",
        srv_realestate_li3: "Contratos de construcción",
        srv_ip_title: "Propiedad Intelectual",
        srv_ip_desc: "Representamos y asesoramos en la protección y defensa de derechos de propiedad intelectual a nivel internacional a través del Protocolo de Madrid.",
        srv_ip_li1: "Marcas y patentes",
        srv_ip_li2: "Derechos de autor",
        srv_ip_li3: "Secretos industriales",
        srv_trade_title: "Comercio Exterior",
        srv_trade_desc: "Apoyo en operaciones de importación, exportación y regímenes aduaneros, así como programas preferenciales IMMEX, ALTEX y ECEX.",
        srv_trade_li1: "Avisos aduaneros",
        srv_trade_li2: "Certificados de origen",
        srv_trade_li3: "Cuotas compensatorias",
        srv_reg_title: "Regulatorio",
        srv_reg_desc: "Asesoría en cumplimiento regulatorio de productos específicos (medicamentos, alimentos, cosméticos, químicos) ante autoridades correspondientes.",
        srv_reg_li1: "Normas Mexicanas (NOM)",
        srv_reg_li2: "COFEPRIS y FDA",
        srv_reg_li3: "Licencias sanitarias",
        srv_gov_title: "Adquisiciones Públicas",
        srv_gov_desc: "Asesoría integral en licitaciones y contratos gubernamentales en México, desde la preparación hasta la resolución de controversias.",
        srv_gov_li1: "Licitaciones directas",
        srv_gov_li2: "Empresas extranjeras",
        srv_gov_li3: "Controversias y Tribunales",
        srv_luxury_title: "Marcas de Lujo",
        srv_luxury_desc: "Soluciones creativas e integrales para marcas internacionales de lujo en México para mantener su imagen y estándares de mercado.",
        srv_luxury_li1: "Estrategia Go to Market",
        srv_luxury_li2: "Contratos store in store",
        srv_luxury_li3: "Franquicias de lujo",
        srv_labor_title: "Laboral y Migratorio",
        srv_labor_desc: "Gestión integral de contratación de personal ejecutivo, cumplimiento de normativas laborales transfronterizas y visados corporativos.",
        srv_labor_li1: "Contratación ejecutiva",
        srv_labor_li2: "Visados corporativos",
        srv_labor_li3: "Auditorías laborales",
        offices_title: "Nuestra Presencia Internacional",
        off_mexico: "México",
        off_ny: "Nueva York",
        contact_title: "CONTACT US",
        contact_subtitle: "Send us a message and we will get back to you shortly.",
        lbl_name: "Full Name *",
        lbl_email: "Email *",
        lbl_message: "Message *",
        btn_send: "Send Message",
        footer_social_title: "Follow Us",
        newsletter_title: "Subscribe to our newsletter",
        newsletter_desc: "Get updates on corporate and international law.",
        newsletter_btn: "Subscribe",
        footer_rights: "All rights reserved."
    }
};

let typeWriterTimeout;
let isDeleting = false;
let typeTxt = '';

function typeWriter() {
    const h1Element = document.querySelector('h1[data-i18n="hero_title"]');
    if (!h1Element) return;

    const currentLang = localStorage.getItem('selectedLang') || 'es';
    const fullText = translations[currentLang]['hero_title'];

    if (isDeleting) {
        typeTxt = fullText.substring(0, typeTxt.length - 1);
    } else {
        typeTxt = fullText.substring(0, typeTxt.length + 1);
    }

    h1Element.innerHTML = typeTxt + '<span class="type-cursor">|</span>';

    let speed = isDeleting ? 30 : 70;

    if (!isDeleting && typeTxt === fullText) {
        speed = 3000;
        isDeleting = true;
    } else if (isDeleting && typeTxt === '') {
        isDeleting = false;
        speed = 500;
    }

    clearTimeout(typeWriterTimeout);
    typeWriterTimeout = setTimeout(typeWriter, speed);
}

function changeLanguage(lang) {
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'hero_title') {
                isDeleting = false;
                typeTxt = '';
                clearTimeout(typeWriterTimeout);
                typeWriter();
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    localStorage.setItem('selectedLang', lang);
}

// ==========================================
// ANIMACIONES AL HACER SCROLL & CONTADORES
// ==========================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

// Función matemática para animar los números progresivamente
function animateCounter(obj, start, end, duration, prefix, suffix) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Curva de aceleración (easeOutExpo)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        let current = Math.floor(easeOut * (end - start) + start);
        
        obj.innerHTML = prefix + current + suffix;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = prefix + end + suffix; // Asegurar que termine exacto
        }
    };
    window.requestAnimationFrame(step);
}

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Si el elemento visible tiene contadores dentro, disparar la animación
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const prefix = counter.getAttribute('data-prefix') || '';
                const suffix = counter.getAttribute('data-suffix') || '';
                animateCounter(counter, 0, target, 2000, prefix, suffix);
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    initServiceDots();
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    changeLanguage(savedLang);

    // Asignar observador a las secciones que se van a animar
    const elementsToAnimate = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .office-card');
    
    elementsToAnimate.forEach((el, index) => {
        if(el.classList.contains('office-card')) {
            el.style.transitionDelay = `${index * 0.1}s`;
        }
        scrollObserver.observe(el);
    });
});

function toggleContactForm() {
    const formWrapper = document.getElementById('contactFormWrapper');
    const iconBox = document.querySelector('.toggle-icon-box');
    
    formWrapper.classList.toggle('open');
    iconBox.classList.toggle('rotate');
}