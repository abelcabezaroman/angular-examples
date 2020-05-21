import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter:number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.counter) {
        this.counter = Number(params.counter);
      }
    });
  }
  ngOnInit() {
  }

  add(flagAdd){
    this.counter = flagAdd ? this.counter + 1 : this.counter - 1;
  }



}
