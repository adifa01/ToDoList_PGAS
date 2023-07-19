/**
 * controllerList.js
 * Date: 2023-07-18
 */

export const createList = (nameList, priority) => {
    let listsEl = document.getElementById("lists")
  
    let list_id = `list_${Date.now()}`
  
    let liEl = document.createElement("li")
    liEl.id = list_id
  
    let linkEl = document.createElement("a")
    linkEl.href = "./public/assets/pages/task.html"
    liEl.appendChild(linkEl)
  
    let articleEl = document.createElement("article")
    if (priority == "high") {
      articleEl.classList.add("high")
    } else if(priority == "medium") {
      articleEl.classList.add("medium")
    } else {
      articleEl.classList.add("low")
    }
    linkEl.appendChild(articleEl)
  
    let div1El = document.createElement("div")
    let pEl = document.createElement("p")
    pEl.textContent = nameList
    let i1El = document.createElement("i")
    i1El.classList.add("fa-regular", "fa-heart")
    let i2El = document.createElement("i")
    i2El.classList.add("fa-solid", "fa-pencil")
    let i3El = document.createElement("i")
    i3El.classList.add("fa-regular", "fa-trash-can")
    div1El.appendChild(pEl)
    div1El.appendChild(i1El)
    div1El.appendChild(i2El)
    div1El.appendChild(i3El)
    articleEl.appendChild(div1El)
  
    let div2El = document.createElement("div")
    div2El.classList.add("progressBar-wrapper")
    let barEl = document.createElement("div")
    barEl.classList.add("progressBar")
    barEl.style.width = "0%"
    div2El.appendChild(barEl)
  
    articleEl.appendChild(div2El)
    listsEl.appendChild(liEl)
    console.log(liEl)
  }
  
  export const updateList = (list_id, typeEditList) => {
    console.log("update list")
  }
  
  export const deleteList = (list_id, nameList) => {
    console.log("delete list")
  }
  
  export const displayAllLists = (category) => {
    console.log("display list")
  }
  