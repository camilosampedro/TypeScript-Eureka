import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Array<any> = [{name: 'Red Pony'},{name: 'Fastest Deadliest Pony'}];

  constructor() { }

  ngOnInit() {
  }

  refreshRaces() {
    this.races = [{name: 'London'},{name: 'Lyon'}];
  }

}
