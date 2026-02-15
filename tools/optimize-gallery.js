import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images/galeria';
const outputDir = 'public/images/galeria/webp';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
    const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

    console.log(`Encontrados ${files.length} archivos para optimizar...`);

    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const fileName = path.parse(file).name;
        const outputPath = path.join(outputDir, `${fileName}.webp`);

        try {
            await sharp(inputPath)
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80, effort: 6 })
                .toFile(outputPath);

            const stats = fs.statSync(outputPath);
            console.log(`✔ Optimizado: ${file} -> ${fileName}.webp (${(stats.size / 1024).toFixed(2)} KB)`);
        } catch (err) {
            console.error(`✘ Error con ${file}:`, err);
        }
    }
}

optimizeImages();
