import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRenewalsTwoComponent } from './policy-renewals-two.component';

describe('PolicyRenewalsTwoComponent', () => {
  let component: PolicyRenewalsTwoComponent;
  let fixture: ComponentFixture<PolicyRenewalsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyRenewalsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyRenewalsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
