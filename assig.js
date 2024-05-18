function changeBackground() {
    let color = document.body;
    let randomColor = 'rgb(' + Math.random() * 255 + ',' +
                        Math.random() * 255 + ',' +
                        Math.random() * 255 + ')';
    color.style.backgroundColor = randomColor;
}

function addTask() {
    var title = document.getElementById('taskTitle').value;
    var content = document.getElementById('taskContent').value;
    var type = document.getElementById('taskType').value;
    var status = "Pending"; // Initial status

    // Create a new list item
    var listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `
        <strong>${title}</strong><br>
        ${content}<br>
        <span>Status: ${status}</span><br>
        <span>Type: ${type}</span>
        <button type="button" class="btn btn-info btn-sm float-right mr-1" onclick="editTask(this)">Edit</button>
        <button type="button" class="btn btn-danger btn-sm float-right" onclick="deleteTask(this)">Delete</button>
    `;

    // Add double-click event listeners
    listItem.addEventListener('dblclick', function() {
        if (status === "Pending") {
            // Change background color to blue
            listItem.style.backgroundColor = 'blue';
            // Change status to "In Progress"
            listItem.querySelector('span').innerText = "Status: In Progress";
            status = "In Progress";
        } else if (status === "In Progress") {
            // Change background color to green
            listItem.style.backgroundColor = 'green';
            // Change status to "Done"
            listItem.querySelector('span').innerText = "Status: Done";
            status = "Done";
        }
    });

    // Append the new list item to the task list
    document.getElementById('taskList').appendChild(listItem);

    // Clear input fields after adding task
    clearFields();
}
  
  function clearFields() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskContent').value = '';
    document.getElementById('taskStatus').value = 'Pending';
    document.getElementById('taskType').value = 'Work';
  }
  
  function deleteTask(button) {
    button.parentElement.remove();
  }
  
  function editTask(button) {
    var listItem = button.parentElement;
    var title = listItem.querySelector('strong').innerText;
    var content = listItem.querySelector('span').nextSibling.textContent;
    var status = listItem.querySelector('span').innerText.split(': ')[1];
    var type = listItem.querySelector('span:last-child').innerText.split(': ')[1];
  
    document.getElementById('taskTitle').value = title;
    document.getElementById('taskContent').value = content;
    document.getElementById('taskStatus').value = status;
    document.getElementById('taskType').value = type;
  
    listItem.remove();
  }
  