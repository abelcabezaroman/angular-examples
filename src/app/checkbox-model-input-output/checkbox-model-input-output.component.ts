import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-model-input-output',
  templateUrl: './checkbox-model-input-output.component.html',
  styleUrls: ['./checkbox-model-input-output.component.scss']
})
export class CheckboxModelInputOutputComponent implements OnInit {

  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue(){
    this.checkedChange.emit(this.checked);
  }

}
