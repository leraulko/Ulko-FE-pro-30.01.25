let start = 15;
let end = 35;

let res5 = 1;


for (let i = start; i <= end; i++) {
    res5 *= i;
}

document.write(BigInt(res5));