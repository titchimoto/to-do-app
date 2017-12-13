function onReady() {

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';


  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    const title = document.createElement('span');
    newLi.textContent = toDo.title;

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);

  });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}



window.onload = function() {
   onReady();
 };
