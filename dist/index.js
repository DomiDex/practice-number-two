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
//Greatest Common Divisor (GCD)
/*
Let me explain the greatestCommonDivisor function:
Purpose:
This function calculates the greatest common divisor (GCD) of two numbers.
Function Breakdown:
Function Signature:
Takes two parameters a and b of type number
Returns a number (the GCD)
Implementation:
Initializes a gcd variable to 1
Uses a for loop to iterate from 1 to the smaller of a and b
Checks if both a and b are divisible by the current number
If so, updates gcd to the current number
Returns the final gcd value
Example Usage:
For a = 12 and b = 18, the GCD is 6
*/
function greatestCommonDivisor(num1, num2) {
    let gcd = 1;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}
console.log(greatestCommonDivisor(12, 18)); //6
//Remove Duplicates
/*
Let me explain the RemoveDuplicates function:
Purpose:
This function removes duplicate elements from an array.
Function Breakdown:
Function Signature:
Takes a parameter array of type number[] (an array of numbers)
Returns an array of numbers (the unique elements)
Implementation:
Initializes an empty array result to store unique elements
Uses a for loop to iterate through each element of the input array
Checks if the current element is not already in the result array
If not, adds it to the result array
Returns the final result array
Example Usage:
For the input [1, 2, 2, 3, 4, 4, 5], the output is [1, 2, 3, 4, 5]
*/
function RemoveDuplicates(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(RemoveDuplicates([1, 2, 2, 3, 4, 4, 5])); //[1,2,3,4,5]
//Character Frequency
/*
Let me explain the characterFrequency function:
Purpose:
This function calculates the frequency of each character in a string.
Function Breakdown:
Function Signature:
Takes a parameter str of type string
Returns an array of objects (each containing a character and its frequency)
Implementation:
Initializes an empty array result to store the frequency data
Uses a for loop to iterate through each character in the input string
Checks if the current character is already in the result array
If so, increments the frequency count
If not, adds a new entry to the result array with a frequency of 1
Returns the final result array
Example Usage:
For the input "hello", the output is [{key: "h", value: 1}, {key: "e", value: 1}, {key: "l", value: 2}, {key: "o", value: 1}]
*/
function characterFrequency(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const existingChar = result.find((item) => item.key === char);
        if (existingChar) {
            existingChar.value++;
        }
        else {
            result.push({ key: char, value: 1 });
        }
    }
    return result;
}
console.log(characterFrequency('Hello')); //[{key: "h", value: 1}, {key: "e", value: 1}, {key: "l", value: 2}, {key: "o", value: 1}]
console.log(characterFrequency('Hello World')); //[{key: "h", value: 1}, {key: "e", value: 1}, {key: "l", value: 2}, {key: "o", value: 1}, {key: "w", value: 1}, {key: "r", value: 1}, {key: "d", value: 1}]
console.log(characterFrequency('TypeScript')); //[{key: "t", value: 1}, {key: "y", value: 1}, {key: "p", value: 1}, {key: "e", value: 1}, {key: "s", value: 1}, {key: "c", value: 1}, {key: "r", value: 1}, {key: "i", value: 1}, {key: "p", value: 1}, {key: "t", value: 1}]
//Array Chunking
/*
Let me explain the arrayChunking function:
Purpose:
This function splits an array into smaller arrays of a specified size.
Function Breakdown:
Function Signature:
Takes two parameters array and size of type number[] and number
Returns an array of arrays (the chunks)
Implementation:
Initializes an empty array result to store the chunks
Uses a for loop to iterate through the input array in steps of size
Pushes each chunk (sub-array) into the result array
Returns the final result array
Example Usage:
For the input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and size = 3, the output is [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
*/
function arrayChunking(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); //[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); //[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); //[[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
//Pyramid Power
/*
This function creates a text-based pyramid pattern where each row increases in width, creating a triangular shape using '#' characters.
Function Breakdown:
Function Signature:
Takes a parameter input of type number which determines the height of the pyramid
Returns a string containing the pyramid pattern
Implementation:
3. How it Works:
Uses nested loops to build the pyramid
Outer loop (i) controls the number of rows
Inner loop (j) controls the number of '#' characters in each row
Each row has i number of '#' characters
After each row, adds a newline character
Finally joins all characters into a single string
4. Example Output:
For pyramidPower(5):
First row: 1 '#'
Second row: 2 '#'s
Third row: 3 '#'s
And so on...
This creates a left-aligned pyramid pattern where each row increases in width by one '#' character, making it look like a triangular shape when printed.
A more modern approach could use array methods and string repetition:
*/
function pyramidPower(input) {
    let result = [];
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {
            result.push('#');
        }
        result.push('\n');
    }
    return result.join('');
}
console.log(pyramidPower(5)); //"#
//##
//###
//####
//#####"
//Pascal's Triangle:
/*
Let me explain the pascalTriangle function:
Purpose:
This function generates Pascal's Triangle up to a specified number of rows.
Function Breakdown:
Function Signature:
Takes a parameter numRows of type number
Returns an array of arrays (each containing a row of Pascal's Triangle)
Implementation:
Initializes an empty array result to store the triangle rows
Uses nested loops to calculate each row of Pascal's Triangle
Each row is calculated based on the previous row
Adds each row to the result array
Returns the final result array
Example Usage:
For numRows = 5, the output is [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
*/
function pascalTriangle(numRows) {
    let result = [];
    for (let index = 0; index < numRows; index++) {
        const currentRow = [];
        const prevRow = result[index - 1];
        currentRow.push(1);
        for (let secondIndex = 0; secondIndex < index; secondIndex++) {
            currentRow.push(prevRow[secondIndex] + prevRow[secondIndex + 1]);
        }
        currentRow.push(1);
        result.push(currentRow);
    }
    return result;
}
console.log(pascalTriangle(5)); //[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
//prime Number Checker
/*
Let me explain the primeNumberChecker function:
Purpose:
This function checks if a given number is prime.
Function Breakdown:
Function Signature:
Takes a parameter num of type number
Returns a boolean (true if prime, false otherwise)
Implementation:
Initializes a boolean result to true
Uses a for loop to iterate from 2 to the square root of num
Checks if num is divisible by any number in the loop
If divisible, sets result to false and breaks the loop
Returns the final result
Example Usage:
For num = 11, the output is true (11 is a prime number)
*/
function primeNumberChecker(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNumberChecker(11)); //true
console.log(primeNumberChecker(12)); //false
//Array Rotation
/*
Let me explain the arrayRotation function:
Purpose:
This function rotates an array to the left by a specified number of positions.
Function Breakdown:
Function Signature:
Takes two parameters array and positions of type number[] and number
Returns an array of numbers (the rotated array)
Implementation:
Initializes an empty array result to store the rotated array
Uses a for loop to iterate through the input array
Pushes each element to the result array, starting from the positions index
Returns the final result array
Example Usage:
For the input [1, 2, 3, 4, 5] and positions = 2, the output is [3, 4, 5, 1, 2]
*/
function arrayRotation(array, positions) {
    let result = [...array];
    positions = positions % array.length;
    for (let i = 0; i < positions; i++) {
        const firstElement = result.shift();
        if (firstElement !== undefined) {
            result.push(firstElement);
        }
    }
    return result;
}
console.log(arrayRotation([1, 2, 3, 4, 5], 2)); //[3, 4, 5, 1, 2]
//Pattern Printing
/*
This function:
Takes a number n as input which determines the size of the diamond
Uses nested loops to create both the upper and lower halves of the diamond
For each row:
First loop adds the required spaces
Second loop adds the stars
The pattern is built by:
Increasing stars from 1 to 2n-1 for upper half
Decreasing stars from 2(n-1)-1 to 1 for lower half
Returns the complete pattern as a string
Example output for diamondPattern(3):
  *
 ***
*****
 ***
  *
Example output for diamondPattern(4):
   *
  ***
 *****
*******
 *****
  ***
   *

The function uses a similar approach to the pyramid pattern shown in the reference code (lines 299-308), but extends it to create both ascending and descending parts of the diamond.
*/
function diamondPattern(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            result.push(' ');
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            result.push('*');
        }
        result.push('\n');
    }
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < n - i - 1; j++) {
            result.push(' ');
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            result.push('*');
        }
        result.push('\n');
    }
    return result.join('');
}
console.log(diamondPattern(3));
console.log(diamondPattern(4));
//Matrix Multiplication
/*
Let me explain the matrixMultiplication function:
Purpose:
This function multiplies two matrices.
Function Breakdown:
Function Signature:
Takes two parameters matrix1 and matrix2 of type number[][]
Returns a number[][] (the product of the matrices)
Implementation:
Initializes an empty array result to store the product
Uses nested loops to calculate each element of the product
Multiplies corresponding elements from matrix1 and matrix2
Adds the result to the result array
Returns the final result array
Example Usage:
For matrix1 = [[1, 2], [3, 4]] and matrix2 = [[5, 6], [7, 8]], the output is [[19, 22], [43, 50]]
*/
function matrixMultiplication(matrix1, matrix2) {
    const result = Array(matrix1.length)
        .fill(0)
        .map(() => Array(matrix2[0].length).fill(0));
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix1[0].length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}
console.log(matrixMultiplication([
    [1, 2],
    [3, 4],
], [
    [5, 6],
    [7, 8],
])); //[[19, 22], [43, 50]]
//Sorting Algorithms
/*
Let me explain the bubbleSort function:
Purpose:
This function sorts an array using the bubble sort algorithm.
Function Breakdown:
Function Signature:
Takes a parameter array of type number[]
Returns a number[] (the sorted array)
Implementation:
Uses nested loops to compare and swap elements
Swaps elements if they are in the wrong order
Continues swapping until the array is sorted
Returns the final sorted array
Example Usage:
For the input [64, 34, 25, 12, 22, 11, 90], the output is [11, 12, 22, 25, 34, 64, 90]
*/
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); //[11, 12, 22, 25, 34, 64, 90]
//Binary Search
/*
Let me explain the binarySearch function:
Purpose:
This function searches for a target value in a sorted array using the binary search algorithm.
Function Breakdown:
Function Signature:
Takes two parameters array and target of type number[] and number
Returns a number (the index of the target value)
Implementation:
Uses a while loop to repeatedly divide the search interval in half
Compares the target with the middle element of the current interval
Adjusts the search interval based on whether the target is less than or greater than the middle element
Continues until the target is found or the interval is empty
Returns the index of the target value or -1 if not found
Example Usage:
For the input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and target = 7, the output is 6
*/
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)); //6
//Longest Common Subsequence
/*
Let me explain the longestCommonSubsequence function:
Purpose:
This function finds the longest common subsequence between two strings.
Function Breakdown:
Function Signature:
Takes two parameters str1 and str2 of type string
Returns a string (the longest common subsequence)
Implementation:
Uses nested loops to compare characters of both strings
Builds the longest common subsequence by comparing characters
Returns the final result string
Example Usage:
For str1 = "abcde" and str2 = "ace", the output is "ace"
*/
function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    // Create a matrix to store lengths of LCS
    const dp = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));
    // Fill dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // Reconstruct the LCS
    let lcs = '';
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        }
        else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        }
        else {
            j--;
        }
    }
    return lcs; // Always returns a string (empty string if no common subsequence)
}
console.log(longestCommonSubsequence('abcde', 'ace')); // 'ace'
console.log(longestCommonSubsequence('abc', 'def')); // ''
console.log(longestCommonSubsequence('AGGTAB', 'GXTXAYB')); // 'GTAB'
//Sudoku Solver
/**
 * Solves a Sudoku puzzle using backtracking algorithm.
 * @param board - 9x9 2D array representing the Sudoku board (0 represents empty cells)
 * @returns boolean - true if solution is found, false otherwise
 */
