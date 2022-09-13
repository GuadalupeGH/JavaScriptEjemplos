//Objetos
// definicion del objeto
// let miLibroA = {
//     titulo: 'El libro de JavaScript',
//     autor: 'Lupita Garcia',
//     paginas: 400,
//     publicado: false
// }

// let miLibroB ={
//     titulo: 'Programacion en PHP',
//     Autor: 'Lupita Garcia',
//     paginas: 700,
//     publicado: true
// }

// console.log(miLibroA);
// //mostrar una propiedad en especifico
// console.log(miLibroA.paginas);
// //template string
// console.log(`${miLibroA.titulo} creado por ${miLibroA.autor}`);
// miLibroA.paginas = 500;
// console.log(miLibroA.paginas);

// let getresumen = (libro) => {
//     return{
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`,
//     }
// };

// let libroAResumen = getresumen(miLibroA);
// let libroBResumen = getresumen(miLibroB);


// console.log(libroAResumen.resumen);
// console.log(libroBResumen.resumenPaginas);

// console.log(libroAResumen.resumen);
// console.log(libroBResumen.resumenPaginas);


// let persona = {
//     nombre: 'Guadalupe Garcia',
//     edad: 23,
//     ciudad: 'Apaseo el Grande'
// }

// persona.edad = 25;
// console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`)
// console.log(persona);


//Referencias de objetos 

// let persona = {
//     nombre: 'Lupita',
//     edad: 30,
//     sueldo: 1200
// }

// let otraPersona = persona;
// otraPersona.sueldo = 1500

// console.log(otraPersona);
// let cambiarSueldo = (p, monto) => {
//     p.sueldo = p.sueldo + monto;
//     // console.log(p);
// }
// cambiarSueldo(persona, 500);
// console.log(otraPersona);
// console.log(persona);

//Metodos
//metodo a un objeto
// let persona = {
//     nombre: 'Lupita',
//     edad: 30,
//     sueldo: 1200,
//     metodoPrueba: function(){
//         // console.log('Escribiendo desde el metodo nuevo');
//         return 'Resultado desde prueba';
//     },
//     cambiarEdad: function(e){
//         this.edad = this.edad + e;
//     }
// }

// let result = persona.metodoPrueba();
// console.log(result);
// persona.cambiarEdad(3);
// console.log(persona.edad);

//Objeto String
