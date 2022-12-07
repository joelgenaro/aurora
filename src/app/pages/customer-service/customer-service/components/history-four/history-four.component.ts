import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-four',
  templateUrl: './history-four.component.html',
  styleUrls: ['./history-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
