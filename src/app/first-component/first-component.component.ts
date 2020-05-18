import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  @Input() nombreVariable: string;



  @Output() nombreEmision = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.funtionFirst();
  }

  funtionFirst() {
    console.log('##ABEL## >> FirstComponentComponent >>  funtionFirst', this.nombreVariable);
  }

  hacerEventoClick() {
    this.nombreEmision.emit('Me he emitido');
  }

}
