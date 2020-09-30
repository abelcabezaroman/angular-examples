import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";
import { CounterComponent } from "./counter/counter.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ButtonComponent } from './button/button.component';
import { ButtonPageComponent } from './button-page/button-page.component';


const routes: Routes = [
  {
    path: 'button', component: ButtonPageComponent
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
  {
    path: 'gallery/item/detail', component: GalleryComponent
  },
  {
    path: '', redirectTo: '/button', pathMatch: 'full'
  },
];

// if-example
// gallery-list-example

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
