import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaraeropuertosComponent } from './listaraeropuertos.component';

describe('ListaraeropuertosComponent', () => {
  let component: ListaraeropuertosComponent;
  let fixture: ComponentFixture<ListaraeropuertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaraeropuertosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaraeropuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
