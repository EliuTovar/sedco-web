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
        nav_home: "Inicio",
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
        stat_offices: "Oficinas Clave en México y<br>EE. UU.",
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
        srv_ip_li1: "Marcas",
        srv_ip_li2: "Derechos de autor",
        srv_ip_li3: "Secretos industriales",
        srv_trade_title: "Comercio Exterior",
        srv_trade_desc: "Apoyo en operaciones de importación, exportación y regímenes aduaneros, así como programas IMMEX.",
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
        off_chihuahua: "Chihuahua",
        off_cdmx: "Ciudad de México",
        off_ny: "Nueva York",
        contact_title: "CONTÁCTANOS",
        contact_subtitle: "Envíanos un mensaje y te responderemos lo antes posible.",
        lbl_name: "Nombre Completo *",
        lbl_email: "Correo *",
        lbl_message: "Mensaje *",
        btn_send: "Enviar Mensaje",
        footer_social_title: "Síguenos",
        newsletter_title: "Suscríbete a nuestro newsletter",
        newsletter_desc: "Recibe actualizaciones sobre derecho corporativo e internacional.",
        newsletter_btn: "Suscribirme",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_offices: "Offices",
        nav_contact: "Contact Us",
        hero_title: "Your trusted ally building success stories.",
        hero_subtitle: "International law firm specializing in cross-border operations.",
        about_tag: "INTERNATIONAL EXPERIENCE",
        about_title: "About Us",
        about_highlight: "We connect your business with the world.",
        about_text: "Sedco Asesores is an international law firm headquartered in Mexico with offices in New York, Miami, Dallas, and Chihuahua, providing specialized advice to Latin American and Spanish companies to expand their operations to the United States, offering comprehensive service with local and cross-border expertise.",
        stat_offices: "Key Offices in Mexico and<br>USA",
        stat_exp: "Years of Legal Experience",
        stat_focus: "Cross-border Focus",
        stat_areas: "Areas of Expertise",
        services_title: "OUR SERVICES",
        srv_corp_title: "Corporate",
        srv_corp_desc: "We provide legal advice to national and international companies in Mexico and Latin America, with experience in sectors such as manufacturing, commerce, pharmaceuticals, hospitality, and telecommunications.",
        srv_corp_li1: "Company incorporation",
        srv_corp_li2: "Corporate governance",
        srv_corp_li3: "Shareholder agreements",
        srv_corp_li4: "Corporate registrations",
        srv_ma_title: "Mergers and Acquisitions",
        srv_ma_desc: "We advise companies and investors on mergers, spin-offs, and acquisitions in Mexico and Latin America, covering restructuring, auditing, negotiation, and closing of operations.",
        srv_ma_li1: "Merger and spin-off",
        srv_ma_li2: "Joint ventures",
        srv_ma_li3: "Asset purchase and sale",
        srv_contract_title: "Contracts",
        srv_contract_desc: "Creation of corporate contractual policies that guarantee transparent, fair operations aligned with corporate governance.",
        srv_contract_li1: "Contractual policies",
        srv_contract_li2: "Distribution and supply",
        srv_contract_li3: "Factoring and credit",
        srv_realestate_title: "Real Estate",
        srv_realestate_desc: "We advise on the acquisition, financing, and development of residential, commercial, and industrial real estate projects in Mexico and the US.",
        srv_realestate_li1: "Real estate purchase and sale",
        srv_realestate_li2: "Tourism projects",
        srv_realestate_li3: "Construction contracts",
        srv_ip_title: "Intellectual Property",
        srv_ip_desc: "We represent and advise on the protection and defense of intellectual property rights internationally through the Madrid Protocol.",
        srv_ip_li1: "Trademarks",
        srv_ip_li2: "Copyrights",
        srv_ip_li3: "Trade secrets",
        srv_trade_title: "Foreign Trade",
        srv_trade_desc: "Support in import, export operations, and customs regimes, as well as IMMEX programs.",
        srv_trade_li1: "Customs notices",
        srv_trade_li2: "Certificates of origin",
        srv_trade_li3: "Countervailing duties",
        srv_reg_title: "Regulatory",
        srv_reg_desc: "Advice on regulatory compliance for specific products (medicines, food, cosmetics, chemicals) before the corresponding authorities.",
        srv_reg_li1: "Mexican Standards (NOM)",
        srv_reg_li2: "COFEPRIS and FDA",
        srv_reg_li3: "Sanitary licenses",
        srv_gov_title: "Public Procurement",
        srv_gov_desc: "Comprehensive advice on government tenders and contracts in Mexico, from preparation to dispute resolution.",
        srv_gov_li1: "Direct tenders",
        srv_gov_li2: "Foreign companies",
        srv_gov_li3: "Disputes and Courts",
        srv_luxury_title: "Luxury Brands",
        srv_luxury_desc: "Creative and comprehensive solutions for international luxury brands in Mexico to maintain their image and market standards.",
        srv_luxury_li1: "Go to Market Strategy",
        srv_luxury_li2: "Store-in-store contracts",
        srv_luxury_li3: "Luxury franchises",
        srv_labor_title: "Labor and Immigration",
        srv_labor_desc: "Comprehensive management of executive hiring, compliance with cross-border labor regulations, and corporate visas.",
        srv_labor_li1: "Executive hiring",
        srv_labor_li2: "Corporate visas",
        srv_labor_li3: "Labor audits",
        offices_title: "Our International Presence",
        off_chihuahua: "Chihuahua",
        off_cdmx: "Mexico City",
        off_ny: "New York",
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
            } else if (translations[lang][key].includes('<br>')) {
                element.innerHTML = translations[lang][key];
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