import { TestBed } from '@angular/core/testing';

import { CambiosActividadGuard } from './cambios-actividad.guard';

describe('CambiosActividadGuard', () => {
  let guard: CambiosActividadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CambiosActividadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
