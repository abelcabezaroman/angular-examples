import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = 'Aceptar';

  @Output() confirmEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.confirmEmitter.emit('Me he iniciado');
  }

  clickedButton($event){
    console.log('##ABEL## >> ButtonComponent >>  clickedButton', $event);
  }

}