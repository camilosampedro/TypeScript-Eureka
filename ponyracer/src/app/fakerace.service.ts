import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class FakeraceService {

  constructor() { }

  list() {
    return Observable.of([{name: 'Faked Pony'},{name: '100% No-Real Pony'}])
  }

}
