// Global Error Logger for Debugging
window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.error(`GLOBAL ERROR: ${msg} at ${lineNo}:${columnNo}`);
    return false;
};

document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       CUSTOM CURSOR
       ========================================= */
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    // Check if device supports hover
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (!isTouchDevice && cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Instantly move dot
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Smoothly animate outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' });
        });

        // Hover effects for anchors and buttons
        const interactables = document.querySelectorAll('a, button, input, .lang-selector');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    /* =========================================
       THEME TOGGLE & SYSTEM PREFERENCE
       ========================================= */
    const themeToggle = document.getElementById('theme-toggle');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme, save = true) {
        document.documentElement.setAttribute('data-theme', theme);
        if (save) {
            localStorage.setItem('portfolio_theme', theme);
        } else {
            localStorage.removeItem('portfolio_theme');
        }
    }

    // Initialization
    const storedTheme = localStorage.getItem('portfolio_theme');
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        // Follow system preference
        setTheme(mediaQuery.matches ? 'dark' : 'light', false);
    }

    // Manual Toggle
    themeToggle.addEventListener('click', (e) => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Check for View Transition API support
        if (!document.startViewTransition) {
            setTheme(newTheme);
            return;
        }

        // Get the click position, or use center of button as fallback
        const x = e.clientX ?? (themeToggle.getBoundingClientRect().left + themeToggle.offsetWidth / 2);
        const y = e.clientY ?? (themeToggle.getBoundingClientRect().top + themeToggle.offsetHeight / 2);

        // Set custom variables for the transition origin
        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);
        document.documentElement.setAttribute('data-transition', 'theme');

        const transition = document.startViewTransition(() => {
            setTheme(newTheme);
        });

        // Clean up after transition
        transition.finished.finally(() => {
            document.documentElement.removeAttribute('data-transition');
        });

        // Brief pulse effect on cursor
        if (!isTouchDevice && cursorOutline) {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(2)';
            setTimeout(() => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 150);
        }
    });

    // Listen for System Theme Changes
    mediaQuery.addEventListener('change', (e) => {
        // When system theme changes, we automatically follow it 
        // and clear any manual override to stay in sync with the device
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setTheme(newSystemTheme, false);
    });

    /* =========================================
       SCROLL EFFECTS AND MOBILE MENU
       ========================================= */
    const header = document.querySelector('.header');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });

    /* =========================================
       SIGNATURE DASHBOARD (Ahmad Sbai)
       ========================================= */
    const dashboard = document.querySelector('.apple-dashboard');
    const navItems = document.querySelectorAll('.nav-item');
    const panes = document.querySelectorAll('.tab-pane');

    if (dashboard) {
        // 1. Mouse Tracking Glow
        dashboard.addEventListener('mousemove', (e) => {
            const rect = dashboard.getBoundingClientRect();
            dashboard.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            dashboard.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });

        // 2. Window Tilt
        dashboard.addEventListener('mousemove', (e) => {
            const rect = dashboard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 60;
            const rotateY = (centerX - x) / 60;
            dashboard.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.005)`;
        });

        dashboard.addEventListener('mouseleave', () => {
            dashboard.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });

        // 3. Decryption Effect Logic
        function decryptText(el) {
            const originalText = el.getAttribute('data-text');
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
            let iteration = 0;

            const interval = setInterval(() => {
                el.innerText = originalText.split('').map((letter, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');

                if (iteration >= originalText.length) clearInterval(interval);
                iteration += originalText.length / 30; // Speed adjustment
            }, 30);
        }

        // Canvas particle engine removed. Replaced by pure CSS Neural Core in style.css for Apple aesthetic.

        // Initial Decrypt for Bio
        const bioText = document.querySelector('.decrypt-text');
        if (bioText) decryptText(bioText);

        // 5. Tab Switching Logic
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('data-tab');
                navItems.forEach(ni => ni.classList.remove('active'));
                item.classList.add('active');

                panes.forEach(pane => {
                    pane.classList.remove('active');
                    if (pane.id === `pane-${target}`) {
                        pane.classList.add('active');
                        // Trigger specific tab logic
                        if (target === 'archive') {
                            const txt = pane.querySelector('.decrypt-text');
                            if (txt) decryptText(txt);
                        }
                    }
                });
            });
        });

        // 6. Dashboard Entrance
        if (typeof gsap !== 'undefined') {
            gsap.from(".apple-dashboard", {
                scrollTrigger: { trigger: ".apple-dashboard", start: "top 80%" },
                duration: 1.5, y: 80, opacity: 0, ease: "expo.out"
            });
        }
    }
});

/* =========================================
   DIGITAL ID CARD INTERACTIONS
   ========================================= */
const idCard = document.getElementById('id-card');

if (idCard) {
    // 1. 3D Tilt Effect
    idCard.addEventListener('mousemove', (e) => {
        const rect = idCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Adjust tilt sensitivity
        const rotateX = (centerY - y) / 10;
        const rotateY = (x - centerX) / 10;

        idCard.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // 2. Reset tilt on mouse leave
    idCard.addEventListener('mouseleave', () => {
        idCard.style.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg)';
    });

    // 3. Flip on click
    idCard.addEventListener('click', () => {
        idCard.classList.toggle('flipped');
    });
}

/* =========================================
   THE SYNAPSE JOURNEY ANIMATIONS
   ========================================= */
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector('.synapse-container');
    const activePath = document.querySelector('.path-active');
    const pathBg = document.querySelector('.path-bg');

    if (container && activePath) {
        const updatePathLength = () => {
            const h = container.offsetHeight;
            activePath.setAttribute('d', `M2.5,0 L2.5,${h}`);
            pathBg.setAttribute('d', `M2.5,0 L2.5,${h}`);
            const length = h;
            activePath.style.strokeDasharray = length;
            activePath.style.strokeDashoffset = length;
            return length;
        };

        updatePathLength();
        window.addEventListener('resize', updatePathLength);

        gsap.to(activePath, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });
    }

    // Animate Cards and Dots
    gsap.utils.toArray('.journey-step').forEach((step, i) => {
        const isLeft = step.classList.contains('left');
        const card = step.querySelector('.journey-card');
        const dot = step.querySelector('.journey-dot');

        gsap.from(card, {
            x: isLeft ? -50 : 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        gsap.to(dot, {
            scale: 1.5,
            backgroundColor: "#fff",
            scrollTrigger: {
                trigger: step,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse"
            }
        });
    });
}

/* =========================================
   PROJECT CASE STUDY ENGINE
   ========================================= */
const projectStaticData = {
    pitch: {
        image: "./assets/pitch_abstract.png",
        stack: ["Python", "DSP", "Threading", "Matplotlib", "NumPy"],
        github: "https://github.com/unknownahmad/pitch_analyzer"
    },
    hr: {
        image: "./assets/hr_abstract.png",
        stack: ["Python", "CustomTkinter", "SQLite", "Predictive Modeling", "Pandas"],
        github: "https://github.com/unknownahmad/HR-Analytics-Dashboard"
    },
    nlp: {
        image: "./assets/nlp_abstract.png",
        stack: ["Python", "NLP", "Machine Learning", "Sentiment Analysis", "NLTK"],
        github: "https://github.com/unknownahmad/text-analyzer-tool"
    },
    cl: {
        image: "./assets/ucl_abstract.png",
        stack: ["Python", "SQLite", "DeepSeek AI", "OOP", "Tkinter"],
        github: "https://github.com/unknownahmad/Champions-League-Gambling-Simulator-GUI-Edition-"
    }
};

let activeProjectId = null;

function initCaseStudyEngine() {
    console.log("Initializing Case Study Engine...");
    const overlay = document.getElementById("case-study-overlay");
    const container = overlay.querySelector(".case-study-container");
    const backdrop = overlay.querySelector(".overlay-backdrop");
    const closeBtn = overlay.querySelector(".close-overlay");
    const btns = document.querySelectorAll(".case-study-btn");

    console.log(`Found ${btns.length} case study buttons.`);

    const populateContent = (projId) => {
        try {
            console.log(`Populating content for: ${projId} (Lang: ${currentLang})`);
            const staticData = projectStaticData[projId];
            const localizedData = translations[currentLang]?.projects_data?.[projId];

            if (!staticData || !localizedData) {
                throw new Error(`Missing data for ${projId} in ${currentLang}`);
            }
            activeProjectId = projId;

            document.getElementById("cs-title").textContent = localizedData.title;
            document.getElementById("cs-image").src = staticData.image;
            document.getElementById("cs-problem").textContent = localizedData.problem;
            document.getElementById("cs-solution").textContent = localizedData.solution;
            document.getElementById("cs-highlight").textContent = localizedData.highlight;
            document.getElementById("cs-github").href = staticData.github;
            document.getElementById("cs-github").textContent = translations[currentLang].btn_view_github;

            // Static labels from i18n
            document.getElementById("label-problem").textContent = translations[currentLang].cs_problem;
            document.getElementById("label-solution").textContent = translations[currentLang].cs_solution;
            document.getElementById("label-highlight").textContent = translations[currentLang].cs_highlight;
            document.getElementById("label-tech").textContent = translations[currentLang].cs_tech;

            const stackBox = document.getElementById("cs-stack");
            stackBox.innerHTML = "";
            staticData.stack.forEach(tech => {
                const div = document.createElement("div");
                div.className = "cs-tech-pill";
                div.textContent = tech;
                stackBox.appendChild(div);
            });
            console.log("Content populated successfully.");
        } catch (e) {
            console.error("POPULATION ERROR:", e.message);
        }
    };

    const openOverlay = (id) => {
        try {
            console.log(`Opening overlay for: ${id}`);
            populateContent(id);

            overlay.classList.add("active");

            // Extreme visibility fallback for debug
            overlay.style.visibility = "visible";
            overlay.style.opacity = "1";
            overlay.style.display = "flex";

            gsap.fromTo(container,
                { scale: 0.9, y: 30, opacity: 0 },
                {
                    scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "power4.out",
                    onComplete: () => {
                        console.log("GSAP ANIMATION COMPLETE.");
                    }
                }
            );
            document.body.style.overflow = "hidden";
        } catch (e) {
            console.error("OPEN ERROR:", e.message);
        }
    };

    const closeOverlay = () => {
        gsap.to(container, { scale: 0.95, y: 20, opacity: 0, duration: 0.4, ease: "power2.in" });
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                overlay.classList.remove("active");
                overlay.style.display = "none";
                overlay.style.visibility = "hidden";
                document.body.style.overflow = "";
                activeProjectId = null;
            }
        });
    };

    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const id = btn.dataset.project;
            console.log(`Button clicked for project: ${id}`);
            if (id) openOverlay(id);
        });
    });

    closeBtn.addEventListener("click", closeOverlay);
    backdrop.addEventListener("click", closeOverlay);

    // Language Change Listener
    document.addEventListener('langChanged', () => {
        console.log(`Language changed to: ${currentLang}`);
        if (activeProjectId) populateContent(activeProjectId);

        // Update all View Case Study buttons on the grid
        document.querySelectorAll('.case-study-btn').forEach(btn => {
            btn.textContent = translations[currentLang].btn_view_case;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("case-study-overlay")) {
        initCaseStudyEngine();
    }
});
