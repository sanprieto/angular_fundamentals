# Interpolation

Permite vincular datos de una clase de un componente(typescript)a la plantilla html. Se utiliza para mostrar valores dinámicos. Con dobles llaves se puede imprimir el valor de una variable, llamar a una función o realizar operaciones matemáticas.

```html
<h1>{{ 'Hola mundo' + variable }}</h1>
<h2>1 + 1 = {{ 1 + 1 }}</h2>
<h3>{{ myFunction(); }}</h3>
````
# Property binding

Modificar atributos desde el controlador(typescript) y enviarlos desde el html. Se utiliza el atributo entre corchetes []

_Algunos atributos html de ejemplo:_
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
En resumen, la principal diferencia entre la interpolación y las propiedades de binding es que la interpolación solo permite mostrar datos en la plantilla, mientras que las propiedades de binding establecen una relación bidireccional entre la plantilla y el componente, lo que permite actualizar tanto la plantilla como el componente.

# Event Binding

Con event binding angular nos permite controlar los eventos que se suceden en los elementos. Para ello utiliza parentesis y algunos son:
- (click) - se produce cuando se hace clic en un elemento HTML.
- (dblclick) - se produce cuando se hace doble clic en un elemento HTML.
- (mouseenter) - se produce cuando el cursor del mouse entra en un elemento HTML.
- (mouseleave) - se produce cuando el cursor del mouse sale de un elemento HTML.
- (keydown) - se produce cuando se presiona una tecla en el teclado.
- (keyup) - se produce cuando se suelta una tecla en el teclado.
- (submit) - se produce cuando se envía un formulario.
- (focus) - se produce cuando un elemento HTML obtiene el foco.
- (blur) - se produce cuando un elemento HTML pierde el foco.

Creamos un método que se va a llamar cuando se haga click en el botón y cambiará el estado del botón en la propiedad "disabled".

```html
<button [disabled]='btnDisabled'(click)="toggleButton()">Active</button>
````

```typescript
btnDisabled:boolean = true;
toogleButton(){
    this.btnDisabled= this.btnDisabled
}
````

Puedes enviarle al controlador el evento completo que se produce en la vista.

```html
<button [disabled]='btnDisabled'(click)="toggleButton($event)">Active</button>
````
```typescript

toogleButton(event:Event){
    this.btnDisabled= this.btnDisabled
    console.log('Todos los eventos', event.screenX)
    /* mostrará la posición horizontal del puntero del mouse en relación con el borde izquierdo de la pantalla o monitor en el que se está mostrando el navegador.*/

}
````
# Data binding con ngModel

El atributo ngModel permite el intercambio de datos de forma bidireccional entre el componente y la vista. Lo que suceda en el componente, se verá reflejado en la vista. Lo que se suceda en la vista, inmediatamente impactará en el componente.

