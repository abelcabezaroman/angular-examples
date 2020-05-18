import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  name: string = 'Abel Cabeza Román';
  age: number = 0;

  surname: string;

  constructor() { }

  ngOnInit() {
    this.prueba();
  }

  prueba(){
   this.surname = 'Cabeza';
   const prueba = 1;

  }


}
