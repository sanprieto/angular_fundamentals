import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Rikiricardo';
  age = 44;
  img = "https://source.unsplash.com/random";
  btnDisabled = true;
  person = {
    name:"nicolas",
    age: 18,
    avatar: "https://source.unsplash.com/random",

  }
  toggleButton(){
    this.btnDisabled = !this.toggleButton;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log( element.scrollTop)
  }

  changeName( event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }


}
