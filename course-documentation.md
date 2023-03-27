# Interpolation

Permite vincular datos de una clase de la lógica(typescript)a la vista (html). Se utiliza para mostrar valores dinámicos. Con dobles llaves se puede imprimir el valor de una variable, llamar a una función o realizar operaciones matemáticas.

```html
<h1>{{ 'Hola mundo' + variable }}</h1>
<h2>1 + 1 = {{ 1 + 1 }}</h2>
<h3>{{ myFunction(); }}</h3>
````
# Property binding

Permite modificar atributos desde el controlador(typescript) y enviarlos desde el html. Se utiliza el atributo entre corchetes []

_Algunos atributos html de ejemplo:_
- El atributo [src] de la etiqueta < img > para modificar dinámicamente una imagen.
- El atributo [href] de un < a > para modificar un enlace.
- El atributo [value] de un < input > para autocompletar un valor de un formulario.
- El atributo [disable] de un < input > para habilitar/deshabilitar un campo de un formulario.
## Ejemplo básico
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
## Ejemplo básico
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
- Para hacer uso de ngModel hay que importar el FormsModule.
- Se usa con [(ngModel)] y permite el intercambio de datos de forma bidireccional entre la lógica y la vista. 



## Ejemplo básico
No es necesario una función o método para hacer el cambio como con event binding. Realiza el cambio de forma automática.
```html
<p>Arma: {{ person.arma }}</p>
<input type="text" [(ngModel)]="person.arma" />
````
Con esta sintaxis la propiedad arma de la clase person se actualiza en el input sin necesidad de ningún método.
## Ejemplo ngModel con variable de plantilla o variable template

```html
<input [(ngModel)]="mensaje" #texto type="text">
<button (click)="mostrarTexto(texto.value)">Mostrar</button>
````
## Ejemplo ngModel con variable de plantilla o variable template unidas a las validaciones nativas de html
```html
<p>Age: {{ person.age }}</p>
<input type="number" max="18" min="10" required #ageInput="ngModel" [(ngModel)]="person.age" />
<p>Valid: {{ ageInput.valid }}</p>
````
Aquí utilizamos el atributo de validación de html "required" y max y min para conectarlo con nuestra variable template #ageInput que automáticamente va a verificar si se cumplen los parámetros devolviento "true" o "false".

# *ngif 
Con esta directiva puede usar las condiciones, hacer que un elemento se muestre u otro alternativo.

```html
<input type="text" required [(ngModel)]="person.name" />
<p *ngIf="person.name === 'julian' else myBlock">Soy Julian</p>
<ng-template #myBlock>
    <p>No eres Julian</p>
</ng-template>
````
Dependiendo del nombre que introduzca te verifica si eres o no Julian.

# *ngFor para Arrays
Con esta directiva puedes realizar un bucle.
## Ejemplo básico
```typescript
names: string[] = [ 'Nico','Juli', 'Santi']
````

```html
<ul>
    <li *ngFor=" let name of names; index as i">
        {{ i + name }}
    </li>
</ul>
````
Recorre el array names[] y los muestra en una lista html utilizando la variable inventada name y el indice i.
## Ejemplo de for con añadir item, validación y borrado
```typescript
    names: string[] = [ 'Nico','Juli', 'Santi'];
    newName = '';
    addName(){
        this.names.push(this.newName);
        this.newName = '';
    }
````
```html
<button (click)="addName()">Add name</button>
<input type="text" required [(ngModel)]="newName" />
<ul>
    <li *ngIf="names.length === 0">No hay nombres</li>
    <li *ngFor=" let name of names; index as i">
        {{ i + name }} <button (click)="deleteName(i)">Delete {{name}}</button>
    </li>
</ul>
````
