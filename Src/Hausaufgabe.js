
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie Ã¼ber eine Prompt-Anforderung eine Zahl ein.
Geben Sie Ã¼ber eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});


/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let sunnand =  parseFloat(prompt("Zahl?: "));
let second =  parseFloat(prompt("Zahl?: "));
let summe = sunnand + second;
console.log("Die Summe der Zahlen ist", summe);
In JavaScript werden Benutzereingaben mit prompt standardmäßig als Zeichenfolgen zurückgegeben. 
Wenn Sie also zwei Zahlen eingeben, werden sie als Zeichenfolgen interpretiert, nicht als Zahlen. 
Wenn Sie zwei Zeichenfolgen mit dem +-Operator verbinden, führt dies zur Konkatenierung der Zeichenfolgen, nicht zur Addition der Zahlen.
Um die Zeichenfolgen in Zahlen umzuwandeln, können Sie die Funktion parseInt oder parseFloat verwenden. 