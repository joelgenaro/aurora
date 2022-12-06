import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-service-ticket-three',
  templateUrl: './customer-service-ticket-three.component.html',
  styleUrls: ['./customer-service-ticket-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerServiceTicketThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
