"use strict";
// on recupere nos Querry selector
const btnSubmit = document.querySelector(".todo-btn");
const inputTask = document.querySelector(".todo-input");
const formTask = document.querySelector(".todo-form");
const taskList = document.querySelector(".todo-list");
const btnDeleteAll = document.querySelector(".todo-delete-all");
// On cree un tableau pour stocker toutes nos nouvelles taches
const tasks = JSON.parse(localStorage.getItem("task") || "[]");
// fonction qui sauvegarde les elements dans le local storage
const saveTask = () => {
    localStorage.setItem("task", JSON.stringify(tasks));
};
// ajouter les nouvelles tâche au démarrage du dom
window.addEventListener("DOMContentLoaded", () => {
    tasks.forEach(task => appendTask(task));
});
const handleSubmit = (e) => {
    e.preventDefault(); //cela evite à ma page de se rafraichir
    // Création d'un nouvel objet newtask
    const newTask = {
        date: new Date(),
        task: inputTask.value,
        completed: false
    };
    // Sauvergarde La tâche dans le local storage
    tasks.push(newTask);
    // ajout de la function appendTask
    appendTask(newTask);
    // sauvegarder l'envoie des tâches dans le local storage
    saveTask();
    // vider l'input
    inputTask.value = "";
};
// on va gere l'eventListener sur le form
formTask.addEventListener("submit", e => handleSubmit(e));
// fonction d'ajout d'une nouvelle tâche
const appendTask = (newTask) => {
    const newLi = document.createElement("li");
    const checkB = document.createElement("input");
    const btnDel = document.createElement("button");
    btnDel.classList.add("todo-delete-one");
    btnDel.textContent = "Supprimer";
    checkB.type = "checkbox";
    checkB.checked = newTask.completed;
    if (newTask.completed === true) {
        newLi.style.textDecoration = "line-through";
    }
    else {
        newLi.style.textDecoration = "none";
    }
    checkB.addEventListener("change", () => {
        //   console.log("verification");
        newTask.completed = checkB.checked;
        if (newTask.completed === true) {
            newLi.style.textDecoration = "line-through";
        }
        else {
            newLi.style.textDecoration = "none";
        }
        saveTask();
    });
    newLi.append(btnDel, newTask.task, checkB);
    taskList.prepend(newLi);
    btnDel.addEventListener("click", () => {
        newLi.remove();
        // localStorage.removeItem("task");
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].task === newTask.task) {
                tasks.splice(i, 1);
            }
        }
        saveTask();
    });
};
// bouton pour tout effacer
const clearTasks = () => {
    const confirmDel = confirm("Êtes vous sur de vouloir tout effacer?");
    if (confirmDel === true) {
        tasks.length = 0;
        saveTask();
        taskList.textContent = "";
    }
};
btnDeleteAll.addEventListener("click", clearTasks);
