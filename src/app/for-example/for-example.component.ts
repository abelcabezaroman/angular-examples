import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-example',
  templateUrl: './for-example.component.html',
  styleUrls: ['./for-example.component.scss']
})
export class ForExampleComponent implements OnInit {

  @Input() list: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
