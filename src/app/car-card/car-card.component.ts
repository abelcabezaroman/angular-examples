import { Component, Input, OnInit } from '@angular/core';
import { CarModel } from "../shared/models/car.model";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: CarModel;

  constructor() { }

  ngOnInit() {
  }

}
