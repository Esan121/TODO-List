// SELECTORS
const todoInput = document.querySelector('.todo-input') //connects to the class in input tag

const todoButton = document.querySelector('.todo-button') //connects to the class in button tag

const todoList = document.querySelector('.todo-list') //connects to the class in ul tag

// EVENT LISTENERS
todoButton.addEventListener('click', addTodo);

// FUNCTIONS
function addTodo(event) {
    //prevent the form from submiting
    event.preventDefault()
    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    //check trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //append to list
    todoList.appendChild(todoDiv)
    //clear todo input value
    todoInput.value = ""
}