## Herencia prototípica
Ahora bien, es posible que también tengas una pregunta: ¿para qué sirve el `prototype` de un objeto? ¿Cuál es el propósito de definir propiedades y funciones en el `prototype`?

Podemos reducirlo a dos razones:

1. Podemos definir propiedades y funciones comunes entre todos los objetos del `prototype` para ahorrar memoria. Definir cada propiedad y función requiere mucha memoria, especialmente si tiene muchas propiedades y funciones comunes y muchos objetos creados. Definirlos en un objeto centralizado y compartido al que los objetos tienen acceso ahorra memoria.
2. La segunda razón es el nombre de esta sección, Herencia Prototípica, a la que nos hemos referido anteriormente, en la introducción al Prototipo. En resumen, podemos decir que los objetos `player1` y `player2` heredan del objeto `Player.prototype`, que les permite acceder a funciones como `.sayHello`.

Intentemos ahora hacer lo siguiente:
```
// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
```

¿Qué es esta función `.valueOf` y de dónde viene si no la definimos? ¡Se produce como resultado de que `Object.getPrototypeOf(Player.prototype)` tiene el valor de `Object.prototype`! Esto significa que `Player.prototype` hereda de `Object.prototype`. Esta función `.valueOf` está definida en `Object.prototype` al igual que `.sayHello` está definida en `Player.prototype`.

¿Cómo sabemos que esta función `.valueOf` está definida en `Object.prototype`? Hacemos uso de otra función llamada `.hasOwnProperty`:
```
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
```
Ahora bien, ¿de dónde viene esta función `.hasOwnProperty`? Una comprobación rápida ayuda:
```
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
```




