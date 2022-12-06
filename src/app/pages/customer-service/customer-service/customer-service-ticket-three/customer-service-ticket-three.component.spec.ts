import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceTicketThreeComponent } from './customer-service-ticket-three.component';

describe('CustomerServiceTicketThreeComponent', () => {
  let component: CustomerServiceTicketThreeComponent;
  let fixture: ComponentFixture<CustomerServiceTicketThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceTicketThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceTicketThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
