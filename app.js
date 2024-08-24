

// var lists = document.getElementById("list-container")

// function addTask() {
//   var input = document.getElementById("input-box");

//   if (input.value == "") {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Write something",

//     });
//   }

//   else {
//     var list = document.createElement("li");
//     list.innerHTML = input.value;
//     input.value = ""
//     list.setAttribute("class", "color")
//     var deleteBtn = document.createElement("button")
//     deleteBtn.innerHTML = "Delete";


    
//     deleteBtn.setAttribute("onclick","removelist(event)")
//     deleteBtn.setAttribute("type","button")
  
    
//     var editBtn = document.createElement("button")
//     editBtn.setAttribute("type","button")
//     editBtn.setAttribute("onclick","edit(event)")
//     editBtn.innerHTML = "Edit"
//     list.appendChild(deleteBtn)
//     list.appendChild(editBtn)
//     lists.appendChild(list)

//   }
// }

// function dltAll() {
//   lists.innerHTML = ""
// }

// function removelist(event){
//   event.target.parentNode.remove()
  

// }

// function edit(event){
//   var updated = prompt("updated task",event.target.parentNode.firstChild.nodeValue)

//   event.target.parentNode.firstChild.nodeValue = updated
// }


var lists = document.getElementById("list-container");

function addTask() {
  var input = document.getElementById("input-box");

  if (input.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Write something",
    });
  } else {
    var list = document.createElement("li");
    list.innerHTML = input.value;
    input.value = "";

    // Create button container
    var btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("onclick", "removelist(event)");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.setAttribute("onclick", "edit(event)");

    // Append buttons to the container
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    // Append the button container to the list item
    list.appendChild(btnContainer);
    lists.appendChild(list);
  }
}

function removelist(event) {
  event.target.closest("li").remove();
}

function edit(event) {
  var updated = prompt("Update task", event.target.closest("li").firstChild.nodeValue);
  if (updated !== null) {
    event.target.closest("li").firstChild.nodeValue = updated;
  }
}



