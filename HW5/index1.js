// 5.1 Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

let start = 20;
let end = 30;
let res = '';

for (let i = start; i <= end; i += 0.5) {
    res += i + ' ';
}

console.log(res);