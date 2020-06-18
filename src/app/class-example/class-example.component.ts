import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-example',
  templateUrl: './class-example.component.html',
  styleUrls: ['./class-example.component.scss']
})
export class ClassExampleComponent implements OnInit {

  @Input() list: Array<string>;

  constructor() { }

  ngOnInit() {
  }
}
