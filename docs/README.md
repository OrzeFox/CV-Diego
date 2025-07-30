# GitHub Pages Deployment Guide

## 🚀 Deployment Configuration

This repository is configured to automatically deploy to GitHub Pages using the latest GitHub Actions workflow.

### **Key Features:**

- ✅ **Automatic deployment** on push to main branch
- ✅ **PDF generation** for both Spanish and English versions
- ✅ **Static file serving** without Jekyll processing
- ✅ **Latest GitHub Actions** best practices

### **Workflow Components:**

1. **Build Job:** Installs dependencies and generates PDFs
2. **Deploy Job:** Deploys to GitHub Pages using official actions
3. **PDF Generation Job:** Creates and uploads PDF artifacts

### **Required Setup:**

1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Configure permissions** for GitHub Pages deployment

### **Files Served:**

- `index.html` - Spanish CV
- `index-en.html` - English CV
- `styles.css` - Styling
- `scripts/` - JavaScript files
- `.nojekyll` - Disables Jekyll processing

### **Access URLs:**

- **Spanish CV:** `https://orzeFox.github.io/CV-Diego/`
- **English CV:** `https://orzeFox.github.io/CV-Diego/index-en.html`

### **PDF Artifacts:**

After each deployment, PDF files are available as artifacts:

- `CV_Diego_Cruz.pdf` - Spanish version
- `CV_Diego_Cruz_EN.pdf` - English version
