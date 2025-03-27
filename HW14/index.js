'use strict';

const imageArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
const imageFolder = 'pics/';

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderImages = document.querySelector('.slider');
const sliderDots = document.querySelector('.nav-dots');
let currentIndex = 0;


imageArr.forEach((image, index) => {
    let img = document.createElement('img');
    img.src = `${imageFolder}${image}`;
    if (index === currentIndex) {
        img.classList.add('active');
    }
    sliderImages.appendChild(img);

    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.setAttribute('data-index', index);
    if (index === currentIndex) {
        dot.classList.add('active');
    }
    sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');


function changeSlider() {
    const imgs = document.querySelectorAll('.slider img');
    imgs.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    prevBtn.classList.toggle('hidden', currentIndex === 0);
    nextBtn.classList.toggle('hidden', currentIndex === imageArr.length - 1);
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        changeSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < imageArr.length - 1) {
        currentIndex++;
        changeSlider();
    }
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        changeSlider();
    });
});