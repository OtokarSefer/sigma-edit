const readline = require('node:readline')
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
line.question("mitu ringi: ", ringid => {
    let sum = 0;
    for (let i = 2; i <= ringid; i += 2) {sum += i}
    console.log("Saadavate porgandite koguarv on " + sum.toString())
    line.close()
})