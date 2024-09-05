const readline = require('node:readline')
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,})

line.question("vanus: ", vanus => {
line.question("sugu: ", sugu => {
line.question("treeningu tüübi (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening): ", tüüp => {
let pulsmax = 0
if (sugu == "n") {pulsmax = (206 - (vanus * 0.88))}
else {pulsmax = (220 - vanus)}
let pulsmin = 0
if (tüüp = "1") {pulsmax = (pulsmax*0.5), pulsmin = (pulsmax*0.7)}
else if (tüüp == "2") {pulsmax = (pulsmax*0.7), pulsmin = (pulsmax*0.8)}
else if (tüüp == "3") {pulsmax = (pulsmax*0.8), pulsmin = (pulsmax*0.87)}
console.log("Puls peaks olema "+Math.round(pulsmin)+" kuni "+Math.round(pulsmax))
line.close()
})
})
})


