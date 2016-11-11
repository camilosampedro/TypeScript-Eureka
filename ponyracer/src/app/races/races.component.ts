import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service'

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Array<any> = [{name: 'Red Pony'},{name: 'Fastest Deadliest Pony'}];

  constructor(private raceService: RaceService) { }

  ngOnInit() {
  }

  list() {
    return this.raceService.list();
  }

  refreshRaces() {
    this.races = [{name: 'London'},{name: 'Lyon'}];
    //this.races = this.list();
  }

}
