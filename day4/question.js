//write a js function to find the largest word in the sentence
//eg: my name is lakhana

const findLargest = (sentence) => {
  const words = sentence.split(" "); //["my" "name" "is" "lakhan"]
  let tempAns = "";
  for (let i = 0; i < words.length; i++) {
    if (tempAns.length < words[i].length) {
      tempAns = words[i];
    }
  }
  return tempAns;
};
console.log(findLargest("my name is lakhan"));

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function celsius() {
  return ((f - 32) * 5) / 9;
}
function Fahrenheit() {
  return (c / 5) * 9 + 32;
}
const f = 45;
console.log(celsius(f));
const c = 60;
console.log(Fahrenheit(c));

const getTemp = (temp, type = "c") => {
  if (type === "c") {
    return 1.8 * temp + 32;
  } else return (5 * temp) / 9 - 17.78;
};
console.log(getTemp(32), "F");
console.log(getTemp(100, "f"), "C");
