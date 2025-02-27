// 6.1 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.


function removeCharacters(string, characters) {
    let res = '';

    for (let i = 0; i < string.length; i++) {
        let found = false;

        for (let j = 0; j < characters.length; j++) {
            if (string[i] === characters[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            res += string[i];
        }
    }
    return res;
}


let userString = prompt('Enter some string:');
let userCharacters = prompt('Enter chrs you want to delete without spaces:').split('');

console.log(removeCharacters(userString, userCharacters));