


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

    const time = new Date();

    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours < 12){
      var timeExtention = "AM";

    }
    else{
      var timeExtention = "PM";
    }

    const currentTime = hours + ":" + mins + ":" + secs;
    


    newElement.innerText = "You have completed the task " + activity + "at " + currentTime + " " + timeExtention
    document.getElementById('activity-item').appendChild(newElement).style.marginBottom = "10px";

});
buttons[1].addEventListener('click', function(){
    var activity = document.getElementsByClassName("card-title")[1].innerText;
    console.log(activity);

    var newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.style.color = "#000000";
    newElement.style.padding = "10px"
    newElement.style.borderRadius = "18px"
    newElement.style.fontSize = "14px"

    const time = new Date();

    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours < 12){
      var timeExtention = "AM";

    }
    else{
      var timeExtention = "PM";
    }

    const currentTime = hours + ":" + mins + ":" + secs;
    


    newElement.innerText = "You have completed the task " + activity + "at " + currentTime + " " + timeExtention;
    document.getElementById('activity-item').appendChild(newElement).style.marginBottom = "10px";
    document.getElementById('activity-item').appendChild(newElement);

});
buttons[2].addEventListener('click', function(){
    var activity = document.getElementsByClassName("card-title")[2].innerText;
    console.log(activity);

    var newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.style.color = "#000000";
    newElement.style.padding = "10px"
    newElement.style.borderRadius = "18px"
    newElement.style.fontSize = "14px"

    const time = new Date();

    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours < 12){
      var timeExtention = "AM";

    }
    else{
      var timeExtention = "PM";
    }

    const currentTime = hours + ":" + mins + ":" + secs;
    


    newElement.innerText = "You have completed the task " + activity + "at " + currentTime + " " + timeExtention;
    document.getElementById('activity-item').appendChild(newElement).style.marginBottom = "10px";
    document.getElementById('activity-item').appendChild(newElement);

});
buttons[3].addEventListener('click', function(){
    var activity = document.getElementsByClassName("card-title")[3].innerText;
    console.log(activity);

    var newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.style.color = "#000000";
    newElement.style.padding = "10px"
    newElement.style.borderRadius = "18px"
    newElement.style.fontSize = "14px"

    const time = new Date();

    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours < 12){
      var timeExtention = "AM";

    }
    else{
      var timeExtention = "PM";
    }

    const currentTime = hours + ":" + mins + ":" + secs;
    


    newElement.innerText = "You have completed the task " + activity + "at " + currentTime + " " + timeExtention;
    document.getElementById('activity-item').appendChild(newElement).style.marginBottom = "10px";
    document.getElementById('activity-item').appendChild(newElement);

});
buttons[4].addEventListener('click', function(){
    var activity = document.getElementsByClassName("card-title")[4].innerText;
    console.log(activity);

    var newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.style.color = "#000000";
    newElement.style.padding = "10px"
    newElement.style.borderRadius = "18px"
    newElement.style.fontSize = "14px"

    const time = new Date();

    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours < 12){
      var timeExtention = "AM";

    }
    else{
      var timeExtention = "PM";
    }

    const currentTime = hours + ":" + mins + ":" + secs;
    


    newElement.innerText = "You have completed the task " + activity + "at " + currentTime + " " + timeExtention;
    document.getElementById('activity-item').appendChild(newElement).style.marginBottom = "10px";
    document.getElementById('activity-item').appendChild(newElement);

});
buttons[5].addEventListener('click', function(){
    var activity = document.getElementsByClassName("card-title")[5].innerText;
    console.log(activity);

    var newElement = document.createElement('p');
    newElement.style.backgroundColor = "#F4F7FF";
    newElement.style.color = "#000000";
    newElement.style.padding = "10px"
    newElement.style.borderRadius = "18px"
    newElement.style.fontSize = "14px"

    const time = new Date();

    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours < 12){
      var timeExtention = "AM";

    }
    else{
      var timeExtention = "PM";
    }

    const currentTime = hours + ":" + mins + ":" + secs;
    


    newElement.innerText = "You have completed the task " + activity + "at " + currentTime + " " + timeExtention;
    document.getElementById('activity-item').appendChild(newElement).style.marginBottom = "10px";
    document.getElementById('activity-item').appendChild(newElement);

});

document.getElementById('clear-history').onclick = function() {
  document.getElementById('activity-item').innerHTML = '';  // Clears all content
};

function handleToggle(id, status){
  document.getElementById(id).style.display = status;
}

document.getElementById("something-new").addEventListener('click', function(){
  handleToggle("main-container", "none");
  handleToggle("question-container", "block")
  handleToggle("nav-btn-1", "none")
  handleToggle("nav-btn-2", "block")
});

document.getElementById("nav-btn-2").addEventListener('click', function(){
  handleToggle("main-container", "flex");
  handleToggle("question-container", "none")
  handleToggle("nav-btn-1", "flex")
  handleToggle("nav-btn-2", "none")
});