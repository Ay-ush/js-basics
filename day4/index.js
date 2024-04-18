console.log("Day 4");

//function

//function define
//function variable pass
//function call

//write a function that says hi to the user

//Es5
function hii(user) {
  const hello = `hii, ${user}`;
  return hello;
}

// Es6 (arrow function)
const hi = (name, lastname) => {
  return `hi,${name},${lastname}`;
};
const result = hi("raktim shrestha kumar sigdel");
const result1 = hi("rakitm");

console.log({ result, result1 });

//write a js function to add 2 number
//ask user for numbers using prompt

const res = (num1, num2) => {
  return num1 + num2;
};
const num1 = Number(prompt("enter the 1st number"));
const num2 = Number(prompt("enter the 2nd number"));
const add = res(num1, num2);
console.log({ add });

//write a js  fuction that take username and password
//if username===ayush && password===ayush
//welcome admin
//ram,ram ,welcome user
//invalid password or username

const num = (username, password) => {
  if ((username && password) == "ayush") {
    return `Welcome  admin, ${username}`;
  } else if ((username && password) == "ram") {
    return `Welcome user, ${username}`;
  } else {
    return `invalid password or username`;
  }
};
const username = prompt("enter your username");
const password = prompt("enter your password");
const g = num(username, password);
console.log({ g });

//write a js function to solve the factorial of 5
// (recursive function)
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(5));

//Es5
//function define
function sum1(a, b) {
  const result = a + b;
  return result;
  // return a+b;
}

function mul(a, b) {
  return a * b;
}
//function call
const sumResult = sum1(2, 3);

//print
console.log({ sumResult });

//Es6
const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(2, 3));

//es5
function div(x, y) {
  return x / y;
}
console.log(div(4, 2));

//es6
const divi = (x, y) => {
  return x / y;
};
console.log(divi(4, 2));

// write a js function to calculate the interest of principle.10000,10 yrs ,10%
function interest(P, T, R) {
  return (P * T * R) / 100;
}
const solve = interest(10000, 10, 0.1);
console.log({ solve });

const inte = (p, t, r) => {
  return (p * t * r) / 100;
};
console.log(inte(10000, 10, 0.1));

//write a js function that calculate the age of the person from date of birth
const birthYear = 2055;

function calcAge(year) {
  return 2024 - year;
}

const age = calcAge(birthYear);
console.log({ age });

//write a js function that reverse the string
//3210 => 0123

const reverse = (word) => {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};
console.log(reverse("3210"));

//write a js function to check if the word is palindrome
//mom, dad
const palindrome = (word) => {
  let newString1 = "dad";
  for (let j = word.length - 1; j >= 0; j--) {
    newString1 += word[j];
  }
  if (newString1 === word) {
    return true;
  } else return false;
};
console.log(palindrome("dad"));
