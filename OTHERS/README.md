ex1

/_ Basic Calculator [CODE] _/

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
    <style>
      .container {
        border: 1px solid blue;
        padding: 20px;
        width: 320px;
        margin: auto;
      }
      input {
        height: 50px;
        width: 100%;
        font-size: large;
        text-align: right;
      }
      td {
        font-size: x-large;
        text-align: center;
        cursor: pointer;
      }
      table {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="inputScreen">
        <input type="text" id="display" disabled />
      </div>
      <div class="keys">
        <table>
          <tbody>
            <tr>
              <td onclick="clearDisplay()">AC</td>
              <td onclick="appendToDisplay('/')">/</td>
              <td onclick="appendToDisplay('*')">*</td>
              <td onclick="appendToDisplay('-')">-</td>
            </tr>
            <tr>
              <td onclick="appendToDisplay('7')">7</td>
              <td onclick="appendToDisplay('8')">8</td>
              <td onclick="appendToDisplay('9')">9</td>
              <td rowspan="2" onclick="appendToDisplay('+')">+</td>
            </tr>
            <tr>
              <td onclick="appendToDisplay('4')">4</td>
              <td onclick="appendToDisplay('5')">5</td>
              <td onclick="appendToDisplay('6')">6</td>
            </tr>
            <tr>
              <td onclick="appendToDisplay('1')">1</td>
              <td onclick="appendToDisplay('2')">2</td>
              <td onclick="appendToDisplay('3')">3</td>
              <td rowspan="2" onclick="calculateResult()">Enter</td>
            </tr>
            <tr>
              <td onclick="appendToDisplay('0')">0</td>
              <td onclick="appendToDisplay('.')">.</td>
              <td onclick="deleteLast()">del</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <script>
      function appendToDisplay(value) {
        document.getElementById('display').value += value;
      }

      function clearDisplay() {
        document.getElementById('display').value = '';
      }

      function deleteLast() {
        let display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
      }

      function calculateResult() {
        let display = document.getElementById('display');
        try {
          display.value = eval(display.value);
        } catch {
          display.value = 'Error';
        }
      }
    </script>

  </body>
</html>

<!--


;
    transform: translateX(200px);
}

.child1:hover{
    transform: rotate(20deg);
    /* transform: rotateX(90deg); */
    /* transform: rotateY(180deg); */
    /* transform: skew(20deg); */
    /* transform: skewX(30deg); */
    /* transform: skewY(30deg); */
    /* transform: scale(1.5); */
    /* transform: scaleX(1.2); */
    /* transform: scaleY(1.2); */
    /*transform: translate(100px,100px); */
    /* transform: translateX(200px); */
    /* transform: translateY(200px); */
    /* transform-origin: 20% 30%; */
    /* transform: perspective(3d); */
}


---------------------------------css------------------------------------
body {
    max-width: 100%;
    min-height: 100vh;
}

div.container {
    border: 5px solid black;
    height: 600px;
    width: 900px;
    display: flex;
    display: grid;
    place-items: center;
    margin: auto;
}

.child1 {
    border: 2px solid green;
    height: 200px;
    width: 200px;
    margin: 10px;
    position: absolute;
    background-color: purple;
    font-size: xx-large;
    color: white;
    /* transition-property: width,height; */
    /* transition-property: all;
    transition-duration: 2s;
    transition-delay: 0.5ms;
    transition-timing-function: linear; */
    transition: all 0.5s 0.5ms linear;
}


.child1:hover{
    /* width: 300px;
    height: 400px; */

    transform: scale(2);
}



---------------------------------transition timing function--------------------------------------------------

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="styles.css">
</head>

<body>
<div class="container">
   <div class="child">container ease</div>
   <div class="child">container ease-in</div>
   <div class="child">container ease-out</div>
   <div class="child">container linear</div>
   <div class="child">container cubic-beizer</div>
</div>
</body>

</html>

-----------------------------------------css-------------------------------------------------



body {
    max-width: 100%;
    min-height: 100vh;
}

div.container {
    border: 5px solid black;
    height: 600px;
    width: 900px;



    margin: auto;
}

.child{
    border: 2px solid green;
    height: 50px;
    width: 300px;
    margin: 10px;
    background-color: purple;
    font-size: xx-large;
    color: white;
}
.child:nth-child(1){
    transition: 2s ease;
}
.child:nth-child(2){
    transition: 2s ease-in;
}

