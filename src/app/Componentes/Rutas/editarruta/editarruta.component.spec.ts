import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrutaComponent } from './editarruta.component';

describe('EditarrutaComponent', () => {
  let component: EditarrutaComponent;
  let fixture: ComponentFixture<EditarrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
