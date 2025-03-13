'use strict';

// 10.2 Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

const givenArray = [42, 7, 85, 23, 56, 91, 14, 68, 39, 77];

function getArrOfEvenNumbers(arr) {
    return arr.filter((item) => item % 2 === 0);
}

console.log(getArrOfEvenNumbers(givenArray));