.child:nth-child(3){
    transition: 2s ease-out;

}

.child:nth-child(4){
    transition: 2s linear;

}

.child:nth-child(5){
    transition: 2s cubic-bezier(0.74,-0.2, 0.44, 1.16);
}
.child:hover{
    width: 700px;
}

---------------------------------------------------------------------------------tasks----------------------------------------------------------------------------
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="styles.css">
</head>

<body>
<!-- <div class="container">
   <img src="./licensed-image.jpg" alt="ronaldo">
   <div class="text">Cristiano ronaldo</div>
</div>
<div class="container">
   <img src="./licensed-image.jpg" alt="ronaldo">
   <div class="text">Cristiano ronaldo</div>
</div> -->
<!-- <nav>hello</nav> -->
<!-- <div class="hero-section"> -->
   <!-- <img src="./licensed-image.jpg" alt=""> -->
<!-- </div> -->

<!-- <div class="card">
   <img src="./licensed-image.jpg" alt="ronaldo">
   <div class="text">Ronaldo</div>
</div> -->
<div class="card">
   <img src="./licensed-image.jpg" alt="ronaldo">
   <div class="overlay">
      <div class="text">Ronaldo</div>
   </div>
</div>
</body>

</html>

----------------------------------------------------------------------------css-------------------------------------------------------

/_ div.container{
height: 400px;
width: 500px;
box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
cursor: pointer;
overflow: hidden;
} _/

/_ to make it responsive _/
/_ div.container img{
width: 100%;
height: 80%;
object-fit: cover;
aspect-ratio: 1/1;
transition: 0.2s ease;
} _/
/\* div.container div.text{
text-align: center;
margin-top: 1em;
font-size: 2em;
}

div.container:hover img{
filter: grayscale(1.2);
transform: scale(1.2);
opacity: 0.4;
} _/
/_ body{
margin: 0;
padding: 0;
box-sizing: border-box;
height: 100vh;
width: 100%;
}
nav{
height: 100px;
background-color: aqua;
}
.hero-section{
max-width: 100%;
height: 70vh;
margin: 1em;
padding: 0 2em;
background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(./licensed-image.jpg);
background-size: cover;
} _/
/_ .hero-section img{
width: 100%;
height: 100%;
object-fit: cover;
} \*/

/_ div.card{
width: 200px;
height: 300px;
position: relative;
cursor: pointer;
}
div.card img{
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
transition: 0.2s ease;
}
div.card div.text{
position: absolute;
top: 50%;
left: 50%;
color: white;
transform: translate(-50%,-50%);
background-color: crimson;
padding: 1em 1.5em;
border-radius: 8px;
display: none;
transition: 0.2s ease;
}
div.card:hover img{
filter: blur(1px);
}
div.card:hover div.text{
display: block;
} _/

div.card{
width: 200px;
height: 300px;
position: relative;
cursor: pointer;
}
div.card img{
width: 100%;
height: 100%;
object-fit: cover;
}
div.card .overlay{
position: absolute;
height: 100%;
width: 0;
left: 0;
bottom: 0;
background-color: blue;
overflow: hidden;
transition: 0.2s ease;
}
div.card .text{
position: absolute;
color: white;
left: 50%;
top: 50%;
overflow: hidden;
transform: translate(-50%,-50%);
}
div.card:hover .overlay{
width: 100%;
}

---------------------------------------------------------------------flex-box monday---------------------------

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <!-- <link rel="stylesheet" href="styles.css"> -->
    <style>
      .container{
         /* border: 2px solid red; */
         /* display: flex; */
         /* justify-content:space-evenly; */
         /* height: 100vh; */
         /* align-items: center; */
         /* align-items: baseline; */
         /* main axis is titled */
         /* flex-direction: column; */
         /* justify-content: flex-end; */
         /* align-items: center;  */
         /* flex-direction: row-reverse; */
         /* flex-direction: column-reverse; */
      }
      /* .items{
         background-color: blueviolet;
         height: 100px;
         width: 100px;
         margin: 10px;
         color: white;
      } */
      /* .items:nth-child(1){
         font-size: 40px;
      }
      .items:nth-child(2){
         font-size: 80px;
      }
      .items:nth-child(3){
         font-size: 60px;
      } */
       nav{
         display: flex;
         justify-content: space-between;
         /* background-color: red; */
         align-items: center;
       }
       nav h2{
         margin-left: 1em;
         font-size: 2em;
       }
       nav ul{
         width: 50%;
         display: flex;
         justify-content: space-evenly;
         list-style: none;
         align-items: center;
       }
       nav ul li:last-child{
         background-color: black;
         color: white;
         padding: 1em 2em;
         border-radius: 3em;
       }
    </style>
