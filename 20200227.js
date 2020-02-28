// Is the Last Character an N?
function isLastCharacterN(word) {
	return word.endsWith('n');
}

// ES6: Destructuring Objects VIII
const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`

// Stack the Boxes
function stackBoxes(n) {
  return n*n;
}

// Volume of a Box
function volumeOfBox(sizes) {
	return sizes.length * sizes.width * sizes.height;
}

