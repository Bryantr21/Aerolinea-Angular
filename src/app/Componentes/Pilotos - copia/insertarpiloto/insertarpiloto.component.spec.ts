import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarpilotoComponent } from './insertarpiloto.component';

describe('InsertarpilotoComponent', () => {
  let component: InsertarpilotoComponent;
  let fixture: ComponentFixture<InsertarpilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarpilotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarpilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
