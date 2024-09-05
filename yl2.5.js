const readline = require('node:readline');
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,});

line.question("kirja suurus(0.1...inf): ", mb => {
line.question("teema pealkiri: ", pealkiri => {
line.question("kas kaasas on fail (y/n): ", fail => {
line.close();

if (pealkiri == ""){console.log("Rämps post")}
else if (Number(mb) > 1){if (fail = "n"){console.log("Rämps post")}}
else {console.log("post ei ole rämps") } 
})
})
});