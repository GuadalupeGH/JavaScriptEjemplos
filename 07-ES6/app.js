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
// const years = [2000, 2005, 2008, 2012];
// //ES5
// var edad5 = years.map(function(el){
//     return 2022-el;
// }); 
// console.log(edad5);
// //ES6   
// let edad6 = years.map(el => 2019-el);
// console.log(edad6);

// edad6 = years.map((el, index) => `Edad ${index + 1}: ${2019-el} `);
// console.log(edad6);

// edad6 = years.map(
//     (el, index) => {
//         const yearActual = new Date().getFullYear();
//         const edad = yearActual - el;
//         return `Edad ${index + 1}: ${edad}`;
//     }
// );
// console.log(edad6);

// const cuadrado = (num) => num * num;
// console.log(cuadrado(3));

// const personas = [
//     {
//         nombre: 'Pablo',
//         edad: 20,
//     },
//     {
//         nombre : 'Ana',
//         edad: 25
//     },
//     {
//         nombre: 'Carlos',
//         edad: 30   
//     },
//     {
//         nombre: 'Pepe',
//         edad: 35
//     }
// ];

// // const menores30 = personas.filter(function(persona){
// //     return persona.edad < 35;
// // });
// const menores30 = personas.filter((persona) => persona.edad < 35);
// console.log(menores30);

// DESTRUCTURACION
//ES5 
// var datos = ['Pablo', 25];
// // var nombre = datos[0];
// // var edad = datos[1];

// //ES6
// var [nombre, edad] = ['Pablo', 25];
// console.log(nombre);
// console.log(edad);

// const persona = {
//     Nombre: 'Carlos',
//     Edad: 30
// }
// //los parametros tienen que tener el mismo nombre del 
// //objeto al que hace referencia
// const {Nombre, Edad} = persona;
// console.log(Nombre);
// console.log(Edad);
// //alias de los parametros
// const {Nombre: n, Edad: e} = persona;
// console.log(n);
// console.log(e);

// const calcMayoriaEdad = (year) => {
//   const edad = new Date().getFullYear() - year;
//   const mayoria = edad >=18 ? true : false;
//   return[edad, mayoria];  
// } 

// const [edad2, mayoria] = calcMayoriaEdad(2010); 
// console.log(edad2);
// console.log(`Es mayor de edad: ${mayoria} `);

//Mapas

// //creacion del mapa
// const datos = new Map();
// //agregar valores al mapa
// datos.set('nombre', 'lupita');
// datos.set('edad', 30),
// datos.set(1,'lupita@gmail.com');
// datos.set(2,'lup@gmail.com');
// datos.set('movil', 1234567890);

// //obtener valores del mapa mediate la key
// console.log(datos.get('nombre'));
// console.log(datos.get(2));
// console.log(datos.size);

// //eliminar valores del mapa
// datos.delete(2);
// //limpiar el mapa totalmente
// datos.clear();
// //imprimir todos los datos del mapa
// datos.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });

// Spread Operator
//Operador de propagación
var suma = function(a,b,c,d){
    return a+b+c+d;
}

var ope1 = suma(10,20,30,40);
console.log(ope1);

var valores = [10,20,30,40]; 
const ope2 = suma(...valores);
console.log(ope2);

//cuando se quieren agrupar los valores entre matrices

const rrhh = ['Pedro','Pablo','Ana'];
const contabilidad =['Felipe','Carlos','Maria'];


const empresa = [...rrhh,...contabilidad];
console.log(empresa);