import { TestBed } from '@angular/core/testing';

import { DetallesProductoResolveService } from './detalles-producto-resolve.service';

describe('DetallesProductoResolveService', () => {
  let service: DetallesProductoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesProductoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
