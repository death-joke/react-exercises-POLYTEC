// app.js

// uncomment this line to make it work
// it show that  pizzeriaFactory variable DOES NOT exist in the global scope
// And so the function  pizzeriaFactory(stock) inside ./pizzeriaFactory.js
// is wrapped  in a NodejS CommonJS module

var pizzeriaFactory = require('./pizzeriaFactory');

var STOCK_INITIAL = 5;

var pizzeria = pizzeriaFactory(STOCK_INITIAL);

var pizza = pizzeria.deliverPizza();
console.log(pizza);
console.log('Stock should be 4 : real stock=', pizzeria.getStock());
pizza = pizzeria.deliverPizza();
pizza = pizzeria.deliverPizza();
pizza = pizzeria.deliverPizza();
pizza = pizzeria.deliverPizza();
console.log(pizza);
console.log('Stock should 0 by now : real stock=', pizzeria.getStock());

try {
  pizza = pizzeria.deliverPizza();
} catch (e) {
  console.log(e.message);
}
