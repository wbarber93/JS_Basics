let name = 'Wayne'; // String Literal
let age = 27; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined; // Undefined
let selectedColour = null; // Null used to clear values

const interestRate = 0.3 // This value is constant and cannot be changed like var
var foo = 'Foo' // This is a global variable

typeof age // Number as there are no floats/integers in JS


// {} is an object literal
let person = {
    nameFirst: 'Wayne',
    age_yrs:27
}

// Dot Notations
person.nameFirst = 'Joe';

// Bracket Notation
let selection = 'name';
person[selection] = 'John';

console.log(person); // Displays output of function in console


// Arrays
let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';
console.log(selectedColours[2]);

// Functions
function greet(name) {
    console.log('Hello ' + name);
}

greet('John');
greet('Mary');
