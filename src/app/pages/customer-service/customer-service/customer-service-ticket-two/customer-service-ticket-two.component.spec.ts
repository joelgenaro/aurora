import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceTicketTwoComponent } from './customer-service-ticket-two.component';

describe('CustomerServiceTicketTwoComponent', () => {
  let component: CustomerServiceTicketTwoComponent;
  let fixture: ComponentFixture<CustomerServiceTicketTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceTicketTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceTicketTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
