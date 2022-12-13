import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-information-card',
  templateUrl: './pending-information-card.component.html',
  styleUrls: ['./pending-information-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingInformationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
