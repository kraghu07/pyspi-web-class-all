// // Function to check if a year is a leap year
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// // Example usage
// const yearToCheck = 2000;
// if (isLeapYear(yearToCheck)) {
//     console.log(yearToCheck + ' is a leap year');
// } else {
//     console.log(yearToCheck + ' is not a leap year');
// }


// const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// // Example usage
// const yearToCheck = 2000;
// if (isLeapYear(yearToCheck)) {
//     console.log(yearToCheck + ' is a leap year');
// } else {
//     console.log(yearToCheck + ' is not a leap year');
// }


/*

Certainly! Let's explore looping statements in JavaScript. There are different types of loops you can use:

1. **For Loop**:
   - The `for` loop is the most common type of loop. It's used when you know the exact number of times you need to execute a block of code.
   - Syntax:
     ```javascript
     for (initialization; condition; increment/decrement) {
         // Code to be executed
     }
     ```
   - Example:
     ```javascript
     for (let i = 0; i < 5; i++) {
         console.log("The number is " + i);
     }
     ```

2. **While Loop**:
   - The `while` loop executes a block of code while a specified condition is true.
   - Syntax:
     ```javascript
     while (condition) {
         // Code to be executed
     }
     ```
   - Example:
     ```javascript
     let count = 0;
     while (count < 5) {
         console.log("Count: " + count);
         count++;
     }
     ```

3. **Do-While Loop**:
   - The `do-while` loop is similar to the `while` loop, but it always executes the code block at least once, even if the condition is false.
   - Syntax:
     ```javascript
     do {
         // Code to be executed
     } while (condition);
     ```
   - Example:
     ```javascript
     let num = 0;
     do {
         console.log("Number: " + num);
         num++;
     } while (num < 5);
     ```

4. **For-In Loop**:
   - The `for-in` loop iterates through the properties of an object.
   - Syntax:
     ```javascript
     for (let key in object) {
         // Code to be executed
     }
     ```
   - Example:
     ```javascript
     const person = { name: "Alice", age: 30 };
     for (let prop in person) {
         console.log(prop + ": " + person[prop]);
     }
     ```

5. **For-Of Loop**:
   - The `for-of` loop iterates through the values of an iterable object (e.g., arrays, strings).
   - Syntax:
     ```javascript
     for (let value of iterable) {
         // Code to be executed
     }
     ```
   - Example:
     ```javascript
     const colors = ["red", "green", "blue"];
     for (let color of colors) {
         console.log("Color: " + color);
     }
     ```

Feel free to use these loops based on your specific requirements! 🚀🌟¹²³⁴⁵

Source: Conversation with Copilot, 28/8/2024
(1) JavaScript for Loop - W3Schools. https://www.w3schools.com/js/js_loop_for.asp.
(2) JavaScript Loops - GeeksforGeeks. https://www.geeksforgeeks.org/loops-in-javascript/.
(3) Loops Statements in JavaScript: A Beginner's Guide. https://www.codinn.dev/javascript/loops.
(4) JavaScript for Loop By Examples - JavaScript Tutorial. https://www.javascripttutorial.net/javascript-for-loop/.
(5) Loops and iteration - JavaScript | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration.

*/
//first class function
let foo=()=>{
  console.log("Jai Hanuman ji");
};
foo();

const sum_a=()=>{
  return 100;
};
function sum(a,b){
  console.log(a()+b);
}
sum(sum_a,8);

// fcatorial
let doFact=(n)=>{
  let res=1;
  let arr=[];
  for(let i=1;i<=n;i++){
    res*=i;
    arr.push(res);
  }
  return arr;
}

function fcat(n){
  console.log(n);
}

function ran(){
  for(let i=1;i<=10;i++){
    fcat(doFact(i));
  }
}

ran();

//PPPPPPPPPPPPPPPPPRRRRRRRRRRRRRRRRIIIIIIIIIIIIMMMMMMMMMMMMMMMEEEEEEEEEEEEEEEE
const prime=(n)=>{
  if(n<=1) return false
  for(let i=2;i<n;i++){
    if (n%i===0) return false
    // return "non-prime"
  }
  return true
  // return "prime"
}


function isPrime(k){
  console.log(k);
}


function ran100(){
  let array=[];
  for(let i=2;i<=100;i++){
    if(prime(i)){
      array.push(i)
    }
  }
  return array
}

isPrime(ran100());

const p=(n)=>{
  if(n<=1) return "non prime nor compo"
  for(let i=2;i<=n;i++){
    if(n%=0){
      return "non-prime"
    }
  }
  return "prime"
}

const primes=()=>{
  console.log(p());
}
primes();