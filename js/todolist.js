const todoForm = document.querySelector('.todoForm');
const todoInput = document.querySelector('.todoInput');
const todoList = document.querySelector('.todoList');
// localStorage.removeItem('todoItem');

let todos = [];
function printTodo(newTodoObj) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    button.innerText = '❌';

    button.addEventListener('click', removeTodo);

    todoList.append(li);
    li.append(span, button);
}

function handleSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    todoInput.value = '';
    printTodo(newTodoObj);
    saveTodo();
}

function removeTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== Number(li.id));
    saveTodo();
}

function saveTodo() {
    localStorage.setItem('todoItem', JSON.stringify(todos));
}

todoForm.addEventListener('submit', handleSubmit);

const localStorageSave = localStorage.getItem('todoItem');

if (localStorageSave !== null) {
    const savedTodo = JSON.parse(localStorageSave);
    //새로고침해서 렌더링하면 todos는 빈배열로되어있기 때문에 로컬에 있는 걸로 다시 넣어주어야한다.
    todos = savedTodo;
    savedTodo.forEach(printTodo);
}
// todo.id는 숫자 li.id는 문자기때문에 타입통일 필요
