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

// Other solution



