# The prototype
Before we go much further, there’s something important you need to understand about JavaScript objects. All objects in JavaScript have a prototype. The prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.

Let’s break it down.

1. All objects in JavaScript have a prototype
Pretty straightforward sentence here! Every object in JavaScript has a prototype. So for example, the player1 and player2 objects from before, (created with the Player(name, marker) object constructor) also have a prototype. Now, what does having a prototype mean? What even is a prototype of an object?

2. The prototype is another object
This sentence also seems pretty straightforward! The prototype is just another object - again, like the player1 and the player2 objects. The prototype object can have properties and functions, just as these Player objects have properties like .name, .marker, and functions like .sayName() attached to them.

3. …that the original object inherits from, and has access to all of its prototype’s methods and properties
Here, the “original object” refers to an object like player1 or player2. These objects are said to “inherit”, or in other words, these objects have access to the prototype’s properties or functions, if they have been defined. For example, if there was a .sayHello() function defined on the prototype, player1 can access the function just as if it was its own function - player1.sayHello(). But it’s not just player1 who can call the .sayHello() function, even player2 can call it, since it’s defined on the prototype! Read on to know the details of how it works and how you could do this yourself!

## Accessing an object’s prototype
Conceptually, you now might feel like you know, or at least have an idea of what a prototype of an object is. But how do you know or actually see what the prototype of an object is? Let’s find out. You can try running the following code in the developer console of your browser. (Make sure you’ve created the player1 and player2 objects from before!)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Now, to understand this code, let’s use the three points from earlier:

1. All objects in JavaScript have a `prototype`:
You can check the object’s `prototype` by using the `Object.getPrototypeOf()` function on the object, like `Object.getPrototypeOf(player1)`.
The return value (result) of this function refers to the `.prototype` property of the Object Constructor (i.e., `Player(name, marker)`) - `Object.getPrototypeOf(player1)` === `Player.prototype`.

2. The prototype is another object…
* The value of the Object Constructor’s `.prototype` property (i.e., `Player.prototype`) contains the `prototype` object.

* The reference to this value of `Player.prototype` is stored in every `Player` object, every time a `Player` object is created.

* Hence, you get a `true` value returned when you check the Objects prototype - `Object.getPrototypeOf(player1) === Player.prototype`.

3. …that the original object inherits from, and has access to all of its prototype’s methods and properties:
* As said in the earlier point, every `Player` object has a value which refers to `Player.prototype`. So: `Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2)` (returns `true`).
* So, any properties or methods defined on `Player.prototype` will be available to the created `Player` objects!

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Here, we defined the `.sayHello` function ‘on’ the `Player.prototype` object. It then became available for the `player1` and the `player2` objects to use! Similarly, you can attach other properties or functions you want to use on all `Player` objects by defining them on the objects’ prototype (`Player.prototype`).

Object.getPrototypeOf() vs. .__proto__ vs. [[Prototype]]
Unlike what we have done so far using `Object.getPrototypeOf()` to access an object’s `prototype`, the same thing can also be done using the `.__proto__` property of the object. However, this is a non-standard way of doing so, and deprecated. Hence, it is not recommended to access an object’s `prototype` by using this property. However, the same code can thus be rewritten to become:
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Don't do this!
player1.__proto__ === Player.prototype; // returns true
player2.__proto__ === Player.prototype; // returns true
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

In some places, like legacy code, you might also come across `[[Prototype]]`, which is just another way of talking about the `.__proto__` property of an object, like `player1.[[Prototype]]`.

This explanation about the `prototype` might have been a lot, so remember to take a breather before moving on!


Next => Prototypal inheritance
