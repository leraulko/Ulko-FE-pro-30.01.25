// 1. Створити масив, довжину та елементи якого задає користувач. По мірі змін масива - виводити його вміст на сторінку.

const userArray = [];
let arrayLength;
let arrayNums;

do {
    arrayLength = parseInt(prompt('Enter the length of the array:'));
} while (isNaN(arrayLength) || arrayLength <= 0);

for (let i = 0; i < arrayLength; i++) {
    do {
        arrayNums = parseInt(prompt(`Enter the ${i + 1} number of the array:`));
        userArray.push(arrayNums);
    } while (isNaN(arrayNums));
}

document.write(`<p> ${userArray} <p/>`);

// Після цього, відсортувати масив за зростанням. 

userArray.sort(function(a, b){
    return a - b;
});

document.write(`<p> ${userArray} <p/>`);

// Далі, видалити з масива елементи з 2-го по 4-й елемент.

userArray.splice(1, 3);

document.write(`<p> ${userArray} <p/>`);