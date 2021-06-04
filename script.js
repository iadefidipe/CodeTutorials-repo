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
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }, 

  orderPizza: function (mainIngredients, ...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
};

 // TODO: Learning destructuring

 // const arr = [2,3,4];
//  todo: retriviing elements with destructuring is like
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // todo: but now with destructuring we can declare all variables at once
// // const [x,y,z] = arr; // this is a destructuring assignment

// let [first,second] = restaurant.categories;

// const [main , , secondary] = restaurant.categories; // this will select the first and third element

// // TODO: Switching variable (mutating variable in arrays)
// [first, second] = [second,first]; // Switching can be done easily with destructuring

// // TODO: destructuring the result of the order method of the resturant object

// const [start, mains] = restaurant.order(2,2);
// console.log(start, mains);

// // todo: destructuring a nested array (nested destruturing)
// const nested = [2,4, [5,6]];
// const [i, , [j,k]] = nested;
// console.log( j,k);


// // TODO: destructuring Objects
// const  {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// //  todo: if want the variable names to be different from the property names of the object
// const{name:resturantName, openingHours:Hours, categories:tags} = restaurant;
// console.log(resturantName, Hours, tags);

// // TODO: setting default  value for properties that doest exist in the object

// const {menu = [], starterMenu:starters =[]} = restaurant; // so menu isnt a property of the resturant object, so it is given a default value just incase we cant find it in object resturant, like starterMenu is actually a property accesible in resturant but it was given a default value just in case its not a property in the object

// // TODO: mutating variables in obejects

// let a = 232;
// let b = 457;
// const obj = { a:34, b:23, c:32 };
// ({a,b} = obj); // it is compulsory to enclose the mutation assignment when working with object in parenthesis, or it wont work

// console.log(a,b);


// // TODO: Destructuring Nested object
// const {
//   fri: {open:c, close:h}
// } = openingHours // this is the synthax for achieving this particular process

// console.log(c,h);


// // TODO: SPREAD OPERATOR (...) (ES6)

// const arr = [ 4,5,6]; // if we wanted to create a new array that will have the individual elements in array arr as its own member

// //  how it will be done manually
//  const badNewArr = [1,2,3, arr[0], arr[1],arr[2]];
//  console.log(badNewArr);

// //   this is can be achieved in shorter and more effective way using the spread operator
// const newArr = [1,2,3, ...arr]; // so the spread operator will add the individual elements of arr to newArr
// console.log(newArr);

// // also check this out
// console.log(...newArr); // this will only log the individual element of newArr

// //  TODO NOTE: the spread operator works like destructuring but it doesnt store values in variables. so it is only used incase when you want to add elements seperated by commas

// // TODO: USE CASE OF SPREAD OPERATORS

// // Copy arrays

// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // TODO notes: Iterables: arrays, strings,,maps, sets, NOT Objects. *****Spread operator can work on all iterables in JS, we can only use the spread operator when building an array or paasing arguments into a function

// const str = 'Israel';
// const letters = [...str, '', 'r'];
// console.log(...str);
// // console.log(`${...str} Adefidpe`); this wont work because the spread operator is not applicable in this case

// //  TODO: using spread operator to pass argument into a function
// const ingredients = [
//   // prompt("Let's make pasta! Ingrdient 1?"),
//   // prompt('Ingrdient 2?'),
//   // prompt('Ingrdient 3?'),
// ];

// console.log(ingredients);

// console.log(restaurant.orderPasta(...ingredients)); 

// // TODO: using spread operator on Objects

// const newRestaurant = {foundeIn: '1983', ...restaurant};
// console.log(newRestaurant);

// const resturantCopy = {...restaurant};
// resturantCopy.name = 'resturant'


// TODO: Rest pattern and parameter

// Rest operator is the opposite of the spread operator. Spread is used to unpack element from the ooperator while rest is used to pack elements into an operator

// Spread operator is always on the RIGHT of the =
const arr = [1,2, ...[3,4]];

// REST, on LEFT side of =
// TODO: Destructuring with  rest operator ********spread==expend *****rest==compress
const[a,b, ...others] = [1,2,3,4,5,6];
console.log(a,b,others);

const [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,Risotto, otherFood);

// objects
const {sat, ...weekdays} = restaurant.openingHours;

// TODO: using rest parameters in funtions
const add = function (...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
  sum += numbers[i];
  console.log(sum);
};

add(2,4,5);

restaurant.orderPizza('mushrooms', 'carrot', 'garlic');
