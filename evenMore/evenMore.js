//Write a program that prints ‘Hello World’ to the screen
console.log('Hello World');

//Write a program that asks the user for their name and greets them with their name

var userInput = prompt('Enter your name');
console.log("Hello, welcome " + userInput);

//Modify the previous program such that only the users Alice and Bob are greeted with their names

let userInput2 = prompt("Your name here");
if (userInput2 == "Alice" || userInput2 == "Bob"){
	console.log("Hello " + userInput2);
} else{
	console.log("Who are you?")
};

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

let userNumInput = prompt("Enter a number here");
let n = [];

for(let i=1; i<=userNumInput; i++){
	n.push(i);
};
console.log(n.join(', '));

//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

let userNumInput2 = prompt("Enter a number..Any number");
let r = [];

for(let i=1; i<=userNumInput2; i++){
	if(i % 3 == 0 || i % 5 == 0){
		r.push(i);
	};
};
console.log(r.join(", "));

//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n

let userInput3 = prompt("Enter a number to add or multiply");
let userInput_3 = prompt("Enter 'add' or 'multiply'");
if(userInput_3 == "add"){
	let n = 1;
	console.log(userInput3 + n;
}if(userInput_3 == "multiply"){
	console.log(userInput3 * n);
}else{
	console.log("You need to enter 'add' or 'multiply'");
};



//Write a program that prints a multiplication table for numbers up to 12

let numArray = [1,2,3,4,5,6,7,8,9,10,11,12];
for(let i=1; i<=12; i++){
	let multiples = numArray.map(function(num){
		return num * i;
	});
console.log("multiples of " + i + "= " + multiples);
};


//Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)

let numbArray = [];

for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
         numbArray.push(counter);
         numbArray.join(', ');
    };
};
console.log("Prime numbers are: " +numbArray);


//Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively




