/** 
 * controllerTask.js
 * Date: 2023-07-18
 */
export const createTask = (list_id, nameTask) => {
    let task_id = Date.now()
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
