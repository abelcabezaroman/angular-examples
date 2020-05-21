import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-model',
  templateUrl: './input-model.component.html',
  styleUrls: ['./input-model.component.scss']
})
export class InputModelComponent implements OnInit {

  name: string = 'Abel';

  constructor() { }

  ngOnInit() {
  }

}
