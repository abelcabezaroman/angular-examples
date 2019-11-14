import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';

  listOfFather: Array<string> = ['Camiseta', 'Pantalón', 'Botas'];
  listOfFather2: Array<string> = ['Manzana', 'Fresa', 'Sandia'];
  listOfFather3: Array<string> = ['Lujuria', 'Gula', 'Pereza'];

  imprimirEmit($event) {
    console.log($event);
  }
}
