


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