import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarrutasComponent } from './listarrutas.component';

describe('ListarrutasComponent', () => {
  let component: ListarrutasComponent;
  let fixture: ComponentFixture<ListarrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarrutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
