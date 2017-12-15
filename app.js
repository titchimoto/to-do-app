function onReady() {


  let toDos = [];
  id = localStorage.getItem("id") || 0;
  toDos = JSON.parse(localStorage.getItem("arr"));

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');

  function createNewToDo() {

     id++;
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';

    renderTheUI();

    localStorage.setItem("arr", JSON.stringify(toDos));
    localStorage.setItem("id", id);
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

      const deleteButton = document.createElement('input');
      deleteButton.type = "submit";
      deleteButton.value = "Delete To-Do";

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', event => {
        //toDoList.removeChild(newLi);
        deleteToDo(toDo.id);

        renderTheUI();
      });

      checkbox.addEventListener('click', event => {
        if (checkbox.checked) {
          toDos[toDo.id - 1].complete = true;
          console.log(toDos);
        } else {
          toDos[toDo.id - 1].complete = false;
          localStorage.setItem("arr", JSON.stringify(toDos));
          console.log(toDos);
        }
      });
    })
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
    localStorage.setItem("arr", JSON.stringify(toDos));

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
