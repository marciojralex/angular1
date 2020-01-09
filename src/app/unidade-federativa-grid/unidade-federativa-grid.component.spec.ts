import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeFederativaGridComponent } from './unidade-federativa-grid.component';

describe('UnidadeFederativaGridComponent', () => {
  let component: UnidadeFederativaGridComponent;
  let fixture: ComponentFixture<UnidadeFederativaGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeFederativaGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeFederativaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
