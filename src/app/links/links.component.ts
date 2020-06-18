import { Component, OnInit } from '@angular/core';

interface LinkModel {
  title: string;
  href: string;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links: LinkModel[] = [
    { href:"http://google.es", title: "Google" },
    { href:"http://marca.com", title: "Marca" },
    { href:"http://as.com", title: "As" }
  ];


  constructor() { }

  ngOnInit() {
  }

}
