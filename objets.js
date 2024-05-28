// var deportes = {
//     conPelota: ["futbol", "basquet", "rugby"],
//     sinPelota: ["boxeo", "surf", "trekking"],
//     // todos los objetos respetan la regla par calve: valor o key: value
// };

// var persona = {
//     nombre: "Lucas",
//     edad: 26,
//     estudios: {
//         esProgramador: true
//     }
// };
// // tenemos Dot-Notation y Bracket-Notation
// console.log(persona.edad);

// persona.nombre = "Martín";
// console.log(persona.nombre);

// persona.edad = 32;
// console.log(persona.edad);


// var autos ={};
// autos.marcas = ["Ford", "Audi", "Ferrari"];
// delete autos.marcas
// console.log(autos);

// var misFunciones ={
//     saludar: function () {
//         console.log("Hola");
//     },
// };

// misFunciones.saludar();

// var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// // BRACKET-NOTATION

// atuendos["piernas" /* tiene que escribirse como string */] =  ["Bermudas", "Pantalones"];
// console.log(atuendos)

// var comidas ={};
// var diferenciaDeNotacioens = function (propUno, propDos) {
//     comidas[propUno] = ["Frutas", "Vegetales"];
//     comidas[propDos] = ["Hamburguesas", "Papas fritas"]; // sacando las comillas del bracket le indicamos que es la variable y no el nombre literal
// };
// diferenciaDeNotacioens("saludable", "noSaludable"); //solo cambia el parametro cuando uso bracket notation
// console.log(comidas)

var objeto = {};
var string = ["a", "a", "a", "a", "b", "b", "b", "c", "c",]
var i = 0
var letra

letra = string[i]
objeto[letra] += 1

console.log("letra " + letra)
console.log(objeto);