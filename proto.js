//Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (an array).
function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = favoriteFoods;
};

//Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
Person.prototype.fullName = function () {
	return `${this.firstName} ${this.lastName}`;
	console.log(this.firstName, this.lastName);
};

//Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
Person.prototype.toString = function personToString() {
	return `${this.firstName} ${this.lastName} : Favorite Color: ${this.favoriteColor} , Favorite Number: ${this.favoriteNumber}`
	
};

Person.prototype.family = [];

Person.prototype.addToFamily = function (person) {
	if (person instanceof Person && !this.family.includes(person)) {
		this.family.push(person);
	}
	return this.family.length
	console.log(this.family.length);

};


const John = new Person('John', "Taylor", "pink", 3, ['burger', 'pasta']);
const Tempestt = new Person('Tempestt', "Taylor", "purple", 4, ['salad', 'steak']);
const LJ = new Person('LJ', "Taylor", "blue", 2, ['french fries', 'pizza']);

Tempestt.addToFamily(Tempestt);
LJ.addToFamily(LJ);


console.log(John.fullName());
console.log (" ");


console.log(John.family);
console.log(" ");



console.log(" Family Array:" , Tempestt.family);

console.log(" Family Length:" ,Tempestt.addToFamily(John));




