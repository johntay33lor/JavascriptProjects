function recurse(a, b) {
	if (b === 0) {
		return 1;
	} else {
		return a * recurse(a, b - 1);
	}
}

console.log(recurse(2, 5));
console.log(recurse(7, 3));
console.log(recurse(12, 2));
console.log(recurse(9, 4));

