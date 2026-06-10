// const football=document.querySelector("#football")
// const cricket=document.querySelector("#cricket")
// const hockey=document.querySelector("#hockey")

// football.addEventListener("click", (e)=> {
//     console.log(e.target);
//     if(e.target.matches("li")){
//         e.target.style.backgroundColor="#ddd";
//         e.target.style.color="blue";
//         console.log(`$(e.target.id) clicked`);
//     }
// })
// cricket.addEventListener("click", (e)=> {
//     console.log(e.target);
//     if(e.target.matches("li")){
//         e.target.style.backgroundColor="#ddd";
//         e.target.style.color="blue";
//         console.log(`$(e.target.id) clicked`);
//     }
// })

// hockey.addEventListener("click",(e)=>{
//     e.target.style.backgroundColor="#ddd";
//     e.target.style.color="red";
// })


/* 25/9/25 */
// //event delegation
// const ul=document.querySelector("ul")
// ul.addEventListener("click",(e)=> {
//     if(e.target.matches("li")){
//         e.target.style.backgroundColor="#ddd";
//         e.target.style.color="blue";
//     }
// })

// /* 


// /* 25/09/2024 */

// console.log(Math.floor(1.2));
// console.log(Math.trunc(1.2));
// console.log(Math.round(1.5));
// console.log(Math.ceil(1.2));
// console.log(Math.abs(1.2));

// let quotes=[{
//     "quote":"Education costs money. But then so does ignorance.",
//     "author":"Sir claus Moser"
// },
// {
//     "quote":"Education costs money. But then so does ignorance.",
//     "author":"Sir claus Moser" 
// },
// {
//     "quote":"Education costs money. But then so does ignorance.",
//     "author":"Sir claus Moser" 
// },
// {
//     "quote":"Education costs money. But then so does ignorance.",
//     "author":"Sir claus Moser" 
// }]

// const quoteContent=document.querySelector(".quote")
// const author=document.querySelector(".author")
// const nextQuote=document.querySelector("#button button")

// nextQuote.addEventListener('click',()=>{
//     let random=Math.floor(Math.random()*quotes.length)

//     let quote=quotes[random]

//     quoteContent.innerText=`"${quote.quote}"`
//     author.innerText=quote.author
// })

//////////////////////////////////////////

const acHeader=document.querySelectorAll(".ac_header")

Array.from(acHeader).forEach((header)=>{
    header.addEventListener('click',()=>{

        let content=header.nextElementSibling

        Array.from(document.querySelectorAll(".ac_content")).forEach((item)=>{
            if(item!=content){
                item.style.display="none"
            }
        })
        if(content.style.display=="block"){
            content.style.display="none"
        }else{
            content.style.display="block"
        }
    })
})




