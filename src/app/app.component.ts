import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';

  name: string = 'Abel';
  listOfFather: Array<string> = ['Camiseta', 'Pantalón', 'Botas'];
  listOfFather2: Array<string> = ['Manzana', 'Fresa', 'Platano'];
  listOfFather3: Array<string> = ['Lujuria', 'Gula', 'Pereza'];

  constructor(){

  }

  imprimirEmit($event) {
    console.log($event);
  }

  confirmed($event){
    alert($event);
  }
}
