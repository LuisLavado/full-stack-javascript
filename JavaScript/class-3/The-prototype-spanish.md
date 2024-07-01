# El Prototipo
Antes de continuar, hay algo importante que debes comprender sobre los objetos de JavaScript. Todos los objetos en JavaScript tienen un prototipo. El prototipo es otro objeto del que hereda el objeto original, es decir, el objeto original tiene acceso a todos los métodos y propiedades de su prototipo.

Analicémoslo.

1. Todos los objetos en JavaScript tienen un prototipo.
¡Una frase bastante sencilla aquí! Cada objeto en JavaScript tiene un prototipo. Entonces, por ejemplo, los objetos jugador1 y jugador2 de antes (creados con el constructor del objeto Jugador(nombre, marcador)) también tienen un prototipo. Ahora bien, ¿qué significa tener un prototipo? ¿Qué es incluso un prototipo de un objeto?

2. El prototipo es un objeto más.
¡Esta frase también parece bastante sencilla! El prototipo es simplemente otro objeto, nuevamente, como los objetos jugador1 y jugador2. El objeto prototipo puede tener propiedades y funciones, al igual que estos objetos Player tienen propiedades como .name, .marker y funciones como .sayName() adjuntas.

3. …que el objeto original hereda y tiene acceso a todos los métodos y propiedades de su prototipo.
Aquí, el "objeto original" se refiere a un objeto como `player1` o `player2`. Se dice que estos objetos "heredan", o en otras palabras, estos objetos tienen acceso a las propiedades o funciones del `prototype`, si han sido definidas. Por ejemplo, si hubiera una función `.sayHello()` definida en el `prototipo`, `player1` puede acceder a la función como si fuera su propia función - `player1.sayHello()`. Pero no es sólo el `player1` quien puede llamar a la función `.sayHello()`, ¡incluso el `player2` puede llamarla, ya que está definida en el `prototype`! ¡Sigue leyendo para conocer los detalles de cómo funciona y cómo puedes hacerlo tú mismo!

## Accediendo al prototipo de un objeto
Conceptualmente, ahora podrías sentir que sabes, o al menos tienes una idea, de lo que es un prototipo de un objeto. Pero, ¿cómo saber o ver cuál es el prototipo de un objeto? Vamos a averiguar. Puede intentar ejecutar el siguiente código en la consola de desarrollador de su navegador. (¡Asegúrate de haber creado los objetos `player1` y `player2` antes!)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Ahora, para entender este código, usemos los tres puntos anteriores:

1. Todos los objetos en JavaScript tienen un `prototype`:
Puede verificar el `prototype` del objeto usando la función `Object.getPrototypeOf()` en el objeto, como `Object.getPrototypeOf(player1)`.
El valor de retorno (resultado) de esta función se refiere a la propiedad `.prototype` del constructor de objetos (es decir, `Player(name, Marker)`) - `Object.getPrototypeOf(player1)` === `Player.prototype` .

2. El prototipo es un objeto más…
* El valor de la propiedad `.prototype` del constructor de objetos (es decir, `Player.prototype`) contiene el objeto `prototype`.

* La referencia a este valor de `Player.prototype` se almacena en cada objeto `Player`, cada vez que se crea un objeto `Player`.

* Por lo tanto, obtienes un valor "verdadero" cuando verificas el prototipo de Objetos - `Object.getPrototypeOf(player1) === Player.prototype`.

3. …que el objeto original hereda y tiene acceso a todos los métodos y propiedades de su prototipo:
* Como se dijo en el punto anterior, cada objeto `Player` tiene un valor que hace referencia a `Player.prototype`. Entonces: `Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2)` (devuelve `true`).
* Por lo tanto, cualquier propiedad o método definido en `Player.prototype` estará disponible para los objetos `Player` creados.

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Aquí, definimos la función `.sayHello` ‘en’ el objeto `Player.prototype`. Luego estuvo disponible para que lo usaran los objetos `player1` y `player2`. De manera similar, puede adjuntar otras propiedades o funciones que desee usar en todos los objetos `Player` definiéndolas en el prototipo de los objetos (`Player.prototype`).

Object.getPrototypeOf() vs. .__proto__ vs. [[Prototype]]
A diferencia de lo que hemos hecho hasta ahora usando `Object.getPrototypeOf()` para acceder al `prototype` de un objeto, también se puede hacer lo mismo usando la propiedad `.__proto__` del objeto. Sin embargo, esta es una forma no estándar de hacerlo y está en desuso. Por lo tanto, no se recomienda acceder al `prototype` de un objeto utilizando esta propiedad. Sin embargo, el mismo código puede reescribirse para convertirse en:
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Don't do this!
player1.__proto__ === Player.prototype; // returns true
player2.__proto__ === Player.prototype; // returns true
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
En algunos lugares, como en el código heredado, también puedes encontrarte con `[[Prototype]]`, que es simplemente otra forma de hablar sobre la propiedad `.__proto__` de un objeto, como `player1.[[Prototype]]`.

Esta explicación sobre el "prototipo" puede haber sido mucha, ¡así que recuerda tomar un respiro antes de continuar!



Siguiente => Herencia prototípica
