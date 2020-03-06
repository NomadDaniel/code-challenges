
// Jojo's helpful example of a function called Name that take and arr as a parameter, 
// then declares a new local scope variable (let newArr) with an empty [] brackets, 
// then for loops using 0, arr.lenght, and incremental i++ for the setup,
// then in the code block of the for loop we callback that newArr.push and inside () we 
// then arr.[i].name (this uses the original functions parameter and returns the name value of each index in the arr,
// and finally we close the for loop and return newArr, 

// ### Notice that newArr is like a bookend of the for loop (line 14 and line 18).
// ### Notice that the functions parameter is used 2x's in the for loop, 1x for the conditional setup (line 15), 
// and 2x to build the arr.push method (i.e., inside the paranthesis of line 16)

function Name(arr) {
	let newArr = [];
	for(let i=0; i<arr.length; i++){
		newArr.push(arr[i].name)
	}
	return newArr;
}