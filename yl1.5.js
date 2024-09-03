const ainepunkt = 26
const readline = require('node:readline');
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,});

line.question("Sisestage ainepunktide arv: ", ainePunktideArv => {
    line.question("Sisestage nädalate arv: ", nadalateArv => {
        let tunnid = ainepunkt * Number(ainePunktideArv)
        let tudndideNadalaJaotis = tunnid / Number(nadalateArv)
        let vastus = Math.round(tudndideNadalaJaotis)
        console.log(vastus.toString())
        line.close()})});
