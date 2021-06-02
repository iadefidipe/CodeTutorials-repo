'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
};

// TODO: Learning destructuring

const arr = [2,3,4];
//  todo: retriviing elements with destructuring is like
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// todo: but now with destructuring we can declare all variables at once
const [x,y,z] = arr; // this is a destructuring assignment

let [first,second] = restaurant.categories;

const [main , , secondary] = restaurant.categories; // this will select the first and third element

// TODO: Switching variable (mutating variable in arrays)
[first, second] = [second,first]; // Switching can be done easily with destructuring

// TODO: destructuring the result of the order method of the resturant object

const [start, mains] = restaurant.order(2,2);
console.log(start, mains);

// todo: destructuring a nested array (nested destruturing)
const nested = [2,4, [5,6]];
const [i, , [j,k]] = nested;
console.log( j,k);


// TODO: destructuring Objects
const  {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

//  todo: if want the variable names to be different from the property names of the object
const{name:resturantName, openingHours:Hours, categories:tags} = restaurant;
console.log(resturantName, Hours, tags);

// TODO: setting default  value for properties that doest exist in the object

const {menu = [2,3,4], starterMenu:starters =[]} = restaurant; // so menu isnt a property of the resturant object, so it is given a default value just incase we cant find it in object resturant, like starterMenu is actually a property accesible in resturant but it was given a default value just in case its not a property in the object

// TODO: mutating variables in obejects

let a = 232;
let b = 457;
const obj = { a:34, b:23, c:32 };
({a,b} = obj); // it is compulsory to enclose the mutation assignment when working with object in parenthesispush, or it wont work

console.log(a,b);


// TODO: Destructuring Nested object
const {
  fri: {open:c, close:h}
} = openingHours // this is the synthax for achieving this particular process

console.log(c,h);
