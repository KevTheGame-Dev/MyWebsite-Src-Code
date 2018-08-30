import { TestBed, inject } from '@angular/core/testing';

import { PageTypeControlService } from './page-type-control.service';

describe('PageTypeControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageTypeControlService]
    });
  });

  it('should be created', inject([PageTypeControlService], (service: PageTypeControlService) => {
    expect(service).toBeTruthy();
  }));
});
