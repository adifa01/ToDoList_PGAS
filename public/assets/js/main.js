"use strict"
import {
  createList,
  displayAllLists,
  updateList,
} from "./controllerList.js"

let listEl = document.getElementById("list")
let priorityEl = document.getElementById("priority")
let inputTaskEl = document.getElementById("")
let btnAddTasKEl = document.getElementById("btnAddTask")
let btnOpenAddListEL = document.getElementById("btnOpenAddList")
let btnAddListEl = document.getElementById("btnAddList")
let tabPendingEl = document.getElementById("tabPending")
let tabCompletedEl = document.getElementById("tabCompleted")


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
btnAddListEl.addEventListener("click", () =>
  createList("courses", "low", "null")
)
