console.log("day 5");

// objects

// primitive data types
// 1.string
// 2.Number
// 3.BigInt
// 4.Undefined
// 5.null
// 6.symbol
// 7.boolean

//complex data types (object , array ,date)

//CRUD - create, read ,update, delete
//object

//object keyword{}

const school = {
  name: "saint xavier's college",
  estd: 2002,
  phone: "+1....",
  address: "kathmandu",
  isCollege: true,
};

// create a new object called car
const car = {
  name: "Tesla",
  color: "red",
  price: 250,
  estd: 2012,
  owner: {
    a: "ayush",
    b: "ram",
  },
  age: function () {
    return 2024 - 2012;
  }, //es5 anonymous function
  old: () => {
    return 2024 - 2012;
  }, //es6 Arrow function
};

// create
//techniques 1
const box = new Object();

//techniques 2
const boxes = {};

//read
//we have to use dot notation
console.log(car.name, car.color, car.age(), car.owner.a);

//update
car.estd = 2016;
car.model = "A";
car.owner.a = "Ayush";
console.log(car);

//delete
//1 delete the object property

delete car.owner.b;
console.log(car);

const teacher = {
  name: "ayush",
  dob: 2014,
  age: function () {
    return 2024 - this.dob;
  },
  old: () => {
    return 2024 - teacher.dob;
  },
};
console.log(teacher.age()); // 12
console.log(teacher.old()); //NaN

// Write a program which can return a boolean if value is present
// in the range with given start and end values in an object

// // Example
let range = {
  start: 10,
  end: 50,
  check: (x) => {
    if (x >= range.start && x <= range.end) {
      return true;
    }
    return false;
  },
};

// 5 in range; // false
// 25 in range; // true
console.log(range.check(33));
console.log(range.check(3));

const convertThousand = (num) => {
  let word = num.toString().split("").reverse();
  for (let i = 3; i < word.length; i += 4) {
    word.splice(i, 0, ",");
  }
  return word.reverse().join("");
};
alert(convertThousand(1000000));
