import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarvuelosComponent } from './listarvuelos.component';

describe('ListarvuelosComponent', () => {
  let component: ListarvuelosComponent;
  let fixture: ComponentFixture<ListarvuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarvuelosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarvuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
