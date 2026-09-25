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
        contact_title: "CONTÁCTANOS",
        contact_subtitle: "Envíanos un mensaje y te responderemos lo antes posible.",
        lbl_name: "Nombre Completo *",
        lbl_email: "Email *",
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
        hero_title: "Your trusted partner building success stories.",
        hero_subtitle: "International law firm specializing in cross-border operations.",
        about_tag: "INTERNATIONAL EXPERTISE",
        about_title: "About Us",
        about_highlight: "We connect your business with the world.",
        about_text: "Sedco Asesores is an international law firm headquartered in Mexico with offices in New York, Miami, Dallas, and Chihuahua. We provide specialized legal advisory to Latin American and Spanish companies expanding their operations into the United States, offering an end-to-end service with local and cross-border expertise.",
        stat_offices: "Key Offices in Mexico & US",
        stat_exp: "Years of Legal Experience",
        stat_focus: "Cross-Border Focus",
        stat_areas: "Specialized Practice Areas",
        services_title: "OUR SERVICES",
        srv_corp_title: "Corporate",
        srv_corp_desc: "We provide legal advisory to national and international companies in Mexico and Latin America, with experience in sectors such as manufacturing, commerce, pharmaceuticals, hospitality, and telecommunications.",
        srv_corp_li1: "Company incorporation",
        srv_corp_li2: "Corporate governance",
        srv_corp_li3: "Shareholder agreements",
        srv_corp_li4: "Corporate filings",
        srv_ma_title: "Mergers & Acquisitions",
        srv_ma_desc: "We advise companies and investors on mergers, spin-offs, and acquisitions in Mexico and Latin America, covering restructuring, auditing, negotiation, and closing.",
        srv_ma_li1: "Mergers & spin-offs",
        srv_ma_li2: "Joint ventures",
        srv_ma_li3: "Asset transactions",
        srv_contract_title: "Contracts",
        srv_contract_desc: "Creation of corporate contract policies that guarantee transparent, fair operations aligned with corporate governance.",
        srv_contract_li1: "Contractual policies",
        srv_contract_li2: "Distribution & supply",
        srv_contract_li3: "Factoring & credit",
        srv_realestate_title: "Real Estate",
        srv_realestate_desc: "We advise on the acquisition, financing, and development of residential, commercial, and industrial real estate projects in Mexico and the US.",
        srv_realestate_li1: "Property purchases",
        srv_realestate_li2: "Resort projects",
        srv_realestate_li3: "Construction contracts",
        srv_ip_title: "Intellectual Property",
        srv_ip_desc: "We represent and advise on the protection and defense of intellectual property rights internationally through the Madrid Protocol.",
        srv_ip_li1: "Trademarks & patents",
        srv_ip_li2: "Copyrights",
        srv_ip_li3: "Trade secrets",
        srv_trade_title: "Foreign Trade",
        srv_trade_desc: "Support in import, export, and customs operations, as well as preferential programs IMMEX, ALTEX, and ECEX.",
        srv_trade_li1: "Customs compliance",
        srv_trade_li2: "Certificates of origin",
        srv_trade_li3: "Countervailing duties",
        srv_reg_title: "Regulatory",
        srv_reg_desc: "Regulatory compliance advice for specific products (pharmaceuticals, food, cosmetics, chemicals) before relevant authorities.",
        srv_reg_li1: "Mexican Standards (NOM)",
        srv_reg_li2: "COFEPRIS & FDA",
        srv_reg_li3: "Sanitary licenses",
        srv_gov_title: "Public Procurement",
        srv_gov_desc: "Comprehensive advice on government bidding and contracts in Mexico, from preparation to dispute resolution.",
        srv_gov_li1: "Direct tenders",
        srv_gov_li2: "Foreign companies",
        srv_gov_li3: "Disputes & Courts",
        srv_luxury_title: "Luxury Brands",
        srv_luxury_desc: "Creative and comprehensive solutions for international luxury brands in Mexico to maintain their image and market standards.",
        srv_luxury_li1: "Go to Market strategy",
        srv_luxury_li2: "Store-in-store contracts",
        srv_luxury_li3: "Luxury franchises",
        srv_labor_title: "Labor & Immigration",
        srv_labor_desc: "Comprehensive management of executive hiring, cross-border labor compliance, and corporate visas.",
        srv_labor_li1: "Executive hiring",
        srv_labor_li2: "Corporate visas",
        srv_labor_li3: "Labor audits",
        offices_title: "Our International Presence",
        off_mexico: "Mexico",
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

// Función para cambiar el idioma de la página
function changeLanguage(lang) {
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem('selectedLang', lang);
}

// Inicializar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initServiceDots();
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    changeLanguage(savedLang);
});