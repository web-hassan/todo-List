var list = document.getElementById("list");
function addTodo() {
    var todo = document.getElementById("todo");
    var li = document.createElement('li');
    var todoText = document.createTextNode(todo.value);
    todo.value = "";
    li.appendChild(todoText);
    list.appendChild(li);
    //  del btn 
    var delBtn = document.createElement('button')
    var delIcon = document.createElement('i')
    delBtn.setAttribute("class", "btn btn-secondary")
    delBtn.setAttribute("onclick", "delTodo(this)")
    delIcon.setAttribute("class", "far fa-trash-alt")
    delBtn.appendChild(delIcon)
    li.appendChild(delBtn)
    // edit btn
    var editBtn = document.createElement('button')
    var editIcon = document.createElement('i')
    editBtn.setAttribute("class", "btn btn-secondary")
    editBtn.setAttribute("id", "editBtn01")
    editBtn.setAttribute("onclick", "editTodo(this)")
    editIcon.setAttribute("class", "far fa-edit")
    editBtn.appendChild(editIcon)
    li.appendChild(editBtn)
}

// delete Todo
function delTodo(e) {
    e.parentNode.remove()
}

           //////////////////////edit input
function editTodo(e) {
    var value = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", value);
    e.parentNode.firstChild.nodeValue = editValue
}