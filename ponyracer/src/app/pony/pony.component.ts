import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  quantityOfUsers: number = 1415;

  constructor() {
    this.quantityOfUsers = 141920;
  }

  ngOnInit() {
  }



}
