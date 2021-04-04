// Objective: Build an application that manages a list of tasks.




//    1.Build a collection of objects stored in the  
//    tasks.js file and adhere to the following structure:

// const tasks = [
//   {
//     category: 'Food Shopping',
//     text: 'Onions, red potatoes, kale, and ginger',
//     complete: false,
//     priority:'red',
//     id:0,
//   };

// optional 
// console.log(tasks);



console.log("Your killin' it today!");

// Defined as global variable so the innerText can be cleared from other functions
const taskList = document.querySelector('#task-list');


// REMOVE an item from the 'tasks' list array. 

function removeItemFromTheTaskList(index){
  tasks.splice(index, 1);
}

// DISPLAY 'tasks' objects to the DOM. 

const displayEachTaskToDom = function(task) {
  
  // Create elements and set it's innerText to new task
  const parentDiv = document.createElement('div');
  const divChild1 = document.createElement('div');
  const pTag = document.createElement('p');
  const divChild2 = document.createElement('div');
  const iconComplete = document.createElement('i');
  const iconEdit = document.createElement('i');
  const iconTrash = document.createElement('i');
  
  
  iconComplete.className = "fas fa-tasks";
  iconEdit.className = "fas fa-edit";
  iconTrash.className = "fas fa-trash-alt";
  parentDiv.className = "task-row";
  divChild1.className = "class-row";
  divChild2.className = "class-row";
  taskList.appendChild(parentDiv);
  parentDiv.appendChild(divChild1);
  parentDiv.appendChild(divChild2);
  divChild1.appendChild(iconComplete);
  divChild1.appendChild(pTag);
  divChild2.appendChild(iconEdit);
  divChild2.appendChild(iconTrash);
  
  // Display the task to the DOM 
  pTag.innerText = (task.text);
  
  // Assign a matching ID to the DOM element based on it's index
  
  task.id = (tasks.indexOf(task));
  iconComplete.id = `complete${task.id}`;
  iconEdit.id = `edit${task.id}`;
  iconTrash.id = `delete${task.id}`;
  
  // Gives the pTag a `complete` class if the 'task object' indicates it as so.
  
  if(task.complete === true){
    pTag.classList = 'complete';
  }
};

// Calculate percentage completed of tasks
function calculatePercentage(){
  let numCompleted = 0;
  for (const task of tasks){
    if (task.complete){
      numCompleted += 1;
    }
  }
  const headerChild = document.querySelector('#header > p');
  let percentage = (numCompleted / tasks.length) * 100;
  
  if (percentage % 1 !== 0){
    percentage = percentage.toFixed(2);
  }
  if (tasks.length === 0){
    percentage = 0;
  }
  headerChild.innerText = ` Percentage complete:${percentage}%`;
};

// Loops through the Tasks array and calls the above function 'displayEachTaskToDom'
// for each item in the array.  
function printAll(){
  for (const task of tasks){
    displayEachTaskToDom(task);
  }
  // Add an event listener to each new icon added for editing
  const icons = document.querySelectorAll('.fas');
  for (const icon of icons){
    icon.addEventListener('click', editList);
  }
  calculatePercentage()
};


// Handles an edit to the list of tasks
function editList(){
  
  if(this.id.includes('complete')){
    const id = this.id;
    const index = id.charAt(id.length -1);
    tasks[index].complete = !tasks[index].complete;
    if (tasks[index].complete){
      positiveElement.innerText = random(arrayOfPositiveCrap);
    }
  }
  else if (this.id.includes('edit')){
    console.log('edit');
  }
  else if (this.id.includes('delete')){
    const id = this.id;
    const index = id.charAt(id.length -1);
    removeItemFromTheTaskList(index);
  }
  taskList.innerHTML = ''
  printAll();
  
};

function doAllTheStuffForThisListOfToDoStuff(){
  
  const inputBox = document.querySelector('#task');
  const inputBoxValue = inputBox.value;
  const dropDownValue = document.querySelector('.form-select').value;
  
  let task = {
    priority: dropDownValue,
    category: '',
    text: inputBoxValue,
    complete: false,
  };
  
  // Clears the task list and clears the input fields.
  taskList.innerHTML = '';
  inputBox.value = '';
  // Add task to array of Tasks
  tasks.push(task);
  console.log(tasks);
  // Update what's displayed
  printAll();
};


// listen for click event with submit button
const addButton = document.querySelector('#submit');
addButton.addEventListener('click', doAllTheStuffForThisListOfToDoStuff);








// // Code below is not yet in use.
// // A function that clears all tasks from the DOM.
// // Test it in the console and see if your list disappears!


// function clearList(){
//   tasks.splice(0, tasks.length);
// }

// // A function that refreshes our page by calling each of the two above functions. Since printing all tasks onto the DOM is based on our tasks array, if we make a change to our tasks array, we can simply call this function, which will make our DOM match our tasks array by simply clearing the page and repopulating it according to our tasks' new state.

// function updateBrowser(){
//   printAll();
//   clearList();
// }