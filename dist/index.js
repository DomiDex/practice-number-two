"use strict";
//even steven
/*Let me explain this TypeScript code:
This code defines a function called evenSeven that filters an array to keep only the even numbers. Let's break it down:
Function Declaration:
- Takes a parameter array of type number[] (array of numbers)
Returns a number[] (array of numbers)
2. Implementation:
Creates an empty array result to store even numbers
Uses a for loop to iterate through each element of the input array
Checks if each number is even using the modulo operator (% 2 === 0)
If a number is even, adds it to the result array
Finally returns the array containing only even numbers
3. Example Usage:
When called with numbers 1 through 10
Returns [2,4,6,8,10] (all even numbers from the input)
Note: While the function is named evenSeven, it actually has nothing to do with the number 7 - it just filters for even numbers. A more appropriate name might be filterEvenNumbers or simply getEvenNumbers.
A more modern way to write this same function would be using array methods:
*/
function evenSeven(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(evenSeven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[2,4,6,8,10]
