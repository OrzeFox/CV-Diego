# CV Diego Cruz - Desarrollador Mobile & Full Stack

[![Deploy to GitHub Pages](https://github.com/OrzeFox/cv-diego-cruz/workflows/Deploy%20CV%20to%20GitHub%20Pages/badge.svg)](https://github.com/OrzeFox/cv-diego-cruz/actions)
[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://orzeFox.github.io/cv-diego-cruz)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌐 **CV Online**
**Visita mi CV en vivo:** [https://orzeFox.github.io/cv-diego-cruz](https://orzeFox.github.io/cv-diego-cruz)

## 📁 Estructura del Repositorio

```
CV_Diego_Cruz/
├── index.html              # Archivo HTML principal
├── styles.css              # Estilos CSS separados
├── package.json            # Configuración del proyecto
├── scripts/
│   └── generate-pdf.js     # Script para generar PDF
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para despliegue
├── .gitignore              # Archivos a ignorar
└── README.md               # Este archivo
```

## 🚀 **Despliegue Automático**

Este repositorio utiliza **GitHub Actions** para:
- ✅ **Despliegue automático** a GitHub Pages
- ✅ **Generación automática** de PDF
- ✅ **Actualización en tiempo real** al hacer push

### **Flujo de Trabajo:**
1. **Push a `main`** → GitHub Actions se ejecuta automáticamente
2. **Despliegue** → CV se publica en GitHub Pages
3. **PDF** → Se genera automáticamente como artifact

## 🎨 Características del Diseño

### **Mejoras Implementadas:**
- ✅ **CSS separado** para fácil mantenimiento
- ✅ **Diseño responsive** que se adapta a todos los dispositivos
- ✅ **Animaciones suaves** con efectos hover
- ✅ **Gradientes modernos** y efectos visuales
- ✅ **Tipografía profesional** y legible
- ✅ **Optimizado para impresión** (PDF)
- ✅ **Modo oscuro** automático (si el sistema lo prefiere)
- ✅ **Accesibilidad mejorada** con soporte para preferencias de movimiento reducido

### **Efectos Visuales:**
- **Animación de entrada** suave al cargar la página
- **Efectos hover** en elementos interactivos
- **Transiciones** fluidas entre estados
- **Gradientes** profesionales en header y elementos
- **Sombras** sutiles para profundidad

## 🛠️ **Desarrollo Local**

### **1. Clonar el repositorio:**
```bash
git clone https://github.com/OrzeFox/cv-diego-cruz.git
cd cv-diego-cruz
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

### **4. Generar PDF localmente:**
```bash
npm run pdf
```

## 🚀 **Scripts Disponibles**

```bash
npm start          # Iniciar servidor de desarrollo
npm run dev        # Modo desarrollo
npm run build      # Preparar para producción
npm run deploy     # Desplegar a GitHub Pages
npm run pdf        # Generar PDF del CV
npm run lint       # Verificar código
npm run test       # Probar accesibilidad
```

## 🎯 **Personalización**

### **Cambiar Colores:**
En `styles.css`, busca y modifica:
```css
/* Colores principales */
--primary-color: #667eea;
--secondary-color: #764ba2;
--text-color: #333;
--background-color: #f8f9fa;
```

### **Agregar Secciones:**
1. Copiar estructura de sección existente en `index.html`
2. Agregar estilos correspondientes en `styles.css`
3. Mantener consistencia con el diseño actual

### **Modificar Animaciones:**
```css
/* Ajustar velocidad de animaciones */
transition: all 0.3s ease; /* Cambiar 0.3s por el tiempo deseado */
```

## 📱 **Responsive Design**

El CV se adapta automáticamente a:
- **Desktop:** Ancho completo con grid de 3 columnas
- **Tablet:** Grid de 2 columnas, padding reducido
- **Mobile:** Una columna, elementos apilados
- **Impresión:** Optimizado para PDF sin efectos hover

## 🎨 **Temas Disponibles**

### **Tema Claro (Por defecto):**
- Fondo claro con gradiente sutil
- Texto oscuro para máxima legibilidad
- Colores profesionales azul/púrpura

### **Tema Oscuro (Automático):**
- Se activa si el sistema prefiere modo oscuro
- Fondo oscuro con texto claro
- Mantiene la misma estructura visual

## 🔧 **Optimizaciones Técnicas**

### **Rendimiento:**
- CSS optimizado y minificado
- Animaciones con `transform` para mejor rendimiento
- Lazy loading de efectos visuales

### **Accesibilidad:**
- Contraste de colores WCAG AA
- Soporte para lectores de pantalla
- Navegación por teclado
- Preferencias de movimiento reducido

### **SEO:**
- Meta tags optimizados
- Estructura semántica HTML5
- Palabras clave relevantes

## 📋 **Checklist de Personalización**

- [ ] **Información de contacto** actualizada
- [ ] **Experiencia laboral** con métricas específicas
- [ ] **Proyectos** con enlaces a GitHub
- [ ] **Certificaciones** agregadas
- [ ] **Idiomas** con niveles específicos
- [ ] **Intereses** relevantes para la industria
- [ ] **Fecha de actualización** del CV
- [ ] **Portfolio** enlazado (cuando esté listo)

## 🔄 **Actualización del CV**

### **Proceso de Actualización:**
1. **Editar archivos** localmente
2. **Probar cambios** con `npm start`
3. **Commit y push** a GitHub
4. **GitHub Actions** despliega automáticamente
5. **CV actualizado** en GitHub Pages

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

1. **Completar información faltante** marcada con `[Agregar...]`
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

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 **Contribuciones**

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

---

**¡Tu CV profesional está listo para impresionar! 🚀**

**Visita:** [https://orzeFox.github.io/cv-diego-cruz](https://orzeFox.github.io/cv-diego-cruz)
