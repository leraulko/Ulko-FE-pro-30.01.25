let userNum;

let res9 = '';
let res10 = 0;
let count = 0;

while (!userNum || userNum < 0 || isNaN(userNum)) {
    userNum = prompt('Enter a natural number:')
}

for (let i = 1; i <= userNum; i++) {
    if (userNum % i === 0) {
       res9 += i + '<br/>'; 
    }

    if (userNum % i === 0 && i % 2 === 0) {
        count++;
        res10 += i;
    }
}

document.write(res9);