import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaravionesComponent } from './listaraviones.component';

describe('ListaravionesComponent', () => {
  let component: ListaravionesComponent;
  let fixture: ComponentFixture<ListaravionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaravionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaravionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
