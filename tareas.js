//TODO capturar input #tarea  HECHO
//TODO capturar select #prioridad   HECHO
//TODO capturar input #botonGuardar   HECHO
//TODO capturar section #listaTareas  HECHO

//TODO escuchar evento 'submit' del formulario (addeventlistener)  HECHO

//TODO capturo los datos del formulario(tarea)

//TODO guardar tarea que he capturado en el array(listaTareas) que tengo en data.js

//TODO comprobar si ha rellenado todo el formulario (condicion dentro de la funcion guardar=si la tarea o la prioridad estan vacias no lo guardo), pero si estan llenos lo guardo en el array

//TODO pintar una tarea en el dom: para pintar una tarea voy a crear las siguiente estructura
/*<div></div> - crear elemento div
<p></p> - crear elemento p
<button></button> - crear elemento button
- dentro del parrafo tengo que meter la tarea
- dentro del boton tengo que poner un event (addeventlistener) 'click' - llamar a borrar
- dentro del boton tengo que poner un texto que indique que asi borro una tarea (icono) 
- meto el parrafo y el boton dentro del div
- meto el div dentro de la seccion donde voy a pintar (append)
*/


const inputaTarea = document.querySelector('#tarea');
const selectPrioridad = document.querySelector('#prioridad');
const inputBoton = document.querySelector('#botonGuardar');
const sectionTareas = document.querySelector('#listaTareas');

form.addEventListener.addEventListener('submit', getDataForm);

function getDataForm(event) {




}