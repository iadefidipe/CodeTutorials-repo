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


// ********Text content
// changing the text in HTML element using the .textContent property

// const books = document.querySelectorAll('#book-list li .name');
// books.forEach(function(items){
//     items.textContent += " book title"
// });

// ***** innerHtML property
//  this properety can be used to change the HTML inside any HTML elemnet it is used to target
// const bookList = document.querySelector('#book-list ul');
// bookList.innerHTML += '<li> I am groot </li>'

// *********** Nodes
//  Every thing on the HTML page is a type of node 
// Node types have number values

const banner = document.querySelector('#page-banner');

console.log(banner.nodeType); //this property returns the node value of the targeted node
console.log(banner.nodeName); //returns the node name
console.log(banner.hasChildNodes()); //return true or false, if the node has child nodes

// we can clone nodes, which is very simple by the way
const cloneBanner = banner.cloneNode(true); //it is very important to pass the argument as true, if there is no true it wont clone the child nodes
console.log(cloneBanner)


