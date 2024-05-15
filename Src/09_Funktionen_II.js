/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Division durch 0 nicht möglich!"
const ERROR_STR_GEN = "Irgendwas ging schief!";






// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {

	switch (op) {
		case "+": // addition
			return add(a,b);
		case "-": // subtraktion
			return subtract(a,b);
		case "*": // multiplikation
			return multiply(a,b);
		case ":": // division
		case "/": 
			return divide(a,b);
		default:
			return ERROR_STR_GEN;
	}
	
}

// module: multiplication a * b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {
	if (b == 0) {
		return ERROR_STR_DIV; // Ausnahme
	} 
	
	return a / b; // Regel
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
    return a * b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  


/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


const prompt = require('prompt-sync')({sigint: true});
const zahl1 = prompt("Bitte Zahl 1 eingeben: ");
const zahl2 =  parseInt(prompt("Bitte Zahl 2 eingeben: ")); // "2" --> 2
const grundRechenArt = prompt("Bitte +, -, *, / eingeben: ");

function output(outputData) {
	console.log(outputData);
}

if (!isNaN(zahl1 || zahl2)) 
{
	switch (grundRechenArt) {
		case "+":
			output(Number(zahl1) + Number(zahl2));	
			break;
		case "-":
			output(Number(zahl1) - Number(zahl2));	
			break;
		case "*":
			output(Number(zahl1) * Number(zahl2));	
			break;
		case "/":
			if (zahl2 == 0) {	
				output("div by 0");
				break;			
			}
			output(Number(zahl1) / Number(zahl2));	
			break;
							
		default:
			output("Du hast leider keine richtige Eingabe getätigt!");	
			break;
	}
}
else{
	output("keine Zahl eingegeben!")
}