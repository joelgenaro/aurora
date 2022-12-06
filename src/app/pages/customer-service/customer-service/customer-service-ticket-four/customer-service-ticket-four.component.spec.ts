import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceTicketFourComponent } from './customer-service-ticket-four.component';

describe('CustomerServiceTicketFourComponent', () => {
  let component: CustomerServiceTicketFourComponent;
  let fixture: ComponentFixture<CustomerServiceTicketFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceTicketFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceTicketFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
