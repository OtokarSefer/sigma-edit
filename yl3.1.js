const readline = require('node:readline')
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,})

line.question("mitu korda ärgata", num => {
    for (let step = 0; step < Number(num); step++) {
        console.log("Ärka!")}
    line.close();
})
