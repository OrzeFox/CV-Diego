#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🔄 Generating English CV PDF...');

  let browser;
  try {
    // Use the stable configuration that works on macOS
    browser = await puppeteer.launch({
      headless: true, // Use old headless mode for better compatibility
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--no-first-run',
        '--disable-gpu',
      ],
    });

    const page = await browser.newPage();

    // Set viewport for better rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 1,
    });

    // Obtener la ruta absoluta del archivo HTML
    const htmlPath = path.join(__dirname, '..', 'index-en.html');
    const fileUrl = `file://${htmlPath}`;

    console.log(`📄 Loading file: ${fileUrl}`);

    // Navigate to the page
    await page.goto(fileUrl, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    // Wait for content to load
    await page.waitForFunction(
      () => {
        const sections = document.querySelectorAll('.section');
        return sections.length > 0;
      },
      { timeout: 10000 }
    );

    // Wait a bit more for everything to render
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Force all sections to be visible
    await page.evaluate(() => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.style.visibility = 'visible';
      });
    });

    // Configuración del PDF
    const pdfOptions = {
      path: path.join(__dirname, '..', 'CV_Diego_Cruz_EN.pdf'),
      format: 'A4',
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm',
      },
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: false,
    };

    console.log('📝 Generating PDF...');
    await page.pdf(pdfOptions);

    const pdfPath = pdfOptions.path;
    const stats = fs.statSync(pdfPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    console.log(`📊 File size: ${fileSizeInMB} MB`);

    // Verify PDF was created and has content
    if (stats.size < 1000) {
      console.warn(
        '⚠️  The generated PDF seems very small, there might be a content issue'
      );
    }
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generatePDF().catch(console.error);
}

module.exports = generatePDF;
