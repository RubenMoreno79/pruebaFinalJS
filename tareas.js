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


const form = document.querySelector('#agregarTareas');
const inputaTarea = document.querySelector('#tarea');
const selectPrioridad = document.querySelector('#prioridad');
const inputBoton = document.querySelector('#botonGuardar');
const sectionTareas = document.querySelector('#listaTareas');

form.addEventListener('submit', getDataForm);

function getDataForm(event) {
    event.preventDefault();

    if (event.target.titulo.value !== "" && event.target.prioridad.value !== "") {
        const newTarea = {
            titulo: event.target.titulo.value,
            prioridad: event.target.prioridad.value
        }

        let obj = guardarData(listadoTareas, newTarea)
        if (obj.sucess) {
            pintarUnaTarea(newTarea, ulLista)
        }
    } else {
        alert = 'Los campos tienen que estar rellenos'
    }

    function guardarData(lista, objTarea) {

        let posicion = lista.findIndex(item => item.titulo === objTarea.titulo && item.prioridad === objTarea.prioridad)

        if (posicion === -1) {
            lista.push(objTarea);
            return { text: 'Tarea guarda correctamente', sucess: true }

        } else {
            return { text: 'Los campos no pueden estar vacios', sucess: false }
        }
    }
}



/* <!--  <h3>Estudiar JavaScritp</h3>
<!-- <div class="urgente">
       p Prioridad: urgentep
    </div> --> */



function pintarUnaTarea(objTarea, dom) {
    const div = document.createElement('div');
    div.textContent = objTarea.prioridad;

    const p = document.createElement('p');
    p.textContent = objTarea.titulo;

    const button = document.createElement('button');

    p.appendChild(div);
    dom.appendChild(div);
}




//TODO pintar una tarea en el dom: para pintar una tarea voy a crear las siguiente estructura
/*<div></div> - crear elemento div
<p></p> - crear elemento p
<button></button> - crear elemento button
- dentro del parrafo tengo que meter la tarea
- dentro del boton tengo que poner un event (addeventlistener) 'click' - llamar a borrar
- dentro del boton tengo que poner un texto que indique que asi borro una tarea (icono) 
- meto el parrafo y el boton dentro del div
- meto el div dentro de la seccion donde voy a pintar (append)






function pintarTodasTareas(lista, domElement) {
    lista.forEach(item => pintarUnaTarea(item, domElement))

}

pintarTodasTareas(listadoTareas, ulLista);