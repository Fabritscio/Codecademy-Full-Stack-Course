let myAge = 32;
// This is a variable with my age assigned to it
let earlyYears = 2;
// This is a variable with the number two assigned to it
earlyYears *= 10.5;

let laterYears = myAge - 2;
// Created a new variable called laterYears and assigned to it the value - 2;
laterYears *= 4;
// Multiplied the laterYears variable by 4

const myAgeInDogYears = earlyYears + laterYears;
// Created a new variable and assigned the to variables added together

const myName = "Fabio".toLowerCase();
// Created a new variable myName and assigned it my name with a object toLowerCase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

// Logged to the console a sentence that uses template literals to embed all the variable created previously within the exercise