/*
### HTML Questions

1. What does HTML stand for?
2. What is the purpose of the `<head>` tag?
3. How do you create a hyperlink in HTML?
4. What is the difference between `<div>` and `<span>`?
5. What tag is used to create an unordered list?
6. What is the purpose of the `<meta>` tag?
7. How do you add an image in HTML?
8. What is the correct HTML element for inserting a line break?
9. What is the difference between block-level and inline elements?
10. How can you create a form in HTML?
11. What does the `<form>` element do?
12. What is an HTML attribute? Give an example.
13. How do you create a table in HTML?
14. What does the `<title>` tag do?
15. How do you define a checkbox in a form?
16. What is the purpose of the `alt` attribute in images?
17. How do you comment in HTML?
18. What is semantic HTML?
19. How do you create a dropdown list in HTML?
20. What is the use of the `<iframe>` tag?
21. What is the difference between `<strong>` and `<b>`?
22. How do you specify a character set in HTML?
23. What is the purpose of the `<link>` tag?
24. What is a self-closing tag? Give an example.
25. How do you create a radio button in HTML?
26. What does the `<blockquote>` tag do?
27. How do you create an ordered list in HTML?
28. What is the purpose of the `<title>` element in the `<head>`?
29. What is the difference between `HTML` and `XHTML`?
30. How can you create a hidden input in a form?
31. What does the `<canvas>` element do?
32. How do you define a video in HTML5?
33. What is the difference between `<script>` and `<noscript>`?
34. How do you embed a YouTube video in HTML?
35. What is the use of the `<section>` tag?
36. How do you create a data list in HTML?
37. What is the purpose of the `<header>` tag?
38. How can you specify styles in an HTML document?
39. What is the `<footer>` tag used for?
40. How do you create a hyperlink that opens in a new tab?
41. What is the purpose of the `<nav>` element?
42. How do you create an image map in HTML?
43. What does the `<meta name="viewport">` tag do?
44. How can you link to an anchor within the same page?
45. What is the role of the `DOCTYPE` declaration?
46. How do you make a list item clickable?
47. What is the purpose of the `<aside>` tag?
48. How do you create a tooltip in HTML?
49. What does the `<time>` element represent?
50. How do you specify the language of a document in HTML?

### CSS Questions

1. What does CSS stand for?
2. How do you add CSS to an HTML document?
3. What is the difference between an ID selector and a class selector?
4. How do you center an element horizontally using CSS?
5. What property is used to change the text color in CSS?
6. What does the `margin` property do?
7. How do you apply a style to all paragraphs in CSS?
8. What is a CSS rule set?
9. What is the purpose of the `box-sizing` property?
10. How can you change the background color of a page?
11. What is the CSS property for changing the font size?
12. How do you create a CSS comment?
13. What is the difference between `padding` and `margin`?
14. How do you create a hover effect in CSS?
15. What does the `display` property control?
16. How do you link an external CSS file to an HTML document?
17. What is the `flexbox` model in CSS?
18. How do you make an element responsive using CSS?
19. What are CSS media queries?
20. What does the `position` property do in CSS?
21. What is the difference between `absolute`, `relative`, `fixed`, and `sticky` positioning?
22. How do you create a CSS grid layout?
23. What is the `z-index` property?
24. How can you apply styles to specific elements based on their attributes?
25. What are pseudo-classes in CSS?
26. What are pseudo-elements in CSS?
27. How do you use the `calc()` function in CSS?
28. What does the `transition` property do?
29. How do you set a maximum width for an element?
30. What is the difference between `inline`, `block`, and `inline-block` display values?
31. How do you create a CSS animation?
32. What is the `opacity` property?
33. How do you apply styles based on the screen size?
34. What is the purpose of the `overflow` property?
35. How do you create a responsive image in CSS?
36. What are CSS variables?
37. How can you create a simple tooltip with CSS?
38. What does the `float` property do?
39. What is the `clear` property used for?
40. How do you set a background image in CSS?
41. What is the `grid-template-columns` property?
42. How do you style a visited link differently from an unvisited link?
43. What is the purpose of the `text-align` property?
44. How do you set different styles for different screen resolutions?
45. What are the advantages of using CSS preprocessors like SASS or LESS?
46. How do you use `@import` in CSS?
47. What is the `visibility` property?
48. How do you create a CSS scrollbar?
49. What does the `background-size` property control?
50. What is the difference between `rem` and `em` units in CSS?

### JavaScript Questions

1. What does JavaScript primarily do?
2. How do you declare a variable in JavaScript?
3. What is the difference between `let`, `const`, and `var`?
4. How do you create a function in JavaScript?
5. What is an array in JavaScript?
6. How do you access an element by its ID in JavaScript?
7. What are JavaScript events?
8. How can you add a comment in JavaScript?
9. What is the purpose of `console.log()`?
10. How do you create an object in JavaScript?
11. What is a callback function?
12. What is the difference between `==` and `===`?
13. How can you change the content of an HTML element using JavaScript?
14. What is the DOM?
15. How do you add an event listener in JavaScript?
16. What does `this` refer to in JavaScript?
17. How do you create a promise in JavaScript?
18. What is the purpose of the `return` statement in a function?
19. What are template literals in JavaScript?
20. How do you handle errors in JavaScript?
21. What is the difference between `undefined` and `null`?
22. How can you convert a string to a number in JavaScript?
23. What is a closure in JavaScript?
24. What is the purpose of the `map()` function in JavaScript?
25. How do you loop through an array?
26. What is the difference between `for...in` and `for...of` loops?
27. What is event delegation?
28. How can you prevent a form from submitting in JavaScript?
29. What is the `localStorage` object used for?
30. How do you create a class in JavaScript?
31. What are arrow functions?
32. What is the purpose of the `setTimeout()` function?
33. How do you create an asynchronous function?
34. What is the `fetch()` API used for?
35. How can you copy an object in JavaScript?
36. What are async/await functions?
37. How do you remove an element from an array?
38. What does the `filter()` method do?
39. How can you check if a variable is an array?
40. What is a prototype in JavaScript?
41. How do you sort an array of objects?
42. What is the purpose of the `bind()` method?
43. How do you create a new object with a specific prototype?
44. What is the difference between synchronous and asynchronous code?
45. How do you parse JSON in JavaScript?
46. What is the purpose of the `reduce()` method?
47. How can you determine if a string contains a specific substring?
48. What does the `slice()` method do?
49. How do you remove duplicates from an array?
50. What is the role of the `window` object?

*/