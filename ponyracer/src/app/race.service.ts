import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  list() {
    return this.http.get('http://localhost:9000/races').map(res => res.json());
  }

}
