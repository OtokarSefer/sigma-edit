const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

rl.question("vali sitekoht 'ise' või 'loos'", (valik) => {
  valik = valik.trim();

  if (valik === "ise") {
    rl.question("vali kas 'aken' või 'muu'", (valik2) => {
      valik2 = valik2.trim();

      if (valik2 === "aken") {
        console.log("valisid aken");
      } else {
        console.log("valisite muu");
      }

      rl.close();
    });
  } else if (valik === "loos") {
    const randomChoice = getRandomInt(3);

    if (randomChoice === 0) {
      console.log("valis aken");
    } else {
      console.log("valis muu");
    }

    rl.close();
  }
});