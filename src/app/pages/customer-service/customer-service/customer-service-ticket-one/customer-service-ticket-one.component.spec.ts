import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceTicketOneComponent } from './customer-service-ticket-one.component';

describe('CustomerServiceTicketOneComponent', () => {
  let component: CustomerServiceTicketOneComponent;
  let fixture: ComponentFixture<CustomerServiceTicketOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceTicketOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceTicketOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
