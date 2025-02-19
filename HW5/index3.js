// 5.3 Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let start = 1;
let end = 100;
let res = '';

let userNum;

while (!userNum || isNaN(userNum)) {
    userNum = prompt('Enter a number:');
}

for (let i = start; i <= end; i++) {
    if (i * i > userNum) {
        break;
    } else {
        res += i + '; ';
    }
}

console.log(res);


// 5.4 Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let isPrime = true;

for (let i = 2; i < userNum; i++) {
    if (userNum % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log('its a prime number');
} else {
    console.log('its not a prime number');
}


// 5.5 Дано ціле число. З’ясувати, чи можна це число отримати шляхов возведення числа 3 в деяку ступінь

while (userNum % 3 === 0) {
    userNum /= 3;
}

if (userNum === 1) {
    console.log('we can get this number by 3^n');
} else {
    console.log('we cannot get this number by 3^n');
}