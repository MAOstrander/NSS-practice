/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

function coinCounter (money) { // Initialize a JavaScript object to hold the coins var coinPurse = {};
	coinPurse = {};
	var cents = money * 100;

	coinPurse.quarters = Math.floor(cents / 25);
	cents = cents % 25;

	coinPurse.dimes = Math.floor(cents / 10)
	cents = cents % 10;

	coinPurse.nickels = Math.floor(cents / 5)

	coinPurse.pennies = cents % 5;
	return coinPurse; 
}

var coins = coinCounter(13.24);

console.log("Coin", coins);