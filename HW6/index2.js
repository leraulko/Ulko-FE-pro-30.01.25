// 2. Дано массив. Знайти суму і кількість додатних елементів.
// Визначити кількість від’ємних елементів масива.

const givenArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let countOfPositives = 0;
let sumOfPositives = 0;

let countOfNegatives = 0;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] > 0) {
        countOfPositives++;
        sumOfPositives += givenArray[i];
    }

    if (givenArray[i] < 0) {
        countOfNegatives++;
    }
}


// Знайти мінімальний (найменший) елемент масива і його індекс.
// Знайти максимальний (найбільший) елемент масива та його індекс.

let minNum = givenArray[0];
let maxNum = givenArray[0];

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] < minNum) {
        minNum = givenArray[i];
    } 

    if (givenArray[i] > maxNum) {
        maxNum = givenArray[i];
    } 
}

let minIndex = givenArray.indexOf(minNum);
let maxIndex = givenArray.indexOf(maxNum);


// Знайти кількість непарних додатних елементів. Знайти суму непарних додатних елементів.
// Знайти кількість парних додатних елементів. Знайти суму парних додатних елементів.

let oddPositives = 0;
let sumOddPositives = 0;

let evenPositives = 0;
let sumEvenPositives = 0;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] > 0 && givenArray[i] % 2 !== 0) {
        oddPositives++;
        sumOddPositives += givenArray[i];

    } else if (givenArray[i] > 0 && givenArray[i] % 2 === 0) {
        evenPositives++;
        sumEvenPositives += givenArray[i];
    }
}


// Знайти добуток всіх додатних елементів.

let productOfPositives = 1;

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] > 0) {
        productOfPositives *= givenArray[i];
    }
}


// Змінити на 0 всі елементи масива окрім найбільшого.

for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i] !== maxNum) {
        givenArray[i] = 0;
    }
}