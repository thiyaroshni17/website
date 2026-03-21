const fs = require('fs');
const path = require('path');

const pagesDir = 'c:/Users/User/Desktop/website/frontend/src/pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let modifiedCount = 0;
const regex = /<span className="logo-name">\s*<span className="logo-highlight">esc<\/span>\s*<span className="logo-secondary">apeloop<\/span>\s*<\/span>/g;

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (regex.test(content)) {
        // Reset lastIndex
        regex.lastIndex = 0;
        const newContent = content.replace(regex, `<div className="logo-text-wrapper">
                        <span className="logo-name">
                            <span className="logo-highlight">esc</span>
                            <span className="logo-secondary">apeloop</span>
                        </span>
                        <span className="logo-tagline">TECH SOLUTIONS</span>
                    </div>`);
        fs.writeFileSync(filePath, newContent);
        modifiedCount++;
        console.log(`Modified ${file}`);
    }
});

console.log(`Successfully updated ${modifiedCount} files in pages.`);
