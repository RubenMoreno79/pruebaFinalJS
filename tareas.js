//Filtro por prioridad y buscador de palabras


const form = document.querySelector('#agregarTareas');
const sectionTareas = document.querySelector('#listaDeTareas');

let miId = 4;

function borrarTarea(event) {
    const id = event.target.dataset.id;
    let resultado = listaTareas.findIndex((tarea) => tarea.idTarea === id);
    if (resultado !== -1) {
        listaTareas.splice(resultado, 1)
    }
    const elementoQueQuieroBorrar = event.target.parentNode
    const padreDelElementoQueQuieroBorrar = elementoQueQuieroBorrar.parentNode;
    padreDelElementoQueQuieroBorrar.removeChild(elementoQueQuieroBorrar);
    alert('Tarea eliminada');
}

function pintarUnaTarea(loQueQuieroPintar, dondeLoQuieroPintar) {
    const prioridad = loQueQuieroPintar.prioridad;
    const div = document.createElement('div');
    div.classList.add(prioridad);

    div.classList.add('d-flex', 'mb-2', 'p-3', 'rounded', 'justify-content-between');

    const p = document.createElement('p');
    p.textContent = loQueQuieroPintar.titulo;

    const button = document.createElement('button');
    button.textContent = 'X';
    button.classList.add('btn', 'btn-danger', 'ml-2');
    button.dataset.id = loQueQuieroPintar.idTarea;
    button.addEventListener('click', borrarTarea);

    div.append(p, button);
    dondeLoQuieroPintar.append(div);
}

function pintarTodasTareas(lista, domElement) {
    domElement.innerHTML = "";
    lista.forEach(tarea => pintarUnaTarea(tarea, domElement))
}

pintarTodasTareas(listaTareas, listaDeTareas)

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
    event.target.reset();
}

form.addEventListener('submit', getDataForm);


//filter prioridad === tarea.prioridad

const selectFiltroPrioridad = document.querySelector('#filtroPrioridad');

selectFiltroPrioridad.addEventListener('change', filtrarTareaPorPrioridad);

function filtrarTareaPorPrioridad(event) {
    event.preventDefault();
    const prioridadSeleccionada = event.target.value;
    const listaFiltrada = listaTareas.filter((tarea) => {
        return tarea.prioridad === prioridadSeleccionada;
    })
    if (listaFiltrada.length === 0) {
        alert('No existen tareas con esa prioridad')
    } else if (prioridadSeleccionada === "") {
        pintarTodasTareas(listaTareas, sectionTareas)
    } else {
        pintarTodasTareas(listaFiltrada, sectionTareas)
    }
}

