import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebcamsService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    // return fetch('https://pokeapi.co/api/v2/pokemon/')
    return this.httpClient.get('https://api.oceandrivers.com:443/v1.0/getWebCams/');
  }
}
