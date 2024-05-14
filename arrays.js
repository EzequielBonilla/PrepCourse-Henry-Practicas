// var listaDeCompras = [];
// listaDeCompras [3] = "tomates";
// listaDeCompras [1] = "lechuga"

// console.log(listaDeCompras.length)
// listaDeCompras[1]

// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray)

// var colores = ["amarillo", "azul"];
// colores.push("rojo"); //agrega al final
// colores.unshift("verde") // agrega al principio
// colores.pop() //saca el último
// colores.shift() //saca el primero
// console.log(colores)

// var pintores = ["Picasso", "Velazques", "Van Gogh", "Dali"];
// var incluyeDali = pintores.includes("Dali");
// console.log(incluyeDali); //permite saber si se encuentra un elemento

// var numeros = [10, 6, 8, 9];
// var cumpleCondicion = numeros.every((num) => {
//     return num>5;
// });
// console.log(cumpleCondicion) //verifica si todos los elementos cumplen una condicion

var palabra = "Henri";
var palabraSeparada = palabra.split(""); //separa todos los caracteres o separa cada vez que encuentre lo que va entre comillas
palabraSeparada.pop();
palabraSeparada.push("y");
var palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);
 