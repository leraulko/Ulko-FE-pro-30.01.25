'use strict';

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderImages = document.querySelectorAll('.slider img');
const sliderDots = document.querySelector('.nav-dots');
let currentIndex = 0;


sliderImages.forEach((el, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');

    if (index === currentIndex) {
        dot.classList.add('active');
    }
    
    dot.setAttribute('data-index', index);
    sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');


function changeSlider() {
    sliderImages.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    prevBtn.classList.toggle('hidden', currentIndex === 0);
    nextBtn.classList.toggle('hidden', currentIndex === sliderImages.length - 1);
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        changeSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < sliderImages.length - 1) {
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