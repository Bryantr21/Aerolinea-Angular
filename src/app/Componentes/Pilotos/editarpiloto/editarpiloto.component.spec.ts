import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpilotoComponent } from './editarpiloto.component';

describe('EditarpilotoComponent', () => {
  let component: EditarpilotoComponent;
  let fixture: ComponentFixture<EditarpilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarpilotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
