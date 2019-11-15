import { Component, OnInit } from '@angular/core';
import { WebcamsService } from "../services/webcams.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-gallery-example',
  templateUrl: './gallery-example.component.html',
  styleUrls: ['./gallery-example.component.scss']
})
export class GalleryExampleComponent implements OnInit {

  constructor(private webcamsService: WebcamsService, private httpClient: HttpClient) { }

  ngOnInit() {

    // fetch('https://pokeapi.co/api/v2/pokemon/')

    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     console.log(myJson);
    //   });

    // this.httpClient.get('https://api.oceandrivers.com:443/v1.0/getWebCams/').subscribe((myJson) =>{
    //   console.log(myJson)
    // })

    this.webcamsService.getData().subscribe((myJson) => {
      console.log(myJson);
    });
  }

}
