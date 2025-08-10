**[Curso de JavaScript](./../README.md)** - [[Cambiar a inglés](./../7-2-project-testing-practice.md)]

# Proyecto: Práctica de Pruebas

### Introducción
¡A practicar! Esto de las pruebas no es tan difícil, pero es bastante nuevo. La única manera de familiarizarse con ello es dedicarle algo de tiempo.

### Uso de sentencias de importación de ES6 con Jest
Por defecto, la versión actual de Jest no reconoce las sentencias de importación de ES6. Para poder usar los módulos de ES6 en este proyecto, puede seguir los dos pasos de las instrucciones de Jest para "Usar Babel" (ignore la sección "Cómo configurar Babel para Jest").

### Tarea
Escribe pruebas para lo siguiente y luego asegúrate de que las pruebas sean correctas.

1. Una función `capitalize` que toma una cadena y la devuelve con el primer carácter en mayúscula.

2. Una función `reverseString` que toma una cadena y la devuelve invertida.

3. Un objeto `calculator` que contiene funciones para las operaciones básicas: `add`, `subtract`, `divide` y `multiply`. Cada una de estas funciones debe tomar dos números y devolver el cálculo correcto.

4. Una función `caesarCipher` que toma una cadena y un factor de desplazamiento y lo devuelve con cada carácter "desplazado". Obtén más información sobre el funcionamiento del cifrado César.
    
    1. No olvides probar el cambio de `z` a `a`. Por ejemplo, `caesarCipher('xyz', 3)` debería devolver `'abc'`.

    2. No olvides probar la conservación de mayúsculas y minúsculas. El cambio de mayúsculas y minúsculas debe seguir el original. Por ejemplo, `caesarCipher('HeLLo', 3)` debería devolver `'KhOOr'`.

    3. No olvides probar la puntuación. La puntuación, los espacios y otros caracteres no alfabéticos deben permanecer sin cambios. Por ejemplo, `caesarCipher('Hello, World!', 3)` debería devolver `'Khoor, Zruog!'`.

    4. Para este caso, puedes dividir la función final en varias funciones más pequeñas. Un concepto de las pruebas es que no es necesario probar explícitamente cada función que escribes, solo las públicas. En este caso, solo necesitas pruebas para la función final `caesarCipher`. Si funciona como se espera, puedes estar seguro de que tus funciones auxiliares menores cumplen su función.

5. Una función `analyzeArray` que toma un array de números y devuelve un objeto con las siguientes propiedades: `average`, `min`, `max` y `length`.
```
const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};
```

[| <- Lección anterior |](./7-1-testing-basics-es.md)  
[| -> Próxima lección |](./7-1-testing-basics.md)