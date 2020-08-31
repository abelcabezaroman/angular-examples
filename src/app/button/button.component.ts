import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy, OnChanges {

  @Input() text: string = 'Aceptar';

  @Output() confirmEmitter = new EventEmitter();

  constructor() { }

  clickedButton($event) {
    console.log('##ABEL## >> ButtonComponent >>  clickedButton', $event);
  }

  ngOnInit() {
    console.log('##ABEL## >> ButtonComponent >>  ngOnInit');
  }

  ngOnChanges(changes){
    console.log('##ABEL## >> ButtonComponent >>  ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('##ABEL## >> ButtonComponent >>  ngOnDestroy');
  }

}
