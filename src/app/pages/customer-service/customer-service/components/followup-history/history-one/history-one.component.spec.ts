import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOneComponent } from './history-one.component';

describe('HistoryOneComponent', () => {
  let component: HistoryOneComponent;
  let fixture: ComponentFixture<HistoryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
