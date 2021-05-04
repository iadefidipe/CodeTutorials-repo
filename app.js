'use strict'

let i;

// // this query elements using their  ID
// const banner = document.getElementById ('page-banner');

// // this query elements using their tagname
// const lis = document.getElementsByTagName('li');


// this query elements using their className
const titles = document.getElementsByClassName('title');

// note that titles is not an array but it looks like it, it is actually a HTML collection, and it is differnt to an array in some ways (for example you can't use the forEach method on HTMLCollection). This is what is returned when you use the getElemnt... method.


// most times, when working with the DOM, we are interacting with more than one element... you can loop through elements using the For loop or using the forEach method. But, the for each method only works on array.

// using the for loop

// for( i=0; i<titles.length; i++){
//     console.log(titles[i]);
// }

// using the forEach method
// titles.forEach(function(item){
//     console.log(item)
// })
// this wont work because tiles at this point is a HTML collection, so we have to convert it to an array first, to be able to use the forEach method 

// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//     console.log(item)
// })
// now it works, because titles is now an array


// *********QUERY SELECTOR

//  you can use the document.querySelector to selcect use CSS element selectors

// const books = document.querySelectorAll('#book-list li .name');

// console.log(books)

// querySelectorAll returns a nodelist and not a html collection, you can use the forEach method on the noidelist

// Array.from(books).forEach( function(item){
//     console.log(item)
// })





// converted titles to an array
// const titles = Array.from(document.getElementsByClassName('title')) ;



// we can with the titles in various ways, since it contains more thgan one element



// Using the forEach method but this wont wont work because titles is not an actual array

// titles.array.forEach(element => {
//     console.log(titles[element])
    
// });

// const titleArray = Array.from(titles);

// console.log(titleArray);

// Array.from(titles).forEach(function(e){  
//     console.log(e);
// });

// a way to check if an element is an array
// console.log (Array.isArray(titles));

