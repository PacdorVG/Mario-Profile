/* ===========================
   JAVASCRIPT AVANZADO - BONUS
   =========================== */

/**
 * CARACTERÍSTICAS OPCIONALES AVANZADAS
 * Copia-pega lo que necesites en script.js
 */

/* ===========================
   1. TEMA OSCURO/CLARO
   =========================== */

const DarkModeToggle = {
    init() {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.classList.add('theme-toggle');
        toggle.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        `;

        toggle.addEventListener('mouseenter', () => {
            toggle.style.transform = 'scale(1.1)';
        });

        toggle.addEventListener('mouseleave', () => {
            toggle.style.transform = 'scale(1)';
        });

        toggle.addEventListener('click', () => {
            this.toggleDarkMode();
            toggle.innerHTML = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
        });

        document.body.appendChild(toggle);
    },

    toggleDarkMode() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    },

    loadSavedTheme() {
        const saved = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', saved);
    }
};

// Inicializar: DarkModeToggle.init();


/* ===========================
   2. CONTADOR DE VISITAS
   =========================== */

const VisitCounter = {
    init() {
        let visits = localStorage.getItem('portfolio-visits') || 0;
        visits = parseInt(visits) + 1;
        localStorage.setItem('portfolio-visits', visits);

        console.log(`✨ Visitas totales: ${visits}`);

        // Mostrar en consola bonito
        console.log(`%c🎉 ¡Bienvenido!`, 'font-size: 20px; color: #667eea; font-weight: bold;');
        console.log(`%cTuvisita #${visits}`, 'font-size: 16px; color: #764ba2; font-weight: bold;');
    }
};

// Inicializar: VisitCounter.init();


/* ===========================
   3. RASTREADOR DE TIEMPO EN PÁGINA
   =========================== */

