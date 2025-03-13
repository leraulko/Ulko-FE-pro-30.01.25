'use strict';

//11.1. Таблиця піфагора

const createTable = (num) => {
    const parent = document.querySelector('.table');

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            if (i === 0 && j === 0) {
                cell.textContent = '';
            } else if (i === 0) {
                cell.textContent = j;
                cell.classList.add('cell-head');
            } else if (j === 0) {
                cell.textContent = i;
                cell.classList.add('cell-head');
            } else {
                cell.textContent = i * j;
            }

            parent.appendChild(cell);
        }    
    }
}

createTable(10);