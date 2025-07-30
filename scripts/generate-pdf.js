#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🔄 Generando PDF del CV...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Obtener la ruta absoluta del archivo HTML
    const htmlPath = path.join(__dirname, '..', 'index.html');
    const fileUrl = `file://${htmlPath}`;
    
    console.log(`📄 Cargando archivo: ${fileUrl}`);
    
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Esperar a que las animaciones terminen
    await page.waitForTimeout(2000);
    
    // Configuración del PDF
    const pdfOptions = {
      path: path.join(__dirname, '..', 'CV_Diego_Cruz.pdf'),
      format: 'A4',
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm'
      },
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true
    };
    
    console.log('📝 Generando PDF...');
    await page.pdf(pdfOptions);
    
    const pdfPath = pdfOptions.path;
    const stats = fs.statSync(pdfPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`✅ PDF generado exitosamente: ${pdfPath}`);
    console.log(`📊 Tamaño del archivo: ${fileSizeInMB} MB`);
    
  } catch (error) {
    console.error('❌ Error generando PDF:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generatePDF().catch(console.error);
}

module.exports = generatePDF; 