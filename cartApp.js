//Create a function called initializeCart that checks if there's a cart in localStorage. 
//If not, it initializes an empty cart and stores it in localStorage.
function initializeCart() {
	let existingCart = JSON.parse(localStorage.getItem("cart"));
	if (!existingCart) {
		let cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

//Create a function called addItem that takes an item object as a parameter, retrieves the cart from 
//localStorage, adds the item to the cart, and then stores the updated cart back into localStorage.
function addItem(item) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	cart.push(item);
	localStorage.setItem("cart", JSON.stringify(cart));
}

//Create a function called removeItem that takes an item object as a parameter, retrieves the cart from
//localStorage, removes the item with the given id from the cart, and then stores the updated cart back into localStorage.
function removeItem(itemId) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	cart.removeItem(itemId);
	localStorage.setItem("cart", JSON.stringify(cart));
}

//Create a function called displayCart that retrieves the cart from localStorage and logs the cart contents to the console.
function displayCart() {
	let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
}

initializeCart();

//Create event listeners for the add item form and display cart button to call the respective functions.
const addItemForm = document.querySelector("#addItemForm");

addItemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const itemName = document.getElementById("itemName").value;
  const itemPrice = document.getElementById("itemPrice").value;
  const item = {
    id: Date.now(),
    name: itemName,
    price: Number(itemPrice),
  };
  addItem(item);
  addItemForm.reset();
});

const displayCartButton = document.querySelector("#displayCartButton");

displayCartButton.addEventListener("click", function () {
  displayCart();
});


