"use strict";

let tasks = []; // Usar let para poder reasignar al cargar desde localStorage
let taskListUL;
let taskInput;

// --- Funciones para localStorage ---
function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function loadTasks() {
    taskListUL = document.getElementById("taskList");
    taskInput = document.getElementById("taskInput");

    if (!taskListUL || !taskInput) {
        console.error("No se pudieron encontrar los elementos taskList o taskInput en el DOM.");
        return;
    }

    const storedTasks = localStorage.getItem('todoTasks');
    if (storedTasks) {
        try {
            tasks = JSON.parse(storedTasks);
        } catch (e) {
            console.error("Error al parsear tareas desde localStorage:", e);
            tasks = []; 
        }
    }
    renderAllTasks();
}

// --- Funciones Principales de la Aplicación ---

function renderAllTasks() {
    if (!taskListUL) { // Si taskListUL no está inicializado (ej. si se llama antes de loadTasks)
        console.error("taskListUL no está definido. Asegúrate de que loadTasks se ejecute primero.");
        return;
    }
    taskListUL.innerHTML = ""; // Limpiar la lista actual en el DOM

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        // El span contendrá el texto y se encargará del toggle
        const span = document.createElement("span");
        span.textContent = task.name;
        span.onclick = () => toggleComplete(index); // Llamar con el índice

        // Contenedor para los botones
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => deleteTask(index); // Llamar con el índice

        buttonsDiv.appendChild(deleteButton);

        li.appendChild(span);
        li.appendChild(buttonsDiv);

        if (task.complete) {
            li.classList.add("completed"); // Aplica la clase al <li> completo
        }
        taskListUL.appendChild(li);
    });
}

// Esta función será llamada por el botón en el HTML (onclick="addTask()")
// eslint-disable-next-line no-unused-vars
function addTask() {
    if (!taskInput) { // Si taskInput no está inicializado
        taskInput = document.getElementById("taskInput");
        if(!taskInput) {
            console.error("taskInput no está definido.");
            return;
        }
    }
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ name: taskText, complete: false });
        taskInput.value = ""; // Limpiar input
        saveTasks();
        renderAllTasks();
    } else {
        alert("Por favor, ingresa una tarea.");
    }
    // console.log(tasks); // Opcional para depuración
}

function deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1); // Eliminar la tarea del array por su índice
        saveTasks();
        renderAllTasks();
    } else {
        console.error("Índice de tarea inválido para eliminar:", taskIndex);
    }
}

function toggleComplete(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].complete = !tasks[taskIndex].complete; // Alternar estado
        saveTasks();
        renderAllTasks(); // Volver a renderizar para mostrar el cambio (ej. clase 'completed')
    } else {
        console.error("Índice de tarea inválido para alternar:", taskIndex);
    }
}

// --- Inicialización ---
// Asegúrate de que el DOM esté cargado antes de intentar manipularlo y cargar tareas.
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Cargar tareas al iniciar
});