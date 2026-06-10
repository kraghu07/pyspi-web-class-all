/* 17/9/24 */
// let h1=document.getElementById("title")
// console.log(h1);

// let li1=document.createElement('li');
// let li2=document.createElement('li');

// let ul=document.querySelector('.container ul');

// li1.innerText='Apple'
// li2.innerText='Google'

// // ul.append(li1,li2); //mutiple children
// ul.append(li1,li2,'hwllo','bye');

// ul.appendChild(li2); //only one child

/* 18/9/24 */
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// li.innerText = "Facebook";
// ul.appendChild(li);

// li.classList.contains("list-items");

// Select the element you want to remove
// const element = document.getElementById("title");

// Remove the element
// element.remove();

// // Select the parent element
// const parentElement = document.getElementById("parent");

// // Select the child element you want to remove
// const childElement = document.getElementById("child");

// // Remove the child element
// parentElement.removeChild(childElement);

/* 19/9/24 */

////To access parent of ul
// const ul=document.querySelector('ul')
// console.log(ul.parentNode);
// console.log(ul.parentElement);

//// to access root node
// const ul=document.querySelector('ul')
// console.log(ul.parentNode.parentNode.parentNode.parentNode);
// console.log(ul.parentElement.parentElement.parentElement.parentElement);

////child traversal
// const ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.children);

/* 20/9/24 */

// const h2=document.querySelector(".ex1:nth-child(2) h2")
// const button=document.querySelector(".ex1:nth-child(2) button")

// function cli(){
//     h2.style.color="red";
//     // alert('hey hi')
// }

// button.addEventListener("click", cli);

// const h2=document.querySelector(".ex1:nth-child(3) h2")
// const button=document.querySelector(".ex1:nth-child(3) button")

// //event handlers
// button.addEventListener("mouseover", function(){
//     h2.parentElement.style.backgroundColor="red"
// })


/* 3/10/24 */

// //creating a promise
// function myPromise() {
//     //returning a Promise constructor
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let a = 1 + 1;
//             if (a == 3) {
//                 resolve("cake has arrived")
//             } else {
//                 reject("cake has been burnt")
//             }
//         }, 3000)
//     })
// }

// //handling the promise
// myPromise().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("promise has been handled");
// })


// async function resolvePromise() {
//     try {
//         let res = await myPromise()
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }finally{
//         console.log("promise has been handled");
//     }
// }
// resolvePromise()


//webapi ---get data from api----fetch()---get post delete update
//backend-data-string
// fetch("https://fakestoreapi.com/products").then((res)=>{
//    return res.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

async function fetchProductData() {
    try {
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchProductData()
