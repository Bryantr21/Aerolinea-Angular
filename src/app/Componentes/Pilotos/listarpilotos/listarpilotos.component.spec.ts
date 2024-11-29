import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpilotosComponent } from './listarpilotos.component';

describe('ListarpilotosComponent', () => {
  let component: ListarpilotosComponent;
  let fixture: ComponentFixture<ListarpilotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarpilotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