</head>

<body>
<!-- <div class="container">
   <div class="items">item1</div>
   <div class="items">item2</div>
   <div class="items">item3</div>
   <div class="items">item4</div>
</div> -->
<nav>
   <h2>Medium</h2>
   <ul>
      <li>Our story</li>
      <li>Membership</li>
      <li>Write</li>
      <li>Sign in</li>
      <li>Get started</li>
   </ul>
</nav>
</body>

---------------------------------------------------------------------------flex-item properties--------------------------------------------------------

<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <!-- <link rel="stylesheet" href="styles.css"> -->
    <style>
      .container{
         border: 2px solid red;
         height: 90vh;
         display: flex;
      } 
      .items{
         background-color: blueviolet;
         /* height: 200px; */
         width: 200px;
         margin: 10px;
         color: white;
      }
      .items:nth-child(1){
         /* order: 1; */
         /* flex-basis:300px; */
         align-self: flex-end;
      }
      .items:nth-child(2){
         /* order: 1; */
         /* flex-grow: 3; */
         /* flex-shrink: 0; */
      }
      .items:nth-child(3){
         /* order: 1; */
         /* flex-grow: 2; */
         align-self: center;
      }
      .items:nth-child(4){
         /* order:1; */
      }

    </style>

</head>

<body>
<div class="container">
   <div class="items">item1</div>
   <div class="items">item2</div>
   <div class="items">item3</div>
   <div class="items">item4</div>
</div>

</body>

</html>

-------------------------------------------grid---------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main>
        <header>Header</header>
        <aside>aside</aside>
        <section>section</section>
        <article>Article1</article>
        <article>Article2</article>
        <footer>footer</footer>
    </main>
</body>
</html>

---------------------------css---------------
_{
margin: 0;
padding: 0;box-sizing: border-box;
}
body{
max-width: 100vw;
}
main{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: xx-large;
display: grid;
gap: 20px;
grid-template-areas: 'header header header'
'aside section section'
'aside article1 article2'
'footer footer footer';
}
main _{
border: 2px solid skyblue;
background-color: steelblue;
padding: 2em;
color: white;
align-content: center;
text-align: center;
}
header{
grid-area: header;
}
aside{
grid-area: aside;
}
section{
grid-area: section;
}
article:nth-of-type(1){
grid-area: article1;
}
article:nth-of-type(2){
grid-area: article2;
}
footer{
grid-area: footer;
}

-------------------------------------------------------------js string methods----------------------------------------
//datatypes  
//primitive and non-primitive

//number  
//string //object
//boolean //function
//null //array
//undefined //set
//Bigint //map
//Symbol

//literal way

// let str1="encyclopedia"
// console.log(str1.length);
// console.log(str1[1]);

//string methods

// let res=str1.charAt(13)
// let res=str1.charCodeAt(2)
// let res=str1.indexOf("e",5)
// let res=str1.lastIndexOf("e")

// let res=str1.slice(0,4)
// let res=str1.slice(-10,-7)
// let res=str1.slice(5)

// str1.

// console.log(res);

// let sentence="it was raining cats and dogs,Cats were straying in streets"

// let res=sentence.replace(/cats/ig,"dogs")
// let res=sentence.replaceAll()// es2021

// let res=sentence.match(/cats/ig)
// console.log(res);

// let pattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
// let input="umashankarp33@gmail.com"

// let res=pattern.test(input)
// console.log(res);

// console.log(sentence);

// let price=100;
// let res=price.toString();
// let paddedString=res.padStart(6,'₹')
// console.log(paddedString);

// let a=5.2;

// console.log(a); //64bit floating point number 2.000

//number and bigInt

//(+-2^53-1)

// let b=(Math.pow(2,53)-1)
// console.log(BigInt(b)+BigInt(6));

// let cond1=true;

// let cond2=false;

//comparison operations 5>2 5==2

//null

// let price=null;

// console.log(price);

//undefined

// let a=undefined;

// const a=undefined;

// console.log(a);

let a=Symbol(2);
// let b=Symbol(2);

// console.log(a==b);

