
// switch buscha expresión/argumento correspondiente entre los case ofrecidos, y lo resuelve hasta encontrar un break.
// si no encuentra nada, resuelve en default. si no hay default, saltea el switch
/* expr = "Uvas"

switch (expr) {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }
  
  console.log("¿Hay algo más que te quisiera consultar?"); */

  /* var Animal = "Jirafa";

switch (Animal) {
  case "Vaca":
  case "Jirafa":
  case "Perro":
  case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
    break;
  case "Dinosaurio":
  default:
    console.log("Este animal no lo hará.");
} */



// tambien se pueden encadenar cases con diferentes resultados, partiendo del eslabon indicado por la variable de switch en forma de cascada sin importar el orden numerico
//(js permite combinar strings en las cases)
var num = 5;
var output = "Salida: ";
switch (num) {
  case 5:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 3:
    output += "Tu ";
  case 2:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 6:
    output += "Justo este no";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 6.");
}


  