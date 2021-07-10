const assertEquals = require('../../test-framework');
const basket = require('../src/basket');

console.log('Test: Add Item' + '\n');


//Set up
let items = new basket(['pizza', 'french fries', 'oranges']);
let expectedOutput = 'Eggs has been added to the basket';

//Execute
let actualOutput = items.addItem('Eggs');

//Verify
let result = assertEquals(actualOutput, expectedOutput);
console.log(`Result: ${result}`);

//-------------------------------------------------

console.log('\nTest: Remove Item' + '\n');

//Set up
let items2 = new basket(['Eggs', 'pizza', 'french fries', 'oranges']);
let expectedOutput2 = 'Eggs has been removed from the basket';

//Execute
let actualOutput2 = items2.removeItem('Eggs');

//Verify
let result2 = assertEquals(actualOutput2, expectedOutput2);
console.log(`Result: ${result2}`);

//-------------------------------------------------

console.log('\nTest: Increase capacity of baskets' + '\n');

//Set up
let items3 = new basket(['Eggs', 'pizza', 'french fries', 'oranges']);
items3.largerCapacity()
let expectedOutput3 = 'Baskets now have a capacity of 20 items';

//Execute
let actualOutput3 = items3.largerCapacity()
console.log(actualOutput3);

//Verify
let result3 = assertEquals(actualOutput3, expectedOutput3);
console.log(`Result: ${result3}`);

//-------------------------------------------------

console.log('\nTest: Removing an item that the basket does not contain' + '\n');

//Set up
let items4 = new basket(['Burgers', 'Potatoes', 'Tomatoes', 'Chocolate']);
let expectedOutput4 = 'Apples does not exist in the basket!';

//Execute
let actualOutput4 = items4.removeItem('Apples')
console.log(actualOutput4);

//Verify
let result4 = assertEquals(actualOutput4, expectedOutput4);
console.log(`Result: ${result4}`);

//-------------------------------------------------

console.log('\nTest: Adding item with id that matches the id of an item that exists in the basket' + '\n');

//Set up
let items5 = new basket([['Burgers', 1], ['Potatoes', 2], ['Tomatoes', 3], ['Chocolate', 4]]);
let expectedOutput5 = `The item you're trying to add has an id of 2, the basket contains Potatoes which has this id!`;

//Execute
let actualOutput5 = items5.addItem([['Potatoes', 2]]);
console.log(actualOutput5);

//Verify
let result5 = assertEquals(actualOutput5, expectedOutput5);
console.log(`Result: ${result5}`);

//-------------------------------------------------

console.log('\nTest: Price of each item before addition to the basket' + '\n');

//Set up
let items6 = new basket([['Burgers', 1, 2.49], ['Grapes', 2, 3.20], ['Tomatoes', 3, 0.89], ['Chocolate', 4, 1.20]]);
let expectedOutput6 ='Price of Potatoes: £3.49';

//Execute
let actualOutput6 = items6.addItem([['Potatoes', 5, 3.49]]);
//console.log(actualOutput6);

//Verify
let result6 = assertEquals(actualOutput6, expectedOutput6);
console.log(`Result: ${result6}`);



