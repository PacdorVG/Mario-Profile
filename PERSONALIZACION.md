# 🎯 GUÍA RÁPIDA DE PERSONALIZACIÓN

## 1️⃣ CAMBIOS BÁSICOS (5 minutos)

### Cambiar Nombre
En `index.html`, línea ~47:
```html
<!-- ANTES -->
<h1 class="hero-title">Hola, soy <span class="highlight">Tu Nombre</span></h1>

<!-- DESPUÉS -->
<h1 class="hero-title">Hola, soy <span class="highlight">Mario García</span></h1>
```

### Cambiar Profesión
En `index.html`, línea ~48:
```html
<!-- ANTES -->
<p class="hero-subtitle">Profesional en Desarrollo y Soluciones Innovadoras</p>

<!-- DESPUÉS -->
<p class="hero-subtitle">Desarrollador Full-Stack con 5 años de experiencia</p>
```

### Cambiar Descripción Principal
En `index.html`, líneas ~49-52:
```html
<!-- ACTUALIZA ESTE PÁRRAFO -->
<p class="hero-description">
    Con más de 5 años de experiencia en el desarrollo web y diseño de soluciones tecnológicas. 
    Me apasiona crear productos digitales que generan impacto real y transforman negocios.
</p>
```

### Cambiar Email
En `index.html`, línea ~505:
```html
<!-- ANTES -->
<a href="mailto:tu.email@example.com">tu.email@example.com</a>

<!-- DESPUÉS -->
<a href="mailto:mario@example.com">mario@example.com</a>
```

### Cambiar Teléfono
En `index.html`, línea ~511:
```html
<!-- ANTES -->
<a href="tel:+34123456789">+34 123 456 789</a>

<!-- DESPUÉS -->
<a href="tel:+34612345678">+34 612 345 678</a>
```

---

## 2️⃣ PERSONALIZAR HABILIDADES (10 minutos)

### Cambiar Habilidades Frontend
En `index.html`, búsca la sección `<!-- Frontend -->` alrededor de línea 200:

```html
<!-- ORIGINAL -->
<div class="skill-item">
    <div class="skill-name">HTML5 & CSS3</div>
    <div class="progress-bar">
        <div class="progress" style="width: 95%"></div>
    </div>
</div>

<!-- MODIFICADO PARA TI -->
<div class="skill-item">
    <div class="skill-name">TypeScript</div>
    <div class="progress-bar">
        <div class="progress" style="width: 88%"></div>
    </div>
</div>
```

**Atajos de porcentajes:**
- Experto: 90-100%
- Avanzado: 75-89%
- Intermedio: 60-74%
- Básico: 40-59%

### Cambiar Badges de Habilidades
En `index.html`, búsca `<!-- Badges -->` alrededor de línea 285:

```html
<!-- Reemplaza estos badges con los tuyos -->
<div class="skills-badges">
    <span class="badge">JavaScript</span>
    <span class="badge">React</span>
    <span class="badge">TypeScript</span>
    <span class="badge">GraphQL</span>
    <span class="badge">AWS</span>
    <span class="badge">PostgreSQL</span>
    <!-- Agrega más según necesites -->
</div>
```

---

## 3️⃣ ACTUALIZAR EXPERIENCIA (10 minutos)

### Cambiar Experiencia Laboral
En `index.html`, búsca `<!-- Timeline -->` alrededor de línea 320:

```html
<!-- CAMBIAR ESTO -->
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Senior Developer</h3>
        <p class="company">TechCorp Solutions</p>
        <p class="date">2022 - Presente</p>
        <p class="description">
            Lideré el desarrollo del nuevo módulo de análisis de datos...
        </p>
        <div class="tags">
            <span>React</span>
            <span>Node.js</span>
        </div>
    </div>
</div>

<!-- A ESTO -->
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Desarrollador Full-Stack</h3>
        <p class="company">Mi Empresa Actual</p>
        <p class="date">2023 - Presente</p>
        <p class="description">
            Desarrollo de aplicaciones web escalables con React y Node.js.
            Implementé sistema de análisis que mejoró productividad en 40%.
        </p>
        <div class="tags">
            <span>React</span>
            <span>Express</span>
            <span>MongoDB</span>
        </div>
    </div>
</div>
```

---

## 4️⃣ CAMBIAR COLORES DEL TEMA (5 minutos)

En `styles.css`, líneas ~9-20, modifica `:root`:

### Tema Profesional Azul
```css
:root {
    --primary-color: #1e40af;      /* Azul oscuro */
    --secondary-color: #0284c7;    /* Azul claro */
    --accent-color: #06b6d4;       /* Cian */
}
```

### Tema Tech Moderno
```css
:root {
    --primary-color: #7c3aed;      /* Púrpura */
    --secondary-color: #ec4899;    /* Rosa */
    --accent-color: #06b6d4;       /* Cian */
}
```

### Tema Verde Eco
```css
:root {
    --primary-color: #059669;      /* Verde oscuro */
    --secondary-color: #10b981;    /* Verde claro */
    --accent-color: #14b8a6;       /* Teal */
}
```

### Tema Naranja Energía
```css
:root {
    --primary-color: #ea580c;      /* Naranja */
    --secondary-color: #f59e0b;    /* Ámbar */
    --accent-color: #f97316;       /* Naranja claro */
}
```

