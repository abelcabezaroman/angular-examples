import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TaskModel } from "../shared/models/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Array<TaskModel>;

  taskId;


  newTask: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.id) {
        this.taskId = params.id;
      }
    });
  }

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
