


var buttons = document.getElementsByClassName('task-btn');

    // Loop through all the buttons
    for (var i = 0; i < buttons.length; i++) {
      // Add an event listener for the 'click' event
      buttons[i].addEventListener('click', function() {
        
        alert('board successfully updates');
        ;
        this.disabled = true;

        
        var completedTask = parseInt(document.getElementById("completed-task").innerText)
        var newCompletedTask = completedTask + 1;

        var assignedTask = parseInt(document.getElementById("assigned-task").innerText)
        var newAssignedTask = assignedTask - 1;

        document.getElementById("completed-task").innerText = newCompletedTask;
        document.getElementById("assigned-task").innerText = newAssignedTask;

       
       
      });
    }

buttons[0].addEventListener('click', function(){
    var activity = document.getElementsByClassName("card-title")[0].innerText;
    console.log(activity);

    var newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.style.color = "#000000";
    newElement.style.padding = "10px"
    newElement.style.borderRadius = "18px"
    newElement.style.fontSize = "14px"

    newElement.innerText = "You have completed the task " + activity
    document.getElementById('activity-item').appendChild(newElement);
});