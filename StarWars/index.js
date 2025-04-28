'use strict';

const baseURL = `https://swapi.dev/api/`;
const movieNum = document.querySelector('.form-select');
const mainDiv = document.querySelector('.container');
const contentDiv = document.querySelector('.content');
const paginationDiv = document.querySelector('.pagination');
const loadingText = `<p id="loading"> Loading, please, wait... </p>`;

let currentPage;
let fullData = [];
const itemsPerPage = 5;

function createDiv(className) {
    let div = document.createElement('div');
    div.classList.add(className);
    contentDiv.append(div);

    return div;
}

function createBtn(className, text, parent) {
    let btn = document.createElement('button');
    btn.classList.add(className);
    btn.innerHTML = text;
    parent.append(btn);

    return btn;
}


mainDiv.addEventListener('click', (event) => {
    switch (event.target.className) {
        case 'charactersBtn':
            getData('characters');
            break;
        case 'planetsBtn':
            getData('planets');
            break;
        case 'vehiclesBtn':
            getData('vehicles');
            break;
    }
});

async function getData(type) {
    try {
        contentDiv.style.display = 'flex';
        contentDiv.innerHTML = loadingText;
        currentPage = 1;

        const response = await fetch(`${baseURL}films/${movieNum.value}`);
        const result = await response.json();
        const urls = result[type];
        fullData = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));

        showInfo();
        createOrUpdatePagination();

    } catch (error) {
        alert(error);
    }
}


function showInfo() {
    contentDiv.style.display = 'flex';
    contentDiv.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const showedItems = fullData.slice(start, end);

    showedItems.forEach(item => {
        const divItem = createDiv('showedInfo');
        divItem.innerHTML = `${item.name}`;
        divItem.addEventListener('click', () => {
            getDetails(item.url);
        });
    });
}

async function getDetails(url) {
    try {
        contentDiv.innerHTML = loadingText;

        const response = await fetch(url);
        const itemDetails = await response.json();

        contentDiv.innerHTML = `<h2>Details for ${itemDetails.name}</h2>`;

        const detailsList = document.createElement('ul');
        for (const key in itemDetails) {
            if (itemDetails.hasOwnProperty(key)) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${key}:</strong> ${itemDetails[key]}`;
                detailsList.appendChild(listItem);
            }
        }

        contentDiv.style.height = 'max-content';
        contentDiv.appendChild(detailsList);

    } catch (error) {
        alert(error);
    }
}

function createOrUpdatePagination() {
    paginationDiv.innerHTML = '';

    if (fullData.length <= itemsPerPage) {
        paginationDiv.style.display = 'none';
        return;
    } else {
        paginationDiv.style.display = 'flex';
    }

    const prevBtn = createBtn('prevBtn', 'Previous', paginationDiv);
    const nextBtn = createBtn('nextBtn', 'Next', paginationDiv);

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showInfo();
            createOrUpdatePagination();
        }
    });

    nextBtn.addEventListener('click', () => {
        if ((currentPage - 1) * itemsPerPage + itemsPerPage < fullData.length) {
            currentPage++;
            showInfo();
            createOrUpdatePagination();
        }
    });

    if (currentPage === 1) {
        prevBtn.style.display = 'none';
    } else if ((currentPage - 1) * itemsPerPage + itemsPerPage >= fullData.length) {
        nextBtn.style.display = 'none';
    }
}