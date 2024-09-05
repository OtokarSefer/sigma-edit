const readline = require('node:readline');

const info = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

info.question("Sisesta nimi: ", (nimi) => {
  info.close();

  if (nimi.slice(-1) !== "e") {
    console.log("Pole ilmselt leedulanna perekonna nimi....");
  } else {
    if (nimi.slice(-2) === "ne") {
      console.log("Abielus");
    } else if (nimi.slice(-2) === "te") {
      console.log("Vallaline");
    } else {
      console.log("Määramatta");
    }
  }
});