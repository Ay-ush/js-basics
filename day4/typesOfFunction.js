/* 
Types of functions
1. Parameterized Function
2. Default Function
3.Explicit Function
4.Implicit Function
5.Anonymous Function
6.Inline Function
7.Closure
8.IIFE
9.Pure Function
*/
//basic function
const hello = () => {
  return "hello";
};

//parameterized function
const getFirstName = (name) => {
  const words = name.split("");
  const result = words(0);
  return result;

  //return name.split("")[0]
};

//default function
//real world example: pagination
const sayHi = (topic = "user") => {
  alert(`hi ${topic}`);
};

sayHi("ayush");
sayHi();

const getTemp = (temp, type = "c") => {
  if (type === "c") {
    return 1.8 * temp + 32;
  } else return (5 * temp) / 9 - 17.78;
};
console.log(getTemp(32), "F");
console.log(getTemp(100, "f"), "C");

//explicit function
const getEName = () => {
  return "ayush"; // explicit means return keyword is mentioned
};

//implicit function
const getIName = () => "raktim";

//write a js function that return last name of user

const getLName = (name) => name.split("")[1];
// {
//   const words = name.split('');
//   console.log(words); //["ayush",'acharya']
//   console.log(words[0],words[1])
// }

//"ayush acharya" => ["ayush","acharya"]

//write a js function that accepts a number as a parameter
// and checks whether its is prime or not.

const prime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(prime(4));

//write a js function that converts a long sentence to '....' statement
//truncate

//raktim is a very busy person.He is teaching at Broadway at the time.
//raktim is a very busy person...

const sentence = (str) => str.substring(0, 27).concat("...");
console.log(
  sentence(
    "raktim is a very busy person.He is teaching at Broadway at the time."
  )
);

//function chaining

// anonymous Function
const sayHii = function () {};

//inline function

const sayHello = () => {
  console.log("hi ayush"); //lexical scope
};

//IIFEs
//immediately invoked functional expression
//DevOps(Script Run,)

(function () {
  console.log("hei");
  console.log("hew");
  console.log("her");
  console.log("hey");
})();

(()=>{
  console.log("Brooooooo");
})();

//closure gives you access to an outer function's scope from an inner function
const getMyVars = () => {
  return {
    email_un: "rss",
    email_pw: "'''",
  };
}; //password hiding
console.log(getMyVars());
//packages nodejs(dot env)

//Pure Function(you can always expect same answer)

//Callback Function(one function finish execute then another function wants to call 1st ones function)

getFirstName()
  .then((result) => result)
  .then((result) => `hi ${result}`);

// callback Fn => promise =>async await;

// write a js function that check if the user inputted email is vaild email or not?

//write a js function that covert full name to proper case
//ayush => Ayush
