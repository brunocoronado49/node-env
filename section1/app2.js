const fs = require('fs');

const data = fs.readFileSync('react.md', 'utf8');
const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('angular.md', newData);
