function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('input');

    deleteButton.type = "submit";

    deleteButton.value ="Delete To-Do";

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    newLi.appendChild(deleteButton);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    deleteButton.addEventListener('click', event => {
      toDoList.removeChild(newLi);
    })

  });
}


window.onload = function() {
   onReady();
 };
