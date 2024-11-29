import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarrutaComponent } from './insertarruta.component';

describe('InsertarrutaComponent', () => {
  let component: InsertarrutaComponent;
  let fixture: ComponentFixture<InsertarrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
