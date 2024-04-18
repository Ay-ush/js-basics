// if else
//switch case

//write a program that uses age to print the status of person

const age = Number(prompt("enter your age"));

if (age >= 30) {
  alert("you are old");
} else {
  alert("you are young");
}

/*
if(condition){
    //code block 1 run
}else{
    //code block 2 run
}
*/

// write a js program that check your username and password
//if username is your name and password is your name
//print welcome admin
//else
//if username is equal to password but for another person
//print welcome user

let username = prompt("enter your username");
let password = prompt("enter your password");
if ((username && password) == "Ayush") {
  alert("welcome admin " + username + " ");
} else {
  alert("welcome user " + username + "");
}

//write a js program that ask use the time
//if the time is in between 4 and 5:30
//alert class is in session
//else
//alert class is completed for today
let hour = Number(prompt("Enter your arrival hour"));
let min = Number(prompt("Enter your arrival min"));
if ((hour) => 16 && min >= 0 && hour >= 17 && min <= 30) {
  alert("class is in session");
} else {
  alert("class is completed for today");
}

//if
//else if{}
//else if{}
//else{}

//switch case

/* 
const condition=" ";
switch(condition):
  case value:
    alert("Class has not started")
    break;
  case value:
    alert("Class is in session")
    break;
  case value:
    alert("Class has finished today")
    break;
  default:
    alert("Invalid time")
  */

const time = Number(prompt("enter time"));
switch (time >= 1) {
  case time < "4":
    alert("Class has not started");
    break;
  case time >= "4" && time <= "5:30":
    alert("Class is in session");
    break;
  case time > "5:30":
    alert("Class has finished today");
    break;
  default:
    alert("Invalid time");
}

//A=90 and above
//B=80 and below 90
//c=70 and below 80
//D=60 and below 70
//F=below 60

const userScore = Number(prompt("Enter your score"));
switch (true) {
  case userScore >= 90:
    alert("Your grade is A");
    break;
  case userScore == 80 && userScore < 90:
    alert("your grade is B");
    break;
  case userScore == 70 && userScore < 80:
    alert("your grade is B");
    break;
  case userScore == 60 && userScore < 70:
    alert("your grade is B");
    break;
  case userScore < 60:
    alert("your grade is F");
    break;
  default:
    alert("Invalid time");
}

//condition if else
//un ==raktim welcome admin /welcome user
//if(un =="raktim"){
//alert("welcome admin"); }
//else{  alert("welcome user"); }

//ternary operator
//const un = prompt("enter your name");
//un == "raktim" ? alert("welcome admin") : alert("welcome user");

//condition? true: false

const gender = "o";

gender === "m"
  ? alert("male")
  : gender == "f"
  ? alert("female")
  : alert("other");
