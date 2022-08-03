// -------------------------------------------
// Projet 4 - Todo list
// ------------------------------------------

// variable

const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");
const inputTask = document.querySelector("#input-task");

// eventlistener pour le bouton + (ajouter une tache)


addTask.addEventListener("click", () =>{

    let task = document.createElement("div");//jecrée une div
    task.classList.add("task");//j'ajoute une classe "task" à ma div

    let li = document.createElement("li");//je crée une balise li
    li.innerText = `${inputTask.value}`;//je recupére la valeur de l'input

    task.appendChild(li);//ecela rajoute une balise li au sein de madiv

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add(`check-task`);
    
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteBtn.classList.add(`delete-task`);
    task.appendChild(deleteBtn)

    if(inputTask.value === ""){
        alert("veuillez rentrer une tache")

    } else {
        taskContainer.appendChild(task);
    }



    inputTask.value ="";//permet de liberer le champ une fois la tache ajoutee

    checkBtn.addEventListener("click",( )=>{
        // checkBtn.previousSibling.style.textDecoration = "line-through";
        // li.style.textDecoration = "line-through"
        li.classList.toggle("toggle-task");
    })

    deleteBtn.addEventListener("click",() =>{
        deleteBtn.parentElement.remove();
    })

})

