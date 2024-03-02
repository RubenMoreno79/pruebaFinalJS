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


/*boton guardar y prioridad*/
const form = document.querySelector('#agregarTareas');
const sectionTareas = document.querySelector('#listaDeTareas');

let miId = 4;

function pintarUnaTarea(loQueQuieroPintar, dondeLoQuieroPintar) {



}



function guardarTareaEnListaTareas(tarea) {
    const titulo = tarea.titulo;
    const prioridad = tarea.prioridad;
    if (titulo === "" || prioridad === "") {
        alert('No puedes dejar ningún campo vacío')
    } else {
        listaTareas.push(tarea)
        miId++
    }

    pintarUnaTarea(tarea, sectionTareas);

}


function getDataForm(event) {
    event.preventDefault();

    const descripcionTarea = event.target.tarea.value;
    const descripcionPrioridad = event.target.prioridad.value

    const nuevaTarea = {
        idTarea: miId,
        titulo: descripcionTarea,
        prioridad: descripcionPrioridad
    }

    guardarTareaEnListaTareas(nuevaTarea);
}

form.addEventListener('submit', getDataForm);