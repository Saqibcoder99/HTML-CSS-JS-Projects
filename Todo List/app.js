let inputText = document.getElementById("input-text");
let addBtn = document.getElementById("add-btn");
let todoList = document.getElementsByTagName("ul")[0];
let delBtn = document.getElementById("del");
let editItem = null;
function editHandler(e) {
    // console.log("mai chlaa ==>", )
    editItem = e.parentElement.parentElement
    // console.log(editItem)
    inputText.value = editItem.textContent.trim()
}
function addHandler() {
    if (editItem) {
        editItem.firstChild.textContent = inputText.value
        editItem = null
        //console.log(editItem)
        inputText.value = ""
        return
    }
    if (inputText.value.trim() == "") {
        console.log("error")
        return
    }
    todoList.innerHTML += `<li>
                    ${inputText.value}
                    <div class="icons">
                        <i class="fa-solid fa-trash" onclick="deleteHandler(this)"></i>
                        <i class="fa-regular fa-pen-to-square" onclick=" editHandler (this)"></i>
                    </div>
                </li>`
    inputText.value = ""

}

//console.log(editItem)
function deleteHandler(e) {
    e.parentElement.parentElement.remove()
}
function allClear(e) {
    e.previousElementSibling.innerHTML = ""
}
addBtn.addEventListener("click", addHandler)