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
  listItem.setAttribute('data-key', `${todo.id}`)

  listItem.setAttribute('class', 'todo-item')
  listItem.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label id="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
  </button>
  `;

  list.append(listItem);
}

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', e => {
  if (e.target.classList.contains('js-tick')) {

  }
})