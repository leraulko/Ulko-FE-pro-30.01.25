// 6.3 Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        }
    }
    return arr;
}




const givenArray = [1, 3, 4, 6, 2, 5, 7, 2, 1];

console.log(removeElement(givenArray, 1));