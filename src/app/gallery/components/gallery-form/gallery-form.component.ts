import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss']
})
export class GalleryFormComponent implements OnInit {
  @Output() newItemEmitter = new EventEmitter();

  newItem = {
    imgUrl: 'https://picsum.photos/500/350?random=1',
    caption: 'Hello World',
    createdBy: 'Abel'
  };

  constructor() { }

  ngOnInit() {
  }


  addNewItemGallery() {
    this.newItemEmitter.emit(this.newItem);
  }
}