---

## 5️⃣ CAMBIAR PROYECTOS (10 minutos)

En `index.html`, búsca `<!-- Proyectos Destacados -->` alrededor de línea 390:

```html
<!-- REEMPLAZA LOS PROYECTOS -->
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder-small">Tu Proyecto</div>
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción breve del proyecto y su impacto...</p>
        <div class="project-tags">
            <span>Tecnología 1</span>
            <span>Tecnología 2</span>
            <span>Tecnología 3</span>
        </div>
        <a href="https://tu-proyecto.com" class="project-link">Ver Proyecto →</a>
    </div>
</div>
```

---

## 6️⃣ CAMBIAR EDUCACIÓN (5 minutos)

En `index.html`, búsca `<!-- Educación & Certificaciones -->` alrededor de línea 370:

```html
<!-- REEMPLAZA LAS TARJETAS DE EDUCACIÓN -->
<div class="education-card">
    <div class="education-icon">🎓</div>
    <h3>Tu Programa de Estudios</h3>
    <p class="university">Tu Universidad</p>
    <p class="year">2020 - 2024</p>
</div>

<!-- PUEDES CAMBIAR LOS EMOJIS -->
<!-- 🎓 Grado
     📜 Certificado  
     🏆 Premio/Certificación
     ⭐ Reconocimiento
     🔥 Especialización -->
```

---

## 7️⃣ CAMBIAR TESTIMONIOS (10 minutos)

En `index.html`, búsca `<!-- Testimonios -->` alrededor de línea 430:

```html
<!-- REEMPLAZA LOS TESTIMONIOS -->
<div class="testimonial-card">
    <div class="stars">★★★★★</div>
    <p class="testimonial-text">
        "Texto del testimonio del cliente..."
    </p>
    <div class="testimonial-author">
        <div class="author-avatar">JD</div>
        <div>
            <p class="author-name">Juan Díaz</p>
            <p class="author-role">CEO, Empresa XYZ</p>
        </div>
    </div>
</div>
```

---

## 8️⃣ AGREGAR FOTO DE PERFIL

### Opción 1: Usar URL Externa
```html
<!-- En la sección hero, reemplaza esto -->
<div class="image-placeholder">
    <div class="profile-circle">TN</div>
</div>

<!-- Con esto -->
<div class="image-placeholder">
    <img src="https://i.pravatar.cc/300?u=tu-email@example.com" 
         alt="Foto de Perfil" 
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
</div>
```

### Opción 2: Usar Archivo Local
1. Coloca tu foto en la carpeta del proyecto llamada `mi-foto.jpg`
2. Usa esta ruta:
```html
<img src="mi-foto.jpg" alt="Mi Foto" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
```

---

## 9️⃣ CAMBIAR REDES SOCIALES

En `index.html`, búsca `<!-- Redes Sociales -->` alrededor de línea 515:

```html
<!-- REEMPLAZA CON TUS ENLACES -->
<div class="social-links">
    <a href="https://linkedin.com/in/tu-usuario" class="social-link">LinkedIn</a>
    <a href="https://github.com/tu-usuario" class="social-link">GitHub</a>
    <a href="https://twitter.com/tu-usuario" class="social-link">Twitter</a>
    <a href="https://tu-portfolio.com" class="social-link">Portfolio</a>
</div>
```

---

## 🔟 CAMBIAR UBICACIÓN

En `index.html`, alrededor de línea 513:

```html
<!-- ANTES -->
<p>España, Madrid</p>

<!-- DESPUÉS -->
<p>México, Ciudad de México</p>
```

---

## 🎨 CAMBIOS CSS COMUNES

### Cambiar Tamaño de Letras
En `styles.css`:
```css
/* Títulos principales más grandes */
h1 {
    font-size: 4rem; /* Era 3.5rem */
}

/* Secciones más grandes */
h2 {
    font-size: 3rem; /* Era 2.5rem */
}
```

### Cambiar Espacios Entre Secciones
En `styles.css`:
```css
.hero {
    padding: 120px 0; /* Era 100px */
}

.about {
    padding: 120px 0; /* Era 100px */
}
```

### Hacer Más Redondera la Página
En `styles.css`, busca todos los `border-radius` y aumenta el valor:
```css
/* De esto */
border-radius: 15px;

/* A esto */
border-radius: 25px;
```

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

- [ ] Nombre y profesión
- [ ] Email y teléfono
- [ ] Habilidades (frontend, backend, herramientas)
- [ ] Experiencia laboral (últimos 3-4 trabajos)
- [ ] Educación y certificaciones
- [ ] Proyectos destacados
- [ ] Testimonios
- [ ] Links a redes sociales
- [ ] Ubicación
- [ ] Colores del tema
- [ ] Foto de perfil (opcional)

---

## 🚀 SIGUIENTE PASO: DEPLOY

Una vez personalizado, publica tu sitio:

1. **GitHub Pages** (Gratis)
   - Sube a GitHub
   - Activa Pages en Settings

2. **Netlify** (Gratis)
   - Conecta repo a netlify.com
   - Deploy automático

3. **Vercel** (Gratis)
   - Conecta repo a vercel.com
   - Deploy en un clic

---

¡Felicidades! Tu autopresentación profesional está lista. 🎉
