console.log("hello world");

// variable(single line comment)

/*  (multi line comment)
hi
i
am
ram
*/

// variable start
//keywords:var,let,const
// var (used for global variable define)
// let (reuse variable)
// const (value constant)

const person = "sam poudel";
const person1 = "ram poudel";
let number = 12.6;
number = 5;

// print the number
console.log(number);
console.log({ person });
console.log({ person1 });

//interaction

alert("hello world");

const question1 = prompt("what is your name?");

const question2 = confirm("are you 18 yrs or above");
console.log({ question1, question2 });

// update the above question1 and question 2 to print name and age
// throught alert

alert("your name is " + question1 + ",u are 18 yrs or above " + question2 + "");

//write a muliplication calculator for 3 digits
let number1 = 267;
let number2 = 587;
let result = number1 * number2;
console.log(result);

let num1 = prompt("enter the 1st number of 3 digit");
let num2 = prompt("enter the 2nd number of 3 digit");
let res = num1 * num2;
console.log(res);
