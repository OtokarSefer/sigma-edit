const readline = require('node:readline')
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,})
function getRandomInt(max) {
    return Math.floor(Math.random() * max)} 
let oun = 14

line.question("mitu pöialpoissi: ", num => {
if (num > 7){console.log("ei saa olla rohkem kui 7")}
else if (num == 0 || isNaN(num)) {console.log("keegi ei taha ouna")}
else {
    for (let step = 0; step < Number(num); step++) {
        let uvk = getRandomInt(3)
        if (uvk == 0) {num =+1}
        else{        
            oun -= uvk
            console.log(oun + " alles. pöialpoiss votab: " + uvk)} 
    } 
    console.log("lumivalgele jäi: " + oun)
    } 


    line.close();
})
