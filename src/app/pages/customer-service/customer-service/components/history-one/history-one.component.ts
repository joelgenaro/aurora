import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-one',
  templateUrl: './history-one.component.html',
  styleUrls: ['./history-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
