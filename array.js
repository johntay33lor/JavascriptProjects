const users = [
	{ id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false },
	{ id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true },
	{ id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false },
	{ id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true },
	{ id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false },
	{ id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true },
	{ id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false },
	{ id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false }
];
//Find a user named 'Jose'
const userJose = users.find(function(Jose) {
	return Jose.firstName === 'Jose';	
});

console.log(userJose.firstName);

//Get an array of all the premium members
const premiumMembers = users.filter(function(user) {
	return user.isPremiumMember === true;
});
const premiumMemberNames = premiumMembers.map(function(user) {
	return user.firstName;
});

console.log(premiumMemberNames);

//Get an array of all the user last names
const userLastNames = users.map(function(user) {
	return user.lastName;
});

console.log(userLastNames);

//Get an array of the full names who have logged in more than 10 times
const userLogins = users.filter(function(user) {
	return user.logins > 10;
});
const fullNames = userLogins.map(function(user) {
	return `${user.firstName} ${user.lastName}`;
});

console.log(fullNames);

//Get the total number of logins for the list of users
const totalLogins = users.reduce(function(total, user) {
	return total + user.logins;
	}, 0);
	
	console.log('Total Logins: ' + totalLogins);
