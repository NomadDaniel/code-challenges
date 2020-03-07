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

// Another Great Solution
// const getSumOfItems = A => eval(A.join`+`)

// Another Text book Solution
// const getSumOfItems=(arr)=>arr.reduce((acc,val)=>acc+val,0)

// _________________________________________

// Hello; Hello World; World
// Write a function that takes an integer and:

// Instructions: If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
// helloWorld(3) ➞ "Hello"

// helloWorld(5) ➞ "World"

// helloWorld(15) ➞ "Hello World"


// Solution
function helloWorld(num) {
	return num%15===0 ? "Hello World" : num%5===0 ? "World" : num%3===0 ? "Hello" : num;
}

// Another Solution
const helloWorld = n => n % 3 == 0 && n % 5 == 0 ? "Hello World" :
 n % 3 == 0 ? "Hello" : "World";

// Another one...
function helloWorld(num) {
	if (num % 15 === 0) {
		return "Hello World";
	} else if (num % 5 === 0) {
		return "World";
	} else if (num % 3 === 0) {
		return "Hello";
	}
}


// ________________________________________________________________________________

// Skip the Drinks with Too Much Sugar
// Instructions...
// The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.

// Drinks that contain too much sugar (in this challenge) are:

// Cola
// Fanta

// Array method loop Solution w conditions, cool solution
function skipTooMuchSugarDrinks(drinks) {
  return drinks.filter(ele => ele !== "cola" && ele !== "fanta");
}


// Dan and Jojo's solution (it was a slippery bastard!)
// function skipTooMuchSugarDrinks(drinks) {
// 	let newArray = []
// 	for (let i=0; i<drinks.length; i++) {
// 	if (drinks[i] == "cola" || drinks[i] === "fanta") {continue;}
// 	newArray.push(drinks[i]);
// }
// return newArray;
// }


// Beautiful Solution
// const skipTooMuchSugarDrinks = d =>
//  d.filter(x=> x !== 'cola' && x !== 'fanta');


