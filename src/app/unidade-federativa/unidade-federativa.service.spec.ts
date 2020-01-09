import { TestBed } from '@angular/core/testing';

import { UnidadeFederativaService } from './unidade-federativa.service';

describe('UnidadeFederativaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadeFederativaService = TestBed.get(UnidadeFederativaService);
    expect(service).toBeTruthy();
  });
});
