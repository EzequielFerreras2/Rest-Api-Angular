import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendedorComponent } from './edit-vendedor.component';

describe('EditVendedorComponent', () => {
  let component: EditVendedorComponent;
  let fixture: ComponentFixture<EditVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
