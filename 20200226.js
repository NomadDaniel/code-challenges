// The Farm Problem
function animals(chickens, cows, pigs) {
	return (chickens*2)+(cows+pigs)*4;
}

// Name Greeting!
const helloName = name => {
	// return "Hello " + name + "!";
    return `Hello ${name}!`
}

// Find the Bug: Returning the Container
function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
			break
		default:
			container = null
	}

	return container
}

// Find the Index (Part 2)
function search(arr, item) {
	return arr.indexOf(item);
}

// ES6: Destructuring Arrays IV
// const str = '[head, tail] = [1, 2, 3, 4]'
const str = '[head, ...tail] = [1, 2, 3, 4]'


// Equality Check
function checkEquality(a, b) {
  return a === b;
}


// Multiply Every Array Item by Two
function getMultipliedArr(arr) {
// pass a function to map
return arr.map(x => x * 2);
}


// Add a Consecutive List of Numbers
function addUpTo(n) {
return (n * (n + 1)) / 2;
}	


// Find the Index
function find_index(arr, str) {
	return arr.indexOf(str)
}


// ES6: Destructuring Arrays III
// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr = ["eyes", "nose", "lips", "ears"]
var lips = arr[2];


// Array of Word Lengths
function wordLengths(arr) {
	return arr.map(item => item.length);
}

// Count the Arguments
function numArgs() {
	return arguments.length;
}

// Concatenating Two Integer Arrays
function concat(arr1, arr2) {
	return arr1.concat(arr2);
}

// ES6: Destructuring Objects VIII