const TimeTracker = {
    startTime: Date.now(),

    init() {
        window.addEventListener('beforeunload', () => {
            const timeSpent = Math.round((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(timeSpent / 60);
            const seconds = timeSpent % 60;
            
            console.log(`⏱️ Tiempo en página: ${minutes}m ${seconds}s`);
            
            // Guardar en localStorage
            let totalTime = localStorage.getItem('portfolio-time') || 0;
            totalTime = parseInt(totalTime) + timeSpent;
            localStorage.setItem('portfolio-time', totalTime);
        });
    }
};

// Inicializar: TimeTracker.init();


/* ===========================
   4. RASTREADOR DE SCROLL
   =========================== */

const ScrollTracker = {
    init() {
        let maxScroll = 0;
        
        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercentage > maxScroll) {
                maxScroll = scrollPercentage;
            }

            // Mostrar barra de progreso (opcional)
            if (!document.querySelector('.scroll-progress')) {
                const progressBar = document.createElement('div');
                progressBar.className = 'scroll-progress';
                progressBar.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    width: ${maxScroll}%;
                    z-index: 999;
                    transition: width 0.1s ease;
                `;
                document.body.appendChild(progressBar);
            }

            document.querySelector('.scroll-progress').style.width = maxScroll + '%';
        });
    }
};

// Inicializar: ScrollTracker.init();


/* ===========================
   5. BÚSQUEDA EN LA PÁGINA
   =========================== */

const PageSearch = {
    init() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '🔍 Buscar en página...';
        searchInput.id = 'page-search';
        searchInput.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 10px 15px;
            border-radius: 25px;
            border: 2px solid #667eea;
            background: white;
            color: #1e293b;
            width: 250px;
            z-index: 999;
            font-family: 'Roboto', sans-serif;
        `;

        searchInput.addEventListener('input', (e) => {
            this.search(e.target.value);
        });

        document.body.appendChild(searchInput);
    },

    search(query) {
        const elements = document.querySelectorAll('h1, h2, h3, p, span');
        elements.forEach(el => {
            if (el.textContent.toLowerCase().includes(query.toLowerCase())) {
                el.style.background = query ? 'yellow' : 'transparent';
            } else {
                el.style.background = 'transparent';
            }
        });
    }
};

// Inicializar: PageSearch.init();


/* ===========================
   6. BOTÓN "SCROLL AL TOP"
   =========================== */

const ScrollTopButton = {
    init() {
        const button = document.createElement('button');
        button.innerHTML = '⬆️';
        button.className = 'scroll-top-btn';
        button.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 999;
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
        `;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                button.style.opacity = '1';
                button.style.pointerEvents = 'auto';
            } else {
                button.style.opacity = '0';
                button.style.pointerEvents = 'none';
            }
        });

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.body.appendChild(button);
    }
};

// Inicializar: ScrollTopButton.init();


/* ===========================
   7. NOTIFICACIONES PERSONALIZADAS
   =========================== */

const NotificationCenter = {
    show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        const colors = {
            'success': '#10b981',
            'error': '#ef4444',
            'warning': '#f59e0b',
            'info': '#3b82f6'
        };

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 20px;
            border-radius: 8px;
            background: ${colors[type]};
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }
};

// Uso: NotificationCenter.show('¡Éxito!', 'success');


/* ===========================
   8. REPRODUCTOR DE SONIDOS
   =========================== */

const SoundEffects = {
    sounds: {},

    init() {
        // Crear sonidos simples con Web Audio API
        this.createClickSound();
        this.createSuccessSound();
        this.createErrorSound();
    },

    createClickSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        this.sounds.click = { audioContext, oscillator, gain };
    },

    playClick() {
        if (this.sounds.click) {
            // Implementación simplificada
            console.log('🔊 Click sonoro');
        }
    }
};


/* ===========================
   9. GRABADOR DE ACTIVIDAD DEL USUARIO
   =========================== */

const ActivityTracker = {
    activities: [],

    init() {
        document.addEventListener('click', (e) => {
            this.logActivity('click', e.target.innerText);
        });

        document.addEventListener('scroll', () => {
            this.logActivity('scroll', `${window.scrollY}px`);
        });
    },

    logActivity(type, detail) {
        this.activities.push({
            type,
            detail,
            timestamp: new Date().toLocaleTimeString()
        });

        // Guardar últimas 50 actividades
        if (this.activities.length > 50) {
            this.activities.shift();
        }
    },

    getActivities() {
        return this.activities;
    },

    exportActivities() {
        console.table(this.activities);
        return this.activities;
    }
};

// Usar: ActivityTracker.init(); luego ActivityTracker.exportActivities();


/* ===========================
   10. TECLADOS DE ATAJO
   =========================== */

const Shortcuts = {
    init() {
        document.addEventListener('keydown', (e) => {
            // Ctrl + K: Búsqueda
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                const search = document.getElementById('page-search');
                if (search) search.focus();
            }

            // Ctrl + .  (punto): Tema oscuro
            if (e.ctrlKey && e.key === '.') {
                e.preventDefault();
                DarkModeToggle.toggleDarkMode();
            }

            // Ctrl + J: Scroll al top
            if (e.ctrlKey && e.key === 'j') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // ?  : Mostrar ayuda
            if (e.key === '?') {
                this.showHelp();
            }
        });
    },

    showHelp() {
        NotificationCenter.show('⌨️ Atajos: Ctrl+K (Buscar) | Ctrl+. (Tema) | Ctrl+J (Arriba)', 'info', 5000);
    }
};

// Inicializar: Shortcuts.init();


/* ===========================
   11. ANÁLISIS DE RENDIMIENTO
   =========================== */

const PerformanceAnalyzer = {
    analyze() {
        const perfData = performance.getEntriesByType('navigation')[0];
        
        const metrics = {
            'Total Load Time': `${(perfData.loadEventEnd - perfData.loadEventStart).toFixed(2)} ms`,
            'DOM Interactive': `${(perfData.domInteractive - perfData.fetchStart).toFixed(2)} ms`,
            'TCP Connection': `${(perfData.connectEnd - perfData.connectStart).toFixed(2)} ms`,
            'DNS Lookup': `${(perfData.domainLookupEnd - perfData.domainLookupStart).toFixed(2)} ms`,
        };

        console.log('%c⚡ Métricas de Rendimiento', 'font-size: 16px; font-weight: bold; color: #667eea;');
        console.table(metrics);
    }
};

// Usar: PerformanceAnalyzer.analyze();


/* ===========================
   12. SHARE EN REDES SOCIALES
   =========================== */

const ShareButtons = {
    init() {
        const shareBtn = document.createElement('button');
        shareBtn.innerHTML = '📤 Compartir';
        shareBtn.style.cssText = `
            position: fixed;
            bottom: 180px;
            right: 30px;
            padding: 12px 20px;
            border-radius: 25px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border: none;
            color: white;
            cursor: pointer;
            z-index: 999;
            font-weight: 500;
        `;

        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Mi Autopresentación Profesional',
                    text: 'Mira mi portafolio profesional',
                    url: window.location.href
                });
            } else {
                NotificationCenter.show('Compartir no disponible', 'warning');
            }
        });

        document.body.appendChild(shareBtn);
    }
};

// Inicializar: ShareButtons.init();


/* ===========================
   INICIALIZACIÓN COMPLETA
   =========================== */

/*
// Descomenta esto para activar todas las características:

document.addEventListener('DOMContentLoaded', function() {
    VisitCounter.init();
    TimeTracker.init();
    ScrollTracker.init();
    ScrollTopButton.init();
    DarkModeToggle.init();
    PageSearch.init();
    Shortcuts.init();
    ShareButtons.init();
    ActivityTracker.init();
    
    console.log('%c✅ Todas las características avanzadas activadas', 'font-size: 14px; color: #10b981; font-weight: bold;');
});
*/
