const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images/galeria');
const outputDir = path.join(__dirname, '../public/images/galeria/webp');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar una imagen
async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .webp({ 
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const savings = ((originalSize - info.size) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Optimizado: ${(info.size / 1024).toFixed(2)}KB`);
    console.log(`  Ahorro: ${savings}%`);
    console.log('');
    
    return info.size;
  } catch (error) {
    console.error(`✗ Error procesando ${path.basename(inputPath)}:`, error.message);
    return 0;
  }
}

// Procesar todas las imágenes
async function processAllImages() {
  const files = fs.readdirSync(imagesDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));
  
  console.log(`Procesando ${files.length} imágenes...\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);
    
    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;
    
    const optimizedSize = await optimizeImage(inputPath, outputPath);
    totalOptimized += optimizedSize;
  }
  
  console.log('========================================');
  console.log('RESUMEN:');
  console.log(`Total original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimizado: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Ahorro total: ${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%`);
  console.log('========================================');
}

processAllImages().catch(console.error);
