import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarvueloComponent } from './insertarvuelo.component';

describe('InsertarvueloComponent', () => {
  let component: InsertarvueloComponent;
  let fixture: ComponentFixture<InsertarvueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarvueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarvueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
