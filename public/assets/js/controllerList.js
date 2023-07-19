/**
 * controllerList.js
 * Date: 2023-07-18
 */

export const createList = (nameList, priority) => {
    let listsEl = document.getElementById("lists")
  
    let list_id = `list_${Date.now()}`
  
    let liEl = document.createElement("li")
    liEl.id = list_id
  
    
  
    let articleEl = document.createElement("article")
    if (priority == "high") {
      articleEl.classList.add("high")
    } else if(priority == "medium") {
      articleEl.classList.add("medium")
    } else {
      articleEl.classList.add("low")
    }
    liEl.appendChild(articleEl)
  
    let div1El = document.createElement("div")
    
    let linkEl = document.createElement("a")
    linkEl.href = `./public/assets/pages/task.html?list_id=${list_id}`
    div1El.appendChild(linkEl)
    let pEl = document.createElement("p")
    pEl.textContent = nameList
    let i1El = document.createElement("i")
    i1El.classList.add("fa-regular", "fa-heart")
    let i2El = document.createElement("i")
    i2El.classList.add("fa-solid", "fa-pencil")
    let i3El = document.createElement("i")
    i3El.classList.add("fa-regular", "fa-trash-can")
    i3El.addEventListener("click", e => {
      // list_id = e.target.parentNode.parentNode.parentNode.id
      deleteList(list_id)
    })
    i2El.addEventListener("click", e=> {
      updateList(list_id, "nameList", "priority", "favoris")
    })
    i1El.addEventListener("click", e=> {
      let favoris = e.target.classList.contains("fa-heart")
      updateList(list_id, e.target ,"nameList", "priority", favoris)
    })
    linkEl.appendChild(pEl)
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
  
  export const updateList = (list_id,targetHeart, nameList, priority, favoris) => {
    if (favoris == true && targetHeart.classList.contains("fa-regular")) {
      targetHeart.classList.replace("fa-regular", "fa-solid")
    } else {
      targetHeart.classList.replace("fa-solid", "fa-regular")
    }
    console.log("update list", list_id, nameList, priority, favoris)
  }
  
  export const deleteList = (list_id) => {
    console.log("delete list", list_id)
  }
  
  export const displayAllLists = (category) => {
    console.log("display list")
  }
  