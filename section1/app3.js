const fs = require('fs');

const content = fs.readFileSync('react.md', 'utf8');
const wordCount = content.split(' ');
const reactWordCount = content.match(/react/ig);

console.log('Palabras:', wordCount.length);
console.log('Palabras React:', reactWordCount.length);

// TODO: Terminar la seccion 2: clase - orden de ejecucion
