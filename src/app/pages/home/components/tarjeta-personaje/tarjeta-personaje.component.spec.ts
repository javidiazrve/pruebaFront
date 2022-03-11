import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPersonajeComponent } from './tarjeta-personaje.component';

describe('TarjetaPersonajeComponent', () => {
  let component: TarjetaPersonajeComponent;
  let fixture: ComponentFixture<TarjetaPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
