import { Component, Input, OnInit } from '@angular/core';
import { PersonModel } from "../shared/models/person.model";



@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() person: PersonModel;

  constructor() { }

  ngOnInit() {
  }

}
