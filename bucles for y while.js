/* var suma = 0; */
/* suma = suma +1
suma = suma +2
suma = suma +3
suma = suma +4

console.log(suma) */


/* for(var i=0; i<10; i++){
    suma = suma +1
    console.log(suma)
} */ //repite la formula segun el for, escalando el último resultado

/* for(var i=0; i<5; i++){
    suma = suma +i;
    console.log("Variable i: " + i);
    console.log("Variable suma: " + suma);
} */ //igual al anterior, pero incluye el resultado actual de for tomando el último resultado de suma

/* while(suma<5) {
    suma=suma+1
    console.log(suma)
} */

/* i=0
do {
    i += 1;
    console.log(i);
  } while (i < 5); */

/* var result = "resultado";
var i = 0;

do {
  i = i + 1;
  result = result + 1;
} while (i < 5);

console.log(i);
console.log(result);
 */
  
let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Generar un número aleatorio entre 1 y 10
let intentos = 0;
let respuesta;

while (respuesta !== numeroSecreto) {
    respuesta = 3 //parseInt(prompt("Adivina el número (entre 1 y 10):"));
    intentos++;

    if (respuesta === numeroSecreto) {
        console.log(`¡Correcto! El número secreto era ${numeroSecreto}. Has necesitado ${intentos} intentos.`);
    } else {
        console.log("Incorrecto. Intenta de nuevo.");
    }
}
