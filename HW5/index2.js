// 5.2 Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

let start = 10;
let end = 100;
let dollar = 42;
let res = '';

for (let i = start; i <= end; i += 10) {
    res += i * dollar + ' ';
}

console.log(res);