import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaraeropuertoComponent } from './insertaraeropuerto.component';

describe('InsertaraeropuertoComponent', () => {
  let component: InsertaraeropuertoComponent;
  let fixture: ComponentFixture<InsertaraeropuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertaraeropuertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertaraeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
