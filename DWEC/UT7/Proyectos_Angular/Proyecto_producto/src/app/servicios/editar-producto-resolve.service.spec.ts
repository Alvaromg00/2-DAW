import { TestBed } from '@angular/core/testing';

import { EditarProductoResolveService } from './editar-producto-resolve.service';

describe('EditarProductoResolveService', () => {
  let service: EditarProductoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarProductoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
