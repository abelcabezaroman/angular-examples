import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { ForExampleComponent } from './for-example/for-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    IfExampleComponent,
    ForExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
