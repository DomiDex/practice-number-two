"use strict";
//even steven
function evenSeven(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(evenSeven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
