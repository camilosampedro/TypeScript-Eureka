import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Pony} from "../pony";

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  @Input() pony: Pony;
  @Output() ponySelected: EventEmitter<Pony> = new EventEmitter<Pony>();

  quantityOfUsers: number = 1415;

  constructor() {
    this.quantityOfUsers = 141920;
  }

  /**
   * Selects a pony when the component is clicked.
   * Emits a custom event.
   */
  selectPony(){
    this.ponySelected.emit(this.pony)
  }

  ngOnInit() {
  }
}
