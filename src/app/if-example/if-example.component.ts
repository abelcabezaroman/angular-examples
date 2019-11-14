import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-example',
  templateUrl: './if-example.component.html',
  styleUrls: ['./if-example.component.scss']
})
export class IfExampleComponent implements OnInit {

  mostrarP: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  cambiarParrafo() {
    this.mostrarP = !this.mostrarP;

    // this.mostrarP = this.mostrarP === true ? false : true;

    // if (this.mostrarP === true) {
    //   this.mostrarP = false;
    // } else if (this.mostrarP === false) {
    //   this.mostrarP = true;
    // }
  }

}
