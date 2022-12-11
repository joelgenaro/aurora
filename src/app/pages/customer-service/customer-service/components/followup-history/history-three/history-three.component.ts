import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-three',
  templateUrl: './history-three.component.html',
  styleUrls: ['./history-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