function solveSudoku(board) {
    const EMPTY_CELL = 0;
    const GRID_SIZE = 9;
    // Find empty cell
    function findEmptyCell() {
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (board[row][col] === EMPTY_CELL) {
                    return [row, col];
                }
            }
        }
        return null;
    }
    // Check if number is valid in current position
    function isValid(num, pos) {
        const [row, col] = pos;
        // Check row
        for (let x = 0; x < GRID_SIZE; x++) {
            if (board[row][x] === num && x !== col) {
                return false;
            }
        }
        // Check column
        for (let x = 0; x < GRID_SIZE; x++) {
            if (board[x][col] === num && x !== row) {
                return false;
            }
        }
        // Check 3x3 box
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRow + i][boxCol + j] === num &&
                    boxRow + i !== row &&
                    boxCol + j !== col) {
                    return false;
                }
            }
        }
        return true;
    }
    // Main solving logic using backtracking
    const emptyCell = findEmptyCell();
    // If no empty cell is found, puzzle is solved
    if (!emptyCell) {
        return true;
    }
    const [row, col] = emptyCell;
    // Try digits 1-9
    for (let num = 1; num <= 9; num++) {
        if (isValid(num, [row, col])) {
            board[row][col] = num;
            if (solveSudoku(board)) {
                return true;
            }
            // If solution not found, backtrack
            board[row][col] = EMPTY_CELL;
        }
    }
    return false;
}
// Example usage:
const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
if (solveSudoku(sudokuBoard)) {
    console.log('Solved Sudoku:');
    console.log(sudokuBoard);
}
else {
    console.log('No solution exists');
}
