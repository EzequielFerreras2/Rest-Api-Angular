import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFacturaClienteComponent } from './home-factura-cliente.component';

describe('HomeFacturaClienteComponent', () => {
  let component: HomeFacturaClienteComponent;
  let fixture: ComponentFixture<HomeFacturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFacturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFacturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
