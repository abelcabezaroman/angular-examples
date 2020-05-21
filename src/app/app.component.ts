import { Component } from '@angular/core';
import { TaskModel } from "./shared/ models/task.model";

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

  taskList: Array<TaskModel> = [
    {name: 'Lavar al gato', isDone: false},
    {name: 'Sacar al perro', isDone: false},
    {name: 'Aplaudir a las 20:00', isDone: false},
    {name: 'Hacer la comida', isDone: false}
  ];

  constructor() {

    fetch('https://digimon-api.herokuapp.com/api/digimon').then(response => response.json())
      .then(data => console.log(data));
  }

  imprimirEmit($event) {
    console.log($event);
  }

  confirmed($event) {
    alert($event);
  }
}


