import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-model',
  templateUrl: './checkbox-model.component.html',
  styleUrls: ['./checkbox-model.component.scss']
})
export class CheckboxModelComponent implements OnInit {

  checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
