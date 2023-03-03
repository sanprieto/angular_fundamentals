# Interpolation

Con dobles llaves se puede imprimir el valor de una variable, llamar a una función o realizar operaciones matemáticas.
La información va desde el typescript al html
```html
<h1>{{ 'Hola mundo' + variable }}</h1>
<h2>1 + 1 = {{ 1 + 1 }}</h2>
<h3>{{ myFunction(); }}</h3>
````
# Property binding

Modificar atributos desde el controlador y enviarlos desde el html. Se utiliza el atributo entre corchetes []

_Algunos atributos de ejemplo:_
- El atributo [src] de la etiqueta < img > para modificar dinámicamente una imagen.
- El atributo [href] de un < a > para modificar un enlace.
- El atributo [value] de un < input > para autocompletar un valor de un formulario.
- El atributo [disable] de un < input > para habilitar/deshabilitar un campo de un formulario.

```html
<button [disable]="booleano">Enviar</button>
<input type="text" [value]='person.name'/>
<img [src]="variable_con_ruta_img">
````
En estos ejemplos estamos utilizando string interpolation aquí:
```html
<img src= {{variable_con_ruta_img}} >
````
Y con property binding así:
```html
<img [src]="variable_con_ruta_img">
````
Se recomienda usar property binding para atributos html.

# Event Binding

