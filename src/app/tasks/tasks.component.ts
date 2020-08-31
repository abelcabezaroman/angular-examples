import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TaskModel } from "../shared/models/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Array<TaskModel> = [
    {name: 'Sacar al perro', isDone: true},
    {name: 'Limpiar la casa', isDone: true},
    {name: 'Jugar', isDone: false}
  ];



  newTask: string;



  ngOnInit() {
  }


  saveTask() {
    this.tasks.push({
      name: this.newTask,
      isDone: false
    });

    this.newTask = '';
  }

  removeTask(i) {
    this.tasks.splice(i, 1);
  }

}
