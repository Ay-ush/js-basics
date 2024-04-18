console.log("day 2");

//Data types
//primitive data types
// 1.String

const person = "ram";
let female = "sita";
const user = "raktim";
const user2 = `sam`; //backtick ,tilde sign
var num = 20.0;
console.log({ person, female, user, user2, num });

//2 number
const pi = 3.14;
const num2 = 2;
const num3 = 2.0;
console.log({ pi, num2, num3 });

//3 Boolen(true/false)

const isRaktimBoy = false; //camel case
const isRaktimMan = true;
console.log({ isRaktimBoy, isRaktimMan });

//4 undefined

let test;
var test2;
console.log({ test, test2 });

//5 null
const data = null;
console.log({ data });

//type conversion and type coercion
//multiply using interaction (prompt)
const mul1 = prompt("enter 1st num"); //string
const mul2 = prompt("enter 2nd num"); //string

//type conversion method 1
const res = Number(mul1) * Number(mul2);
const stringOnly = String(mul1);
console.log({ res, stringOnly });

//type conversion method 2
const result2 = +mul1 * +mul2;
console.log({ result2 });

//operator(logical)
//and && ,or|| ,not!
const andCheck = mul1 && mul2; //true
const orCheck = mul1 || mul2; //true
const notCheck = !mul1; //false
console.log({ andCheck, orCheck, notCheck });
