// var a=10
// console.log(a);

// let a =10;
// let a=51;
// console.log(a);

// const b=10;
// console.log(b);

/*number conversion*/

// alert("6"/"3")
// alert(typeof("6"/"3"))

// let res = prompt("enter any number")
// // console.log(res);
// console.log(Number(res));
// console.log(typeof Number(res));

// let data=typeof Number(1n);
// console.log(data);

// let res = Number(false);
// console.log(res);  //0

// let res = prompt("enter any number")
// if (res == typeof Number) {
//     console.log(res**2);
// }

// let res = Number(null);
// console.log(res); //0

// let res = Number(undefined);
// console.log(res);  //NaN

// let res = Number("five");
// console.log(res);  //NaN

// let res = -Infinity;
// console.log(res);   //-Infinity

/*boolean logical operator*/

// let a=Boolean("")
// let a=Boolean("asdf")
// let a=Boolean(0)
// let a=Boolean(0n)
// let a=Boolean(true)
// let a=Boolean(false)
// let a=Boolean(null)
// let a=Boolean(undefined)
// let a=Boolean(Symbol('s'))  //symbol gives true only

// console.log(a);

////////////////////////////////////////////////////////////////////////////

//assignment op
// let price=200;
// let gst=18;

// price += gst
// console.log(price);

// price -= gst
// console.log(price);

// price *= gst
// console.log(price);

// price /= gst
// console.log(price);

// price **= gst
// console.log(price);

//ternary op
// (5<3)?console.log('meow'): console.log('meowmeow');;

// monday there will be mcq's
// monday there will be mcq's
// monday there will be mcq's
// monday there will be mcq's

//////////////////logical operators

// let res=0 && false && "Hello";
// let res1=0 || false || "Hello";
// console.log(res);
// console.log(res1);

// if ("0"){
//     console.log("IQ");
// }

// short circuit
// let res="hello" && null
// let res1="hello" || null
// console.log(res);
// console.log(res1);

// nullish colascing

// switch n conditional statements

//

// demo()
// let a=70;
// function demo(){
//     while
//     console.log(a);

// }

/*
25/08/2024 i was absent execute that 15 times i.e HW

*/

//functional expression
// let add = function () {
//   return 6 + 10;
// };
// let res = add();
// console.log(res);

//implicit return
// let sum=()=>10+6 // when we any fun to another var, while using arrow fun use sum=()=>'expression'
// let res1=sum()
// console.log(res1);

// let sum=_=>10+6  // no parameters can be used
// console.log(sum());

// let sum=(a,b)=>a+b  //can accepts aruments
// console.log(sum(10,6));

// let getName=firstName=>firstName   // only one parameters no paranthesis
// console.log(getName('mahesh somanna'));

// explicit function
// let sum=()=>{
//     return 10+6
// }
// let res=sum()
// console.log(res);

/* practice*10 */

//HIgher order function
// let a=10;
// console.log(a);
// function parent(){
//     let b=20;
//     console.log(a+b);
//     return()=>{
//         let c=30;
//         console.log(a+b+c);
//     }
// }
// parent()();

// // return();

/** 28/8/24 */
// function first() {
//     console.log('first');
//     second()
// }
// function second() {
//     console.log('second');
//     third()
// }
// function third() {
//     console.log('third');
// }
// first()
// second()
// third()

/**29/8/24 */

// let x = 5;
// var y = 6;

// function add(n1,n2){
//     return n1+n2
// }

// let sum1 = add(x,y)
// let sum2 = add(3,4)

// let a = 10;
// console.log(a);
// function parent(){
//     let b = 20;
//     console.log(a+b);
//     return function child(){
//         let c=30;
//         console.log(a+b+c);
//     }
// }
// parent()()

/**30/8/24 */

// let bull={
//     index:"Bank Nifty",
//     ATM:"53000",
//     buy:"CE",
//     trend:"Bullish",
//     NetPL:"1000000",
//     details:function(){
//         return `I trade in ${this.index} at the money ${this.ATM} and buy the ${this.buy} bcz trend is ${this.trend}
//         & i happy to exit with Profit of ${this.NetPL}.`
//     }
// }

// //accessing function
// let res=bull.details()
// console.log(res);

// //accessing prop using DOT operator
// console.log("index",bull.index);
// console.log("trend",bull.trend);

// //barcket operator
// console.log("ATM",bull.ATM);

/** 3/9/24  deep copy  */

// let obj={
//     firstName:"Tony stark",
//     age:45,
//     addr:{
//         city:"LA",
//         pin:"560034",
//     }
// }

// let obj2=structuredClone(obj)  // this creates deep copy
// obj2.firstName="Ironman"
// console.log(obj);

// obj2.addr.city="Las Vegas"
// console.log(obj);

// /** shallow copy - it as reference of a nested obj/array */

// let obj2={};

// for (let key in obj2)

// let res=Object.keys

/* 4/9/24 
 
WED IS MOCK IS THERE

--> syntax is vimp func slao practice

*/

// function Car(name,model,year){
//     this.name=name;
//     this.madel=model;
//     this.year=year;
//     this.details=function(){
//         console.log(`my car is ${this.name}`);

//     }
// }

// class CarClass{
//     constructor(name,model,year){
//         this.name=name;
//         this.madel=model;
//         this.year=year;
//     }
//     details(){
//         console.log(`my car is ${this.name}`);
//     }
// }

