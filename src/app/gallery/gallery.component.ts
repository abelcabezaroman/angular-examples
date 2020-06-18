import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  gallery = [
    {
      imgUrl: 'https://picsum.photos/500/350?random=1',
      caption: 'So beautiful!',
      createdBy: 'Abel'
    }, {
      imgUrl: 'https://picsum.photos/500/350?random=2',
      caption: 'So Ugly!',
      createdBy: 'Abel'
    }, {
      imgUrl: 'https://picsum.photos/500/350?random=3',
      caption: 'No problem',
      createdBy: 'Abel'
    }, {
      imgUrl: 'https://picsum.photos/500/350?random=4',
      caption: 'Lets go',
      createdBy: 'Abel'
    }, {
      imgUrl: 'https://picsum.photos/500/350?random=5',
      caption: 'So cute!',
      createdBy: 'Abel'
    }, {
      imgUrl: 'https://picsum.photos/500/350?random=6',
      caption: 'Look at this!',
      createdBy: 'Abel'
    }
  ]

  constructor() { }

  ngOnInit() {
  }


  newItemEmitter($event) {
    // $event = {
    //   imgUrl: 'https://picsum.photos/500/350?random=6',
    //   caption: 'Look at this!',
    //   createdBy: 'Abel'
    // }
    this.gallery.push($event);
  }

}
