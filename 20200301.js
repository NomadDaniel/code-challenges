// Add the Index
function addIndexes(arr) {
	return arr.map((value,index) => value + index)
}


// Find the Index (Part 1)
function search(arr, item) {
	return arr.indexOf(item)
}

// To the Power of _____
function calculateExponent(num, exp) {
	return Math.pow(num, exp)
}

// Summing the Squares
// Insturctions: Create a function where given the number n, return the sum of all square numbers up to and including n.

//My solution
function squaresSum(n) { 
    var sum = 0; 
    for (i = 1; i <= n; i++) 
        sum += (i * i); 
  
    return sum; 
}

// Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.
// Base code...
// function findLargestNum(arr) {
// }

function findLargestNum(arr) {
	return Math.max(...arr);
}

// Other solution
// const findLargestNum = arr => Math.max.apply(Math, arr)


//Multiply by Length
//Create a function to multiply all of the values in an array by the amount of values in the given array. 
const multiplyByLength = arr => arr.map(val => val * arr.length);


//Base code
//function findSmallestNum(arr) {}

//My Solution
function findSmallestNum(arr) {
	return Math.min.apply(null, arr);
}

// Other Solution
// function findSmallestNum(arr) {
//   return Math.min(...arr);
// }