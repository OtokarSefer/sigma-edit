const readline = require('node:readline');
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,});

line.question("anna number", alus => {
line.question("Anna astendaja", astendaja => {
    let lause = alus ** astendaja
    console.log(`${lause}`); 
    line.close();
})
});