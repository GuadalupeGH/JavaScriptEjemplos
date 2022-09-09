//ES5 - Variables
// var nombre5 ='Pablo';
// var edad5 = 35;
// console.log(nombre5);
// nombre5 = 'Carlos';
// console.log(nombre5);
// //ES6 - Variables
// const nombre6 = 'Pedro';
// let edad6 = 28;
// console.log(edad6);
// // nombre6 = ' lupis';
// edad6 = 30
// console.log(edad6);

//Bloque y alcance de variables
// let test;
// test = 10;
// function prueba(){
//     let test;
//     test = 15;
// }

// prueba();
// console.log(test);

// {
//     const a = 3;
//     const b = 4;
//     var c = 5;
// }
// console.log(a+b);
// // console.log(a+b);
// console.log(c);


//Templates Strings
// let nombre = 'Pablo';
// let apellido = 'Vazquez';
// const ciudad = 'Lima';
// const nacimiento = 1995;

// function calcularEdad(year){
//     return 2019- year;
// }

// //ES5
// console.log(nombre + ' '+ apellido + ', nacío en '+ ciudad + ', y su edad es '+ calcularEdad(nacimiento));
// //ES6
// console.log(`${nombre} ${apellido}, nacio en ${ciudad} y su edad es ${calcularEdad(nacimiento)} `);

// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);

// //repeat = repite una palabra el numero de veces que se 
// //le indique
// console.log(`${nombre} `.repeat(5));
// //includes = devuelver verdadero o falso si el 
// //parametro existe o no dentro de la cadena de texto
// console.log(nombreCompleto.includes('blo'));
// //startsWith = el comienzo de una cadena es igual al que se le esta mandando
// console.log(nombreCompleto.startsWith('Pe'));
// //endstWith = el final de una cadena es igual al que se le esta mandando
// console.log(nombreCompleto.endsWith('wez'));

//FUNCIONES FLECHA
//crea funciones dinamicas
const years = [2000, 2005, 2008, 2012];
//ES5
var edad5 = years.map(function(el){
    return 2022-el;
}); 

//ES6   
