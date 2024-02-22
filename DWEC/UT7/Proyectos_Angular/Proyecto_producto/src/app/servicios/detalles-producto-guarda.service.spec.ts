import { TestBed } from '@angular/core/testing';

import { DetallesProductoGuardaService } from './detalles-producto-guarda.service';

describe('DetallesProductoGuardaService', () => {
  let service: DetallesProductoGuardaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesProductoGuardaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
