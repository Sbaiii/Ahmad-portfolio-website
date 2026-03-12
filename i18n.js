const translations = {
    en: {
        nav_about: "About",
        nav_academic: "Academic Journey",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_name: "Ahmad Sbai",
        hero_role: "Data Science • Mechatronics Engineer",
        hero_desc: "Expert in modular Python architectures, real-time signal processing, and automated business tools. Passionate about building data-driven applications that solve complex problems.",
        profile_alt: "Ahmad Sbai - Profile",
        btn_resume: "Download Resume",
        btn_contact_info: "Contact Info",
        btn_work: "View My Work",
        btn_contact: "Get in Touch",
        about_title: "About",
        tab_archive: "Archive",
        about_p1: "From the hardware-level precision of Mechatronics to the predictive power of Data Science. I build systems that don't just process data—they understand it.",
        about_p2: "My journey is defined by a relentless curiosity and a drive to turn complex problems into elegant, automated solutions that ship.",
        stat_langs: "Languages",
        stat_projects: "Projects",
        bento_focus_title: "Nexus",
        bento_focus_text: "Deep Learning & NLP Engines",
        bento_coffee_label: "Coffee to Code Ratio",
        bento_edu_title: "Schematic",
        bento_edu_hs_title: "Data Science Path",
        bento_edu_hs_uni: "Harbour.Space • Barcelona, Spain",
        bento_edu_apu_title: "Engineering Path",
        bento_edu_apu_uni: "APU • Malaysia",
        bento_edu_dmu_uni: "De Montfort University • UK",
        bento_edu_degree: "BSc Data Science & BEng Mechatronics",
        bento_edu_dual: "Dual Degree Honors",
        exp4_title: "Python Automation Developer (Contract)",
        exp4_company: "ESTRACOM — Morocco",
        exp4_date: "2024 – 2025",
        exp4_desc: "Engineered a custom Digital Archiving System in Python, digitizing the company's entire paper-based legacy archive and reducing retrieval time by 80%.",
        exp1_title: "Freelance Software Developer",
        exp1_company: "Remote",
        exp1_date: "2023 – Present",
        exp1_desc: "Architected bespoke desktop applications for small businesses to automate inventory tracking and sales logging.",
        exp2_title: "Electronics & Programming Instructor (Intern)",
        exp2_company: "Kidocode — Malaysia",
        exp2_date: "2023",
        exp2_desc: "Taught fundamental C/C++ and Python programming concepts by developing hands-on, interactive robotics projects.",
        skills_title: "Technical Proficiency",
        proj_pitch_title: "Vocal Pitch Analyzer",
        proj_hr_title: "HR Analytics Pipeline",
        proj_nlp_title: "NLP Text-Analyzer",
        proj_cl_title: "UCL Simulator v2",
        skill_cat_data: "Data & Analytics",
        skill_cat_eng: "Engineering & Architecture",
        skill_cat_soft: "Software Development",
        proj_pitch_short: "Modular real-time DSP engine for frequency tracking.",
        proj_hr_short: "Modular data pipeline with predictive salary modeling.",
        proj_nlp_short: "Local Sentiment Analysis & metrics for massive text datasets.",
        proj_cl_short: "AI-driven tournament simulation with betting mechanics.",
        cs_problem: "The Problem",
        cs_solution: "The Solution",
        cs_highlight: "Engineering Highlights",
        cs_tech: "Technical Stack",
        btn_view_github: "View Repository",
        btn_view_case: "View Case Study",
        contact_title: "Let's Connect",
        contact_desc: "I'm currently looking for new opportunities to apply my data science and engineering skills. My inbox is always open.",
        btn_hello: "Say Hello",
        footer_rights: "All rights reserved.",
        projects_data: {
            pitch: {
                title: "Vocal Pitch Analyzer",
                problem: "Achieving millisecond-precision pitch tracking in real-world environments often results in high CPU overhead and signal latency, making real-time analysis difficult without specialized hardware.",
                solution: "Engineered a modular, multi-threaded DSP engine using Python. Implemented autocorrelation-based frequency tracking and real-time buffer management, delivering peak performance and low-latency visualization.",
                highlight: "Built a custom Autocorrelation Engine replacing standard FFT to eliminate harmonic octave jumps. Decoupled audio I/O using threading, applied Hanning windows to prevent spectral leakage, and engineered a moving-average filter to smooth micro-jitters."
            },
            hr: {
                title: "HR Analytics Pipeline",
                problem: "Manual HR tracking suffers from data fragmentation and a lack of predictive transparency, preventing organizations from identifying salary inequities and attrition risks.",
                solution: "Developed a centralized modular data pipeline with a high-performance GUI. Integrated persistent storage and predictive salary modeling to deliver actionable business intelligence and trend forecasting.",
                highlight: "Designed a completely decoupled architecture separating the GUI (CustomTkinter) from the Data/Math Engine. Handled persistent I/O operations and engineered Pandas-style group aggregations to simulate company-wide percentage salary raises."
            },
            nlp: {
                title: "NLP Text-Analyzer",
                problem: "Analyzing massive text datasets usually requires cloud-based NLP services, which introduce high costs, latency, and significant data privacy concerns for sensitive documentation.",
                solution: "Built a professional offline NLP dashboard that supports bulk PDF/Word uploads. Implemented local Machine Learning models for sentiment analysis and advanced frequency metrics, ensuring 100% data privacy.",
                highlight: "Leveraged the TextBlob ML model for zero-API emotional polarity detection. Integrated PyPDF and Python-docx for robust document parsing, and engineered advanced noise-filtering algorithms to surface true word frequencies and sentence patterns."
            },
            cl: {
                title: "UCL Simulator v2",
                problem: "Creating a realistic sports simulation requires balancing complex state management, data persistence, and intelligent AI decision-making within a unified user experience.",
                solution: "Architected an OOP-driven tournament simulator with SQLite persistence. Integrated the DeepSeek AI API to power intelligent betting mechanics and realistic match simulations, all within a high-energy GUI.",
                highlight: "Implemented threaded match simulations to prevent GUI freezing. Secured DeepSeek AI integration for dynamic data loading, established SQLite row persistence for Premium User inheritance logic, and included strict RegEx authentication."
            }
        }
    },
    fr: {
        nav_about: "À propos",
        nav_academic: "Parcours Académique",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_greeting: "Bonjour, je suis",
        hero_name: "Ahmad Sbai",
        hero_role: "Data Science • Ingénieur Mécatronique",
        hero_desc: "Expert en architectures Python modulaires, traitement du signal en temps réel et outils d'automatisation. Passionné par la création d'applications axées sur les données.",
        profile_alt: "Ahmad Sbai - Profil",
        btn_resume: "Télécharger le CV",
        btn_contact_info: "Infos de Contact",
        btn_work: "Voir Mon Travail",
        btn_contact: "Me Contacter",
        about_title: "À propos",
        tab_archive: "Archive",
        about_p1: "De la précision matérielle de la mécatronique à la puissance prédictive de la Data Science. Je construis des systèmes qui ne se contentent pas de traiter des données—ils les comprennent.",
        about_p2: "Mon parcours est défini par une curiosité sans fin et la volonté de transformer des problèmes complexes en solutions automatisées.",
        stat_langs: "Langages",
        stat_projects: "Projets",
        bento_focus_title: "Nexus",
        bento_focus_text: "Deep Learning & Moteurs NLP",
        bento_coffee_label: "Ratio Café/Code",
        bento_edu_title: "Schematic",
        bento_edu_hs_title: "Voie Data Science",
        bento_edu_hs_uni: "Harbour.Space • Barcelone, Espagne",
        bento_edu_apu_title: "Voie Ingénierie",
        bento_edu_apu_uni: "APU • Malaisie",
        bento_edu_dmu_uni: "De Montfort University • UK",
        bento_edu_degree: "BSc Data Science & BEng Mécatronique",
        bento_edu_dual: "Double Diplôme Honors",
        nav_experience: "Expérience",
        experience_title: "Expérience",
        exp4_title: "Développeur d'Automatisation Python (Contrat)",
        exp4_company: "ESTRACOM — Maroc",
        exp4_date: "2024 – 2025",
        exp4_desc: "Conception d'un système d'archivage numérique personnalisé en Python, permettant la numérisation de l'intégralité des archives papier de l'entreprise.",
        exp1_title: "Développeur Logiciel Freelance",
        exp1_company: "À distance",
        exp1_date: "2023 – Présent",
        exp1_desc: "Architecture d'applications de bureau sur mesure pour petites entreprises afin d'automatiser le suivi des stocks et l'enregistrement des ventes.",
        exp2_title: "Instructeur en Électronique et Programmation (Stagiaire)",
        exp2_company: "Kidocode — Malaisie",
        exp2_date: "2023",
        exp2_desc: "Enseignement des concepts fondamentaux de programmation C/C++ et Python via le développement de projets de robotique interactifs.",
        skills_title: "Performance Technique",
        proj_pitch_title: "Analyseur de Pitch Vocal",
        proj_hr_title: "Pipeline d'Analyse RH",
        proj_nlp_title: "Analyseur de Texte NLP",
        proj_cl_title: "Simulateur UCL v2",
        skill_cat_data: "Data & Analyse",
        skill_cat_eng: "Ingénierie & Architecture",
        skill_cat_soft: "Développement Logiciel",
        proj_pitch_short: "Moteur DSP temps réel modulaire pour le suivi de fréquence.",
        proj_hr_short: "Pipeline de données modulaire avec modélisation prédictive.",
        proj_nlp_short: "Analyse de sentiment locale et métriques pour textes massifs.",
        proj_cl_short: "Simulation de tournoi IA avec mécanique de pari.",
        cs_problem: "Le Problème",
        cs_solution: "La Solution",
        cs_highlight: "Points Forts de l'Ingénierie",
        cs_tech: "Stack Technique",
        btn_view_github: "Voir le Dépôt",
        btn_view_case: "Voir le Cas d'Étude",
        contact_title: "Restons en Contact",
        contact_desc: "Je recherche actuellement de nouvelles opportunités pour appliquer mes compétences en Data Science et en ingénierie.",
        btn_hello: "Dire Bonjour",
        footer_rights: "Tous droits réservés.",
        projects_data: {
            pitch: {
                title: "Analyseur de Pitch Vocal",
                problem: "Atteindre un suivi du pitch avec une précision à la milliseconde dans des environnements réels entraînant souvent une charge CPU élevée et une latence du signal.",
                solution: "Conception d'un moteur DSP multi-threadé modulaire en Python. Implémentation du suivi de fréquence basé sur l'autocorrélation et gestion en temps réel des buffers.",
                highlight: "Construction d'un Moteur d'Autocorrélation personnalisé remplaçant la FFT standard pour éliminer les sauts d'octave harmoniques. Découplage des E/S audio via threading, application de fenêtres de Hanning pour éviter les fuites spectrales, et ingénierie d'un filtre à moyenne mobile pour lisser les micro-variations."
            },
            hr: {
                title: "Pipeline d'Analyse RH",
                problem: "Le suivi RH manuel souffre d'une fragmentation des données et d'un manque de transparence prédictive, empêchant d'identifier les iniquités salariales.",
                solution: "Développement d'un pipeline de données modulaire centralisé avec une interface haute performance. Intégration du stockage persistant et de la modélisation prédictive.",
                highlight: "Conception d'une architecture entièrement découplée séparant l'interface (CustomTkinter) du Moteur de Données/Mathématique. Gestion des opérations d'E/S persistantes et ingénierie d'agrégations de type Pandas pour simuler les augmentations salariales de l'entreprise."
            },
            nlp: {
                title: "Analyseur de Texte NLP",
                problem: "L'analyse massive de données textuelles nécessite généralement des services NLP cloud, qui introduisent des coûts élevés et des problèmes de confidentialité.",
                solution: "Création d'un tableau de bord NLP hors ligne supportant l'importation de PDF/Word. Implémentation de modèles locaux de Machine Learning pour l'analyse de sentiment.",
                highlight: "Utilisation du modèle ML TextBlob pour la détection de polarité émotionnelle sans API. Intégration de PyPDF et Python-docx pour l'analyse robuste de documents, et ingénierie d'algorithmes de filtrage de bruit avancés pour révéler les véritables fréquences de mots et motifs de phrases."
            },
            cl: {
                title: "Simulateur UCL v2",
                problem: "Créer une simulation sportive réaliste nécessite d'équilibrer une gestion d'état complexe, la persistance des données et une prise de décision IA intelligente.",
                solution: "Architecture d'un simulateur de tournoi orienté objet avec persistance SQLite. Intégration de l'API IA DeepSeek pour alimenter des mécaniques de paris intelligentes.",
                highlight: "Implémentation de simulations de matchs threadées pour éviter le blocage de l'interface. Sécurisation de l'intégration IA DeepSeek, établissement de la persistance des lignes SQLite pour la logique d'héritage des utilisateurs premium, et inclusion d'une authentification stricte par RegEx."
            }
        }
    },
    es: {
        nav_about: "Sobre Mí",
        nav_academic: "Trayectoria Académica",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_greeting: "Hola, soy",
        hero_name: "Ahmad Sbai",
        hero_role: "Data Science • Ingeniero Mecatrónico",
        hero_desc: "Experto en arquitecturas Python modulares, procesamiento de señales en tiempo real y herramientas de automatización empresarial.",
        profile_alt: "Ahmad Sbai - Perfil",
        btn_resume: "Descargar Currículum",
        btn_contact_info: "Información de Contacto",
        btn_work: "Ver Mi Trabajo",
        btn_contact: "Ponerse en Contacto",
        about_title: "Sobre Mí",
        tab_archive: "Archivo",
        about_p1: "Desde la precisión de la mecatrónica hasta el poder predictivo de Data Science. Construyo sistemas que no solo procesan datos, sino que los entienden.",
        about_p2: "Mi trayectoria se define por una curiosidad incansable y el impulso de transformar problemas complejos en soluciones elegantes.",
        stat_langs: "Lenguajes",
        stat_projects: "Proyectos",
        bento_focus_title: "Nexus",
        bento_focus_text: "Deep Learning y Motores de NLP",
        bento_coffee_label: "Ratio Café a Código",
        bento_edu_title: "Schematic",
        bento_edu_hs_title: "Ruta de Data Science",
        bento_edu_hs_uni: "Harbour.Space • Barcelona, España",
        bento_edu_apu_title: "Ruta de Ingeniería",
        bento_edu_apu_uni: "APU • Malasia",
        bento_edu_dmu_uni: "De Montfort University • UK",
        bento_edu_degree: "BSc Data Science & BEng Mecatrónica",
        bento_edu_dual: "Doble Titulación Honors",
        nav_experience: "Experiencia",
        experience_title: "Experiencia",
        exp4_title: "Desarrollador de Automatización Python (Contrato)",
        exp4_company: "ESTRACOM — Marruecos",
        exp4_date: "2024 – 2025",
        exp4_desc: "Diseñó un sistema de archivado digital personalizado en Python, digitalizando todo el archivo físico de la empresa.",
        exp1_title: "Desarrollador de Software Freelance",
        exp1_company: "Remoto",
        exp1_date: "2023 – Presente",
        exp1_desc: "Arquitectura de aplicaciones de escritorio a medida para pequeñas empresas para automatizar el seguimiento de inventario y ventas.",
        exp2_title: "Instructor de Electrónica y Programación (Pasante)",
        exp2_company: "Kidocode — Malasia",
        exp2_date: "2023",
        exp2_desc: "Enseñanza de conceptos fundamentales de programación en C/C++ y Python mediante el desarrollo de proyectos de robótica interactivos.",
        skills_title: "Eficiencia Técnica",
        proj_pitch_title: "Analizador de Pitch Vocal",
        proj_hr_title: "Pipeline de Análisis de RRHH",
        proj_nlp_title: "Analizador de Texto NLP",
        proj_cl_title: "Simulador UCL v2",
        skill_cat_data: "Datos y Analítica",
        skill_cat_eng: "Ingeniería y Arquitectura",
        skill_cat_soft: "Desarrollo de Software",
        proj_pitch_short: "Motor DSP modular en tiempo real para seguimiento de frecuencia.",
        proj_hr_short: "Pipeline de datos modular con modelado predictivo.",
        proj_nlp_short: "Análisis de sentimiento local y métricas para textos masivos.",
        proj_cl_short: "Simulación de torneo IA con mecánica de apuestas.",
        cs_problem: "El Problema",
        cs_solution: "La Solución",
        cs_tech: "Stack Técnico",
        btn_view_github: "Ver Repositorio",
        btn_view_case: "Ver Caso de Estudio",
        contact_title: "Conectemos",
        contact_desc: "Actualmente busco nuevas oportunidades para aplicar mis habilidades en Data Science e ingeniería.",
        btn_hello: "Saludar",
        footer_rights: "Todos los derechos reservados.",
        projects_data: {
            pitch: {
                title: "Analizador de Pitch Vocal",
                problem: "Lograr un seguimiento del pitch con precisión de milisegundos en entornos reales a menudo resulta en una alta carga de CPU y latencia de señal.",
                solution: "Diseñó un motor DSP multi-hilo modular en Python. Implementó seguimiento de frecuencia basado en autocorrelación y gestión de buffers en tiempo real.",
                highlight: "Construyó un Motor de Autocorrelación personalizado reemplazando la FFT estándar para eliminar saltos de octava armónicos. Desacopló las E/S de audio usando hilos, aplicó ventanas de Hanning para prevenir fugas espectrales, e ingenió un filtro de media móvil para suavizar micro-variaciones."
            },
            hr: {
                title: "Pipeline de Análisis de RRHH",
                problem: "El seguimiento manual de RRHH sufre de fragmentación de datos y falta de transparencia predictiva, lo que impide identificar desigualdades salariales.",
                solution: "Desarrolló un pipeline de datos modular centralizado con una interfaz de alto rendimiento. Integró almacenamiento persistente y modelado predictivo.",
                highlight: "Diseñó una arquitectura completamente desacoplada separando la interfaz (CustomTkinter) del Motor de Datos/Matemáticas. Gestionó operaciones de E/S persistentes e ingenió agregaciones tipo Pandas para simular aumentos salariales en la empresa."
            },
            nlp: {
                title: "Analizador de Texto NLP",
                problem: "El análisis de conjuntos masivos de datos de texto suele requerir servicios de NLP en la nube, lo que introduce altos costes y problemas de privacidad.",
                solution: "Construyó un panel de NLP profesional fuera de línea que admite cargas masivas de PDF/Word. Implementó modelos locales de Machine Learning.",
                highlight: "Aprovechó el modelo de ML TextBlob para la detección de polaridad emocional sin API. Integró PyPDF y Python-docx para el análisis robusto de documentos, e ingenió algoritmos avanzados de filtrado de ruido para revelar verdaderas frecuencias de palabras y patrones de oraciones."
            },
            cl: {
                title: "Simulador UCL v2",
                problem: "Crear una simulación deportiva realista requiere equilibrar una gestión de estado compleja, persistencia de datos y toma de decisiones inteligente por IA.",
                solution: "Arquitectó un simulador de torneos orientado a objetos con persistencia SQLite. Integró la API de IA DeepSeek para mecánicas de apuestas inteligentes.",
                highlight: "Implementó simulaciones de partidos en hilos para evitar el bloqueo de la interfaz. Aseguró la integración de IA DeepSeek, estableció la persistencia de filas SQLite para la lógica de herencia de usuarios premium, e incluyó autenticación estricta por RegEx."
            }
        }
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update attributes
    const attrElements = document.querySelectorAll('[data-i18n-alt]');
    attrElements.forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (translations[lang][key]) {
            el.setAttribute('alt', translations[lang][key]);
        }
    });

    // Special handling for dynamic content if overlay is open
    document.dispatchEvent(new CustomEvent('langChanged', { detail: lang }));

    // Update language select button text
    const langBtn = document.getElementById('current-lang');
    if (langBtn) {
        langBtn.innerText = lang.toUpperCase();
    }

    // Save preference
    localStorage.setItem('portfolio_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Check saved language
    const savedLang = localStorage.getItem('portfolio_lang');
    if (savedLang) {
        setLanguage(savedLang);
    }

    const langSelector = document.querySelector('.lang-selector');
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-dropdown button');

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
    }

    // Language Selection
    langOptions.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            setLanguage(selectedLang);
            langDropdown.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (langSelector && !langSelector.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });
});
