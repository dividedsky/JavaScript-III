/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/window -- this is the default binding. If you use 'this' without any other context, it will be bound to the window object. This isn't good.
* 2. Implicit -- when this is tied to a function or object, it will refer to that object. Usually you can figure out what this point to by looking to the left of the dot.
* 3. Explicit -- 'this' is explicity called through call, bind, or apply. In this case, you are explicitly saying what 'this' should refer to.
* 4. New -- when you are writing a prototype or calling a new object, this refers to the instance of that object.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function windowName() {
  let name = 'justin';
  console.log(this.name);
}
console.log(windowName());

// Principle 2
// code example for Implicit Binding
const justin = {
  name: 'justin',
  age: 38,
  speak: function() {
    console.log(`My name is ${this.name} and I am ${this.age}.`)
  }
}
justin.speak();

// Principle 3
// code example for New Binding
function Movie(movieAttributes) {
  this.title = movieAttributes.title;
  this.director = movieAttributes.director;
  this.rating = movieAttributes.rating;
}

const theGreatest = new Movie({
  'title': 'Pulp Fiction',
  'director': 'Quentin Tarantino',
  'rating': 10,
});

console.log(theGreatest.title);

// Principle 4
// code example for Explicit Binding
//
function sayHello(name) {
  console.log(`Hello, ${this.name}`);
}
sayHello.call(justin);
