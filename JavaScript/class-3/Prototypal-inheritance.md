## Prototypal inheritance
Now, you may also have a question - what use is an object’s `prototype`? What is the purpose of defining properties and functions on the `prototype`?

We can narrow it down to two reasons:

1. We can define properties and functions common among all objects on the `prototype` to save memory. Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.
2. The second reason is the name of this section, Prototypal Inheritance, which we’ve referred to in passing earlier, in the introduction to the Prototype. In recap, we can say that the player1 and player2 objects inherit from the Player.prototype object, which allows them to access functions like .sayHello.

Let’s now try to do the following:

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>