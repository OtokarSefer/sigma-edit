const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage oma nimi: ", Nimi => {
  rl.question("Sisestage lubatud kiirus: ", lubatudKiirus => {
    rl.question("Sisestage tegelik kiirus: ", tegelikKiirus => {
      let trahv = 0;
      if (Number(tegelikKiirus) < Number(lubatudKiirus)) {
        console.log(Nimi + " sõitis lubatud kiirusega ega saa trahvi :)");
      } else {
        trahv = (Number(tegelikKiirus) - Number(lubatudKiirus)) * 3;
        if (trahv > 190) {
          trahv = 190;
        }
        console.log(Nimi + " sõitis " + (Number(tegelikKiirus) - Number(lubatudKiirus)).toString() + " km/h üle lubatud kiiruse ja saab selle eest " + trahv.toString() + " eurose trahvi. >:(");
      }
      rl.close();
    });
  });
});
