import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaraeropuertoComponent } from './editaraeropuerto.component';

describe('EditaraeropuertoComponent', () => {
  let component: EditaraeropuertoComponent;
  let fixture: ComponentFixture<EditaraeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaraeropuertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaraeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
