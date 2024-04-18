//Array
//CRUD(create,read,update,delete)

//create

const firstArr = [];
const secondArr = new Array();
console.log(firstArr, secondArr);

const thirdArr = [
  "toyota",
  { name: "Hyundai" },
  "mercedes",
  "neta V",
  ["1", 2],
  function age() {
    return "hello";
  },
];
console.log(thirdArr);

// read
console.log(thirdArr[3]);
// console.log(thirdArr[6]());
console.log(thirdArr[1].name); //for object call
console.log(thirdArr[4][1]);

//update
thirdArr[0] = "ayush";
thirdArr[1].name = "XYZ";
console.log(thirdArr);

//delete
//spread operator...
const [i, j, ...rest] = thirdArr;
console.log(rest);

const obj = { a: "ayush", b: "ram", c: "shyam" };
//delete
const { a, c, ...test } = obj;
console.log(test);

//spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const result = [...first, ...second];
console.log({ result });

//loop and print all the values of the result array
for (let i = 0; i <= result.length - 1; i++) {
  console.log(result[i]);
}

// write a js array solution to add new element in the array
const newArr1 = [1, 2];
newArr1.unshift(0);
console.log(newArr1);

//write a js array method solution to covert Array to string
//output:1,2

const testString = "1,2,3,4";
const arr = testString.split(",");
console.log(arr);
//result:["1","2"]

const people = [
  { name: "ayush", age: 10, class: 6 },
  { name: "sita", age: 20, class: 12 },
  { name: "ram", age: 15, class: 9 },
]; //sort in ascending order by age =>small to big
const res = people.sort((a, b) => a.class - b.class);
console.log(res);

//other way
const sorter = (c, d) => {
  return c.age - d.age;
};
const resultSort = people.sort(sorter);
console.log({ resultSort });

// const name = "ayush"; //no update
// let person = "ayush"; //update
// person = "ram";

//loop
//print from 1 to 10 number
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k <= 10);

let food1 = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fries", "Ice-cream", "Pizza"];
function commonElement(food1, food2) {
  for (let i = 0; i < food1.length; i++) {
    for (let j = 0; j < food2.length; j++)
      if (food1[i] === food2[j]) {
        return true;
      }
  }
  return false;
}
console.log(commonElement(food1, food2));
// Compare the 2 arrays and find common food if any.

// otherway
const answer = food1.filter((a) => food2.includes(a));
console.log(answer);

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// get an array of all names(map)
const map = characters.map((x) => x.name);
console.log(map);

//Get an array of all heights
const map1 = characters.map((y) => y.height);
console.log(map1);

//Get an array of objects with just name and height properties
const both = characters.map((a) => ({ key: a.name, val: a.height }));
console.log(both);

//Get an array of all first names
const r = characters.map((a) => a.name.split(" ")[0]);
console.log(r);

//Get the total mass of all characters
function getTotalMass(characters) {
  let totalMass = 0;
  for (let a of characters) {
    totalMass += Number(a.mass);
  }
  return totalMass;
}
console.log(getTotalMass(characters));

//otherway
// const callbackfn = (initialValue, currentValue) =>
//   initialValue + Number(currentValue.mass);
// const getTotalMass1 = characters.reduce(callbackfn, 0);
// console.log(getTotalMass1);

//Get the total height of all characters
function getTotalheight(characters) {
  let totalheight = 0;
  for (let b of characters) {
    totalheight += Number(b.height);
  }
  return totalheight;
}
console.log(getTotalheight(characters));

//Get the total number of characters in all the character names
function getTotalCharactersInNames(characters) {
  let totalCharacters = 0;
  for (let x of characters) {
    totalCharacters += x.name.length;
  }
  return totalCharacters;
}
console.log(getTotalCharactersInNames(characters));

//Get the total number of characters by eye color
const eyes = characters.reduce((initial, current) => {
  if (initial[current_eye_colour]) {
    initial[current_eye_colour]++;
  } else {
    initial[current_eye_colour] = 1;
  }
  return initial;
}, {});
console.log({ eyes });

//Get characters with mass greater than 100
const ans = characters.filter((e) => Number(e.mass > 100));
console.log(ans);

//Get characters with height less than 200
const lessHeight = characters.filter((k) => Number(k.height < 200));
console.log(lessHeight);

//Get all male characters
const male = characters.filter((l) => l.gender == "male");
console.log(male);

//Get all female characters
const female = characters.filter((l) => l.gender == "female");
console.log(female);

//Sort by name
characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log({ characters });

//Sort by mass
characters.sort((a, b) => {
  return Number(a.mass) - Number(b.mass);
});

console.log({ characters });

//Sort by height
characters.sort((a, b) => {
  return Number(a.height) - Number(b.height);
});

console.log({ characters });

// sort by gender
characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  if (a.gender > b.gender) return 1;
  return 0;
});
console.log({ characters });

//Does every character have blue eyes?
const allHaveBlueEyes =
  characters.filter((a) => a.eye_color === "blue").length === characters.length;
console.log(allHaveBlueEyes);

//Does every character have mass more than 40?
const allHaveMass =
  characters.filter((b) => b.mass > 40).length === characters.length;
console.log(allHaveMass);

//Is every character shorter than 200?
const shorter = characters.every((c) => Number(c.height) < 200);
console.log(shorter);

//Is every character male?
const malee = characters.every((c) => c.gender == "male");
console.log(malee);

//Is there at least one male character?
const m = (x) => x.gender == "male";
console.log(characters.some(m));

//Is there at least one character with blue eyes?
const b = (x) => x.eye_color == "blue";
console.log(characters.some(b));

//Is there at least one character taller than 200?
const tall = (x) => Number(x.height) > 200;
console.log(characters.some(tall));

//Is there at least one character that has mass less than 50?
const lessThan50 = (y) => Number(y.mass) < 50;
console.log(characters.some(lessThan50));
