import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { ForExampleComponent } from './for-example/for-example.component';
import { ClassExampleComponent } from './class-example/class-example.component';
import { GalleryExampleComponent } from './gallery-example/gallery-example.component';
import { HttpClientModule } from '@angular/common/http';
import { WebcamsService } from './services/webcams.service';
import { XyzComponent } from './xyz/xyz.component';
import { XyzChildComponent } from './xyz-child/xyz-child.component';
import { ButtonComponent } from './button/button.component';
import { TasksComponent } from './tasks/tasks.component';
import { InputModelComponent } from './input-model/input-model.component';
import { FormsModule } from "@angular/forms";
import { CheckboxModelComponent } from "./checkbox-model/checkbox-model.component";
import { CheckboxModelInputOutputComponent } from './checkbox-model-input-output/checkbox-model-input-output.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    IfExampleComponent,
    ForExampleComponent,
    ClassExampleComponent,
    GalleryExampleComponent,
    XyzComponent,
    XyzChildComponent,
    ButtonComponent,
    TasksComponent,
    InputModelComponent,
    CheckboxModelComponent,
    CheckboxModelInputOutputComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebcamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
