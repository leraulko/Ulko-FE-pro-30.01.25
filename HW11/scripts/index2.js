'use strict';

// 11.2  Кнопка зміни кольору
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('.table').classList.toggle('blue');
    getRandomPic(pics); 
});

