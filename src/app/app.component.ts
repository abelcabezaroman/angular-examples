import { Component } from '@angular/core';
import { PersonModel } from "./shared/models/person.model";
import { CarModel } from "./shared/models/car.model";
import { TaskModel } from "./shared/models/task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';

  person: PersonModel = {
    name: 'Abel',
    surname: 'Cabeza Román',
    age: 99,
    profession: 'Teacher'
  }

  car: CarModel = {
    brand: 'Mazda',
    model: '6',
    year: 2018
  }


  taskList: TaskModel[] = [
    {name: 'Sacar al perro', isDone: true},
    {name: 'Limpiar la casa', isDone: true},
    {name: 'Jugar', isDone: false}
  ]

  constructor() {


  }


}