-----------------------------------------------------------------gec and FEC----------------------
How JavaScript executes?

While reading through HTML, if the browser encounters JavaScript code to run via a <script> tag it sends it to its JavaScript engine.

The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the Execution Context.

The Execution Context contains the code that's currently running, and everything that helps in its execution.

During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

There are two kinds of Execution Context in JavaScript:

- Global Execution Context (GEC)
- Function Execution Context (FEC)

---

Global Execution Context (GEC)
->Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the Global Execution Context (GEC).

->The GEC is the base/default Execution Context where all JavaScript code that is not inside of a function gets executed.

## ->For every JavaScript file, there can only be one GEC.

Function Execution Context (FEC)
Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

---

The creation of an Execution Context (GEC or FEC) happens in two phases:

- Creation Phase
- Execution Phase

Creation phase:

1. In creation phase a global object (window) is created --window is nothing but current window or frame of a browser.
   2.'this' is created (this keyword is a object) and it is bound to global object.
2. All the variables are tokenised, stored in memory and initialised to undefined.
3. The function declarations are also assigned with memory.
   (3 and 4 is the reason for hoisting)

Execution phase:
1.All variables are assigned with actual values.
2.All executable statements execute to give desired output.

Note:
GEC and FEC both will have creation and execution phases but in execution phase of GEC if any function is encountered the FEC for that particular function is created, similarly FEC will have its own creation phase and execution phase.

---

let x=5;
var y=6;

function add(n1,n2){
return n1+n2;
}
let sum1=add(x,y);

---

Global execution context is created for the above code
In GEC we have two phases,

1.Creation phase:

- Variables and Functions: JavaScript scans the code and sets up memory space for x, y,sum1 and the function add. For var declarations like y, the variable is hoisted and initialized with undefined. For let declarations like x,sum1 it is hoisted but remains uninitialized until the code execution reaches the declaration.

- Global Object: The global object is set up (window in browsers).

- this: Points to the global object in the global execution context.

  2.Execution phase:

- Variable Assignment:
  -x is assigned the value 5.
  -y is assigned the value 6.

\*Function Declaration: The add function is defined.

## \*Function Call: add(x, y) is called, so an FEC is created for this function call.

FEC for add(x,y)
Here again two phases:

1.Creation Phase:
When add is invoked, a new FEC is created.

- 'this' will point to window which is created in GEC.
- Arguments: n1 and n2 are set to 5 and 6, respectively, based on the call add(x, y).
- Variables: Local variables within add are initialized, but in this case, there are no local variables.

  2.Execution Phase:

- Execution of Code: The add function executes its body:
- return n1 + n2; executes and returns 11.

- Result Storage:
  The result 11 is assigned to sum1 in the global context.

----------------------------------------------------------assignments----------------------------------------------------
//1answer these
// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

    // 2.Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

    // pow(3, 2) = 3 * 3 = 9
    // pow(3, 3) = 3 * 3 * 3 = 27
    // pow(1, 100) = 1 * 1 * ...* 1 = 1

    // 3.Write a function min(a,b) which returns the least of two numbers a and b.

    // For instance:

      // min(2, 5) == 2
      // min(3, -1) == -1
      // min(1, 1) == 1


    // 4.function checkAge(age) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       return confirm('Did parents allow you?');
    //     }
    //   }
    //   Rewrite it, to perform the same, but without if, in a single line.

    //   Make two variants of checkAge:

    //   Using a question mark operator ?
    //   Using OR ||


    // 5.Replace Function Expressions with arrow functions in the code below:

    // function ask(question, yes, no) {
    // if (confirm(question)) yes();
    // else no();
    // }
    // ask(
    // "Do you agree?"
    // function() { alert("You agreed."); },
    // function() { alert("You canceled the execution."); }
    // );


    -------------------------------------------------------array methods----------------------------------------------------
    // let arr=[1,2,3,4,5,"hello",function(){},{name:"shankar"}]

// let names=["zeus","ceaser","athena"]
// console.log(names.sort()); //['athena', 'ceaser', 'zeus']

// let arr=[1,2,101,4,5,6,610,7]
// console.log(arr.sort()); //[1, 101, 2, 4, 5, 6, 610, 7]
//this sorts array in lexicographical order

//to sort array numerically a comparision function is passed as a callback to sort function
// let arr=[1,2,101,4,5,6,610,7]
// arr.sort((a,b)=>{
// return b-a
// })
// console.log(arr);

