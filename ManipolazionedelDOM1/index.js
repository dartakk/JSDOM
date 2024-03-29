const addProduct = () => {
  const ul = document.querySelector("#my-list");
  const taskInput = document.querySelector("#taskInput");
  const taskText = taskInput.value;
  
  const addList = document.createElement("li");
  addList.textContent = "New Task"
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  const label = document.createElement("label");
  label.textContent = taskText;

  addList.appendChild(label);
  addList.appendChild(checkbox);
  ul.appendChild(addList);
};