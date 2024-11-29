import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaravionComponent } from './editaravion.component';

describe('EditaravionComponent', () => {
  let component: EditaravionComponent;
  let fixture: ComponentFixture<EditaravionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditaravionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaravionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
