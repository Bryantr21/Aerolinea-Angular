import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertaravionComponent } from './insertaravion.component';

describe('InsertaravionComponent', () => {
  let component: InsertaravionComponent;
  let fixture: ComponentFixture<InsertaravionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertaravionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertaravionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
