/** 
 * controllerTask.js
 * Date: 2023-07-18
 */
export const createTask = (list_id, nameTask) => {
    let taskEl = document.getElementById("listTaskPending")

    let task_id = `task_${Date.now()}`

    let liTaskEl = document.createElement("li")
    liTaskEl.id = task_id

    let articleTaskEl = document.createElement("article")
    
    liTaskEl.appendChild(articleTaskEl)
    
    let pTaskEl = document.createElement("p")
    let iTaskEl = document.createElement("i")
    iTaskEl.classList.add("fa-regular", "fa-circle")
    let labelTaskEl = document.createElement("label")
    let inputTask = document.createElement("input")
    inputTask.appendChild(labelTaskEl)
    let iTaskEl2 = document.createElement("i")
    iTaskEl2.classList.add("fa-regular", "fa-trash-can")
    console.log("create Task", task_id)
}

export const updateTask = (task_id, typeEditTask) => {
    console.log("update Task")
} 

export const deleteTask = (task_id, nameTask) =>{
console.log("delete Task")
}

export const displayAllTasks = (list_id)=> {
    console.log("display Task")
}
