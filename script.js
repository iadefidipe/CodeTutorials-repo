'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   Name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

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

//   orderPasta: function(ing1,ing2,ing3){
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
//   }, 

//   orderPizza: function (mainIngredients, ...otherIngredients){
//     console.log(mainIngredients);
//     console.log(otherIngredients);
//   }
// };

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
// const  {Name, openingHours, categories} = restaurant;
// console.log(Name, openingHours, categories);

// //  todo: if want the variable names to be different from the property names of the object
// const{name:resturantName, openingHours:Hours, categories:tags} = restaurant;
// console.log(resturantName, Hours, tags);

// // TODO: setting default  value for properties that doest exist in the object

// const {menu = [], starterMenu:starters =[]} = restaurant; // so menu isnt a property of the resturant object, so it is given a default value just incase we cant find it in object resturant, like starterMenu is actually a property accesible in resturant but it was given a default value just in case its not a property in the object

// console.log(menu, starters);

// // TODO: mutating variables in obejects

// let a = 232;
// let b = 457;
// const obj = { a:34, b:23, c:32 };
// ({a,b} = obj); // it is compulsory to enclose the mutation assignment when working with object in parenthesis, or it wont work

// console.log(a,b);


// // TODO: Destructuring Nested object
// const {
//   fri: { open: c, close: h },
// } = restaurant.openingHours; // this is the synthax for achieving this particular process

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

// const ingredients = ["maggi", 'salt', 'pepper', 'goat']

// console.log(restaurant.orderPasta(...ingredients)); 

// // TODO: using spread operator on Objects

// const newRestaurant = {foundeIn: '1983', ...restaurant};
// console.log(newRestaurant);

// const resturantCopy = {...restaurant};
// resturantCopy.Name = 'resturant'
// console.log(resturantCopy);


// // TODO: Rest pattern and parameter

// // Rest operator is the opposite of the spread operator. Spread is used to unpack element from the ooperator while rest is used to pack elements into an operator

// // Spread operator is always on the RIGHT of the  asssigment operator (=)
// const arr = [1,2, ...[3,4]];
// console.log(arr);

// // REST, on LEFT side of the assigment operator (=)
// // TODO: Destructuring with  rest operator ********spread==expend *****rest==compress
// const[a,b, ...others] = [1,2,3,4,5,6];
// console.log(a,b,others);

// const [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(Pizza,Risotto, otherFood);

// // objects
// const {sat, ...weekdays} = restaurant.openingHours; //wont work object are not iterables

// // TODO: using rest parameters in funtions
// const add = function (...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++)
//   sum += numbers[i];
//   console.log(sum);
// };

// add(2,4,5);

// restaurant.orderPizza('mushrooms', 'carrot', 'garlic');


// TODO: SHORT CIRCUITING (&& and ||)// Short circuit evaluation

// one thing to know about logical operators is that they cannot only just return just boolean values, they can USE ANY DATA TYPE, RETURN ANY DATA TYPE, and also perform SHORT CIRCUITING

// SHORT CIRCUITING: for an || operator, in short circuiting, if the two values evaluated are truthy, it will return the first truthy value without evaluating the oher truthy value
// the && operator short circuits when the first is falsy

// TOD0: Nullish coalescing operator. Nullish values are Null and Undefined. Only nullish values will short circuit using this operator

// const nullish = '' ?? 10;

// TODO: Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

//   printGoals(...players){
//     console.log(players);
//     console.log(`${players.length} goals were scored`);
//   }
// };

// //  Todo: Solution

// // 1.
// const [players1,players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [ gk, ...fieldPlayers] = players1; //rest operator
// console.log(gk, ...fieldPlayers);

// // 3.
// const allPlayers = [...players1,...players2]; //spread operator
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago','Coutinho','Perisic'] //spread operstor
// console.log(players1Final);

// // 5.
// const {odds:{team1, x:draw, team2}} = game; //destructuring 
// console.log(team1, draw, team2);

// //  6.
// console.log(game.printGoals(...game.scored));

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');


//  TODO: for-of loop
// const menu = ['goat', 'catfish', 'dog', 'cat']

// for (const item of menu) console.log(item);

// // *** note: the for-of loop can still use the continue and break keyword

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`);

// }


// TODO: Enhanced object literal
// *** ES6 introduced a way three way to easily write object literals


// *** 1.

//**8 we could compute propety names

const weekdays = ['wed','thur', 'fri', 'sat'];
const openingHours = {
    thur: {
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
  };

const restaurant = {
  Name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // to set the openingHuours object as a propety of resturant:
  // openingHours:openingHours, //*** this is how it would have been done in es5, but there is a better way in  es6
  openingHours, //*** tjis is all you have to do in Es6, only that the name of the object you are referencing must be the same as the property name

  // orderPasta: function(ing1,ing2,ing3){ //es5 way
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  // }, //also writing method like the above has also been enhanced in es6

  orderPasta (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// TODO: Optional chaining
// // console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open); //with optional chaning
// console.log(restaurant.openingHours?.mon?.open); //multiple optional chaning

// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days){
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; //used nullish coalesing  operator here
// console.log(`On ${day}, we open at ${open}`);
// }

// // optional chaining can work on methods todo
// console.log(restaurant.order?.(0,2) ?? 'method doesnt exist'); 
// console.log(restaurant.orderNci?.(0, 2) ?? 'method doesnt exist'); 

// optional chainig on arrays, WE CAN USE IT TO CHECK IF AN array is empty

// const user = [{name:'israel', email:'israeladefidipe@gmail.com'}]
// console.log(user[0]?.name ?? 'array doesnt exist');
// console.log(user[1]?.name ?? 'array doesnt exist');

// TODO: Looping over objects

// //*** property names */

// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = ` we are open on ${properties.length} days: `
// for (const day of properties){
//   console.log(day);
//   openStr += `${day},`
// }

// console.log(openStr);


// //*** propety values */
// const values = Object.values(openingHours)
// console.log(values);

// *** property entries

const entries = Object.entries(openingHours);
// console.log(entries)

for (const [key, {open,close}] of entries){
  // console.log(x);
  console.log(`on ${key}, we open at ${open} and close at ${close}`);
}

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals(...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  },
};

// const [goal, playerName] = game.scored.entries();
//  1.
// for (const [goal, playerName] of game.scored.entries()){
//   // console.log([goal, playerName]);
//   console.log(`Goal ${goal+1}: ${playerName}`);
// }

// 2.
// const odds = Object.values(game.odds);
// console.log(odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average/= odds.length;
// console.log(average);

// 3.

for (const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}` //conditional statement for team name
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//  bonus
const scorers = {};
for (const player of game.scored) {
  console.log(player);

  scorers[player] ? scorers[player]++ : (scorers[player] = 1);

}

console.log(scorers);
















