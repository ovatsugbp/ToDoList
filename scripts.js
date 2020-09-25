window.addEventListener('load', start);

function start() {
  const form = document.querySelector('.js-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');
    const text = input.value.trim();
    if (text !== "") {
      addToDo(text);
      input.value = '';
      input.focus()
    }
  })
};

let todoList = [];

function addToDo(text) {
  const todo = {
    text,
    cheked: false,
    id: Date.now(),
  };
  todoList.push(todo);
  renderTodo(todo);
  console.log('Lista de Tarefas', todoList);
}

function renderTodo(todo) {
  const list = document.querySelector('.js-todo-list');

  const listItem = document.createElement('li');

  listItem.innerHTML = `<span>${todo.text}</span>`;

  list.append(listItem);
}