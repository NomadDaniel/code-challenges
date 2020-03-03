// ***Convert Number to String of Dashes***
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
// // Initial Code...
// function Go(num) {
	
// }

//Solution
const Go = num => '-'.repeat(num);

//Solution
//function Go(num) {
//var str = '';
	//for(var i = 0; i < num; i++) {
	//str += '-';
	//}
	//return str;
//}

//Solution
//function Go(num) {
	//return "-".repeat(num);
//}

// ____________________________________________________________

// ***Word Endings***
// Create a function that adds a string ending to each member in an array.
// Solution
function addEnding(arr, ending) {
	return arr.map(x => x.concat(ending));
}

// Solution
// function addEnding(arr, ending) {
	// return arr.map(word => word + ending);
// }

// _____________________________________

// Edabit
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

// Initial Code...
//function howManyTimes(num) {
	
//}

// Solution
const howManyTimes = num => `Ed${'a'.repeat(num)}bit`

// Solution
// function howManyTimes(num) {
//   let str = "a";
//   return `Ed${str.repeat(num)}bit`;
// }
