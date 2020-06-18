import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input() gallery;

  constructor() { }

  ngOnInit() {
  }

}
