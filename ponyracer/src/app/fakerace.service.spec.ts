/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FakeraceService } from './fakerace.service';

describe('Service: Fakerace', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeraceService]
    });
  });

  it('should ...', inject([FakeraceService], (service: FakeraceService) => {
    expect(service).toBeTruthy();
  }));
});
