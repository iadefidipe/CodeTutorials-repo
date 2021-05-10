'use strict'

let i;

// // this query elements using their  ID
const banner = document.getElementById ('page-banner');

// // this query elements using their tagname
const lis = document.getElementsByTagName('li');


// this query elements using their className
const titles = document.getElementsByClassName('title');

// note that titles is not an array but it looks like it, it is actually a HTML collection, and it is differnt to an array in some ways (for example you can't use the forEach method on HTMLCollection). This is what is returned when you use the getElemnt... method.


// most times, when working with the DOM, we are interacting with more than one element... you can loop through elements using the For loop or using the forEach method. But, the for each method only works on array.

// using the for loop

for( i=0; i<titles.length; i++){
    console.log(titles[i]);
}

// using the forEach method
// titles.forEach(function(item){
//     console.log(item)
// })
// this wont work because tiles at this point is a HTML collection, so we have to convert it to an array first, to be able to use the forEach method 

console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
    console.log(item)
})
// now it works, because titles is now an array


// *********QUERY SELECTOR

//  you can use the document.querySelector to selcect use CSS element selectors

const books = document.querySelectorAll('#book-list li .name');

console.log(books);

// querySelectorAll returns a nodelist and not a html collection, you can use the forEach method on the nodelist

Array.from(books).forEach( function(item){
    console.log(item)
})


// ********Text content
// changing the text in HTML element using the .textContent property

// const books = document.querySelectorAll('#book-list li .name');
books.forEach(function(items){
    items.textContent += " book title"
});

// ***** innerHtML property
//  this properety can be used to change the HTML inside any HTML elemnet it is used to target
// const bookList = document.querySelector('#book-list ul');
// bookList.innerHTML += '<li> I am groot </li>'

// *********** Nodes
//  Every thing on the HTML page is a type of node 
// Node types have number values

// const banner = document.querySelector('#page-banner');

console.log(banner.nodeType); //this property returns the node value of the targeted node
console.log(banner.nodeName); //returns the node name
console.log(banner.hasChildNodes()); //return true or false, if the node has child nodes

// we can clone nodes, which is very simple by the way
const cloneBanner = banner.cloneNode(true); //it is very important to pass the argument as true, if there is no true it wont clone the child nodes
console.log(cloneBanner);


// ********Traversing the DOM
// we can traverse the DOM with simple properties
const bookList = document.querySelector('#book-list');

// traversing upwards (child to parent)

console.log('the parent node is:', bookList.parentNode);//this returns the direct parent of the selected node
console.log('the parent element is:', bookList.parentElement); //does the same thing as parentNode
console.log('the parent element is:', bookList.parentElement.parentElement); //this returns the parent of the parent node

// traversing downwards (parent to child)

console.log(bookList.childNodes); //The includes the line break that it returns as text nodes, which we dont necesarily need

console.log(bookList.children); // we use this instead, it only returns the child nodes without the text nodes (so this will be used predominatly)

// travesing from sibling to sibling (sibling elements are elemnts on the same level, like the different direct children elements of a parent)

console.log('next sibling is:', bookList.nextSibling); //this returns the next sibling node
console.log('next sibling is:', bookList.nextElementSibling); //this returns the next element node (so this will be used predominatly)

console.log('previous sibling is:', bookList.previousSibling);
console.log('previous sibling is:', bookList.previousElementSibling); //(so this will be used predominatly)


const btns = document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){ // e = event object

        const li = e.target.parentElement; //the target property tagets the exact button that was clicked

        li.parentNode.removeChild(li); //use to remove an element in JS 

    })
})

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault() ; //this prevent normal default functions
    console.log('navigation to ', e.target.textContent, ' was prevented')
})

const list = document.querySelector('#book-list ul')
// **** Interacting with forms
const addForm = document.forms['add-book']; //this is how to ineract with a form in DOM

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type ="text"]').value;
    console.log(value); 

    // **** Creating elements

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
     
    // add content

    bookName.textContent = value;
    deleteBtn.textContent =  'delete';
    //  append to document

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
})














