import { TestBed } from '@angular/core/testing';

import { ConfigChangeDispatcherService } from './config-change-dispatcher.service';

describe('ConfigChangeDispatcherService', () => {
  let service: ConfigChangeDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigChangeDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
