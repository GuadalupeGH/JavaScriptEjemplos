// function bienvenido() {
//   return "Hola bienvenido a la sección de funciones";
// }
// var mensaje = bienvenido();
// console.log(mensaje);

// //Partes de una funcion
// //entradas(argumentos), código, salida

// function cuadradoNumero(num) {
//   var resultado = num * num;
//   return resultado;
// }
// var num = 3;
// var valor = cuadradoNumero(num);
// console.log(valor);
// console.log(cuadradoNumero(5));
// // cuad{radoNumero(num);
// // cuadradoNumero(5);}

// function convertirFAHaCelsius(gradoFah) {
//   var celsius = ((gradoFah - 32) * 5) / 9;
//   return celsius;
// }
// var tempUno = convertirFAHaCelsius(32);
// var tempDos = convertirFAHaCelsius(68);
// console.log(tempUno);
// console.log(tempDos);
// function calcularEdad(yearNacimiento) {
//   return 2022 - yearNacimiento;
// }

// var edad1 = calcularEdad(1999);

// var edad2 = calcularEdad(2006);
// var edad3 = calcularEdad(2002);
// console.log(edad1);
// console.log(edad2);
// console.log(edad3);

// function calcularJubil(year, nombre) {
//   var edad = calcularEdad(year);
//   var jubilacion = 65 - edad;
//   var respuesta =
//     "A " + nombre + "le faltan " + jubilacion + " años para jubilarse";
//   return respuesta;
// }

// var resp = calcularJubil(1999, "Maria Guadalupe");
// console.log(resp);
// funcion se maneja como una expresion
// var nombre;
// var prueba = function (n) {
//   return "Hola " + n;
// };
// console.log(prueba(nombre));

// var a;
// a = null;

// var valorNulo = function (a) {
//   return a;
// };

// console.log(valorNulo(a));

//Argumentos por defecto
// var sumar = function (a = 5, b = 3, c = 3) {
//   return a + b + c;
// };

// console.log(sumar());

// Templates string
// var nombre = "Lupita";
// var a = 5;
// var b = 10;
// console.log(`La suma ${a + b}`);
var ejercicio = function (nombre, cantidadResPositivo, cantidadResNegativo) {
  var porcentajePositivo, porcentajeNegativo, respuesta;
  porcentajePositivo = (cantidadResPositivo * 100) / 100;
  porcentajeNegativo = (cantidadResNegativo * 100) / 100;
  if (porcentajePositivo > 90) {
    respuesta = "A";
  } else {
    if (porcentajePositivo >= 70 && porcentajePositivo <= 89) {
      respuesta = "B";
    } else {
      if (porcentajePositivo >= 45 && porcentajePositivo <= 69) {
        respuesta = "C";
      } else {
        respuesta = "D";
      }
    }
  }
  return `${nombre} con ${cantidadResNegativo} respuestas negativas y ${cantidadResPositivo} respuestas postivas tiene un score de respuestas postivas de ${respuesta}`;
};
console.log(ejercicio("Lupita", 75, 25));
