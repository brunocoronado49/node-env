const fs = require('fs');

const content = fs.readFileSync('react.md', 'utf8');
const wordCount = content.split(' ');
const reactWordCount = content.match(/react/gi);

console.log('Palabras:', wordCount.length);
console.log('Palabras React:', reactWordCount.length);
