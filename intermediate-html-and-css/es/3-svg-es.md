_**Intermediate HTML and CSS Course**_

# SVG

### Introducción
Los SVG son un formato de imagen muy común en la web. Al principio pueden resultar un poco confusos, pero una vez que aprendes a usarlos, se convierten en una herramienta increíblemente potente para crear imágenes dinámicas de alta calidad para tu sitio web.

En esta lección, aprenderemos exactamente qué son los SVG, para qué se utilizan y cómo puedes integrarlos en tus sitios web.

### Resumen de la lección
Esta sección contiene un resumen general de los temas que aprenderá en esta lección.

- Qué son los SVG, los gráficos vectoriales y XML.
- Cómo crear SVG sencillos e incorporarlos a sus sitios web.
- Cuándo usar SVG y cuándo sería más apropiado un formato de imagen diferente.

### ¿Qué son los SVG?
Los SVG son un formato de imagen escalable, lo que significa que se adaptan fácilmente a cualquier tamaño y mantienen su calidad sin aumentar el tamaño del archivo. También son muy útiles si necesitas crear o modificar tus imágenes mediante programación, ya que puedes cambiar sus propiedades mediante CSS y JavaScript.

Los SVG se utilizan a menudo para:

1. Iconos
2. Gráficos
3. Imágenes grandes y sencillas
4. Fondos con patrones
5. Aplicar efectos a otros elementos mediante filtros SVG

### Bien, pero ¿qué son?
"SVG" significa "Gráficos Vectoriales Escalables". Los gráficos vectoriales son imágenes definidas matemáticamente, a diferencia de los "gráficos rasterizados" tradicionales, donde la imagen se define por una cuadrícula de píxeles. Con los gráficos rasterizados, el detalle se limita al tamaño de esa cuadrícula de píxeles. Si se desea aumentar el tamaño de la imagen (escalarla), se debe aumentar el tamaño de esa cuadrícula. ¿Cómo se decide cómo deben verse todos esos nuevos píxeles? No hay una solución sencilla. Además, cuanto mayor sea la cuadrícula, mayor será el tamaño del archivo.

En cambio, con los gráficos vectoriales, no hay cuadrícula. En su lugar, se utilizan fórmulas para diferentes formas y líneas. Como son solo fórmulas, no importa cuán grandes o pequeñas se desee que aparezcan: se pueden escalar al tamaño que se desee sin afectar la calidad ni el tamaño del archivo.

