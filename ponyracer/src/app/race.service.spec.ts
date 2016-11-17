/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RaceService } from './race.service';

describe('Service: Race', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaceService]
    });
  });

  it('should retrieve the races', async(inject([RaceService], (service: RaceService) => {
    service.list().then(races => {
      expect(races.length).toBe(2);
    });
    expect(service).toBeTruthy();
  })));
});
