const readline = require('node:readline');
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,});

line.question("Sisesta väline temperatuur: ", temp => {
    if (Number(temp) > 4){console.log("Teel ei ole jää ohtu.")}
    else {console.log("Teel on jää oht!")}  
    line.close();
});