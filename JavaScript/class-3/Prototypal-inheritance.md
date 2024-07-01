## Prototypal inheritance
Now, you may also have a question - what use is an object’s `prototype`? What is the purpose of defining properties and functions on the `prototype`?

We can narrow it down to two reasons:

1. We can define properties and functions common among all objects on the `prototype` to save memory. Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.
2. The second reason is the name of this section, Prototypal Inheritance, which we’ve referred to in passing earlier, in the introduction to the Prototype. In recap, we can say that the player1 and player2 objects inherit from the Player.prototype object, which allows them to access functions like .sayHello.

Let’s now try to do the following:

```
// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
```
What’s this `.valueOf` function, and where did it come from if we did not define it? It comes as a result of `Object.getPrototypeOf(Player.prototype)` having the value of` Object.prototype`! This means that `Player.prototype` is inheriting from `Object.prototype`. This `.valueOf` function is defined on `Object.prototype` just like `.sayHello` is defined on `Player.prototype`.

How do we know that this `.valueOf` function is defined on `Object.prototype`? We make use of another function called `.hasOwnProperty`:
```
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
```
Now where did this `.hasOwnProperty` function come from? A quick check helps:
```
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
```
Essentially, this is how JavaScript makes use of `prototype` - by having the objects contain a value - to point to `prototype`s and inheriting from those prototypes, and thus forming a chain. This kind of inheritance using prototypes is hence named as Prototypal inheritance. JavaScript figures out which properties exist (or do not exist) on the object and starts traversing the chain to find the property or function, like so:

1. Is the .valueOf function part of the player1 object? No, it is not. (Remember, only the name, marker and sayName properties are part of the Player objects.)
2. Is the function part of the player1’s prototype (the Object.getPrototypeOf(player1) value, i.e., Player.prototype)? No, only the .sayHello function is a part of it.
3. Well, then, is it part of Object.getPrototypeOf(Player.prototype) (=== Object.prototype)? Yes, .valueOf is defined on Object.prototype!

However, this chain does not go on forever, and if you have already tried logging the value of Object.getPrototypeOf(Object.prototype), you would find that it is null, which indicates the end of the chain. And it is at the end of this chain that if the specific property or function is not found, undefined is returned.

Note:

1. Every prototype object inherits from Object.prototype by default.
2. An object’s Object.getPrototypeOf() value can only be one unique prototype object.

### Recommended method for prototypal inheritance
Now, how do you utilize Prototypal Inheritance? What do you need to do to use it? Just as we use Object.getPrototypeOf() to ‘get’ or view the prototype of an object, we can use Object.setPrototypeOf() to ‘set’ or mutate it. Let’s see how it works by adding a Person Object Constructor to the Player example, and making Player inherit from Person!
```
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'
```