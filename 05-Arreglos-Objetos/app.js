// // arreglos

// var nombre = ["Pablo", "Ana", "Teresa", "Carlos"];
// var vegetales = new Array("Tomate", "Lechuga", "Zanahoria");

// console.log(nombre[1]);
// console.log(vegetales[1]);
// nombre[1] = "Lupita";
// console.log(nombre[1]);
// console.log(nombre.length);

// // OPERACIONES CON ARREGLOS
// var frutas = ["pera", "manzana", "uva", "sandia"];
// console.log(frutas);
// // for (let i = 0; i < frutas.length; i++) {
// //   console.log(frutas[i]);
// // }
// // frutas.forEach(function (elemento, indice, array) {
// //   console.log(elemento, indice);
// // });

// frutas.push("naranja");
// console.log(frutas);
// frutas.unshift("fresa");
// console.log(frutas);

// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// var posicion = frutas.indexOf("uva");
// console.log(posicion);

// frutas.splice(1, 2);
// console.log(frutas);

// Arreglos con elementos de diferentes tipos
// console.log(persona);

// CREACION DE OBJETOS LITERALES
// var persona = {
//   nombre: "Pablo",
//   apellido: "Marcial",
//   gustos: ["Natacion, Marvel, Musica"],
//   esCasado: true,
// };

// console.log(persona.nombre);
// console.log(persona["nombre"]);

// persona.esCasado = false;
// console.log(persona.esCasado);

// //Objetos con la sintaxis Object
// var persona2 = new Object();
// persona2.nombre = "Lupita";
// persona2.apellido = "Garcia";
// persona2["trabajo"] = "WebDeveloper";
// console.log(persona2);

//Metodos y Objetos
var persona = {
  //PROPIEDADES
  nombre: "Pablo",
  apellido: "Marcial",
  gustos: ["Natacion, Marvel, Musica"],
  trabajo: "Ingeniero",
  esCasado: true,
  yearNacimiento: 1999,
  //METODOS
  calcularEdad: function () {
    this.edad = 2022 - this.yearNacimiento;
  },
};

persona.calcularEdad();
console.log(persona);
