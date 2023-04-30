let taskname = document.getElementById("taskname")
let plus = document.getElementById("plus")
let notasksmsg  = document.getElementById("notasksmsg")
let taskscontaint  = document.getElementById("taskscontaint")
let taskscount = document.getElementById("taskscount")
let taskscompleted  = document.getElementById("taskscompleted")
let taskbox = document.querySelectorAll(".task-box")

window.onload =()=>{
    taskname.focus()
}



plus.onclick =function(){
    if(taskname.value ===""){
        console.log("No Value");
    }
    else{
        if(taskscontaint.contains(notasksmsg)){
            notasksmsg.remove()
            
        }
        let mainSpan = document.createElement("span");
        let p = document.createElement("p");
        let text = document.createTextNode(taskname.value);
        mainSpan.appendChild(p);
        p.appendChild(text);
        let deleteElement = document.createElement("button");
        let deleteText = document.createTextNode("Delete");
        deleteElement.appendChild(deleteText);
        
        
        mainSpan.appendChild(deleteElement);
        taskscontaint.appendChild(mainSpan);
        
        
        mainSpan.className = 'task-box';
        deleteElement.className = 'delete';
        taskname.value =""
        taskname.focus()
        calculateTasks()
    }
}
let notasksmsgfun =()=>{
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("No Tasks To Show");
    msgSpan.appendChild(msgText);
    msgSpan.className ="no-tasks-msg"
    taskscontaint.appendChild(msgSpan)
}
document.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        e.target.parentNode.remove()
    if(taskscontaint.childElementCount ==0)
    notasksmsgfun()
    }
    

    // Calculate Tasks
    calculateTasks();
})

taskbox.forEach(item => {
    item.addEventListener('click', e => {
    if(e.target.classList.contains('task-box'))  {
        e.target.querySelector("p").classList.toggle("finshed");
    }
    })
  })
let calculateTasks =()=>{
    taskscount.innerHTML =`Tasks <span>${document.querySelectorAll(".task-box").length}</span>`
    // taskscount.querySelector("span").className ="taskscount"
    taskscompleted.innerHTML =`Completed<span> ${document.querySelectorAll(".finshed").length}</span>`
    // taskscompleted.querySelector("span").className ="tasks-completed"
}