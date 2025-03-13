'use strict';

// 11.3. Отримання випадкового зображення
const pics = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

function getRandomPic(arr) {
    const randomPicIndex = Math.floor(Math.random() * pics.length);
    const randomPic = pics[randomPicIndex];
    document.querySelector('.picture').src = `pics/${randomPic}`;
    console.log(randomPicIndex);
}

getRandomPic(pics);