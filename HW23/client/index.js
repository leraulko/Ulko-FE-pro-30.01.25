const API_URL = 'http://localhost:3000/tasks';
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
import {crissCross} from './helpers.js'


fetchTasks();

document.querySelector('.add-btn').addEventListener('click', async () => {
    const taskTitle = todoInput.value.trim();
    if(!taskTitle) return;

    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({taskTitle}),
    });

    todoInput.value = '';
    fetchTasks();
});


async function fetchTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();

    showTasks(tasks);
}

function showTasks(tasks) {
    todoList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');

        const inputCheckbox = document.createElement('input');
        inputCheckbox.type = 'checkbox';
        inputCheckbox.checked = task.completed;
        inputCheckbox.addEventListener('change', () => changeTaskStatus(task));

        const spanTitle = document.createElement('span');
        spanTitle.textContent = task.taskTitle;
        if(task.completed) spanTitle.style.textDecoration = 'line-through';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = crissCross;
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        li.append(inputCheckbox, spanTitle, deleteBtn);
        todoList.append(li);
    });
}

async function changeTaskStatus(task) {
    await fetch(`${API_URL}/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({completed: !task.completed}),
    });
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
}