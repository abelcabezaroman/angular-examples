import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfExampleComponent } from './if-example/if-example.component';
import { GalleryExampleComponent } from './gallery-example/gallery-example.component';


const routes: Routes = [
  {
    path: 'if-example', component: IfExampleComponent
  },
  {
    path: 'gallery-example', component: GalleryExampleComponent
  },
  {path: '', redirectTo: '/if-example', pathMatch: 'full'},
];

// if-example
// gallery-example


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
