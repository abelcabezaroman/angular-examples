import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CounterComponent } from "./counter/counter.component";


const routes: Routes = [
  {
    path: 'button', component: ButtonComponent
  },
  {
    path: 'tasks/:id', component: TasksComponent
  },
  {
    path: 'tasks', component: TasksComponent
  },
  {
    path: 'counter/:counter', component: CounterComponent
  },
  {
    path: 'counter', redirectTo: 'counter/0'
  },
  {path: '', redirectTo: '/button', pathMatch: 'full'},
];

// if-example
// gallery-list-example

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
