let start = 100;
let end = 200;

let res8 = '';

for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
        res8 += i + '<br/>';
    }
}

document.write(res8);