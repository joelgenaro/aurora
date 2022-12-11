import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTwoComponent } from './history-two.component';

describe('HistoryTwoComponent', () => {
  let component: HistoryTwoComponent;
  let fixture: ComponentFixture<HistoryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
