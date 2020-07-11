let fs = require('fs').promises;
let jsonFormat = require('json-format');

 
fs.readFile('./package.json', 'utf8') 
    .then(r => {
        console.log(r);
        let j = JSON.parse(r);
        console.log(j.bugs);
        fs.writeFile('./p.json', jsonFormat(j), 'utf8');
    })
    .catch(err => {
        console.log(err);
    })
