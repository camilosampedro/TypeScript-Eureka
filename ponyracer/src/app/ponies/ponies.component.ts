import {Component, OnInit} from '@angular/core';
import {Pony} from "../pony";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css'],
  viewProviders: [Title]
})
export class PoniesComponent implements OnInit {

  ponies: Array<Pony> = [
    {id: 1, name: 'Rainbow Dash'},
    {id: 2, name: 'Pinkie Pie'}
  ];
  title: Title;

  constructor(title: Title) {
    this.title = title;
  }

  betOnPony(pony: Pony) {
    console.log(`Betted for ${pony.name}`);
    this.title.setTitle(`Betted for ${pony.name}`);
  }

  ngOnInit() {
  }

}
