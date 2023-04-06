let fruitInventory = new Map();
fruitInventory.set ( 'apple', 10 );
fruitInventory.set ( 'banana', 20);
fruitInventory.set ( 'orange', 30);
console.log (fruitInventory);

fruitInventory.set ( 'apple', 15);
console.log (fruitInventory);

console.log (fruitInventory.get('banana'))

let bananaInventory = 20;

let uniqueColors = new Set()
uniqueColors.add( 'Red' );
uniqueColors.add( 'Blue' );
uniqueColors.add( 'Green' );
console.log ( uniqueColors );
uniqueColors.add( 'Yellow');
console.log (uniqueColors);
console.log (uniqueColors.has ('Blue'));