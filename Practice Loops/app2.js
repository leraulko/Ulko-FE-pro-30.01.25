let start = 10;
let end = 20;

let res2 = '';

for (let i = start; i <= end; i++) {
    res2 += i * i + (i < end ? ', ' : '.');
}

document.write(res2);