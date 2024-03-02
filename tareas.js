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

    // Agregar clases de Bootstrap
    div.classList.add('d-flex', 'mb-2', 'p-3', 'rounded', 'justify-content-between'); // Estilo de tarjeta con margen y relleno

    const p = document.createElement('p');
    p.textContent = loQueQuieroPintar.titulo;

    // Agregar clases de Bootstrap al botón
    const button = document.createElement('button');
    button.textContent = 'X';
    button.classList.add('btn', 'btn-danger', 'ml-2'); // Estilo de botón de peligro con margen izquierdo
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