//or
// let sortedArr=arr.sort((a,b)=>a-b)
// console.log(sortedArr);
//or
// let sortedArr=arr.sort(function(a,b){
// return a-b
// })
// console.log(sortedArr);

// let fruits=["apple","mango","grapes","tomato"]
// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);

// let persons=[{name:"jack",age:20},{name:"Bond",age:45},{name:"bourne",age:60}]

// console.log(persons.findIndex((ele)=>{
// return ele.name=="bourne"
// }));

// let arr=[1,2,3,4,5,6]
// console.log(arr.pop()); //removes last ele from an array and it mutates original array
// console.log(arr);

// arr.push(2,3,4,5)

// arr.shift() //removes first ele from an array and it mutates original array
// console.log(arr);

// console.log(arr.length)
// console.log(arr.unshift("hello","hi")) //adds elements to start of an array and mutates original array
// console.log(arr);

//slice--cuts an array
//splice--joins an array

let arr=[1,2,3,4,5,6]

// console.log(arr.slice(3,5))
// console.log(arr);//doesn't mutate original array

// console.log(arr.slice(-6,-3))
arr.slice(startIndex,endIndex)
// console.log(arr.slice(3));

console.log(arr.splice(2,0,"hello","bye","hi"))
// arr,splice(startIndex,noOfelementstoRemove,elementsToAdd)
console.log(arr); //mutates original array and can be used also to remove elements at the specified location

------------------iteration methods-------------------------------

// let arr=[1,2,3,54,5,5,5]
// for(let i=0;i<arr.length;i++){
// console.log(arr[i]);
// }

// for(let key in arr){
// console.log(arr[key])
// }

// arr.forEach((value,index,array) => {
// // console.log(" value "+value+" index "+index+" array ",array);
// console.log(value)
// });

//filter map and reduce

let pickedClothes=[5000,4000,2000,3000,1000]

let filteredClothes=pickedClothes.filter((value,index,array)=>{
return value<=4000;
})
console.log(filteredClothes);

let gstAddedClothes=filteredClothes.map((value)=>{
return value+=(value\*5)/100;
})
console.log(gstAddedClothes);

let totalCost=gstAddedClothes.reduce((accumulator,value,index,array)=>{
return accumulator+value;
},-2000)

console.log(totalCost);

//[4200, 2100, 3150, 1050]

// 0+4200
// 4200+2100
// 6300+3150
// 9450+1050
//

---------------------------------------------------task on arrays--
// class FriendsManager{
// constructor(){
// this.friends=[];
// }

// addFriend(friend){
// this.friends.push(friend)
// }
// getFriends(){
// return this.friends;
// }
// getMutual(friend2){
// let mutualFriends=this.friends.filter((friend)=>{
// //check whether friend from friend1 list is included in friend2 list
// return friend2.getFriends().includes(friend)
// })
// return mutualFriends;
// }
// }
// const friend1=new FriendsManager();

// friend1.addFriend("suresh")
// friend1.addFriend("ramesh")
// friend1.addFriend("punith")
// friend1.addFriend("ajay")
// friend1.addFriend("suraj")

// const friend2=new FriendsManager();
// friend2.addFriend("akash")
// friend2.addFriend("bhuvan")
// friend2.addFriend("punith")
// friend2.addFriend("ajay")
// friend2.addFriend("suraj")

// let res=friend1.getMutual(friend2)
// console.log(res);

// // let arr=[1,2,3,4,5]

// // console.log(arr.includes(1));

// let arr=[1,2,3,54,5,6]

// let result=arr.filter((ele)=>{
// return ele<3
// })
// console.log(result);
-----------------------------------------------------------------rest and spread operator--------------------------------
//spread operator
let arr=[1,2,3,4,5,6]

function add(a,b,c,d,e){
return a+b+c+d+e
}

console.log(add(...arr));

let arr1=[1,2,3,4,5,6]
let arr2=[7,8,9,10]

// console.log(arr.concat(arr1));

let c=[...arr1,...arr2]
console.log(c);

let a={
name:"nodbody",
age:18
}
let b={
address:"bengaluru"
}

// // let res=Object.assign(a,b)
// // console.log(res);

// let c={...a,...b}
// console.log(c);

///rest operator

function person(name,age,...details){ //details-rest parameter
console.log(name);
console.log(age);
console.log(details);

}
person("John wick",45,"assasin","continental","dog lover")

-->
