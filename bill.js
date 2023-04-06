let billAmount = 525.56996;

function calculateTip(x) {
	return x * 0.20;
};
console.log('The tip amount is $' + calculateTip(billAmount));

function getBillTotal(x) {
	return x  + calculateTip(billAmount);
};
console.log(getBillTotal(billAmount));

let amount = getBillTotal(billAmount, calculateTip(billAmount));
console.log('Total : $' + amount.toFixed(2));