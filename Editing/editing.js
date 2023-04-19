// Update the 'Apples' item to say 'Granny Smith Apples'
document.querySelectorAll("li") [1].innerHTML = "Granny Smith Apples";


// Remove 'Oat Milk' from the list
const removeOatMilk = document.querySelectorAll("li");
removeOatMilk[3].remove();


// Add an item 'Kombucha'
const newItem = document.createElement("li");
newItem.innerHTML = "Kombucha";
list.appendChild(newItem);


// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
const newList = document.querySelector("ul");
newList.innerHTML = " ";
const newArray = ["Protein Bars", "Almonds", "Peanut Butter"];
for (let i = 0; i < newArray.length; i++) {
	const newItem = document.createElement("li");
    newItem.innerHTML = newArray[i];
    newList.appendChild(newItem);
};


// Add the class 'important' to the almonds item.
const almonds = document.getElementsByTagName('li')[1];
almonds.classList.add('important');
console.log(almonds);


