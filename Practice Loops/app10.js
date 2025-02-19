let res10 = '';

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        res10 = `${i} * ${j} = ${i * j}` + (j < 10 ? '' : '<br/>');
        document.write(`${res10} <br/>`)
    }
}