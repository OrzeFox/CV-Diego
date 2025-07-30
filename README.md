# CV Diego Cruz - Desarrollador Mobile & Full Stack

[![Deploy to GitHub Pages](https://github.com/OrzeFox/CV-Diego/workflows/Deploy%20CV%20to%20GitHub%20Pages/badge.svg)](https://github.com/OrzeFox/CV-Diego/actions)
[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://orzeFox.github.io/CV-Diego)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌐 **CV Online**

**Visita mi CV en vivo:** [https://orzeFox.github.io/CV-Diego](https://orzeFox.github.io/CV-Diego)

## 📁 Estructura del Repositorio

```
CV_Diego_Cruz/
├── index.html              # CV en español
├── index-en.html           # CV en inglés
├── styles.css              # Estilos CSS minimalistas
├── package.json            # Configuración del proyecto
├── scripts/
│   ├── generate-pdf.js     # Generador PDF español
│   └── generate-pdf-en.js  # Generador PDF inglés
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para despliegue
├── .gitignore              # Archivos a ignorar
└── README.md               # Este archivo
```

## 🚀 **Despliegue Automático**

Este repositorio utiliza **GitHub Actions** para:

- ✅ **Despliegue automático** a GitHub Pages
- ✅ **Generación automática** de PDFs (ES/EN)
- ✅ **Actualización en tiempo real** al hacer push
- ✅ **Optimización de rendimiento** automática

### **Flujo de Trabajo:**

1. **Push a `main`** → GitHub Actions se ejecuta automáticamente
2. **Despliegue** → CV se publica en GitHub Pages
3. **PDFs** → Se generan automáticamente ambos idiomas

## 🎨 Características del Diseño

### **✨ Nuevas Mejoras Implementadas:**

- ✅ **Diseño minimalista** y profesional
- ✅ **Versión bilingüe** (Español/Inglés)
- ✅ **Sección de IA** para herramientas de desarrollo
- ✅ **CSS optimizado** para mejor rendimiento
- ✅ **Diseño responsive** que se adapta a todos los dispositivos
- ✅ **Generación de PDF** mejorada y estable
- ✅ **Tipografía profesional** y legible
- ✅ **Optimizado para impresión** (PDF)
- ✅ **Accesibilidad mejorada** con soporte para preferencias de movimiento reducido

### **🎯 Sección de IA para Desarrollo:**

- **GitHub Copilot** - Autocompletado inteligente
- **ChatGPT** - Debugging asistido
- **Cursor AI** - Desarrollo asistido por IA
- **Generación automática** de documentación y tests
- **Optimización de workflows** de desarrollo

### **📱 Responsive Design:**

- **Desktop:** Layout optimizado con grid flexible
- **Tablet:** Adaptación automática de columnas
- **Mobile:** Diseño compacto y legible
- **Impresión:** Optimizado para PDF sin efectos

## 🛠️ **Desarrollo Local**

### **1. Clonar el repositorio:**

```bash
git clone https://github.com/OrzeFox/CV-Diego.git
cd CV-Diego
```

### **2. Instalar dependencias:**

```bash
npm install
```

### **3. Servidor de desarrollo:**

```bash
npm start
# o
npm run dev
```

### **4. Generar PDFs:**

```bash
npm run pdf        # PDF en español
npm run pdf:en     # PDF en inglés
npm run pdf:all    # Ambos PDFs
```

## 🚀 **Scripts Disponibles**

```bash
npm start          # Iniciar servidor de desarrollo
npm run dev        # Modo desarrollo
npm run build      # Preparar para producción
npm run deploy     # Desplegar a GitHub Pages
npm run pdf        # Generar PDF en español
npm run pdf:en     # Generar PDF en inglés
npm run pdf:all    # Generar ambos PDFs
npm run lint       # Verificar código
npm run test       # Probar accesibilidad
```

## 🌍 **Versiones Disponibles**

### **📄 CV en Español:**

- **Archivo:** `index.html`
- **PDF:** `CV_Diego_Cruz.pdf`
- **Script:** `npm run pdf`

### **📄 CV en Inglés:**

- **Archivo:** `index-en.html`
- **PDF:** `CV_Diego_Cruz_EN.pdf`
- **Script:** `npm run pdf:en`

### **📄 Ambos PDFs:**

- **Script:** `npm run pdf:all`

## 🎯 **Personalización**

### **Cambiar Colores:**

En `styles.css`, busca y modifica:

```css
/* Colores principales */
--primary-color: #2c3e50;
--secondary-color: #3498db;
--text-color: #333;
--background-color: #f5f5f5;
```

### **Agregar Secciones:**

1. Copiar estructura de sección existente en `index.html`
2. Agregar estilos correspondientes en `styles.css`
3. Mantener consistencia con el diseño minimalista

### **Modificar Animaciones:**

```css
/* Ajustar velocidad de animaciones */
transition: all 0.3s ease; /* Cambiar 0.3s por el tiempo deseado */
```

## 📱 **Responsive Design**

El CV se adapta automáticamente a:

- **Desktop:** Ancho completo con grid optimizado
- **Tablet:** Grid adaptativo, padding reducido
- **Mobile:** Una columna, elementos apilados
- **Impresión:** Optimizado para PDF sin efectos hover

## 🎨 **Diseño Minimalista**

### **Características del Nuevo Diseño:**

- **Paleta de colores simplificada** - Azul oscuro y claro
- **Tipografía limpia** - Sin efectos visuales excesivos
- **Espaciado optimizado** - Mejor densidad de información
- **Bordes sutiles** - 3px en lugar de 5px
- **Sin animaciones complejas** - Diseño estático y profesional
- **Sombras mínimas** - Efectos visuales sutiles

### **Ventajas del Diseño Minimalista:**

- ✅ **Mejor legibilidad** en todos los dispositivos
- ✅ **Carga más rápida** sin efectos pesados
- ✅ **Aspecto más profesional** y serio
- ✅ **Mejor para impresión** y PDF
- ✅ **Más accesible** para lectores de pantalla

## 🔧 **Optimizaciones Técnicas**

### **Rendimiento:**

- CSS optimizado y minimalista
- Sin animaciones complejas para mejor rendimiento
- Generación de PDF estable y confiable

### **Accesibilidad:**

- Contraste de colores WCAG AA
- Soporte para lectores de pantalla
- Navegación por teclado
- Preferencias de movimiento reducido

### **SEO:**

- Meta tags optimizados para ambos idiomas
- Estructura semántica HTML5
- Palabras clave relevantes

## 📋 **Checklist de Personalización**

- [x] **Información de contacto** actualizada
- [x] **Experiencia laboral** con métricas específicas
- [x] **Proyectos** con descripciones detalladas
- [x] **Sección de IA** para herramientas de desarrollo
- [x] **Idiomas** con niveles específicos
- [x] **Intereses** relevantes para la industria
- [x] **Fecha de actualización** del CV
- [x] **Versión bilingüe** completa

## 🔄 **Actualización del CV**

### **Proceso de Actualización:**

1. **Editar archivos** localmente (`index.html` e `index-en.html`)
2. **Probar cambios** con `npm start`
3. **Generar PDFs** con `npm run pdf:all`
4. **Commit y push** a GitHub
5. **GitHub Actions** despliega automáticamente
6. **CV actualizado** en GitHub Pages

### **Comandos útiles:**

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "Actualizar experiencia laboral y proyectos"

# Push a GitHub
git push origin main
```

## 🎯 **Próximos Pasos**

1. **Configurar GitHub Pages** para tener el CV online
2. **Personalizar colores** si deseas otro esquema
3. **Agregar foto** si es apropiado para tu industria
4. **Crear múltiples versiones** para diferentes tipos de posiciones
5. **Mantener actualizado** con nuevos proyectos

## 💡 **Consejos**

- **Mantén el CV actualizado** con proyectos recientes
- **Adapta el contenido** para cada posición específica
- **Incluye palabras clave** de las ofertas de trabajo
- **Pide feedback** a colegas o mentores
- **Prueba diferentes formatos** según la empresa
- **Usa la versión en inglés** para oportunidades internacionales

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 **Contribuciones**

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

---

**¡Tu CV profesional bilingüe está listo para impresionar! 🚀**

**Visita:** [https://orzeFox.github.io/CV-Diego](https://orzeFox.github.io/CV-Diego)
