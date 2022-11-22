import { TestBed } from '@angular/core/testing';

import { AddDescriptionService } from './add.description.service';

describe('AddDescriptionService', () => {
  let service: AddDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
