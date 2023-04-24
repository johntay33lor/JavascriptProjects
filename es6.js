//Create two arrays of numbers called numbers1 and numbers2
let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10]
console.log(numbers1, numbers2);

//Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
let numbers = [...numbers1 , ...numbers2];
console.log(numbers);

//Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square = (num) => num ** 2;
console.log(square(9));

//Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
let squares = numbers.map(square);
console.log(squares);

//Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
let isEven = (num) => num % 2 === 0;
console.log(isEven(4));
console.log(isEven(3));

//Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
let evenSquares = squares.filter(isEven);
console.log(evenSquares);

//Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
let [firstEvenSquare, secondEvenSquare] = evenSquares;
console.log(firstEvenSquare, secondEvenSquare)

//Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`original number array: ${numbers}, squares array: ${squares}, evenSquares: ${evenSquares}, extracted squares: ${firstEvenSquare}, ${secondEvenSquare}`);


