// Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// My 1st Solution
function getSumOfItems(amount) {
    let total = 0;
    for (i = 0; i < amount.length; ++i) {
    total += amount[i]; // add each element in an array to total
    }
        return total;// return sum of elements in array
}

// Preferred Solution
// function getSumOfItems(arr) {
	// return arr.reduce((total,ele) => total+ele);
// }