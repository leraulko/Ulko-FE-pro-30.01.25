// 6.2 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function arithmeticMeanOfNumbers(arr) {
    let res = 0;
    let count = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            res += arr[i];
            count++;
        }        
    }
    return res / count;
}



const givenArr = [1, 10, true, '', null, 9, 'hello', {name:'Lera'}, 456, 44, undefined, 100, NaN];

console.log(arithmeticMeanOfNumbers(givenArr));