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