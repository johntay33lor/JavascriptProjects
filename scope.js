//Declare 2 variables, a & b in the outer function's scope
//Set them to a string and an object respectively. Log their values immediately.
function outer() {
	let a = 'John'
	let b = { name: 'LJ'}
	console.log(a, b);


	//Log the values of a and b in the inner function.
	//Update the inner function to take two parameters named a and b.
	//Pass a and b in as arguments when you execute inner().
	function inner(a, b) {
		console.log(a, b);
		//Inside the inner function, assign new values to a and b
		a = 'Tempestt'
		//Inside the inner function, update a property of the b object
		b.name = 'JohnIV'
		console.log(a , b.name)
	}
	//Update the inner function to take two parameters named a and b.
	inner(a, b)
	console.log(a, b);


}

outer();



