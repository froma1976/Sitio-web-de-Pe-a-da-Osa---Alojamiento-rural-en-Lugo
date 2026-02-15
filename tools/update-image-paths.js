import fs from 'fs';
import path from 'path';

const srcDir = 'src';

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

const extensions = ['.jsx', '.js', '.css'];

walk(srcDir, (filePath) => {
    if (extensions.includes(path.extname(filePath))) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Replace paths like /images/galeria/abc.jpg with /images/galeria/webp/abc.webp
        // Handles single and double quotes
        let newContent = content.replace(/\/images\/galeria\/([^'"\s]+)\.(jpg|jpeg|png)/g, '/images/galeria/webp/$1.webp');

        // Particular case for exterioir typo if it exists in filenames
        newContent = newContent.replace(/exterioir15/g, 'exterioir15'); // Keep as is if that's the filename in webp

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✔ Actualizado: ${filePath}`);
        }
    }
});
