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
//Odd Todd
/*
Let me explain the oddTodd function:
Function Purpose:
This function filters an array to keep only the odd numbers
Named oddTodd (likely as a fun play on words, similar to evenSeven)
Function Signature:
- Takes a parameter array of type number[] (an array of numbers)
Returns a number[] (an array of numbers)
How it Works:
Creates an empty array result to store odd numbers
Uses a for loop to iterate through each element of the input array
For each number, checks if it's odd using % 2 !== 0
The modulo operator (%) returns the remainder after division
If a number divided by 2 has a remainder (isn't 0), it's odd
If a number is odd, adds it to the result array
Finally returns the array containing only odd numbers
4. Example Usage:
Modern Alternative:
The same function could be written more concisely using array methods:
This function is essentially the opposite of the evenSeven function shown earlier in the file, filtering for odd numbers instead of even ones.*/
function oddTodd(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(oddTodd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1,3,5,7,9]
console.log(oddTodd([1, 3, 5, 7, 9])); //[1,3,5,7,9]
//Simple Sum
/*
Let me explain the simpleSum function:
Purpose:
This function calculates the sum of all numbers in an array.
Function Breakdown:
Key Components:
1. Function Signature:
Takes a parameter array of type number[] (array of numbers)
Returns a number (the sum)
Implementation:
Initializes a sum variable to 0
Uses a for loop to iterate through each element
Adds each number to the running sum
Returns the final sum
Example Usage:
In this example, it adds: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
Modern Alternative:
This could also be written more concisely using the reduce method:
Both implementations achieve the same result, but the original version might be more readable for beginners learning array manipulation.
*/
function simpleSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(simpleSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //55
//Factorial Fun
/*
Let me explain the factorialFun function:
Purpose
This function calculates the factorial of a given number. A factorial (denoted as n!) is the product of all positive integers less than or equal to n.
Function Breakdown
Function Signature:
Takes a parameter num of type number
Returns a number (the factorial result)
Implementation:
Initializes a result variable to 1
Uses a for loop to iterate from 1 to num
Multiplies the result by each number in the loop
Returns the final result
Example Usage:
For num = 5, the factorial is 5! = 5 * 4 * 3 * 2 * 1 = 120
*/
function factorialFun(num) {
    let finalResult = 1;
    for (let i = 1; i <= num; i++) {
        finalResult *= i;
    }
    return finalResult;
}
console.log(factorialFun(5)); //120
//Fibonacci Sequence
/*
Let me explain the fibonacciSequence function:
Purpose:
This function generates the Fibonacci sequence up to a specified number of terms.
Function Breakdown:
Function Signature:
Takes a parameter num of type number
Returns an array of numbers (the Fibonacci sequence)
Implementation:
Initializes an empty array sequence to store the Fibonacci numbers
Uses a for loop to iterate from 0 to num - 1
Calculates the Fibonacci numbers using the formula:
F(n) = F(n-1) + F(n-2)
Adds each Fibonacci number to the sequence array
Returns the final sequence array
Example Usage:
For num = 10, the Fibonacci sequence is: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/
function fibonacciSequence(num) {
    let sequence = [];
    for (let i = 0; i < num; i++) {
        sequence.push(i);
    }
    return sequence;
}
console.log(fibonacciSequence(10)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
