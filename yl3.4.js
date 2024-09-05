const readline = require('node:readline')
const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

let oun = 14

line.question("Mitu pöialpoissi tahab õunu: ", num => {
    if (num > 7) {
        console.log("Ei saa olla rohkem kui 7")
    } else if (num == 0 || isNaN(num)) {
        console.log("Keegi ei taha ouna")
    } else {
        let jagatudOunad = 0
        for (let step = 0; step < Number(num); step++) {
            let uvk = getRandomInt(2) + 1 // Genereerib arvu 1 või 2
            console.log(`Pöialpoiss ${step + 1} saab ${uvk} õuna`)
            jagatudOunad += uvk
        }
        console.log(`Lumivalgele jäi: ${oun - jagatudOunad} õuna`)
    }

    line.close()
})
