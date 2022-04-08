// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Pseudocode
// Create a function.
// use conditional statement to determine if number is below boiling point.
// Expected output: 42 is below boiling point, 350 is above boiling point, 212 is at boiling point.
const temp = () => {
  return "is below boiling point.",
} else if(temp == 212) {
  return "is at boiling point.",
} else if(temp >= 350){
  return "is above boiling point."
}
console.log(temp())



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Pseudocode
// Create a function name comboArrays.
// Use the concat method to combine two arrays.
// Use length to return the number of elements.
// Expected output: 10

var comboArrays = myNumbers1.concat(myNumbers2)
console.log(comboArrays.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

const currentCohort = "Bravo 2022"

// Pseudocode
// Create a function named reverseString.
// Use a split() method to return a new array.
// Use the reverse() method to reverse the new array.
// Use the join() method to join all the elements of the array.
// Return the reversed string.
// Expected output: 2202 ovarB

function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}
console.log(reverseString(currentCohort))

//--------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Pseudocode
// Create a conditional statement
// Access each item in the array using iteration with a for loop
// Evaluate whether each number in array is even or odd
// Expected output: odd, even, odd, even, odd, even

for(let i = 0; i < myArray.length; i ++) {
  if (myArray [i] % 2 == 0) {
    console.log("even")
  } else {
    console.log("odd")
  }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// Pseudocode
// Create an if function.
// Use a conditional statement to take in two numbers and subtracts the smaller number from the large.
// Expected output: 42, 3

  if(number1 < number2 && number3 < number4){
    console.log(number1 - number2, (number3 - number4))
  } else {
    console.log(number2 - number1, (number3 - number4))
  }
