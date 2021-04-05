// Defined as global variable so the innerText can be cleared from other functions
const taskList = document.querySelector('#task-list');

// DISPLAY 'tasks' objects to the DOM. 

const displayEachTaskToDom = function(task) {
  
  // Create elements and set it's innerText to new task
  const parentDiv = document.createElement('div');
  const divChild1 = document.createElement('div');
  const pTag = document.createElement('p');
  const divChild2 = document.createElement('div');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  const iconEdit = document.createElement('i');
  const iconTrash = document.createElement('i');
  checkBox.className = "";
  iconEdit.className = "fas fa-edit";
  iconTrash.className = "fas fa-trash-alt";
  parentDiv.className = "task-row";
  divChild1.className = "class-row";
  divChild2.className = "class-row";
  taskList.appendChild(parentDiv);
  parentDiv.appendChild(divChild1);
  parentDiv.appendChild(divChild2);
  divChild1.appendChild(checkBox);
  divChild1.appendChild(pTag);
  divChild2.appendChild(iconEdit);
  divChild2.appendChild(iconTrash);
  
  // Display the task to the DOM 
  pTag.innerText = (task.text);
  
  // Assign a matching ID to the DOM element based on it's index
  
  task.id = (tasks.indexOf(task));
  checkBox.id = `complete${task.id}`;
  iconEdit.id = `edit${task.id}`;
  iconTrash.id = `delete${task.id}`;
  
  // Gives the pTag a `complete` class if the 'task object' indicates it as so.
  
  if(task.complete === true){
    pTag.classList = 'complete';
  }
  if (task.complete === true){
    checkBox.checked = true;
  };

};



// Loops through the Tasks array and calls the above function 'displayEachTaskToDom'
// for each item in the array.  
function loopThroughTasksAndSetEventListeners(){
  for (const task of tasks){
    displayEachTaskToDom(task);
  }
  // Add an event listener to each new icon added for editing
  const checkBoxes = document.querySelectorAll('input[type = checkbox]');
  for (const box of checkBoxes){
    box.addEventListener('change', editList);
  }
  const icons = document.querySelectorAll('.fas');
  for (const icon of icons){
    icon.addEventListener('click', editList2);
  }
  calculatePercentage()
};

function grabNewTaskAndUpdateList(){
  
  const dropDownValue = document.querySelector('.form-select').value;
  const taskInputBox = document.querySelector('#task');
  const categoryInputBox = document.querySelector('#category');
  const task = {
    priority: dropDownValue,
    category: categoryInputBox.value,
    text: taskInputBox.value,
    complete: false,
  };
  // Add a task to the array of tasks.
  tasks.push(task);

  // Clears the task list and clears the input fields.
  taskList.innerText = '';
  taskInputBox.value = '';
  categoryInputBox.value = '';
  // Update what should show in the browser.
  loopThroughTasksAndSetEventListeners();
  console.log(tasks);
};

// REMOVE an item from the 'tasks' list array. 

function removeItemFromTheTaskList(index){
  tasks.splice(index, 1);
  loopThroughTasksAndSetEventListeners();
  console.log(tasks);
}

// Handles an edit to the list of tasks
function editList(){
 
  if(this.checked){
    const id = this.id;
    const index = id.charAt(id.length -1);
    tasks[index].complete = !tasks[index].complete;
    if (tasks[index].complete){
      positiveElement.innerText = random(arrayOfPositiveCrap);
    }
  }
  else if (this.checked !== true){
    const id = this.id;
    const index = id.charAt(id.length -1);
    tasks[index].complete = false;
  }
  taskList.innerHTML = ''
  loopThroughTasksAndSetEventListeners();
};

function editList2(){
  if (this.id.includes('edit')){
    console.log('edit');
  }
  else if (this.id.includes('delete')){
    const id = this.id;
    const index = id.charAt(id.length -1);
    removeItemFromTheTaskList(index);
  }
  taskList.innerText = ''
  loopThroughTasksAndSetEventListeners();


}

// listen for click event with submit button
const addButton = document.querySelector('#submit');
addButton.addEventListener('click', grabNewTaskAndUpdateList);





















// // Code below is not yet in use.
// // A function that clears all tasks from the DOM.
// // Test it in the console and see if your list disappears!


// function clearList(){
//   tasks.splice(0, tasks.length);
// }

// // A function that refreshes our page by calling each of the two above functions. Since printing all tasks onto the DOM is based on our tasks array, if we make a change to our tasks array, we can simply call this function, which will make our DOM match our tasks array by simply clearing the page and repopulating it according to our tasks' new state.

// function updateBrowser(){
//   loopThroughTasksAndSetEventListeners();
//   clearList();
// }