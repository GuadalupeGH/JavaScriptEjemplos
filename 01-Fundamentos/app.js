/*
***********************
DEFINICION DE VARIABLES
***********************
var primerNombre = "Lupita";
console.log(primerNombre);

var edad = 23;
var sueldo = 11000.99;
console.log(edad);

var tieneTrabajo = false;
console.log(tieneTrabajo);

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

tieneTrabajo = null;
console.log(tieneTrabajo);
*/
//CONVERSION DE TIPOS
/*
var primerNombre, edad, sexo, esSoltero;
primerNombre = "lupita";
edad = 23;
sexo = "f";
esSoltero = false;
console.log(
  "El nombre es: " +
    primerNombre +
    " y su edad es " +
    edad +
    ", ¿es soltero? " +
    esSoltero
);
edad = "veinte";
console.log(edad);
*/

//OPERADORES Matematicos (+,-,*,/)
/*
var edadLupita,
  edadPablo,
  diferencia,
  sumaEdades,
  yearActual,
  yearLupita,
  yearPablo;
edadLupita = 23;
edadPablo = 22;
yearActual = 2022;

diferencia = edadLupita - edadPablo;
console.log(diferencia);

sumaEdades = edadLupita + edadPablo;
console.log(sumaEdades);

yearLupita = yearActual - edadLupita;
console.log("Año en que nacio Lupita " + yearLupita);

yearPablo = yearActual - edadPablo;
console.log("Año en que nacio Pablo " + yearPablo);

console.log(yearActual * 5);
console.log(yearActual / 5);
*/
//OPERADOR typeof

//console.log(typeof edadLupita);

//OPERADORES UNARIOS ARTIMÉTICOS
/*
++ incremento
-- decremento
*/
/*
var edadDani = 20;
var edadPame = 15;

// edadDani++;
console.log(edadDani++);
console.log(--edadDani);
*/

//OPERADORES DE ASIGNACION =
// var a = 5;
// var b = 18;

// a = a + b;
// a += b;
// a -= b;
// a *= b;
// a /= b;
// var c;
// c = a % b;
// a %= b;

//EJECICIO PRACTICO
var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

var imcLuis, imcCarlos, comparacion;
imcLuis = pesoLuis / (alturaLuis * alturaLuis);
imcCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

console.log("IMC Luis " + imcLuis);
console.log("IMC Carlos " + imcCarlos);

comparacion = imcCarlos > imcLuis;
console.log("El IMC de Carlos es superior al de Luis: " + comparacion);
