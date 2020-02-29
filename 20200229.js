//Add the Index
// Given an array of numbers, create a function which returns the same array 
// but with each element's index in the array added to itself. This means you
// add 0 to the number at index 0, add 1 to the number at index 1, etc...

//***Given Code...
//function addIndexes(arr) {
    //}

//Solution 1
const addIndexes = arr => arr.map((v,i) => v + i);

//Solution 2
//function addIndexes(arr) {
    //return arr.map((val, i) => val + i);
    //}

// Jojo explaination of hoisting for function declaration vs expression
//function addIndexes(arr) {
	//return arr.map((val, ind) => val + ind);
//}

//add(3,4)
//const add = (a,b) => a+b

//function add(a,b){return a+b}

