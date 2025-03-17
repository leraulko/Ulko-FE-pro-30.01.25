'use strict';

// 12.1 На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
let userLink = '';

document.querySelector('.button-prompt').addEventListener('click', () => {
    do {
        userLink = prompt('Enter proper link u wanna go to, which starts with "https://" :');
    } while (!userLink || !isNaN(userLink) || !userLink.startsWith('https://'));

});

document.querySelector('.button-redirect').addEventListener('click', () => {
    if (userLink) {
        location.href = userLink;        
    } else {
        alert('You did not enter a link!')
    }
});