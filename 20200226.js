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


