import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-informaiton-card',
  templateUrl: './pending-informaiton-card.component.html',
  styleUrls: ['./pending-informaiton-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PendingInformaitonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