// const audi=new CarClass("Audi","QS",2007);
// console.log("audi",audi);
// audi.details()

/* 5/8/9/24 */

// let arr=[1,2,3,4,5,"hello",function(){},{name:"shankar"}]

// let names=["zesus","ceaser","athena"]
// console.log(names.sort());

// let arr=[1,2,101,5,6,610,7]
// console.log(arr.length);

// let sortedArr=arr.sort((a,b)=>{
//     return b-a
// })

// let sortedArr=arr.sort((a,b)=>a-b)
// console.log(sortedArr);

// let persons=[{name:"jack",age:65},{name:"jhon",age:55},{name:"jackie",age:45}]

// console.log(persons.findIndex((ele)=>{
//     return ele.name=="jack"
// }));

// /*       Learning onclick By Implementing the Basic calci

//          atd means appendToDisplay      18am/8/9
//          */

// function atd(value) {
//     document.getElementById('display').value += value;
// }

// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function deleteLast() {
//     let display = document.getElementById('display');
//     display.value = display.value.slice(0, -1);
//   }

// function calculateResult() {
//     let display= document.getElementById('display')
//     try {
//         display.value = eval(display.value)
//     } catch {
//         display.value = 'Error';
//     }
// }

/** 10/9/24  **/
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.pop()); //removes last element from the array
// console.log(arr);

// arr.push(2, 3, 4, 5); //add at last

// arr.shift(); //removes 1st element from the array

// console.log(arr);

// console.log(arr.length);
// console.log(arr.unshift("hello", "hii")); // adds elements to the start of the array & mutates the Original array
// console.log(arr);

// //slice--cuts an array
// //splice-- joins the array

// console.log(arr.slice(3, 5));
// console.log(arr);

// console.log(arr.splice([6, 9]));
// console.log(arr);

/**
 * ---Assignment--
 * indexof
 * lastindexof
 * concat
 * join
 * reverse
 * includes
 */


// let arr1 = [1, 2, 3, 54, 5, 5, 5];
// // for(let i=0;i<arr1.length;i++){
// //     console.log(arr1[i]);
// // }

// // for(let key in arr1){
// //     console.log(arr1[key]);
// // }

// // arr1.forEach((value,index,array) => {
// //     console.log(" value "+value+" index "+index+" array ",array);
// // })

// let pickedCloths = [5000, 4000, 2000, 3000, 1000];

// let fc = pickedCloths.filter((value, index, array) => {
//   return value <= 4000;
// });
// console.log(fc);

// let gstAddedClothes = fc.map((value) => {
//   return (value += (value * 5) / 100);
// });
// console.log(gstAddedClothes);

// let totalCost = gstAddedClothes.reduce((accumulator, value, index, array) => {
//   return accumulator + value;
// }, -5000);

// console.log(totalCost);

/** 11/9/24 **/

class FrieindsManager {
  constructor() {
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }

  getFriends() {
    return this.friends;
  }

  getMutual(friend2) {
    let mutualFriends = this.friends.filter((friend) => {
      //check whether frieind from friend1 list is included in friend2 list
      return friend2.getFriends().includes(friend);
    });
    return mutualFriends;
  }
  isFriends(friend1) {
    return this.friends.includes(friend1);
  }

  //while adding a friend check if friend is already present or not

  removeFriends(friend1) {
    this.friends = this.friends.filter((f) => f !== friend1);
  }
}

const friend1 = new FrieindsManager();

friend1.addFriend("manu");
friend1.addFriend("mahesh");
friend1.addFriend("bh");
friend1.addFriend("dv");
friend1.addFriend("darshan");
friend1.addFriend("mallikarjun");

const friend2 = new FrieindsManager();

friend2.addFriend("surya");
friend2.addFriend("sathish");
friend2.addFriend("praveen");
friend2.addFriend("maanthu");
friend2.addFriend("darshan");
friend2.addFriend("mallikarjun");

let res = friend1.getMutual(friend2);
console.log(res);

console.log(friend1.isFriends("manu")); // Output: true
friend1.removeFriends("manu");
console.log(friend1.isFriends("manu")); // Output: false

//TP2

//spread operator

let arr = [1, 2, 3, 4, 5, 6];

function add(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(add(...arr));

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [7, 8, 9, 10];

console.log(arr.concat(arr1));

let c = [...arr1, ...arr2];
console.log(c);

let a = {
  name: "nobody",
  age: 18,
};
let b = {
  addr: "bengaluru",
};

// let c=

// console.log(c);

function person(name, age, ...details) {
  //details -rest parameter
  console.log(name);
  console.log(age);
  console.log(details);
}

person("John wick", 45, "assaain", "continental", "dog lover");

//spread op expands iterable obj like strings, array and objects into individual Eelement.
//spread op can be used to create a shallow copy, concat arrays and objects.

/*
rest op always used 3 dots but it is used only in function and destructuring syntax.
rest op stores multiple values into an individual array.

 */

/* 12/9/24 */

//(1) Array destructuring
function getFruits() {
  return ["apple", "mango", "kiwi", "jack", "kaaju"];
}

let [first, second, ...third] = getFruits();
console.log(first);
console.log(second);
console.log(third);

let obj = {
  name: "RE",
  model: "GT",
  year: 2015,
};

let { name, ...year } = obj;
console.log(name);
console.log(year);
