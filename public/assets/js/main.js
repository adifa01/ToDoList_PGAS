"use strict"
import {
  createList,
  deleteList,
  displayAllLists,
  updateList,
} from "./controllerList.js"

let listEl = document.getElementById("list")
let priorityEl = document.getElementById("priority")
// let inputTaskEl = document.getElementById("")
let btnAddTasKEl = document.getElementById("btnAddTask")
let btnOpenAddListEL = document.getElementById("btnOpenAddList")
let btnAddListEl = document.getElementById("btnAddList")
let tabPendingEl = document.getElementById("tabPending")
let tabCompletedEl = document.getElementById("tabCompleted")
let btnCollapsePending = document.getElementById("btnCollapsePending")
let btnCollapseFinish = document.getElementById("btnCollapseFinish")
let chevronPending = document.getElementById("chevronPending")
let chevronFinish = document.getElementById("chevronFinish")
let listTaskPending = document.getElementById("listTaskPending")
let listTaskFinish = document.getElementById("listTaskFinish")
// let btnsTrashList = document.querySelectorAll(".fa-trash-can")
let btnsTrashList = document.getElementsByClassName("fa-trash-can")


// let nameListEl = listEl.value
// let valuePriorityEl = priorityEl.value

/**
 * OPEN MODAL ADD LIST
 */
const openModal = () => {
  let modalAddListEL = document.getElementById("modalAddListEl")
  modalAddListEL.classList.toggle("display")
}

// btnOpenAddListEL.addEventListener("click", openModal)
btnAddListEl.addEventListener("click", () => {
  createList("courses", "low", "null")
  btnsTrashList = document.getElementsByClassName("fa-trash-can")
})

// collapse //
btnCollapsePending.addEventListener("click",()=>{
  chevronPending.classList.toggle("rotate")
  listTaskPending.classList.toggle("display")
})
btnCollapseFinish.addEventListener("click",()=> {
  chevronFinish.classList.toogle("rotate")
  listTaskFinish.classList.toogle("display")
} )