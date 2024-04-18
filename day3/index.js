//loops
//for
//do while
//while

//write a js program that print from 1 to 10

let val = 1;
val++; //2
val += 1; //3
console.log({ d: val });
//++=unary operator

//for
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

//do while
console.log("======");
let result = 1;
do {
  console.log(result);
  result++;
} while (result <= 10);

//while
console.log("====");
let resp = 1;
while (resp <= 10) {
  console.log(resp);
  resp++;
}

//write a multiplication table for 3
for (let i = 1; i <= 10; i++) {
  const result = i * 3;
  console.log({ result });
}

let i = 1;
let res;
do {
  res = i * 3;
  console.log(res);
  i++;
} while (i <= 10);

let j = 1;
let mult;
while (j <= 10) {
  mult = j * 3;
  console.log(mult);
  j++;
}

//write a factorial of 5
let fact = 1;
for (i = 1; i <= 5; i++) {
  fact = fact * i;
  console.log(fact);
}
let temp = 1;
for (let number = 5; number >= 1; number--) {
  if (number == 0) {
    temp = 1;
    break;
  }
  temp = temp * number;
}
console.log(temp);

//comparison sign
/*
=assign the value
==value compare
===value and data type compare
*/

let person = "string";
let person1 = 132;
console.log((person = person1));
