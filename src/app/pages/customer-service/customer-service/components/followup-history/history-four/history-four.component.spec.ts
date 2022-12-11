import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFourComponent } from './history-four.component';

describe('HistoryFourComponent', () => {
  let component: HistoryFourComponent;
  let fixture: ComponentFixture<HistoryFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
