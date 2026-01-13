let todos = [];
let editIndex = null;

const form = document.getElementById("todoForm");
const nameInput = document.getElementById("name");
const cityInput = document.getElementById("city");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const city = cityInput.value.trim();

  if (editIndex === null) {
    // Add new item
    todos.push({ name, city });
  } else {
    // Update existing item
    todos[editIndex] = { name, city };
    editIndex = null;
    submitBtn.textContent = "Add";
  }

  form.reset();
  renderTodos();
});

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${todo.name}</td>
            <td>${todo.city}</td>
            <td>
                <button onclick="editTodo(${index})">Update</button>
                <button onclick="deleteTodo(${index})">Delete</button>
            </td>
        `;

    todoList.appendChild(row);
  });
}

function editTodo(index) {
  nameInput.value = todos[index].name;
  cityInput.value = todos[index].city;
  editIndex = index;
  submitBtn.textContent = "Update";
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
