import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-two',
  templateUrl: './history-two.component.html',
  styleUrls: ['./history-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
