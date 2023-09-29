document.getElementById("addForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      listItem.remove();
      showSuccessMessage("Task deleted successfully");
    });

    listItem.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(listItem);

    taskInput.value = "";
    showSuccessMessage("Task added successfully");
  });

  function showSuccessMessage(message) {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = message;
    successMessage.style.display = "block";
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 3000);
  }