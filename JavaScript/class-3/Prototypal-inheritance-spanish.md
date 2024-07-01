## Herencia prototípica
Ahora bien, es posible que también tengas una pregunta: ¿para qué sirve el `prototype` de un objeto? ¿Cuál es el propósito de definir propiedades y funciones en el `prototype`?

Podemos reducirlo a dos razones:

1. Podemos definir propiedades y funciones comunes entre todos los objetos del `prototype` para ahorrar memoria. Definir cada propiedad y función requiere mucha memoria, especialmente si tiene muchas propiedades y funciones comunes y muchos objetos creados. Definirlos en un objeto centralizado y compartido al que los objetos tienen acceso ahorra memoria.
2. La segunda razón es el nombre de esta sección, Herencia Prototípica, a la que nos hemos referido anteriormente, en la introducción al Prototipo. En resumen, podemos decir que los objetos player1 y player2 heredan del objeto Player.prototype, que les permite acceder a funciones como .sayHello.

Intentemos ahora hacer lo siguiente: