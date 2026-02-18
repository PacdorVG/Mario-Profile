# 📱 Carta de Autopresentación Profesional

Una página web moderna y profesional para tu autopresentación, desarrollada con **HTML5**, **CSS3** y **JavaScript** vanilla.

## ✨ Características Principales

- ✅ **Responsive Design**: Se adapta perfectamente a todos los dispositivos (móvil, tablet, desktop)
- ✅ **Diseño Moderno**: Gradientes, animaciones suaves y efectos visuales profesionales
- ✅ **Secciones Completas**:
  - Hero con presentación impactante
  - Sección "Acerca de" con estadísticas
  - Catálogo de habilidades por categoría
  - Timeline de experiencia laboral
  - Educación y certificaciones
  - Proyectos destacados
  - Testimonios de clientes
  - Formulario de contacto funcional
  - Footer con enlaces sociales

- ✅ **Rendimiento Optimizado**: Carga rápida y sin dependencias externas
- ✅ **Accesibilidad**: Cumple con estándares WCAG
- ✅ **SEO Amigable**: Estructura HTML5 semántica

## 📂 Estructura del Proyecto

```
proyecto/
├── index.html          # Archivo principal HTML5
├── styles.css          # Estilos CSS3 responsive
├── script.js           # JavaScript para interactividad
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. **Descarga o Clona el Proyecto**
   ```bash
   git clone <tu-repositorio>
   cd proyecto
   ```

### 2. **Abre en el Navegador**
   - Haz doble clic en `index.html`
   - O usa un servidor local:
     ```bash
     python -m http.server 8000
     # Luego abre http://localhost:8000 en tu navegador
     ```

### 3. **Personalización Básica**

#### A. **Cambiar tu nombre y datos personales**
   Abre `index.html` y busca:
   ```html
   <h1 class="hero-title">Hola, soy <span class="highlight">Tu Nombre</span></h1>
   ```
   Reemplaza `Tu Nombre` con tu nombre real.

#### B. **Cambiar descripción profesional**
   Busca la sección hero y actualiza:
   ```html
   <p class="hero-subtitle">Profesional en Desarrollo y Soluciones Innovadoras</p>
   <p class="hero-description">
       Con más de 5 años de experiencia...
   </p>
   ```

#### C. **Actualizar habilidades**
   Busca la sección de habilidades y modifica los porcentajes:
   ```html
   <div class="progress" style="width: 95%"></div>
   ```
   Cambia el valor de `width` al porcentaje deseado.

#### D. **Modificar experiencia laboral**
   En la sección `#experiencia`, actualiza:
   ```html
   <h3>Senior Developer</h3>
   <p class="company">TechCorp Solutions</p>
   <p class="date">2022 - Presente</p>
   ```

#### E. **Cambiar colores del tema**
   Abre `styles.css` y modifica las variables CSS en `:root`:
   ```css
   :root {
       --primary-color: #6366f1;      /* Azul violeta */
       --secondary-color: #ec4899;    /* Rosa */
       --accent-color: #f59e0b;       /* Ámbar */
       /* ... más colores ... */
   }
   ```

#### F. **Actualizar contacto**
   Busca la sección `#contacto` y cambia:
   ```html
   <a href="mailto:tu.email@example.com">tu.email@example.com</a>
   <a href="tel:+34123456789">+34 123 456 789</a>
   ```

#### G. **Links a redes sociales**
   Actualiza los enlaces en el formulario de contacto:
   ```html
   <a href="https://linkedin.com/in/tu-usuario" class="social-link">LinkedIn</a>
   <a href="https://github.com/tu-usuario" class="social-link">GitHub</a>
   ```

## 🎨 Personalización Avanzada

### Color Scheme Alternativos

**Tema Oscuro:**
```css
:root {
    --primary-color: #3b82f6;     /* Azul */
    --secondary-color: #6366f1;   /* Púrpura */
    --accent-color: #10b981;      /* Verde */
}
```

**Tema Cálido:**
```css
:root {
    --primary-color: #f59e0b;     /* Ámbar */
    --secondary-color: #ef4444;   /* Rojo */
    --accent-color: #ec4899;      /* Rosa */
}
```

### Añadir Foto de Perfil

Modifica el código del perfil:
```html
<!-- Busca esto en la sección hero -->
<div class="image-placeholder">
    <div class="profile-circle">TN</div>
</div>

<!-- Cambiar por: -->
<div class="image-placeholder">
    <img src="mi-foto.jpg" alt="Mi Foto" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
</div>
```

### Cambiar Fuentes

En `index.html`, busca:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
```

Visita [Google Fonts](https://fonts.google.com) para seleccionar nuevas fuentes.

## 🔧 Formulario de Contacto

El formulario actual es interactivo pero envía datos localmente. Para un funcionamiento completo:

**Opción 1: Usar un servicio como Formspree**
1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta y tu formulario
3. Obtén tu ID de formulario
4. Modifica en `script.js` o crea un backend

**Opción 2: Backend propio (Node.js + Express)**
```javascript
// En tu servidor backend
app.post('/api/contact', (req, res) => {
    // Aquí procesas el formulario
    // Envías email, guardas en BD, etc.
});
```

## 📱 Responsive Breakpoints

El proyecto se adapta a:
- 📱 Móvil: < 480px
- 📱 Tablet: 480px - 768px
- 💻 Desktop: > 768px

## 🚀 Deploy

### GitHub Pages
1. Sube tu proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Elige `main` branch y `/root`
5. ¡Listo! Tu sitio estará en `https://tu-usuario.github.io/repo-name`

### Netlify
1. Conecta tu repositorio a [netlify.com](https://netlify.com)
2. Configura Build settings (deja vacío para HTML simple)
3. Deploy automático con cada pusf

### Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio
3. Deploy en un clic

## 🎯 Optimizaciones Recomendadas

- [ ] Añadir Google Analytics
- [ ] Implementar lazy loading para imágenes
- [ ] Cachear recursos con Service Workers
- [ ] Añadir certificado SSL (HTTPS)
- [ ] Comprimir imágenes y assets
- [ ] Minificar CSS y JS

## 📊 Métricas de Rendimiento

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🐛 Solución de Problemas

### El menú móvil no funciona
- Verifica que `script.js` esté cargado correctamente
- Abre la consola (F12) y busca errores

### Los colores no se ven como esperado
- Limpia el caché del navegador (Ctrl + Shift + Delete)
- Verifica que no haya conflictos CSS

### El formulario no envía
- Actualmente es local. Implementa un backend o usa Formspree
- Verifica la consola para mensajes de error

## 📚 Recursos Útiles

- [HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Google Fonts](https://fonts.google.com)
- [Unsplash - Imágenes Gratis](https://unsplash.com)

## 📝 Licencia

Este proyecto es de código abierto y puedes usarlo libremente para tu portafolio personal.

## 🤝 Contribuciones

¿Encontraste un bug? ¿Tienes sugerencias? ¡Siéntete libre de abrir un issue o hacer un pull request!

## 📧 Contacto

Si tienes preguntas sobre este proyecto, no dudes en contactar. ¡Espero que te sea útil!

---

**Hecho con ❤️ para impulsar tu carrera profesional**
