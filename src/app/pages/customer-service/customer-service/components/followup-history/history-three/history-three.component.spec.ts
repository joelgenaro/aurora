import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryThreeComponent } from './history-three.component';

describe('HistoryThreeComponent', () => {
  let component: HistoryThreeComponent;
  let fixture: ComponentFixture<HistoryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
