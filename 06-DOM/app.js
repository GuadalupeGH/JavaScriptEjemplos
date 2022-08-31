// EXAMINANDO EL DOM
// console.dir(document);
// console.log(document.URL);
// document.title = "Prueba";
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.images);
// console.log(document.links);

// getElementById();
// console.log(document.getElementById("main-header"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// // console.log(headerTitle);
// // console.log(header);
// headerTitle.textContent = "Hola lupita, tu puedes";
// headerTitle.innerText = "Adios";
// headerTitle.innerHTML = "<h3> Prueba </h3>";

//getElementsByClassName()
// var items = document.getElementsByClassName("list-group-item");
// console.log(items[3]);
// items[0].textContent = "Prueba";

// getElementsByTagName
// var items = document.getElementsByTagName("li");
// items[2].textContent = "Prueba 02";

// querySelector

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";
// var input = document.querySelector("input");
// input.value = "Hola mundo";

// var submit = document.querySelector('input[type ="submit"]');
// submit.value = "Enviar";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// querySelectorAll
// var items = document.querySelectorAll(".list-group-item");
// items[2].style.color = "red";

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Prueba";

// var impar = document.querySelectorAll("li:nth-child(odd)");
// var par = document.querySelectorAll("li:nth-child(even");
// for (let i = 0; i < impar.length; i++) {
//   impar[i].style.backgroundColor = "#ccc";
//   par[i].style.backgroundColor = "#f4f4f4";
// }

//ParentNode
// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// var main = itemList.parentNode;
// main.style.backgroundColor = "#f4f4f4";

// console.log(main.parentNode.parentNode);

// ParentElement
// var itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// var main = itemList.parentElement;
// main.style.backgroundColor = "#f4f4f4";

// console.log(main.parentElement.parentElement);

// childNodes
// var itemList = document.querySelector("#items");
// console.log(itemList.childNodes);
//children
// console.log(itemList.children);

//firstChild
// var itemList = document.querySelector("#items");
// // console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Prueba";
// //lastChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Prueba";

//previousSinling
// var itemList = document.querySelector("#items");
// console.log(itemList.previousSibling);

// //previousElementSibling
// console.log(itemList.previousElementSibling);

// //previousElementSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

//createElement
// var nuevoDiv = document.createElement("div");
// nuevoDiv.className = "hola";
// nuevoDiv.id = "div-hola";
// nuevoDiv.setAttribute("title", "Hola Mundo");
// console.log(nuevoDiv);

// // createTextNode
// var nuevoText = document.createTextNode("Hola Mundo");
// //apregar un nodo hijo al nodo padre
// nuevoDiv.appendChild(nuevoText);
// console.log(nuevoDiv);

// var contenedor = document.querySelector("header .container");
// console.log(contenedor);

// var h1 = document.querySelector("h1");
// console.log(h1);

// contenedor.insertBefore(nuevoDiv, h1);

//FUNCIONES
// document.getElementById("boton").addEventListener("click", function () {
//   console.log("Click 2");
// });
// document.getElementById("boton").addEventListener("click", hacerClick);
// // document.getElementById("boton").addEventListener('');
// function hacerClick() {
//   //   console.log("Usted hizo click");
//   document.getElementById("header-title").textContent = "Texto cambiado";
// }

//Agregar un elemento a la lista
var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");

form.addEventListener("submit", agregarItem);

function agregarItem(e) {
  e.preventDefault(); //cancelar el evento si este es cancelable sin detener el resto del funcionamineto del evento -- puede ser llamado nuevamente
  var nuevoItem = document.getElementById("item").value;

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(nuevoItem));

  var botonDel = document.createElement("button");
  botonDel.className = "btn btn-danger btn-sm float-right";
  botonDel.appendChild(document.createTextNode("X"));
  li.appendChild(botonDel);
  console.log(li);

  lista.appendChild(li);
}
