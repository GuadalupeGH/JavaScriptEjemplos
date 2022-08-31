// var nombre = "pablo";
// var estadoCivil = "soltero";
// var estaCasado = true;

// if (estaCasado) {
//   console.log(nombre + " esta casado");
// } else {
//   console.log(nombre + " esta soltero");
// }

//Sentencias condicionales

// var nombre = "Pablo";
// var edad = 7;

// // edad < 12 es un niño
// // edad > 11, es < 18, es una adolescente
// // edad >17, es < 60, es un adulto
// // edad >60 es un anciano

// if (edad < 12) {
//   console.log(nombre + " es un niño");
// } else if (edad > 11 && edad < 18) {
//   console.log(nombre + " es un adolescente");
// } else if (edad > 17 && edad < 60) {
//   console.log(nombre + " es un adulto");
// } else {
//   console.log(nombre + "Es una anciano");
// }

//Operador ternario
// var nombre = "Pablo";
// var edad = 15;

// edad >= 18
//   ? console.log(nombre + " es mayor de edad")
//   : console.log(nombre + " es menor de edad");

//Sentencia swithc

// var mes = 5;
// switch (mes) {
//   case 1:
//     console.log("Enero");
//     break;
//   case 2:
//     console.log("Febrero");
//     break;
//   case 3:
//     console.log("Marzo");
//     break;
//   case 4:
//     console.log("Abril");
//     break;
//   default:
//     console.log("Mes no cons iderado");
//     break;
// }

//Sentencia FOR
// for (var i = 10; i >= 0; i--) {
//   console.log(i);
// }

//Sentencia WHILE
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//Sentencia DO WHILE
// var i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//Valores verdaderos y falsos

//Valores falsos:undefined, null, 0, ''
//Valores verdaderos: Not valores falses

// var edad;
// edad = 10;

// if (edad) {
//   console.log("variable definida");
// } else {
//   console.log("variable no definida");
// }

// //Operadores de igualdad

// if (edad != 10) {
//   console.log("variable con coersion");
// } else {
//   console.log("variable sin coersion");
// }

var promedioMaria = (12 + 18 + 10) / 3;
var promedioPablo = (14 + 8 + 16) / 3;

if (promedioMaria > promedioPablo) {
  console.log("Maria tiene mayor promedio que Pablo");
} else {
  console.log("Pablo tiene mayor promedio que Maria");
}

if (promedioMaria > 13) {
  console.log("Maria ha Aprobado");
} else {
  console.log("Maria ha Reprobado");
}
if (promedioPablo > 13) {
  console.log("Pablo ha Aprobado");
} else {
  console.log("Pablo ha Reprobado");
}
