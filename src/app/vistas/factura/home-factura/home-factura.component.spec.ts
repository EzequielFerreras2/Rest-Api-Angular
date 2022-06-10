import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFacturaComponent } from './home-factura.component';

describe('HomeFacturaComponent', () => {
  let component: HomeFacturaComponent;
  let fixture: ComponentFixture<HomeFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
