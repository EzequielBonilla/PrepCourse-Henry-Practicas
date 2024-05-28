/* var suma = 0; */
/* suma = suma +1
suma = suma +2
suma = suma +3
suma = suma +4

console.log(suma) */


/* for(var i=0; i<10; i++){
    suma = suma +1
    console.log(suma)
} */ //repite la formula segun el for, escalando el último resultado sabiendo la cantidad de pasos/iteraciones

/* for(var i=0; i<5; i++){
    suma = suma +i;
    console.log("Variable i: " + i);
    console.log("Variable suma: " + suma);
} */ //igual al anterior, pero incluye el resultado actual de for tomando el último resultado de suma

/* while(suma<5) {
    suma=suma+1
    console.log(suma)
} */
// repite la formila escalando resultado pero sabieendo solo el limite, no la cantidad de rondas

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

//do while es igual a while pero imprime al menos un resultado. Por ejeplo passwords logins
  
/* let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Generar un número aleatorio entre 1 y 10
let intentos = 0;
let respuesta;

while (respuesta !== numeroSecreto) {
    respuesta = parseInt(prompt("Adivina el número (entre 1 y 10):"));
    // while solo corre  una iteracion con cada prompt y espera el proximo
    intentos++;

    if (respuesta === numeroSecreto) {
        console.log(`¡Correcto! El número secreto era ${numeroSecreto}. Has necesitado ${intentos} intentos.`);
    } else {
        console.log("Incorrecto. Intenta de nuevo.");
    }
}
 */

/* i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;

  console.log("Var i" + i)
  console.log ("var n" + n)
} */
// continue hace que corra la siguiente iteracion de un buble antes de seguir
// por ejemplo acá se saltea n+=i cuando i es igual a 3

i = 0
j = 20

/* checkiandj: while (i < 4) {
    console.log("i" + i + "<br>");
    i += 1;
  
    checkj: while (j > 4) {
        console.log("j" + j + "<br>");
      j -= 1;
      if (j % 2 == 0) continue checkj;
      console.log("j" + j + " is odd.<br>");
    }
    console.log("i final = " + i + "<br>");
    console.log("j final = " + j + "<br>");
  } */
  // este caso loopea checkea i y j, jta loppea hasta que se cumpla su falsedad y continua conn "i y j" saltando j por su falsedad


/* function comprobarBreak(x) {
  
  var i = 0;
  while (i < 6) {
    if (i == 3) break;
    i++;
    console.log("varii " + i)
  }
  console.log("vari " + i)
  console.log("varx " + x)
  console.log("i*x " + (i * x))
  return i * x;
}
comprobarBreak(2) */

//si la condición de break se cumple, salta al siguiente paso (o el etiquetado)

//bucles for of

const array = [1, 2, 3, 4, 5];
for (const number of array) {
  console.log(number);
}
// Salida: 1 2 3 4 5


const string = "hello";
for (const char of string) {
  console.log(char);
}
// Salida: h e l l o



