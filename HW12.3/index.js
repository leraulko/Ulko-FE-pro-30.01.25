'use strict';

// 12.3. TODO лист
const taskList = document.querySelector('ul');
const inputTask = document.getElementById('input-task');

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        event.target.closest('li').remove();
    }
});

document.querySelector('.add-button').addEventListener('click', () => {
    const userTaskText = inputTask.value.trim();
    if (!userTaskText) return;

    const newTask = document.createElement('li');
    newTask.innerHTML = `${userTaskText} <button class="delete-button" type="button">Delete</button>`;

    taskList.appendChild(newTask);
    inputTask.value = '';
});