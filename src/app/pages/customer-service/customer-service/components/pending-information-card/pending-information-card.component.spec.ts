import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInformationCardComponent } from './pending-information-card.component';

describe('PendingInformationCardComponent', () => {
  let component: PendingInformationCardComponent;
  let fixture: ComponentFixture<PendingInformationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingInformationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
