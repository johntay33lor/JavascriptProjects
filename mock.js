const users = [
	{ id: 1, name: "John", email: "john@gmail.com" },
	{ id: 2, name: "Mary", email: "mary@gmail" },
	{ id: 3, name: "Jane", email: "jane@gmail.com" },
	{ id: 4, name: "Joe", email: "joe@gmail" },
	{ id: 5, name: "Mike", email: "mike@gmail" },
];

function fetchUserById(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let user = users.find((user) => user.id === id);
			if (user) {
				resolve(user);
			} else {
				reject("User not found");
			}
		}, 1000);
	});
};

fetchUserById(1)
	.then((user) => {
		console.log(user);
		return fetchUserById(2);
	})
	.then((user) => {
		console.log(user);
	})
	.catch((error) => {
		console.log(error);
	});

fetchUserById(3)
	.then((user) => {
		console.log(user);
		return fetchUserById(6);
	})
	.then((user) => {
		console.log(user);
	})
	.catch((error) => {
		console.log(error);
	});



