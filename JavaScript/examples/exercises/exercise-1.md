Exercise
Ejercicio

Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

Escribe un constructor para hacer objetos "Libro". Revisaremos esto en el proyecto al final de esta lección. Los objetos de su libro deben tener el título del libro, el autor, el número de páginas y si ha leído el libro o no.


Put a function into the constructor that can report the book info like so:
Coloque una función en el constructor que pueda informar la información del libro de esta manera:

theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


Note: It is almost always best to return things rather than putting console.log() directly into the function. In this case, return the info string and log it after the function has been called:

Nota: Casi siempre es mejor devolver cosas en lugar de poner console.log() directamente en la función. En este caso, devuelva la cadena de información y regístrela después de que se haya llamado a la función:

console.log(theHobbit.info());