Los SVG tienen otra característica interesante: se definen mediante XML. XML (también conocido como "Lenguaje de Marcado Extensible") es una sintaxis similar a HTML que se utiliza para diversas aplicaciones, desde [API](https://en.wikipedia.org/wiki/API), hasta [RSS](https://en.wikipedia.org/wiki/RSS), y [software de edición de hojas de cálculo y Word](https://en.wikipedia.org/wiki/Office_Open_XML).

El hecho de que el código fuente de SVG sea XML tiene varias ventajas clave.

En primer lugar, significa que es legible. Si abrieras un archivo JPEG en un editor de texto, se vería como un galimatías. Sin embargo, si abrieras un SVG, se vería así:
```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect x=0 y=0 width=100 height=50 />
  <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```
Puede que aún sea confuso, pero bueno, ¡son palabras! ¡Etiquetas! ¡Atributos! Comparado con [formatos de archivos binarios](https://en.wikipedia.org/wiki/Binary_file) como JPEG, sin duda nos encontramos en un terreno familiar.

La segunda ventaja de XML es que está diseñado para ser interoperable con HTML, lo que significa que puedes insertar el código anterior directamente en un archivo HTML, sin modificaciones, y debería mostrar la imagen. Y como estos pueden convertirse en elementos del DOM, al igual que los elementos HTML, puedes adaptarlos con CSS y crearlos usando la [API web de elementos](https://developer.mozilla.org/en-US/docs/Web/API/Element) que ya usas.

### Desventajas
¡Claramente los SVG son geniales! Es hora de convertir todas nuestras imágenes a SVG, ¿no? Bueno, no del todo. Los SVG son ideales para imágenes relativamente simples, pero como cada detalle de la imagen debe escribirse en XML, son extremadamente ineficientes para almacenar imágenes complejas. Si se supone que tu imagen debe ser fotorrealista, o tiene detalles finos o textura ("[las texturas grunge](https://unsplash.com/es/s/fotos/grunge-texture)" son un buen ejemplo), entonces los SVG no son la herramienta adecuada.

### Anatomía de un SVG
Normalmente, no querrás crear SVG desde cero en tu código. Lo más frecuente es que descargues el archivo o copies el código de un sitio web o de un editor de imágenes que pueda crearlos (Adobe Illustrator y Figma son dos aplicaciones populares que permiten crear SVG). Sin embargo, es bastante común descargar un SVG y querer modificarlo o ajustarlo ligeramente, por lo que conocer todos sus componentes y cómo funcionan es muy útil.
```
<div class="container">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=100 fill="burlywood"/>
    <path d="M 10 10 H 90 V 90 L 10 60" fill="transparent" stroke="black" stroke-width="3"/>
  <circle cx=50 cy=50 r=20 class="svg-circle"/>
    <g class="svg-text-group">
      <text x="20" y="25" rotate="10" id="hello-text">Hello!</text>
      <use href="#hello-text" x="-10" y="65" fill="white"/>
    </g>
</svg>
</div>
```
```
.container {
  max-width: 200px;
  margin: auto;
}

.svg-circle:hover + .svg-text-group {
  opacity: 0;
}
```
1. `xmlns` - significa "Espacio de nombres XML". Especifica el dialecto de XML que se utiliza. En nuestro caso, ese dialecto es la especificación del lenguaje SVG. Sin ella, algunos navegadores no renderizarán la imagen o la renderizarán incorrectamente.

2. `viewBox`: define los límites de tu SVG. Cuando necesitas definir la posición de los diferentes puntos de los elementos en tu SVG, esto es a lo que hace referencia. También define la relación de aspecto y el origen de tu SVG. ¡Así que cumple una función importante! Asegúrate de experimentar con diferentes valores en el ejemplo anterior para comprender cómo afecta a las formas.

3. `class`, `id` - these attributes function just like they do in HTML. Using these in SVGs allows you to easily target an element via CSS or JavaScript, or to reuse an element via the [`use` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/use).

4. Elements such as `<circle>`, `<rect>`, `<path>`, and `<text>` are defined by the SVG namespace. These are our basic building-blocks. Although you can make extremely complex images with SVG, they are mostly created with just a dozen or so of these basic elements. Here is a [complete list of SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element).

5. Many SVG attributes, such as `fill` and `stroke`, can be changed in your CSS. Learn more in this [article on SVG properties and CSS](https://css-tricks.com/svg-properties-and-css/).

Play around with the code above and try to get a feel for what’s happening. What happens when you change the viewBox dimensions? Or the attributes of an element?

### Embedding SVGs
There are two main approaches when deciding how to actually place the SVG in your document: linked, and inline.

Linking SVGs works basically the same way as linking any other image. You can use an HTML image element such as `<img>`, or link it in your CSS using `background-image: url(./my-image.svg)`. They will still scale properly, but the contents of the SVG will not be accessible from the webpage.

The alternative is to inline your SVGs by pasting their contents directly into your webpage’s code, rather than linking to it as an image. It will still render correctly, but the SVG’s properties will be visible to your code, which will allow you to alter the image dynamically via CSS or JavaScript.

Inlining SVGs allows you to unlock their full potential, but it also comes with some serious drawbacks: it makes your code harder to read, makes your page less cacheable, and if it’s a large SVG it might delay the rest of your HTML from loading.

Some of the drawbacks of inlining SVG code can be avoided once you’ve learned a front-end JavaScript library like React, or a build-tool like webpack. We aren’t quite ready to get into those yet, so just keep that in the back of your mind.

For now, just do whichever works best for your use-case. Linking is generally cleaner and simpler, so prefer that unless you need to tweak the SVG code alongside your HTML.

### Knowledge check
The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

- What is the xmlns attribute?
- What are some situations where you wouldn’t want to use SVG?
- What are the benefits of “inlining” your SVGs? What are the drawbacks?

### Additional resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

- There are lots of great free SVG icon libraries, such as Material icons and Feather icons.

- If you want to get started making your own or editing SVGs, you’ll want some sort of visual editor like Yann Armelin’s SVG path editor. It’s great for tinkering around with simpler SVGs but not designed for complex graphics.