// Написати функцію, яка приймає 1 параметр. Та складає значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function getSum(num = 0) {
    let currentNum = num;

    return function (givenNum) {
        currentNum += givenNum;
        return currentNum;
    }
}

let sum = getSum();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));


// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function multiply(num1) {
    return (num2) => {
        return num1 * num2;
    }
}

console.log(multiply(5)(2));



// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. 
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function getUserNum() {
    let userNum;

    for (let i = 0; i < 10; i++) {
        userNum = parseInt(prompt('Enter a number greater than 100:'));
        
        if (!userNum || userNum <= 100 || isNaN(userNum)) {
            alert('Your number is invalid');
            continue;
        } else {
            console.log(`User value: ${userNum}`);
            return;
        }
    }
    console.log(`Last entered value: ${userNum}`);
}

getUserNum();

// function getUserNum() {
//     let userNum;

//     for (let i = 0; i < 10; i++) {
//         userNum = prompt('Enter a number greater than 100:');
        
//         if (!userNum || userNum <= 100) {
//             alert('Your number is invalid');
//             continue;
//         } else {
//             console.log(`User value: ${userNum}`);
//             return;
//         }
//     }
//     console.log(`Last entered value: ${userNum}`);
// }

// getUserNum();