const readline = require('node:readline')
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,})

function getRandomInt(max) {
    return Math.floor(Math.random() * max)} 

line.question("täringute arv: ", arv => {
    for (let step = 0; step < Number(arv); step++) {
        let na = getRandomInt(7) 
        if (na === 0) {step -=1}
        else {console.log(na.toString())}  
        }  
    line.close()
})